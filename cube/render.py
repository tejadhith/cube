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

NET: dict[str, tuple[int, int]] = {
    "U": (1, 0),
    "L": (0, 1),
    "F": (1, 1),
    "R": (2, 1),
    "B": (3, 1),
    "D": (1, 2),
}

ALL_FACES = ("U", "L", "F", "R", "B", "D")

HATCH_STEP = 12
HATCH_COLOR = (92, 92, 92)
PILL_RADIUS = 5


def _pill(w: int, h: int, fill: tuple[int, int, int, int]) -> Image.Image:
    pill = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    ImageDraw.Draw(pill).rounded_rectangle(
        [0, 0, w - 1, h - 1], radius=PILL_RADIUS, fill=fill,
    )
    return pill


def render(
    faces: dict[str, list[list[str]]],
    visible: set[str],
    cell: int = 48,
) -> bytes:
    n = 3
    pad = 14
    gap = 3
    face_px = n * cell + (n + 1) * gap

    w = 4 * face_px + 2 * pad
    h = 3 * face_px + 2 * pad

    img = Image.new("RGB", (w, h), BG)
    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype(
            "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf", 20,
        )
    except OSError:
        font = ImageFont.load_default()

    for name in ALL_FACES:
        col, row = NET[name]
        ox = pad + col * face_px
        oy = pad + row * face_px

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

            cx = ox + gap + (cell + gap) + cell // 2
            cy = oy + gap + (cell + gap) + cell // 2
            bb = font.getbbox(name)
            tw, th = bb[2] - bb[0], bb[3] - bb[1]
            pp = 6
            pill = _pill(tw + pp * 2, th + pp * 2, (0, 0, 0, 140))
            img.paste(pill, (cx - pill.width // 2, cy - pill.height // 2), pill)
            draw.text((cx, cy), name, fill=(255, 255, 255), font=font, anchor="mm")
        else:
            fx, fy = ox + gap, oy + gap
            fw, fh = face_px - 2 * gap, face_px - 2 * gap

            tile = Image.new("RGB", (fw, fh), HIDDEN)
            td = ImageDraw.Draw(tile)
            for off in range(-fh, fw + fh, HATCH_STEP):
                td.line([(off, 0), (off + fh, fh)], fill=HATCH_COLOR, width=1)
            td.rectangle([0, 0, fw - 1, fh - 1], outline=(60, 60, 60), width=1)
            img.paste(tile, (fx, fy))

            cx = ox + face_px // 2
            cy = oy + face_px // 2
            bb = font.getbbox(name)
            tw, th = bb[2] - bb[0], bb[3] - bb[1]
            pp = 7
            pill = _pill(tw + pp * 2, th + pp * 2, (60, 60, 60, 210))
            img.paste(pill, (cx - pill.width // 2, cy - pill.height // 2), pill)
            draw.text((cx, cy), name, fill=(140, 140, 140), font=font, anchor="mm")

    buf = BytesIO()
    img.save(buf, format="PNG")
    return buf.getvalue()
