# twisty

A partially-observable twisty puzzle environment exposed as [MCP](https://modelcontextprotocol.io/) tools.

The cube is fixed in space. From any viewpoint you see exactly 3 of 6 faces — the other 3 are hidden. Rotate the camera to reveal new faces, apply moves to solve, and try to minimize total steps.

![Cube net render showing visible and hidden faces](https://raw.githubusercontent.com/tejadhith/cube/master/assets/overview.png)

## Quick start

**Claude Code:**
```bash
claude mcp add --transport stdio twisty -- uvx twisty
```

**Codex CLI:**
```bash
codex mcp add twisty -- uvx twisty
```

**Claude Desktop / Cursor / VS Code — add to your MCP config:**
```json
{
  "mcpServers": {
    "twisty": {
      "type": "stdio",
      "command": "uvx",
      "args": ["twisty"]
    }
  }
}
```

Or commit `.mcp.json` to your repo for team sharing — Claude Code will auto-detect it.

## How it works

This is a **Partially Observable Markov Decision Process (POMDP)**. The agent interacts with a standard 3x3 cube through a constrained observation model:

- **Fixed cube** — the cube doesn't rotate; R always turns the Right face clockwise
- **8 viewpoints** — 4 top-ring and 4 bottom-ring camera positions, each revealing 3 faces
- **Partial observability** — at any moment, 3 faces are visible and 3 are hidden
- **Cost model** — face turns cost 1 move step, camera rotations cost 1 inspection step
- **Goal** — solve the cube while minimizing total steps (moves + inspections)

A typical session: `scramble()` → `look()` → plan → `move()` / `rotate_view()` → repeat until `is_solved()` returns true.

## Tools

| Tool | Description | Cost |
|------|-------------|------|
| `scramble(num_moves)` | Scramble with `n` random moves (default 20) | — |
| `look()` | Read the current 3-face view | Free |
| `rotate_view(direction)` | Orbit camera: left, right, up, down | 1 inspection |
| `move(notation)` | Apply a face turn: R, U', F2, L, D', B2, etc. | 1 move |
| `is_solved()` | Check if the cube is solved | Free |
| `get_history()` | Moves applied since last scramble | Free |
| `get_stats()` | Moves, inspections, total steps, solved status | Free |
| `reset()` | Reset to solved state | — |

## What the model sees

Each tool call returns a net render of the cube — visible faces in color, hidden faces hatched out:

| Front-Right-Top | Front-Left-Top | Front-Right-Bottom |
|:---:|:---:|:---:|
| ![FRT viewpoint](https://raw.githubusercontent.com/tejadhith/cube/master/assets/front.png) | ![FLT viewpoint](https://raw.githubusercontent.com/tejadhith/cube/master/assets/left.png) | ![FRB viewpoint](https://raw.githubusercontent.com/tejadhith/cube/master/assets/bottom.png) |
| Sees F, R, U | Sees F, L, U | Sees F, R, D |

## Live viewer

A browser-based 3D viewer launches automatically at `localhost:4321` when the server starts. It shows:

- Animated cube state via [cubing.js](https://js.cubing.net/cubing/) TwistyPlayer
- Camera synced to the agent's current viewpoint
- Viewpoint net highlighting visible faces
- Move and inspection counters
- Tool call history
- Picture-in-Picture mode for watching while the agent works in another window

## Development

```bash
git clone https://github.com/tejadhith/cube.git
cd cube
uv sync
uv run cube-server
```

## Built with

- [magiccube](https://github.com/trincaog/magiccube) — cube simulation
- [cubing.js](https://js.cubing.net/cubing/) — 3D puzzle viewer
- [MCP](https://modelcontextprotocol.io/) — Model Context Protocol SDK
