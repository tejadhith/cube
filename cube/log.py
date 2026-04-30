from __future__ import annotations

import json
import sys
from datetime import datetime
from pathlib import Path

_dir: Path | None = None
_seq = 0


def _ensure():
    global _dir
    if _dir is not None:
        return
    ts = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    _dir = Path(__file__).resolve().parent.parent / "logs" / ts
    (_dir / "images").mkdir(parents=True, exist_ok=True)
    print(f"Logging to: {_dir}", file=sys.stderr)


def call(tool: str, args: dict, response: str, image: bytes | None = None):
    global _seq
    _ensure()
    _seq += 1
    prefix = f"{_seq:03d}_{tool}"

    entry = {
        "seq": _seq,
        "ts": datetime.now().isoformat(timespec="milliseconds"),
        "tool": tool,
        "request": args,
        "response": response,
    }

    if image is not None:
        img_name = f"{prefix}.png"
        (_dir / "images" / img_name).write_bytes(image)
        entry["image"] = f"images/{img_name}"

    (_dir / f"{prefix}.json").write_text(json.dumps(entry, indent=2))

    short = response[:120].replace("\n", " ")
    print(f"[MCP] {tool}({args}) -> {short}", file=sys.stderr)
