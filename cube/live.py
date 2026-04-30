from __future__ import annotations

import json
import sys
import threading
import time
import webbrowser
from http.server import HTTPServer, BaseHTTPRequestHandler

_data: dict = {}
_lock = threading.Lock()

FACE_ORDER = ("U", "D", "F", "B", "L", "R")

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
    background: #fff;
    color: #333;
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
    width: min(70vmin, calc(100vh - 180px));
    height: min(70vmin, calc(100vh - 180px));
    transition: opacity 0.18s ease;
  }

  #stats {
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 24px;
    font-size: 12px;
  }
  .stat-label { color: #999; }
  .stat-value { text-align: right; font-weight: 600; }
  .stat-value.solved { color: #2a2; }
  .stat-value.unsolved { color: #c44; }

  #visible-bar {
    margin-top: 12px;
    font-size: 11px;
    text-align: center;
    color: #999;
  }
  #visible-bar span { color: #555; font-weight: 600; }

  #pip-btn {
    margin-top: 16px;
    background: #f5f5f5;
    color: #666;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 6px 16px;
    font-size: 12px;
    font-family: inherit;
    cursor: pointer;
    transition: background 0.15s;
  }
  #pip-btn:hover { background: #eee; color: #333; }

  body.pip { padding: 0; justify-content: center; }
  body.pip h1,
  body.pip #stats,
  body.pip #visible-bar,
  body.pip #pip-btn { display: none; }
  body.pip #cube { width: 100vw; height: 100vh; }
</style>
</head>
<body>
<h1>Rubik's Cube POMDP</h1>
<div id="cube"></div>
<div id="visible-bar">Viewpoint: <span id="vp">-</span> &middot; Visible: <span id="vis">-</span></div>
<div id="stats">
  <div class="stat-label">Moves</div><div class="stat-value" id="s-moves">0</div>
  <div class="stat-label">Inspections</div><div class="stat-value" id="s-insp">0</div>
  <div class="stat-label">Total steps</div><div class="stat-value" id="s-total">0</div>
  <div class="stat-label">Solved</div><div class="stat-value" id="s-solved">-</div>
</div>
<button id="pip-btn">Pop Out</button>

<script src="https://animcubejs.cubing.net/AnimCube3.js"></script>
<script>
const IS_PIP = __PIP__;
if (IS_PIP) document.body.classList.add('pip');

var acjs_cube = [];
var acjs_paint = [];
var acjs_put_var = [];
var acjs_startAnimation = [];

const INIT_FACELETS = 'wwwwwwwwwyyyyyyyyyggggggggbbbbbbbbbooooooooorrrrrrrrrr';
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

let lastTs = 0;
let viewId = -1;
let lastFl = INIT_FACELETS;
let busy = false;

function curPos() { return POSITIONS[viewId] || POSITIONS[0]; }

function buildCube(fl, position, move) {
  const el = document.getElementById('cube');
  el.innerHTML = '';
  acjs_cube = [];
  acjs_paint = [];
  acjs_put_var = [];
  acjs_startAnimation = [];
  let cfg = 'id=cube&facelets=' + fl + '&buttonbar=0&edit=0&borderwidth=2&hint=0&bgcolor=ffffff&cubecolor=333333&position=' + position;
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

function updateStats(d) {
  const s = d.stats || {};
  document.getElementById('s-moves').textContent = s.moves ?? '-';
  document.getElementById('s-insp').textContent = s.inspections ?? '-';
  document.getElementById('s-total').textContent = s.total ?? '-';
  const el = document.getElementById('s-solved');
  el.textContent = s.solved ? 'Yes' : 'No';
  el.className = 'stat-value ' + (s.solved ? 'solved' : 'unsolved');
  document.getElementById('vp').textContent = d.viewpoint || '-';
  document.getElementById('vis').textContent = (d.visible || []).join(', ');
}

buildCube(INIT_FACELETS, POSITIONS[0]);

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
  if ('documentPictureInPicture' in window) {
    try {
      const pip = await documentPictureInPicture.requestWindow({width: 300, height: 300});
      pip.document.head.innerHTML = '<style>' +
        document.querySelector('style').textContent + '</style>';
      pip.document.body.className = 'pip';
      pip.document.body.innerHTML = '<div id="cube" style="width:100%;height:100%;transition:opacity .18s ease"></div>';

      const script1 = pip.document.createElement('script');
      script1.src = 'https://animcubejs.cubing.net/AnimCube3.js';
      script1.onload = () => {
        const script2 = pip.document.createElement('script');
        script2.textContent = `
          var acjs_cube = [];
          var acjs_paint = [];
          var acjs_put_var = [];
          var acjs_startAnimation = [];
          var MAP = {w:10,y:11,o:12,r:13,g:14,b:15};
          var POSITIONS = {0:'lluuff',1:'rruuff',2:'rrrrrruuff',3:'lllllluuff',4:'llddff',5:'rrddff',6:'rrrrrrddff',7:'llllllddff'};
          var viewId = -1;
          var lastTs = 0;
          var lastFl = '${INIT_FACELETS}';
          var busy = false;
          function curPos() { return POSITIONS[viewId] || POSITIONS[0]; }
          function buildCube(fl, pos, mv) {
            var el = document.getElementById('cube');
            el.innerHTML = '';
            acjs_cube = [];
            acjs_paint = [];
            acjs_put_var = [];
            acjs_startAnimation = [];
            var cfg = 'id=cube&facelets=' + fl + '&buttonbar=0&edit=0&borderwidth=2&hint=0&bgcolor=ffffff&cubecolor=333333&position=' + pos;
            if (mv) cfg += '&move=' + mv + '&speed=12';
            AnimCube3(cfg);
          }
          function transitionCube(fl, pos) {
            var el = document.getElementById('cube');
            busy = true;
            el.style.opacity = '0';
            setTimeout(function() { buildCube(fl, pos); el.style.opacity = '1'; busy = false; }, 200);
          }
          function animateMove(preFl, pos, mv, postFl) {
            busy = true;
            buildCube(preFl, pos, mv);
            setTimeout(function() { if (acjs_startAnimation['cube']) acjs_startAnimation['cube'](2); }, 60);
            setTimeout(function() { busy = false; }, 700);
          }
          function setCube(fl) {
            if (busy || !acjs_cube['cube']) return;
            for (var f=0;f<6;f++) for (var j=0;j<9;j++) acjs_cube['cube'][f][j]=MAP[fl[f*9+j]]||10;
            acjs_paint['cube']();
          }
          buildCube(lastFl, POSITIONS[0]);
          setInterval(async function(){
            try {
              var r = await fetch('/state');
              var d = await r.json();
              if (d.ts && d.ts !== lastTs) {
                lastTs = d.ts;
                var fl = d.facelets || lastFl;
                var prevFl = lastFl;
                lastFl = fl;
                var vid = d.viewpoint_id;
                if (vid !== undefined && vid !== viewId) { viewId = vid; transitionCube(fl, POSITIONS[vid] || POSITIONS[0]); }
                else if (d.move && !busy) { animateMove(prevFl, curPos(), d.move, fl); }
                else if (!busy) { setCube(fl); }
              }
            } catch(e) {}
          }, 400);
        `;
        pip.document.body.appendChild(script2);
      };
      pip.document.head.appendChild(script1);
      return;
    } catch (e) { /* fall through to popup */ }
  }
  window.open('/?pip=1', 'cube-pip', 'width=300,height=300,menubar=no,toolbar=no,location=no');
});

</script>
</body>
</html>"""
