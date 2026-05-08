from __future__ import annotations

import json
import threading
import time
import webbrowser
from http.server import HTTPServer, BaseHTTPRequestHandler
from pathlib import Path
from socketserver import ThreadingMixIn
from urllib.parse import urlparse

_BUNDLE = Path(__file__).resolve().parent / "twisty.bundle.js"

_data: dict = {}
_events: list[dict] = []
_cond = threading.Condition()
_seq = 0
_epoch = 0

FACE_ORDER = ("U", "D", "F", "B", "L", "R")


def facelets(faces: dict[str, list[list[str]]]) -> str:
    chars = []
    for name in FACE_ORDER:
        grid = faces[name]
        if name == "U":
            for r in (2, 1, 0):
                for c in range(3):
                    chars.append(grid[r][c].lower())
        elif name == "L":
            for r in range(3):
                for c in (2, 1, 0):
                    chars.append(grid[r][c].lower())
        else:
            for c in range(3):
                for r in range(3):
                    chars.append(grid[r][c].lower())
    return "".join(chars)


def update(faces, viewpoint, stats, move=None, event=None,
           scramble_alg="", alg=""):
    global _seq
    with _cond:
        _data["facelets"] = facelets(faces)
        _data["viewpoint"] = viewpoint.name
        _data["viewpoint_id"] = viewpoint.id
        _data["visible"] = list(viewpoint.faces)
        _data["stats"] = stats
        _data["move"] = move
        _data["event"] = event
        _data["epoch"] = _epoch
        _data["scramble_alg"] = scramble_alg
        _data["alg"] = alg
        _data["ts"] = time.time()
        if event:
            _events.append(event)
        _seq += 1
        _cond.notify_all()


def push(event):
    global _seq
    with _cond:
        _events.append(event)
        _data["move"] = None
        _data["event"] = event
        _data["ts"] = time.time()
        _seq += 1
        _cond.notify_all()


def clear():
    global _epoch
    with _cond:
        _events.clear()
        _epoch += 1


class _Server(ThreadingMixIn, HTTPServer):
    daemon_threads = True


class _Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/state":
            self._json()
        elif parsed.path == "/events":
            self._sse()
        elif parsed.path == "/twisty.bundle.js":
            self._bundle()
        else:
            self._html(parsed)

    def _bundle(self):
        body = _BUNDLE.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", "application/javascript")
        self.send_header("Cache-Control", "public, max-age=86400")
        self.end_headers()
        self.wfile.write(body)

    def _json(self):
        with _cond:
            d = dict(_data)
            d["events"] = list(_events)
        body = json.dumps(d).encode()
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def _sse(self):
        self.send_response(200)
        self.send_header("Content-Type", "text/event-stream")
        self.send_header("Cache-Control", "no-cache")
        self.send_header("X-Accel-Buffering", "no")
        self.end_headers()
        local = -1
        try:
            while True:
                with _cond:
                    changed = _cond.wait_for(lambda: _seq > local, timeout=15)
                    local = _seq
                    if changed:
                        d = dict(_data)
                        d["events"] = list(_events)
                if changed:
                    self.wfile.write(f"data: {json.dumps(d)}\n\n".encode())
                else:
                    self.wfile.write(b":\n\n")
                self.wfile.flush()
        except (BrokenPipeError, ConnectionResetError, OSError):
            pass

    def _html(self, parsed):
        pip = "pip" in parsed.query
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.end_headers()
        self.wfile.write(_page(pip).encode())

    def log_message(self, *args):
        pass


def start(port: int = 4321) -> int:
    for p in range(port, port + 10):
        try:
            server = _Server(("127.0.0.1", p), _Handler)
            break
        except OSError:
            continue
    else:
        return 0

    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()

    url = f"http://localhost:{p}"
    try:
        webbrowser.open(url)
    except Exception:
        pass
    return p


def _page(pip=False):
    return _HTML.replace("__PIP__", "true" if pip else "false")


