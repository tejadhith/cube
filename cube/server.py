from __future__ import annotations

import asyncio
from typing import Literal

from mcp.server.fastmcp import FastMCP, Image

from cube import live
from cube.render import render
from cube.state import State
from cube.view import Viewpoint

_ARROWS = {"left": "←", "right": "→", "up": "↑", "down": "↓"}

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


def _observe(move=None, event: dict | None = None) -> tuple[list, bytes]:
    visible = set(_view.faces)
    all_faces = _state.faces
    img = render(all_faces, visible)

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

    live.update(_state.faces, _view, _state.stats, move=move, event=event,
                scramble_alg=_state.scramble_alg, alg=_state.alg)

    return [Image(data=img, format="png"), "\n".join(lines)], img


@mcp.tool()
async def scramble(num_moves: int = 20) -> list:
    """Scramble the cube with random moves to start a new puzzle. Resets camera to Front-Right-Top."""
    async with _lock:
        global _state, _view
        _state = State()
        moves = _state.scramble(num_moves)
        _view = Viewpoint(0)
        live.clear()
        result, img = _observe(event={"tool": "scramble", "display": f"scramble({num_moves})"})
        result.append(f"\nScrambled with {num_moves} random moves. Use look and rotate_view to explore the cube state.")
        return result


@mcp.tool()
async def reset() -> list:
    """Reset the cube to solved state. Clears all history and counters."""
    async with _lock:
        global _state, _view
        _state = State()
        _view = Viewpoint(0)
        live.clear()
        result, img = _observe(event={"tool": "reset", "display": "reset()"})
        return result


@mcp.tool()
async def look() -> list:
    """Get the current view. Free action (no step cost)."""
    async with _lock:
        result, img = _observe(event={"tool": "look", "display": "look()"})
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

        arrow = _ARROWS.get(direction, direction)
        result, img = _observe(event={"tool": "rotate_view", "display": f"rotate_view({arrow})"})
        if old == _view:
            result.append(f"\nNote: already at boundary, viewpoint unchanged (still {_view.name}).")
        else:
            result.append(f"\nRotated {arrow}: {old.name} → {_view.name}")
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
            return [str(e)]
        result, img = _observe(
            move=notation,
            event={"tool": "move", "display": f"move({notation})"},
        )
        result.append(f"\nApplied: {notation}")
        if _state.solved:
            result.append("CONGRATULATIONS! The cube is solved!")
        return result


@mcp.tool()
async def is_solved() -> bool:
    """Check if the cube is solved. Free action."""
    async with _lock:
        result = _state.solved
        live.push({"tool": "is_solved", "display": f"is_solved() → {str(result).lower()}"})
        return result


@mcp.tool()
async def get_history() -> str:
    """Get the list of moves applied since last scramble/reset."""
    async with _lock:
        moves = _state.history
        result = " ".join(moves) if moves else "No moves applied yet."
        live.push({"tool": "get_history", "display": f"get_history() → {len(moves)} moves"})
        return result


@mcp.tool()
async def get_stats() -> dict:
    """Get performance statistics: moves, inspections, total steps, scramble size, solved status."""
    async with _lock:
        result = _state.stats
        live.push({"tool": "get_stats", "display": "get_stats()"})
        return result


def main():
    live.start()
    mcp.run()


