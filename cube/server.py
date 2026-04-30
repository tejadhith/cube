from __future__ import annotations

import asyncio
from typing import Literal

from mcp.server.fastmcp import FastMCP, Image

from cube import live, log
from cube.render import render
from cube.state import State
from cube.view import Viewpoint

mcp = FastMCP(
    "Rubik Cube POMDP",
    instructions=(
        "You are solving a partially-observable Rubik's cube.\n"
        "The cube is FIXED in space: White=Up, Yellow=Down, Green=Front, "
        "Blue=Back, Red=Right, Orange=Left.\n"
        "From any viewpoint you see exactly 3 of 6 faces. The other 3 are hidden.\n"
        "Use rotate_view to change which faces are visible (costs 1 inspection step).\n"
        "Use move to apply a face turn (costs 1 move step).\n"
        "Use look to re-read the current view for free.\n"
        "Efficiency metric: minimize total steps (moves + inspections).\n"
        "Start: scramble() -> look() -> plan -> move/rotate_view -> repeat until solved."
    ),
)

_state = State()
_view = Viewpoint(0)
_lock = asyncio.Lock()


def _log_result(result) -> str:
    if isinstance(result, list):
        return "\n".join(str(r) for r in result if not isinstance(r, Image))
    return str(result)


def _observe(move=None) -> tuple[list, bytes]:
    visible = set(_view.faces)
    all_faces = _state.faces
    img = render(all_faces, visible, label=_view.name)

    lines = [f"Viewpoint: {_view.name} (id={_view.id})"]
    lines.append(f"Visible faces: {', '.join(sorted(visible))}")
    lines.append(f"Hidden faces: {', '.join(sorted(set('UDLRFB') - visible))}")
    lines.append("")

    for name in sorted(visible):
        grid = all_faces[name]
        lines.append(f"  {name}:")
        for row in grid:
            lines.append(f"    {' '.join(row)}")
    lines.append("")
    lines.append(f"Solved: {_state.solved}")

    live.update(_state.faces, _view, _state.stats, move=move)

    return [Image(data=img, format="png"), "\n".join(lines)], img


@mcp.tool()
async def scramble(num_moves: int = 20) -> list:
    """Scramble the cube with random moves to start a new puzzle. Resets camera to front-right-top."""
    async with _lock:
        global _state, _view
        _state = State()
        moves = _state.scramble(num_moves)
        _view = Viewpoint(0)
        result, img = _observe()
        result.append(f"\nScrambled with {num_moves} random moves. Use look and rotate_view to explore the cube state.")
        log.call("scramble", {"num_moves": num_moves}, _log_result(result), img)
        return result


@mcp.tool()
async def reset() -> list:
    """Reset the cube to solved state. Clears all history and counters."""
    async with _lock:
        global _state, _view
        _state = State()
        _view = Viewpoint(0)
        result, img = _observe()
        log.call("reset", {}, _log_result(result), img)
        return result


@mcp.tool()
async def look() -> list:
    """Get the current view. Free action (no step cost)."""
    async with _lock:
        result, img = _observe()
        log.call("look", {}, _log_result(result), img)
        return result


@mcp.tool()
async def rotate_view(direction: Literal["left", "right", "up", "down"]) -> list:
    """Rotate camera one step. Changes which 3 faces are visible. Costs 1 inspection step.

    - left/right: orbit around the cube horizontally
    - up/down: switch between top and bottom viewing angles
    """
    async with _lock:
        global _view
        old = _view
        _view = _view.rotate(direction)
        _state.tick_inspection()

        result, img = _observe()
        if old == _view:
            result.append(f"\nNote: already at boundary, viewpoint unchanged (still {_view.name}).")
        else:
            result.append(f"\nRotated {direction}: {old.name} -> {_view.name}")
        log.call("rotate_view", {"direction": direction}, _log_result(result), img)
        return result


@mcp.tool()
async def move(notation: str) -> list:
    """Apply one cube move. Valid: R R' R2 U U' U2 F F' F2 L L' L2 D D' D2 B B' B2.

    The cube is fixed in space: R always turns the Right face clockwise.
    Costs 1 move step.
    """
    async with _lock:
        try:
            _state.apply(notation)
        except ValueError as e:
            err = str(e)
            log.call("move", {"notation": notation}, f"ERROR: {err}")
            return [err]
        result, img = _observe(move=notation)
        result.append(f"\nApplied: {notation}")
        if _state.solved:
            result.append("CONGRATULATIONS! The cube is solved!")
        log.call("move", {"notation": notation}, _log_result(result), img)
        return result


@mcp.tool()
async def is_solved() -> bool:
    """Check if the cube is solved. Free action."""
    async with _lock:
        result = _state.solved
        log.call("is_solved", {}, str(result))
        return result


@mcp.tool()
async def get_history() -> str:
    """Get the list of moves applied since last scramble/reset."""
    async with _lock:
        moves = _state.history
        result = " ".join(moves) if moves else "No moves applied yet."
        log.call("get_history", {}, result)
        return result


@mcp.tool()
async def get_stats() -> dict:
    """Get performance statistics: moves, inspections, total steps, scramble size, solved status."""
    async with _lock:
        result = _state.stats
        log.call("get_stats", {}, str(result))
        return result


def main():
    live.start()
    mcp.run()