_HTML = r"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet">
<title>Rubik's Cube Partially Observable MDP</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Space Grotesk', -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif;
    background: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 12px 24px;
  }
  h1 {
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
  #cube {
    width: min(55vmin, calc(100vh - 280px));
    height: min(55vmin, calc(100vh - 280px));
  }
  #cube twisty-player {
    width: 100%;
    height: 100%;
  }

  #meta {
    margin-top: 6px;
    border: 1px solid #333;
    border-radius: 12px;
    padding: 14px 18px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
  }

  #vp-net {
    display: grid;
    grid-template-columns: repeat(4, 30px);
    grid-template-rows: repeat(3, 30px);
    gap: 3px;
    justify-content: center;
  }
  .net-cell {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid rgba(255,255,255,0.1);
    transition: opacity 0.25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
  }
  .net-cell.dim { opacity: 0.15; }

  #stats {
    margin-top: 16px;
    padding-top: 14px;
    border-top: 1px solid #222;
    display: grid;
    grid-template-columns: 1fr auto;
    width: 129px;
    gap: 4px 12px;
    font-size: 13px;
  }
  .stat-label { color: #fff; }
  .stat-value { text-align: right; font-weight: 600; }

  #activity {
    margin-top: 14px;
    padding-top: 12px;
    border-top: 1px solid #222;
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 24px;
  }
  #activity:empty { display: none; }
  .pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    padding: 5px 12px;
    border-radius: 100px;
    border: 1px solid;
    background: rgba(255,255,255,0.04);
    white-space: nowrap;
    cursor: pointer;
    transition: background 0.15s;
  }
  .pill .arg { font-weight: 400; opacity: 0.7; letter-spacing: 0; text-transform: none; }
  .pill:hover { background: rgba(255,255,255,0.1); }

  #overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.5);
    z-index: 199;
    opacity: 0; visibility: hidden;
    transition: opacity 0.15s ease, visibility 0.15s ease;
  }
  #overlay.open { opacity: 1; visibility: visible; }

  #history {
    position: fixed; top: 50%; left: 50%;
    width: min(300px, calc(100vw - 32px));
    max-height: min(400px, 70vh);
    opacity: 0; visibility: hidden; pointer-events: none;
    transform: translate(-50%, -50%) scale(0.96);
    transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s ease;
    z-index: 200;
    background: #111; border: 1px solid #333; border-radius: 8px;
    overflow: hidden; display: flex; flex-direction: column;
  }
  #history.open {
    opacity: 1; visibility: visible; pointer-events: auto;
    transform: translate(-50%, -50%) scale(1);
  }
  #history-list { overflow-y: auto; scrollbar-width: thin; scrollbar-color: #333 transparent; }
  #history-list table { width: 100%; border-collapse: collapse; }
  #history-list th, #history-list td { border: 1px solid #222; padding: 6px 10px; text-align: left; }
  #history-list th {
    position: sticky; top: 0; background: #111;
    font-size: 11px; font-weight: 600; color: #555;
    text-transform: uppercase; letter-spacing: 0.5px;
  }
  #history-list th:first-child, #history-list td:first-child { text-align: right; width: 28px; }
  #history-list td { font-size: 13px; }
  #history-list tr:last-child td { background: rgba(255,255,255,0.04); }
  .step-num { text-align: right; color: #555; font-size: 12px; font-variant-numeric: tabular-nums; }
  .step-label { font-weight: 600; text-transform: uppercase; letter-spacing: 0.3px; font-size: 12px; }
  .step-detail { color: #aaa; font-size: 13px; }
  #history-list tr:last-child .step-detail { color: #ddd; }

  #pip-btn {
    margin-top: 16px; background: transparent; color: #aaa;
    border: 1px solid #333; border-radius: 6px; padding: 6px 16px;
    font-size: 13px; font-family: inherit; cursor: pointer; transition: all 0.15s;
  }
  #pip-btn:hover { background: #222; color: #fff; border-color: #555; }

  #note {
    margin-top: 10px; max-width: 400px; font-size: 11px;
    color: #aaa; text-align: center; line-height: 1.45;
  }

  body.pip { padding: 0; justify-content: center; background: #000; }
  body.pip h1, body.pip #meta, body.pip #pip-btn, body.pip #note,
  body.pip #history, body.pip #overlay { display: none; }
  body.pip #cube { width: 100vw; height: 100vh; }
</style>
</head>
<body>
<h1>Rubik's Cube Partially Observable MDP</h1>
<div id="cube"></div>
<div id="meta">
  <div id="vp-net"></div>
  <div id="stats">
    <div class="stat-label">Moves</div><div class="stat-value" id="s-moves">0</div>
    <div class="stat-label">Inspections</div><div class="stat-value" id="s-insp">0</div>
  </div>
  <div id="activity"></div>
</div>
<div id="overlay"></div>
<div id="history">
  <div id="history-list"></div>
</div>
<button id="pip-btn">Picture in Picture</button>
<div id="note">Click the last action for full history.<br>Use Picture in Picture to watch the cube while the agent works in another window.</div>
<script>
const IS_PIP = __PIP__;
if (IS_PIP) document.body.classList.add('pip');

async function main() {
const { TwistyPlayer } = await import("/twisty.bundle.js");

const player = new TwistyPlayer({
  puzzle: "3x3x3",
  alg: "",
  experimentalSetupAlg: "",
  background: "none",
  controlPanel: "none",
  hintFacelets: "none",
  tempoScale: 2.5,
});
document.getElementById('cube').appendChild(player);

const VIEWPOINTS = {
  0: { lat: 30, lon: 45 },
  1: { lat: 30, lon: 315 },
  2: { lat: 30, lon: 225 },
  3: { lat: 30, lon: 135 },
  4: { lat: -30, lon: 45 },
  5: { lat: -30, lon: 315 },
  6: { lat: -30, lon: 225 },
  7: { lat: -30, lon: 135 },
};

const FACE_COLORS = {U:'#ffffff',D:'#fdd835',F:'#43a047',B:'#1e88e5',L:'#fb8c00',R:'#e53935'};
const FACE_TEXT_COLORS = {U:'#333',D:'#333',F:'#fff',B:'#fff',L:'#333',R:'#fff'};
const NET = [null,'U',null,null,'L','F','R','B',null,'D',null,null];

let lastTs = 0;
let viewId = 0;
let curScrambleAlg = '';
let curAlg = '';
let toolLog = [];
let seenEvents = 0;
let epoch = 0;

function setCamera(vid) {
  const vp = VIEWPOINTS[vid] || VIEWPOINTS[0];
  try {
    player.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({
      latitude: vp.lat, longitude: vp.lon,
    });
  } catch (e) {
    player.cameraLatitude = vp.lat;
    player.cameraLongitude = vp.lon;
  }
}
setCamera(0);

function renderNet(visible) {
  const vis = new Set(visible || []);
  const el = document.getElementById('vp-net');
  el.innerHTML = '';
  for (const face of NET) {
    const cell = document.createElement('div');
    if (face) {
      cell.className = 'net-cell' + (vis.has(face) ? '' : ' dim');
      cell.style.background = FACE_COLORS[face];
      cell.style.color = FACE_TEXT_COLORS[face];
      cell.textContent = face;
    }
    el.appendChild(cell);
  }
}
renderNet(['F', 'R', 'U']);

function visibleFromCamera(lat, lon) {
  const lr = lat * Math.PI / 180;
  const lo = lon * Math.PI / 180;
  const vis = [];
  if (Math.sin(lr) > 0.01) vis.push('U');
  if (Math.sin(lr) < -0.01) vis.push('D');
  if (Math.cos(lo) > 0.01) vis.push('F');
  if (Math.cos(lo) < -0.01) vis.push('B');
  if (Math.sin(lo) > 0.01) vis.push('R');
  if (Math.sin(lo) < -0.01) vis.push('L');
  return vis;
}

let orbitDriven = false;
try {
  player.experimentalModel.twistySceneModel.orbitCoordinates
    .addFreshListener((c) => {
      orbitDriven = true;
      renderNet(visibleFromCamera(c.latitude, c.longitude));
    });
} catch (e) {}

const TOOL_COLORS = {
  scramble:'#fdd835', reset:'#fb8c00', look:'#666',
  move:'#ccc', rotate_view:'#1e88e5',
  is_solved:'#43a047', get_history:'#888', get_stats:'#888'
};
const CHIP_LABELS = {
  scramble:'SCRAMBLE',reset:'RESET',look:'LOOK',move:'MOVE',
  rotate_view:'ROTATE',is_solved:'CHECK',get_history:'HISTORY',get_stats:'STATS'
};
const FALLBACK_DETAILS = { look: 'current view', get_stats: 'snapshot' };

function escapeHTML(v) {
  return String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function eventMeta(e) {
  const label = CHIP_LABELS[e.tool] || e.tool.toUpperCase();
  const color = TOOL_COLORS[e.tool] || '#555';
  const display = e.display || '';
  const callMatch = display.match(/^[^(]+\(([^)]*)\)/);
  const resultMatch = display.match(/\)\s*→\s*(.+)$/);
  const compactDetail = resultMatch && resultMatch[1]
    ? resultMatch[1].trim()
    : callMatch && callMatch[1] ? callMatch[1].trim() : '';
  return { label, color, compactDetail, detail: compactDetail || FALLBACK_DETAILS[e.tool] || '-' };
}

function pillHTML(e) {
  const m = eventMeta(e);
  return '<span class="pill" style="color:'+m.color+';border-color:'+m.color+'">'+
    escapeHTML(m.label)+(m.compactDetail?'<span class="arg">'+escapeHTML(m.compactDetail)+'</span>':'')+'</span>';
}

function renderActivity() {
  const el = document.getElementById('activity');
  if (!toolLog.length) { el.innerHTML = ''; return; }
  el.innerHTML = pillHTML(toolLog[toolLog.length - 1]);
}

function rowHTML(e, i) {
  const m = eventMeta(e);
  const detail = m.detail !== '-' ? escapeHTML(m.detail) : '';
  return '<tr><td class="step-num">'+(i+1)+'</td><td class="step-label" style="color:'+m.color+'">'+
    escapeHTML(m.label)+'</td><td class="step-detail">'+detail+'</td></tr>';
}

function renderHistory() {
  const el = document.getElementById('history-list');
  if (!toolLog.length) return;
  el.innerHTML = '<table><thead><tr><th>#</th><th>Action</th><th>Value</th></tr></thead><tbody>'+
    toolLog.map(rowHTML).join('')+'</tbody></table>';
  el.scrollTop = el.scrollHeight;
}

function updateStats(d) {
  const s = d.stats || {};
  document.getElementById('s-moves').textContent = s.moves ?? '-';
  document.getElementById('s-insp').textContent = s.inspections ?? '-';
}

const historyEl = document.getElementById('history');
const overlayEl = document.getElementById('overlay');
const activityEl = document.getElementById('activity');

function closeHistory() { historyEl.classList.remove('open'); overlayEl.classList.remove('open'); }
function openHistory() { renderHistory(); historyEl.classList.add('open'); overlayEl.classList.add('open'); }

function handleState(d) {
  if (!d.ts || d.ts === lastTs) return;
  lastTs = d.ts;

  const events = d.events || [];
  const newEpoch = d.epoch || 0;
  if (newEpoch !== epoch) {
    epoch = newEpoch;
    toolLog = []; seenEvents = 0;
    closeHistory();
  }
  if (events.length > seenEvents) {
    for (let i = seenEvents; i < events.length; i++) toolLog.push(events[i]);
    seenEvents = events.length;
    renderActivity();
    if (historyEl.classList.contains('open')) renderHistory();
  }

  const scrambleAlg = d.scramble_alg || '';
  const alg = d.alg || '';

  try {
    if (scrambleAlg !== curScrambleAlg) {
      curScrambleAlg = scrambleAlg;
      curAlg = alg;
      player.experimentalSetupAlg = scrambleAlg;
      player.alg = alg;
      player.timestamp = "end";
    } else if (d.move && alg !== curAlg) {
      curAlg = alg;
      player.experimentalAddMove(d.move);
    } else if (alg !== curAlg) {
      curAlg = alg;
      player.alg = alg;
      player.timestamp = "end";
    }
  } catch (e) {
  }

  const vid = d.viewpoint_id;
  if (vid !== undefined && vid !== viewId) {
    viewId = vid;
    setCamera(vid);
  }
  if (!orbitDriven && d.visible) renderNet(d.visible);
  updateStats(d);
}

const _es = new EventSource('/events');
_es.onmessage = (e) => handleState(JSON.parse(e.data));

activityEl.addEventListener('click', () => {
  if (!toolLog.length) return;
  historyEl.classList.contains('open') ? closeHistory() : openHistory();
});
overlayEl.addEventListener('click', closeHistory);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeHistory(); });

