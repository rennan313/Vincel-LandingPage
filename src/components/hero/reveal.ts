// A prancha vira obra: o desenho (lápis e nanquim) é revelado como a casa real por uma
// frente de tinta com borda orgânica. A frente anda com `setProgress` (0 = só desenho,
// 1 = só obra) e o cursor "pinta" a obra por onde passa, que seca devagar.
// Coordenadas no "palco" de 1536×864 (o enquadramento das duas pranchas); `setView`
// recorta um pedaço do palco para telas estreitas.

export type View = { x: number; y: number; w: number; h: number };
export type Reveal = {
  setProgress(p: number): void;
  setView(v: View): void;
  /** Converte um ponto do canvas (px CSS) para o palco e pinta a obra ali. */
  paintAt(clientX: number, clientY: number): void;
  pause(v: boolean): void;
  destroy(): void;
};

export const STAGE_W = 1536;
export const STAGE_H = 864;
export const FULL_VIEW: View = { x: 0, y: 0, w: STAGE_W, h: STAGE_H };

function hash(n: number) {
  const s = Math.sin(n * 127.1) * 43758.5453;
  return s - Math.floor(s);
}
function noise1(x: number) {
  const i = Math.floor(x);
  const f = x - i;
  const u = f * f * (3 - 2 * f);
  return hash(i) * (1 - u) + hash(i + 1) * u;
}
function fbm(x: number) {
  let v = 0;
  let a = 0.5;
  for (let o = 0; o < 4; o++) {
    v += a * noise1(x);
    x *= 2.03;
    a *= 0.5;
  }
  return v;
}

type Stroke = { x: number; y: number; r: number; life: number; seed: number };

