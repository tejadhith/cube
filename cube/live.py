from __future__ import annotations

import json
import sys
import threading
import time
import webbrowser
from http.server import HTTPServer, BaseHTTPRequestHandler

_data: dict = {}
_lock = threading.Lock()

FACE_ORDER = ("U", "R", "F", "D", "L", "B")

COLOR_INDEX = {"W": 10, "Y": 11, "O": 12, "R": 13, "G": 14, "B": 15}


def facelets(faces: dict[str, list[list[str]]]) -> str:
    chars = []
    for name in FACE_ORDER:
        for row in faces[name]:
            for c in row:
                chars.append(c.lower())
    return "".join(chars)


def update(faces, viewpoint, stats, move=None):
    with _lock:
        _data["facelets"] = facelets(faces)
        _data["viewpoint"] = viewpoint.name
        _data["viewpoint_id"] = viewpoint.id
        _data["visible"] = list(viewpoint.faces)
        _data["stats"] = stats
        _data["move"] = move
        _data["ts"] = time.time()


class _Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/state":
            self._json()
        else:
            self._html()

    def _json(self):
        with _lock:
            body = json.dumps(_data).encode()
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def _html(self):
        pip = "pip" in self.path
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.end_headers()
        self.wfile.write(_page(pip).encode())

    def log_message(self, *args):
        pass


def start(port: int = 4321) -> int:
    for p in range(port, port + 10):
        try:
            server = HTTPServer(("127.0.0.1", p), _Handler)
            break
        except OSError:
            continue
    else:
        print("live: could not bind to any port", file=sys.stderr)
        return 0

    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()

    url = f"http://localhost:{p}"
    print(f"Cube live viewer: {url}", file=sys.stderr)
    try:
        webbrowser.open(url)
    except Exception:
        pass
    return p


def _page(pip: bool = False) -> str:
    return _HTML.replace("__PIP__", "true" if pip else "false")