let pipVid = null;

(async function setupPip() {
  for (let i = 0; i < 30; i++) {
    try {
      const canvases = await player.experimentalCurrentCanvases();
      const src = canvases[0];
      if (src && typeof src.captureStream === 'function') {
        pipVid = document.createElement('video');
        pipVid.srcObject = src.captureStream(30);
        pipVid.muted = true;
        pipVid.playsInline = true;
        pipVid.style.cssText = 'position:fixed;opacity:0;pointer-events:none;width:1px;height:1px';
        document.body.appendChild(pipVid);
        await pipVid.play();
        return;
      }
    } catch (e) {}
    await new Promise(r => setTimeout(r, 500));
  }
})();

document.getElementById('pip-btn').addEventListener('click', async () => {
  if (document.pictureInPictureElement) {
    await document.exitPictureInPicture();
    return;
  }
  try {
    if (!pipVid) throw new Error('PiP not ready — canvas not available');
    await pipVid.requestPictureInPicture();
  } catch (err) {
    const msg = 'PiP failed: ' + err.message;
    const toast = document.createElement('div');
    toast.textContent = msg;
    toast.style.cssText = 'position:fixed;top:12px;left:50%;transform:translateX(-50%);background:#e53935;color:#fff;padding:8px 16px;border-radius:6px;font-size:13px;z-index:999';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 5000);
  }
});

} // end main

main().catch(err => {
  document.getElementById('cube').innerHTML =
    '<div style="color:#e53935;padding:24px;font-size:14px;">' +
    'Failed to load cubing.js: ' + err.message +
    '<br><br>Check browser console for details.</div>';
});
</script>
</body>
</html>"""
