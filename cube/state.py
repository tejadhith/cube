from __future__ import annotations

import magiccube
from magiccube.cube_base import Color, Face

VALID_MOVES = frozenset(
    f"{f}{s}"
    for f in "RULFDB"
    for s in ("", "'", "2")
)

_FACE = {
    "U": Face.U, "D": Face.D, "F": Face.F,
    "B": Face.B, "R": Face.R, "L": Face.L,
}

_COLOR = {c: c.name for c in Color}


class State:
    def __init__(self) -> None:
        self._cube = magiccube.Cube(3)
        self._log: list[str] = []
        self._moves = 0
        self._inspections = 0
        self._scrambled = 0

    def scramble(self, n: int = 20) -> list[str]:
        self._cube.reset()
        self._cube.scramble(num_steps=n)
        moves = [str(m) for m in self._cube.history()]
        self._log = []
        self._moves = 0
        self._inspections = 0
        self._scrambled = n
        return moves

    def reset(self) -> None:
        self._cube.reset()
        self._log = []
        self._moves = 0
        self._inspections = 0
        self._scrambled = 0

    def apply(self, notation: str) -> None:
        notation = notation.strip().replace("’", "'").replace("‘", "'").replace("′", "'").replace("`", "'")
        if notation not in VALID_MOVES:
            raise ValueError(
                f"Invalid move '{notation}'. "
                f"Valid: {' '.join(sorted(VALID_MOVES))}"
            )
        self._cube.rotate(notation)
        self._log.append(notation)
        self._moves += 1

    def tick_inspection(self) -> None:
        self._inspections += 1

    @property
    def solved(self) -> bool:
        return self._cube.is_done()

    def face(self, name: str) -> list[list[str]]:
        f = _FACE.get(name.upper())
        if f is None:
            raise ValueError(f"Unknown face '{name}'. Valid: {' '.join(_FACE)}")
        grid = self._cube.get_face(f)
        return [[_COLOR[c] for c in row] for row in grid]

    @property
    def faces(self) -> dict[str, list[list[str]]]:
        return {n: self.face(n) for n in _FACE}

    @property
    def history(self) -> list[str]:
        return list(self._log)

    @property
    def stats(self) -> dict:
        return {
            "moves": self._moves,
            "inspections": self._inspections,
            "total": self._moves + self._inspections,
            "scrambled": self._scrambled,
            "solved": self.solved,
        }
