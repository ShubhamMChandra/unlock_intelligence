/**
 * What: The 404 object: one ink line wanders in from the left, loops and knots on itself, and never gets anywhere.
 * Why: Same world as the homepage, but nothing is running here: no rings, no amber, just a line that lost its way.
 * How: Canvas 2D; a trochoid that grows into a rosette, drifting slowly in phase. Static with reduced motion.
 *      IntersectionObserver pauses the loop offscreen.
 * Deps: stream/canvas primitives.
 */
"use client";

import { useEffect, useRef } from "react";
import { clamp, fitCanvas, readColors, reducedMotion, rgba } from "@/components/stream/canvas";

const STEPS = 1100, TURNS = 12 * Math.PI;
const smooth = (a: number, b: number, v: number) => {
  const k = clamp((v - a) / (b - a), 0, 1);
  return k * k * (3 - 2 * k);
};

export function LostLine() {
  const cvRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = cvRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduce = reducedMotion();
    let W = 0, H = 0, raf = 0, visible = true, C = readColors();
    const t0 = performance.now();

    const point = (s: number, phase: number): [number, number] => {
      const cx = W * 0.5, cy = H * 0.5, th = s * TURNS;
      const A = Math.min(W * 0.17, 118), B = A * 0.46;
      const arrive = 1 - Math.pow(1 - Math.min(1, s / 0.52), 2);
      const centre = -40 + (cx + 40) * arrive;
      const g = smooth(0.26, 0.56, s);
      const wander = Math.sin(s * 9 + phase * 0.6) * H * 0.06 + Math.sin(s * 23 + 1.3) * H * 0.012;
      const x = centre + g * (A * Math.sin(th) + B * Math.sin(2.6 * th + phase));
      const y = cy + (1 - g) * wander + g * (A * 0.62 * Math.cos(th) + B * 0.8 * Math.cos(2.6 * th + phase) - A * 0.1);
      return [x, y];
    };

    function frame(now: number) {
      raf = 0;
      const c = ctx!, phase = reduce ? 0.8 : 0.8 + (now - t0) * 0.00012;
      c.clearRect(0, 0, W, H);
      c.lineWidth = 1.6;
      c.lineCap = "round";
      c.lineJoin = "round";
      // Drawn in short runs so the far end can thin out and fade: it trails off without arriving
      const run = 10;
      for (let i = 0; i < STEPS; i += run) {
        const s0 = i / STEPS, fade = 1 - smooth(0.82, 1, s0);
        c.strokeStyle = rgba(C.ink, 0.88 * fade + 0.04);
        c.beginPath();
        const [x0, y0] = point(s0, phase);
        c.moveTo(x0, y0);
        for (let j = 1; j <= run && i + j <= STEPS; j++) {
          const [x, y] = point((i + j) / STEPS, phase);
          c.lineTo(x, y);
        }
        c.stroke();
      }
      if (visible && !reduce) raf = requestAnimationFrame(frame);
    }

    const draw = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const setup = () => {
      ({ W, H } = fitCanvas(cv, ctx));
      C = readColors();
    };
    let rt = 0;
    const onResize = () => {
      window.clearTimeout(rt);
      rt = window.setTimeout(() => {
        setup();
        draw();
      }, 150);
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) draw();
    });
    window.addEventListener("resize", onResize);
    io.observe(cv);
    setup();
    draw();
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.clearTimeout(rt);
    };
  }, []);

  return (
    <div className="relative h-[260px] md:h-[360px]">
      <canvas ref={cvRef} aria-hidden="true" className="absolute inset-0 block size-full touch-pan-y" />
      <p className="sr-only">A single line wanders in from the left, loops back on itself in a knot, and never reaches anywhere.</p>
    </div>
  );
}
