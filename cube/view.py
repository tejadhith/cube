from __future__ import annotations

POINTS = (
    {"id": 0, "name": "front-right-top",    "azim": 45,  "elev": 30,  "faces": ("F", "R", "U")},
    {"id": 1, "name": "front-left-top",     "azim": 315, "elev": 30,  "faces": ("F", "L", "U")},
    {"id": 2, "name": "back-left-top",      "azim": 225, "elev": 30,  "faces": ("B", "L", "U")},
    {"id": 3, "name": "back-right-top",     "azim": 135, "elev": 30,  "faces": ("B", "R", "U")},
    {"id": 4, "name": "front-right-bottom", "azim": 45,  "elev": -30, "faces": ("F", "R", "D")},
    {"id": 5, "name": "front-left-bottom",  "azim": 315, "elev": -30, "faces": ("F", "L", "D")},
    {"id": 6, "name": "back-left-bottom",   "azim": 225, "elev": -30, "faces": ("B", "L", "D")},
    {"id": 7, "name": "back-right-bottom",  "azim": 135, "elev": -30, "faces": ("B", "R", "D")},
)

TRANSITIONS: dict[tuple[int, str], int] = {
    # right: clockwise orbit within ring
    (0, "right"): 3, (3, "right"): 2, (2, "right"): 1, (1, "right"): 0,
    (4, "right"): 7, (7, "right"): 6, (6, "right"): 5, (5, "right"): 4,
    # left: counter-clockwise orbit
    (0, "left"): 1, (1, "left"): 2, (2, "left"): 3, (3, "left"): 0,
    (4, "left"): 5, (5, "left"): 6, (6, "left"): 7, (7, "left"): 4,
    # up: bottom -> top at same column; top stays
    (0, "up"): 0, (1, "up"): 1, (2, "up"): 2, (3, "up"): 3,
    (4, "up"): 0, (5, "up"): 1, (6, "up"): 2, (7, "up"): 3,
    # down: top -> bottom at same column; bottom stays
    (0, "down"): 4, (1, "down"): 5, (2, "down"): 6, (3, "down"): 7,
    (4, "down"): 4, (5, "down"): 5, (6, "down"): 6, (7, "down"): 7,
}

DIRECTIONS = frozenset(("left", "right", "up", "down"))


class Viewpoint:
    __slots__ = ("_idx",)

    def __init__(self, idx: int = 0) -> None:
        if not 0 <= idx <= 7:
            raise ValueError(f"Viewpoint index must be 0-7, got {idx}")
        self._idx = idx

    @property
    def id(self) -> int:
        return self._idx

    @property
    def name(self) -> str:
        return POINTS[self._idx]["name"]

    @property
    def faces(self) -> tuple[str, ...]:
        return POINTS[self._idx]["faces"]

    @property
    def azim(self) -> float:
        return POINTS[self._idx]["azim"]

    @property
    def elev(self) -> float:
        return POINTS[self._idx]["elev"]

    def rotate(self, direction: str) -> Viewpoint:
        if direction not in DIRECTIONS:
            raise ValueError(f"Direction must be one of {sorted(DIRECTIONS)}, got '{direction}'")
        return Viewpoint(TRANSITIONS[(self._idx, direction)])

    def __repr__(self) -> str:
        return f"Viewpoint({self._idx}, {self.name!r}, faces={self.faces})"

    def __eq__(self, other: object) -> bool:
        if isinstance(other, Viewpoint):
            return self._idx == other._idx
        return NotImplemented

    def __hash__(self) -> int:
        return hash(self._idx)
