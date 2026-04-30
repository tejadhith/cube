from __future__ import annotations

from io import BytesIO

from PIL import Image, ImageDraw, ImageFont

COLORS: dict[str, tuple[int, int, int]] = {
    "R": (220, 30, 30),
    "O": (255, 127, 0),
    "W": (242, 242, 242),
    "Y": (255, 220, 0),
    "B": (30, 80, 220),
    "G": (30, 200, 60),
}

HIDDEN = (80, 80, 80)
BG = (30, 30, 30)
BORDER = (0, 0, 0)
LABEL = (180, 180, 180)

NET: dict[str, tuple[int, int]] = {
    "U": (1, 0),
    "L": (0, 1),
    "F": (1, 1),
    "R": (2, 1),
    "B": (3, 1),
    "D": (1, 2),
}

ALL_FACES = ("U", "L", "F", "R", "B", "D")


def render(
    faces: dict[str, list[list[str]]],
    visible: set[str],
    label: str = "",
    cell: int = 30,
) -> bytes:
    n = 3
    pad = 12
    gap = 2
    face_px = n * cell + (n + 1) * gap
    header = 24

    w = 4 * face_px + 2 * pad
    h = 3 * face_px + 2 * pad + header

    img = Image.new("RGB", (w, h), BG)
    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf", 11)
        small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf", 10)
    except OSError:
        font = ImageFont.load_default()
        small = font

    vis = sorted(visible)
    hid = sorted(set(ALL_FACES) - visible)
    title = f"{label}  |  Visible: {' '.join(vis)}  |  Hidden: {' '.join(hid)}"
    draw.text((pad, 4), title, fill=LABEL, font=font)

    top = pad + header

    for name in ALL_FACES:
        col, row = NET[name]
        ox = pad + col * face_px
        oy = top + row * face_px

        if name in visible and name in faces:
            grid = faces[name]
            for r in range(n):
                for c in range(n):
                    color = COLORS.get(grid[r][c], HIDDEN)
                    x0 = ox + gap + c * (cell + gap)
                    y0 = oy + gap + r * (cell + gap)
                    draw.rectangle(
                        [x0, y0, x0 + cell - 1, y0 + cell - 1],
                        fill=color, outline=BORDER, width=1,
                    )
        else:
            draw.rectangle(
                [ox + gap, oy + gap, ox + face_px - gap, oy + face_px - gap],
                fill=HIDDEN, outline=(60, 60, 60), width=1,
            )

        lx = ox + face_px // 2
        ly = oy + face_px // 2
        if name not in visible:
            draw.text((lx - 4, ly - 6), name, fill=(120, 120, 120), font=small)
        else:
            draw.text((ox + gap + 1, oy + gap + 1), name, fill=(40, 40, 40), font=small)

    buf = BytesIO()
    img.save(buf, format="PNG")
    return buf.getvalue()