_HTML = r"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Rubik's Cube POMDP</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif;
    background: #000;
    color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 24px;
  }
  h1 {
    font-size: 13px;
    font-weight: 500;
    color: #999;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  #cube {
    width: min(60vmin, calc(100vh - 300px));
    height: min(60vmin, calc(100vh - 300px));
    transition: opacity 0.18s ease;
  }

  #vp-label {
    margin-top: 14px;
    font-size: 11px;
    color: #aaa;
    letter-spacing: 0.5px;
  }
  #vp-label span { color: #ddd; font-weight: 600; }

  #vp-net {
    margin-top: 8px;
    display: grid;
    grid-template-columns: repeat(4, 16px);
    grid-template-rows: repeat(3, 16px);
    gap: 2px;
    justify-content: center;
  }
  .net-cell {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 1px solid rgba(255,255,255,0.1);
    transition: opacity 0.25s ease;
  }
  .net-cell.dim { opacity: 0.15; }

  #stats {
    margin-top: 14px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 24px;
    font-size: 12px;
  }
  .stat-label { color: #777; }
  .stat-value {
    text-align: right;
    font-weight: 600;
    font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', 'Courier New', monospace;
  }

  #history {
    margin-top: 12px;
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 22px;
  }
  .move-pill {
    background: #2a2a2a;
    color: #bbb;
    font-size: 11px;
    font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', 'Courier New', monospace;
    font-weight: 500;
    padding: 2px 8px;
    border-radius: 10px;
    animation: pillIn 0.2s ease;
  }
  @keyframes pillIn {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
  }

  #pip-btn {
    margin-top: 16px;
    background: transparent;
    color: #666;
    border: 1px solid #333;
    border-radius: 6px;
    padding: 6px 16px;
    font-size: 11px;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.15s;
  }
  #pip-btn:hover { background: #222; color: #aaa; border-color: #555; }

  body.pip { padding: 0; justify-content: center; background: #000; }
  body.pip h1,
  body.pip #vp-label,
  body.pip #vp-net,
  body.pip #stats,
  body.pip #history,
  body.pip #pip-btn { display: none; }
  body.pip #cube { width: 100vw; height: 100vh; }
</style>
</head>
<body>
<h1>Rubik's Cube POMDP</h1>
<div id="cube"></div>
<div id="vp-label"><span id="vp">-</span></div>
<div id="vp-net"></div>
<div id="stats">
  <div class="stat-label">Moves</div><div class="stat-value" id="s-moves">0</div>
  <div class="stat-label">Inspections</div><div class="stat-value" id="s-insp">0</div>
</div>
<div id="history"></div>
<button id="pip-btn">Pop Out</button>

<script src="https://animcubejs.cubing.net/AnimCube3.js"></script>
<script>
const IS_PIP = __PIP__;
if (IS_PIP) document.body.classList.add('pip');

var acjs_cube = [];
var acjs_paint = [];
var acjs_put_var = [];
var acjs_startAnimation = [];

const INIT_FACELETS = 'wwwwwwwwwrrrrrrrrrgggggggggyyyyyyyyyooooooooobbbbbbbbb';
const MAP = {w:10, y:11, o:12, r:13, g:14, b:15};

const POSITIONS = {
  0: 'lluuff',
  1: 'rruuff',
  2: 'rrrrrruuff',
  3: 'lllllluuff',
  4: 'llddff',
  5: 'rrddff',
  6: 'rrrrrrddff',
  7: 'llllllddff'
};

const FACE_COLORS = {U:'#ffffff',D:'#fdd835',F:'#43a047',B:'#1e88e5',L:'#fb8c00',R:'#e53935'};
const NET = [null,'U',null,null,'L','F','R','B',null,'D',null,null];

let lastTs = 0;
let viewId = -1;
let lastFl = INIT_FACELETS;
let busy = false;
let moveHistory = [];

function curPos() { return POSITIONS[viewId] || POSITIONS[0]; }

function buildCube(fl, position, move) {
  const el = document.getElementById('cube');
  el.innerHTML = '';
  acjs_cube = [];
  acjs_paint = [];
  acjs_put_var = [];
  acjs_startAnimation = [];
  let cfg = 'id=cube&facelets=' + fl + '&buttonbar=0&edit=0&borderwidth=2&hint=0&bgcolor=000000&cubecolor=333333&position=' + position;
  if (move) cfg += '&move=' + move + '&speed=12';
  AnimCube3(cfg);
}

function transitionCube(fl, position) {
  const el = document.getElementById('cube');
  busy = true;
  el.style.opacity = '0';
  setTimeout(() => {
    buildCube(fl, position);
    el.style.opacity = '1';
    busy = false;
  }, 200);
}

function animateMove(preFl, position, move, postFl) {
  busy = true;
  buildCube(preFl, position, move);
  setTimeout(() => {
    if (acjs_startAnimation['cube']) acjs_startAnimation['cube'](2);
  }, 60);
  setTimeout(() => {
    setCube(postFl);
    busy = false;
  }, 700);
}

function setCube(fl) {
  if (busy || !acjs_cube['cube']) return;
  for (let f = 0; f < 6; f++)
    for (let j = 0; j < 9; j++)
      acjs_cube['cube'][f][j] = MAP[fl[f * 9 + j]] || 10;
  acjs_paint['cube']();
}

function renderNet(visible) {
  const vis = new Set(visible || []);
  const el = document.getElementById('vp-net');
  el.innerHTML = '';
  for (const face of NET) {
    const cell = document.createElement('div');
    if (face) {
      cell.className = 'net-cell' + (vis.has(face) ? '' : ' dim');
      cell.style.background = FACE_COLORS[face];
    }
    el.appendChild(cell);
  }
}

function renderHistory() {
  const el = document.getElementById('history');
  el.innerHTML = '';
  for (const m of moveHistory) {
    const pill = document.createElement('span');
    pill.className = 'move-pill';
    pill.textContent = m;
    el.appendChild(pill);
  }
}

function updateStats(d) {
  const s = d.stats || {};
  document.getElementById('s-moves').textContent = s.moves ?? '-';
  document.getElementById('s-insp').textContent = s.inspections ?? '-';
  const vp = d.viewpoint || '-';
  document.getElementById('vp').textContent = vp === '-' ? vp : vp.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
  renderNet(d.visible);
}

buildCube(INIT_FACELETS, POSITIONS[0]);
renderNet([]);

async function poll() {
  try {
    const r = await fetch('/state');
    const d = await r.json();
    if (d.ts && d.ts !== lastTs) {
      lastTs = d.ts;
      const fl = d.facelets || lastFl;
      const prevFl = lastFl;
      lastFl = fl;
      const vid = d.viewpoint_id;
      const s = d.stats || {};

      if ((s.moves ?? 0) === 0 && moveHistory.length > 0) {
        moveHistory = [];
        renderHistory();
      } else if (d.move) {
        moveHistory.push(d.move);
        if (moveHistory.length > 8) moveHistory.shift();
        renderHistory();
      }

      if (vid !== undefined && vid !== viewId) {
        viewId = vid;
        transitionCube(fl, POSITIONS[vid] || POSITIONS[0]);
      } else if (d.move && !busy) {
        animateMove(prevFl, curPos(), d.move, fl);
      } else if (!busy) {
        setCube(fl);
      }
      updateStats(d);
    }
  } catch {}
}

setInterval(poll, 400);
setTimeout(poll, 200);

document.getElementById('pip-btn').addEventListener('click', async () => {
  function popup() {
    window.open('/?pip=1', 'cube-pip', 'width=300,height=300,menubar=no,toolbar=no,location=no');
  }
  if (!('pictureInPictureEnabled' in document) || !document.pictureInPictureEnabled) {
    popup();
    return;
  }
  const src = document.querySelector('#cube canvas');
  if (!src) return;

  const pipCanvas = document.createElement('canvas');
  pipCanvas.width = src.width;
  pipCanvas.height = src.height;
  const ctx = pipCanvas.getContext('2d');
  ctx.drawImage(src, 0, 0);

  const stream = pipCanvas.captureStream(30);
  const video = document.createElement('video');
  video.srcObject = stream;
  video.muted = true;
  video.playsInline = true;
  video.style.display = 'none';
  document.body.appendChild(video);
  await video.play();

  let active = true;
  function stop() {
    active = false;
    stream.getTracks().forEach(t => t.stop());
    video.srcObject = null;
    video.remove();
  }
  function copyFrame() {
    if (!active) return;
    const s = document.querySelector('#cube canvas');
    if (s) ctx.drawImage(s, 0, 0, pipCanvas.width, pipCanvas.height);
    requestAnimationFrame(copyFrame);
  }

  try {
    await video.requestPictureInPicture();
    copyFrame();
    video.addEventListener('leavepictureinpicture', stop);
  } catch (e) {
    stop();
    popup();
  }
});

</script>
</body>
</html>"""
