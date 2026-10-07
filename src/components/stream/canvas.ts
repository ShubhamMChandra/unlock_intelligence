/**
 * What: Drawing primitives shared by every Stream canvas (hero, insights, team, article, contact, 404).
 * Why: Every page must draw the identical object: the same lines, rings and words on the curve.
 * How: Small pure helpers over CanvasRenderingContext2D; words are warped onto curves slice by slice.
 * Deps: None (browser canvas only).
 */

export interface StreamColors {
  ink: string;
  signal: string;
  haze: string;
  ground: string;
}

export interface Segment {
  t: string;
  c: string;
}

export type CurveFn = (x: number) => number;

export const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
export const ease = (k: number) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

export function readColors(): StreamColors {
  const css = (n: string) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  return { ink: css("--stream-ink"), signal: css("--stream-signal"), haze: css("--stream-haze"), ground: css("--stream-ground") };
}

export const rgba = (hex: string, a: number) => {
  const n = parseInt(hex.replace("#", ""), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
};

/** Colour a over the ground at strength k, as a solid colour, so overlapping slices never stack alpha. */
export function mix(hex: string, ground: string, k: number) {
  const a = parseInt(hex.replace("#", ""), 16), b = parseInt(ground.replace("#", ""), 16);
  const q = Math.round(clamp(k, 0, 1) * 20) / 20;
  const ch = (s: number) => Math.round(((a >> s) & 255) * q + ((b >> s) & 255) * (1 - q));
  return `rgb(${ch(16)},${ch(8)},${ch(0)})`;
}

/** Size a canvas to its box at device resolution; returns CSS width, height and the ratio used. */
export function fitCanvas(cv: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const r = cv.getBoundingClientRect();
  cv.width = Math.round(r.width * dpr);
  cv.height = Math.round(r.height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { W: r.width, H: r.height, dpr };
}

/** Stroke y = fn(x) from x0 to x1. */
export function strokeCurve(ctx: CanvasRenderingContext2D, fn: CurveFn, x0: number, x1: number, step = 4) {
  ctx.beginPath();
  ctx.moveTo(x0, fn(x0));
  for (let x = x0 + step; x <= x1; x += step) ctx.lineTo(x, fn(x));
  ctx.lineTo(x1, fn(x1));
  ctx.stroke();
}

/** A station: an open ring on the line, the place where work waits. */
export function ring(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, stroke: string, fill: string, width = 1.6) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.lineWidth = width;
  ctx.strokeStyle = stroke;
  ctx.stroke();
}

interface FlatWord {
  c: HTMLCanvasElement;
  w: number;
  h: number;
  base: number;
}

/**
 * Sets words along curves. Each run is drawn once, flat, then laid onto the curve a sliver at a time,
 * so the whole word bends with the line rather than each letter turning on its own.
 */
export class CurveText {
  private cache = new Map<string, FlatWord>();
  constructor(private dpr: number) {}

  private flat(segs: Segment[], font: string, fs: number): FlatWord {
    const key = `${font}|${segs.map((s) => `${s.t}@${s.c}`).join("|")}`;
    const hit = this.cache.get(key);
    if (hit) return hit;
    if (this.cache.size > 160) this.cache.clear();
    const c = document.createElement("canvas"), g = c.getContext("2d")!;
    const prep = () => {
      g.font = font;
      g.textBaseline = "alphabetic";
      (g as CanvasRenderingContext2D & { letterSpacing?: string }).letterSpacing = "0.2px";
    };
    prep();
    const total = g.measureText(segs.map((s) => s.t).join("")).width;
    const w = Math.ceil(total) + 6, h = Math.ceil(fs * 1.8), base = Math.round(fs * 1.3);
    c.width = w * this.dpr;
    c.height = h * this.dpr;
    g.scale(this.dpr, this.dpr);
    prep();
    let x = 3;
    for (const s of segs) {
      g.fillStyle = s.c;
      g.fillText(s.t, x, base);
      x += g.measureText(s.t).width;
    }
    const fw = { c, w, h, base };
    this.cache.set(key, fw);
    return fw;
  }

  /** Width of a run in CSS pixels. */
  width(segs: Segment[], font: string, fs: number) {
    return this.flat(segs, font, fs).w - 6;
  }

  /** Draw segs centred at cx with their baseline on y = fn(x). */
  draw(ctx: CanvasRenderingContext2D, segs: Segment[], font: string, fs: number, fn: CurveFn, cx: number) {
    const im = this.flat(segs, font, fs), dpr = this.dpr;
    const x0 = cx - im.w * 0.8, x1 = cx + im.w * 0.8;
    const xs: number[] = [], ls: number[] = [];
    let L = 0, px = x0, py = fn(x0);
    for (let x = x0; x <= x1; x += 1) {
      const y = fn(x);
      L += Math.hypot(x - px, y - py);
      xs.push(x);
      ls.push(L);
      px = x;
      py = y;
    }
    const at = (s: number) => {
      let lo = 0, hi = ls.length - 1;
      if (s <= 0) return xs[0];
      if (s >= ls[hi]) return xs[hi];
      while (hi - lo > 1) {
        const m = (lo + hi) >> 1;
        if (ls[m] < s) lo = m;
        else hi = m;
      }
      return xs[lo] + ((s - ls[lo]) / (ls[hi] - ls[lo] || 1)) * (xs[hi] - xs[lo]);
    };
    const s0 = (ls[Math.round(cx - x0)] ?? L / 2) - im.w / 2;
    for (let i = 0; i < im.w; i += 1) {
      const x = at(s0 + i + 0.5), y = fn(x);
      const ang = Math.atan2(fn(x + 3) - fn(x - 3), 6), co = Math.cos(ang), si = Math.sin(ang);
      ctx.setTransform(dpr * co, dpr * si, -dpr * si, dpr * co, dpr * x, dpr * y);
      ctx.drawImage(im.c, i * dpr, 0, 2 * dpr, im.h * dpr, -0.5, -im.base, 2, im.h);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
}

/** The lines part around cx: each line shifts away from the gap, more the further it sits from it, so none cross. */
export function parting(y: number, gapY: number, x: number, cx: number, hw: number, on: number, gapHalf: number) {
  const g = Math.exp(-Math.pow(Math.abs(x - cx) / hw, 2.2)) * on;
  return y + Math.tanh((y - gapY) / 1.8) * gapHalf * g;
}

export const reducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