export function createReveal(
  canvas: HTMLCanvasElement,
  opts: { drawingSrc: string; renderSrc: string; reduced?: boolean; onReady?: () => void },
): Reveal {
  const { drawingSrc, renderSrc, reduced = false, onReady } = opts;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("sem canvas 2d");
  const W = STAGE_W;
  const H = STAGE_H;
  // Máscara em baixa resolução (borrada = borda macia, barata)
  const mask = document.createElement("canvas");
  mask.width = 384;
  mask.height = 216;
  const mctx = mask.getContext("2d")!;
  const layer = document.createElement("canvas");
  const lctx = layer.getContext("2d")!;

  const imgD = new Image();
  const imgR = new Image();
  let ready = 0;
  const onload = () => {
    ready += 1;
    if (ready === 2) onReady?.();
  };
  imgD.onload = onload;
  imgR.onload = onload;
  imgD.src = drawingSrc;
  imgR.src = renderSrc;

  let view: View = FULL_VIEW;
  let target = 0.02;
  let progress = 0;
  const strokes: Stroke[] = [];
  let t = 0;
  let raf = 0;
  let running = true;
  let dirty = true;

  function size() {
    const r = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    canvas.width = Math.max(1, Math.round(r.width * dpr));
    canvas.height = Math.max(1, Math.round(r.height * dpr));
    layer.width = canvas.width;
    layer.height = canvas.height;
    dirty = true;
  }
  size();
  const ro = new ResizeObserver(size);
  ro.observe(canvas);

  // A frente: x da borda (px do palco) para cada y, com ondulação orgânica e fiapos de pincel
  const LEFT = 470;
  const RIGHT = 1560;
  function frontX(y: number, p: number) {
    const base = RIGHT - (RIGHT - LEFT) * p;
    const k = y / H;
    const wave =
      (fbm(k * 3.2 + t * 0.05) - 0.5) * 220 +
      (fbm(k * 11 + 40 + t * 0.12) - 0.5) * 70 +
      (fbm(k * 52 + 90 + t * 0.4) - 0.5) * 46;
    return base + wave + (k - 0.5) * 120;
  }

  function drawMask() {
    const sx = mask.width / W;
    const sy = mask.height / H;
    mctx.clearRect(0, 0, mask.width, mask.height);
    mctx.fillStyle = "#fff";
    mctx.beginPath();
    mctx.moveTo(W * sx + 10, -10);
    for (let y = -20; y <= H + 20; y += 6) mctx.lineTo(frontX(y, progress) * sx, y * sy);
    mctx.lineTo(W * sx + 10, H * sy + 10);
    mctx.closePath();
    mctx.fill();
    for (const s of strokes) {
      const a = Math.max(0, Math.min(1, s.life));
      const g = mctx.createRadialGradient(s.x * sx, s.y * sy, 0, s.x * sx, s.y * sy, s.r * sx);
      g.addColorStop(0, `rgba(255,255,255,${a})`);
      g.addColorStop(0.55, `rgba(255,255,255,${a * 0.85})`);
      g.addColorStop(1, "rgba(255,255,255,0)");
      mctx.fillStyle = g;
      mctx.beginPath();
      const n = 18;
      for (let i = 0; i <= n; i++) {
        const ang = (i / n) * Math.PI * 2;
        const rr = s.r * (0.75 + 0.5 * fbm(ang * 1.7 + s.seed));
        const px = (s.x + Math.cos(ang) * rr) * sx;
        const py = (s.y + Math.sin(ang) * rr) * sy;
        if (i) mctx.lineTo(px, py);
        else mctx.moveTo(px, py);
      }
      mctx.fill();
    }
  }

  function drawImg(c: CanvasRenderingContext2D, img: CanvasImageSource, iw: number, ih: number, cw: number, ch: number) {
    c.drawImage(img, (view.x / W) * iw, (view.y / H) * ih, (view.w / W) * iw, (view.h / H) * ih, 0, 0, cw, ch);
  }

  function frame() {
    raf = requestAnimationFrame(frame);
    if (!running || ready < 2) return;
    const settling = Math.abs(target - progress) > 0.0005 || strokes.length > 0;
    // Com movimento reduzido, só redesenha quando algo muda
    if (reduced && !settling && !dirty) return;
    t += reduced ? 0 : 1 / 60;
    progress += (target - progress) * (reduced ? 1 : 0.035);
    for (const s of strokes) s.life -= 0.006;
    while (strokes.length && strokes[0].life <= 0) strokes.shift();
    dirty = false;

    drawMask();
    const cw = canvas.width;
    const ch = canvas.height;
    ctx!.globalCompositeOperation = "source-over";
    ctx!.clearRect(0, 0, cw, ch);
    drawImg(ctx!, imgD, imgD.naturalWidth, imgD.naturalHeight, cw, ch);
    lctx.globalCompositeOperation = "source-over";
    lctx.clearRect(0, 0, cw, ch);
    drawImg(lctx, imgR, imgR.naturalWidth, imgR.naturalHeight, cw, ch);
    lctx.globalCompositeOperation = "destination-in";
    lctx.filter = `blur(${Math.max(1, Math.round(cw / ((view.w / W) * 640)))}px)`;
    drawImg(lctx, mask, mask.width, mask.height, cw, ch);
    lctx.filter = "none";
    ctx!.drawImage(layer, 0, 0);
  }
  frame();

  return {
    setProgress(p) {
      target = Math.max(0, Math.min(1, p));
    },
    setView(v) {
      view = v;
      dirty = true;
    },
    paintAt(clientX, clientY) {
      if (reduced) return;
      const r = canvas.getBoundingClientRect();
      const x = view.x + ((clientX - r.left) / r.width) * view.w;
      const y = view.y + ((clientY - r.top) / r.height) * view.h;
      if (x < LEFT) return;
      strokes.push({ x, y, r: 70 + Math.random() * 50, life: 1.4, seed: Math.random() * 50 });
      if (strokes.length > 90) strokes.shift();
    },
    pause(v) {
      running = !v;
    },
    destroy() {
      cancelAnimationFrame(raf);
      ro.disconnect();
    },
  };
}
