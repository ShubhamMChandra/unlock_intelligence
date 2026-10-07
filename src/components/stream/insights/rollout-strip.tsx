/**
 * What: The Insights strip. Five stations in the order an AI rollout usually runs, one per article.
 *       The path waits, dashed, through the first four (where rollouts break) and becomes the stream
 *       at the fifth (the question that starts the work), then flows off the edge.
 * Why: The index says what the articles say together: four diagnose the breaks, the last is the way in.
 * How: Canvas 2D. The dashed path draws in left to right, then rests open on Budget. Opening a station
 *      peels a strand off the path there and the article's claim rides it. Desktop: the cursor walks
 *      the stations; phone: a tap snaps to the nearest one. The open station is lifted to the parent
 *      so the list below stays in step. Scrolling never opens anything.
 * Deps: stream/canvas primitives, insights/articles.
 */
"use client";

import { useEffect, useRef } from "react";
import { CurveText, clamp, ease, fitCanvas, mix, parting, readColors, reducedMotion, rgba } from "@/components/stream/canvas";
import { STAGES } from "@/components/stream/insights/articles";

const T_DRAW = 1700;
// Documents waiting at each break (the before); none at the last station, where the stream runs
const PILES = [2, 3, 2, 3, 0];

interface Lane {
  i: number;
  sig: boolean;
}

interface RolloutStripProps {
  active: number;
  onSelect: (index: number) => void;
}

export function RolloutStrip({ active, onSelect }: RolloutStripProps) {
  const cvRef = useRef<HTMLCanvasElement>(null);
  const liveRef = useRef<HTMLParagraphElement>(null);
  const activeRef = useRef(active);
  const selectRef = useRef(onSelect);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);
  useEffect(() => {
    selectRef.current = onSelect;
  }, [onSelect]);

  useEffect(() => {
    const cv = cvRef.current, live = liveRef.current;
    if (!cv || !live) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduce = reducedMotion();

    let W = 0, H = 0, dpr = 1, t0 = 0, raf = 0, visible = true;
    let C = readColors(), text = new CurveText(1);
    let xs: number[] = [], lanes: Lane[] = [];
    // The opening: which station, its strength, and the lens it makes
    const open = { idx: 0, shown: -1, on: 0, cx: -9999, hw: 120 };
    let announced = -1;

    const phone = () => W < 600;
    const R = () => (phone() ? 9 : 12);
    const now = () => (reduce ? 0 : performance.now() - t0);
    // Phone: the path rises left to right so the band reads as a fan in the room it has
    const baseY = (x: number, time: number) =>
      phone()
        ? H * (0.6 - 0.16 * (x / W)) + Math.sin((x / W) * 3.4 + time * 0.00025) * H * 0.03
        : H * 0.5 + Math.sin((x / W) * 3.6 + time * 0.00025) * H * 0.045 + Math.sin((x / W) * 1.4 + 0.9) * H * 0.035;
    const laneSpacing = () => (phone() ? 6.5 : 6.2);
    const fanStart = () => xs[4];
    const fanLen = () => (phone() ? 150 : (W - xs[4]) * 0.75);
    const spreadAt = (x: number) => ease(clamp((x - fanStart()) / fanLen(), 0, 1));

    function setup() {
      ({ W, H, dpr } = fitCanvas(cv!, ctx!));
      C = readColors();
      text = new CurveText(dpr);
      xs = (phone() ? [0.08, 0.23, 0.385, 0.545, 0.72] : [0.07, 0.215, 0.36, 0.505, 0.65]).map((k) => k * W);
      const n = phone() ? 19 : 29;
      lanes = Array.from({ length: n }, (_, i) => ({ i, sig: i === (n - 1) / 2 }));
      t0 = performance.now();
    }

    const drawX = (time: number) => (reduce ? W + 40 : -20 + (W + 60) * ease(clamp(time / T_DRAW, 0, 1)));
    const settled = (time: number) => reduce || time > T_DRAW * 0.9;

    // The band past the last station; at the last station it parts when that station is open
    function laneY(L: Lane, x: number, time: number) {
      const n = lanes.length, s = spreadAt(x);
      const y = baseY(x, time) + (L.i - (n - 1) / 2) * laneSpacing() * s + Math.sin((x / W) * 8.5 + L.i * 0.17 + time * 0.0006) * 1.8 * s;
      return partBand(y, x, time);
    }
    function partBand(y: number, x: number, time: number) {
      if (open.shown !== 4 || open.on < 0.001) return y;
      // The gap opens just above the amber line, so the claim rides over it and the name below stays clear
      return parting(y, baseY(x, time) - laneSpacing() * 0.5, x, open.cx, open.hw, open.on, phone() ? 8 : 9);
    }
    // The dashed path, with the last station's parting carried onto it
    const pathY = (x: number, time: number) => partBand(baseY(x, time), x, time);
    // A strand peels off the path above an open break, and the claim rides it
    const lift = (x: number) => {
      if (open.shown < 0 || open.shown === 4) return 0;
      return Math.exp(-Math.pow(Math.abs(x - open.cx) / open.hw, 2.2)) * open.on * (R() + (phone() ? 6 : 7));
    };

    // How much an opening covers x, so waiting documents step out of the claim's way
    const cover = (x: number) => (open.shown < 0 ? 0 : clamp(Math.exp(-Math.pow(Math.abs(x - open.cx) / (open.hw * 0.85), 2.2)) * open.on * 1.6, 0, 1));

    let family = "";
    const fontFamily = () => {
      if (!family) family = getComputedStyle(cv!).fontFamily || "Archivo, Helvetica, Arial, sans-serif";
      return family;
    };

    function frame(nowMs: number) {
      raf = 0;
      if (!visible) return;
      const c = ctx!, time = reduce ? 0 : nowMs - t0, dx = drawX(time), r = R();
      c.clearRect(0, 0, W, H);

      // Switch stations: close the current one, then open the next
      const want = settled(time) ? activeRef.current : -1;
      if (open.shown !== want) {
        open.on += (0 - open.on) * (reduce ? 1 : 0.22);
        if (open.on < 0.03 || reduce) {
          open.shown = want;
          open.on = 0;
        }
      } else if (want >= 0) open.on += (1 - open.on) * (reduce ? 1 : 0.07);

      // The claim's place on the line and the lens it needs
      let claimW = 0;
      const fs = phone() ? 10 : 11, claimFont = `400 ${fs}px ${fontFamily()}`;
      if (open.shown >= 0) {
        const segs = [{ t: STAGES[open.shown].claim, c: C.ink }];
        claimW = text.width(segs, claimFont, fs);
        const x = xs[open.shown] + (open.shown === 4 ? claimW / 2 - 4 : 0);
        open.cx = clamp(x, claimW / 2 + 14, W - claimW / 2 - 14);
        open.hw = claimW / 2 + (phone() ? 22 : 46);
      }

      // The path: dashed through the breaks, up to the last station
      const x5 = fanStart();
      c.lineWidth = 1.4;
      c.strokeStyle = rgba(C.ink, 0.62);
      c.setLineDash([7, 9]);
      c.beginPath();
      for (let x = -20, first = true; x <= Math.min(dx, x5); x += 4, first = false) {
        if (first) c.moveTo(x, pathY(x, time));
        else c.lineTo(x, pathY(x, time));
      }
      c.stroke();
      // The peeled strand above an open break
      if (open.shown >= 0 && open.shown < 4 && open.on > 0.01) {
        c.strokeStyle = rgba(C.ink, 0.62 * clamp(open.on * 1.4, 0, 1));
        c.beginPath();
        // Only where it has left the path, so its dashes never double up on the path's own
        let first = true;
        for (let x = open.cx - open.hw * 1.6; x <= open.cx + open.hw * 1.6; x += 3) {
          const l = lift(x);
          if (l < 1.2) {
            first = true;
            continue;
          }
          if (first) c.moveTo(x, baseY(x, time) - l);
          else c.lineTo(x, baseY(x, time) - l);
          first = false;
        }
        c.stroke();
      }
      c.setLineDash([]);

      // From the last station on: the stream, fanning out and running off the edge
      if (dx > x5) {
        const n = lanes.length, end = Math.min(dx, W + 20);
        for (const L of lanes) {
          c.beginPath();
          for (let x = x5; x <= end; x += 4) {
            const y = laneY(L, x, time);
            if (x === x5) c.moveTo(x, y);
            else c.lineTo(x, y);
          }
          const alpha = 0.28 + 0.36 * (1 - Math.abs(L.i - n / 2) / n);
          c.strokeStyle = L.sig ? C.signal : rgba(C.ink, alpha);
          c.lineWidth = L.sig ? 2.2 : 1;
          c.stroke();
        }
        // Work moving along the stream without stopping
        if (!reduce) {
          const flowN = phone() ? 4 : 8;
          for (let q = 0; q < flowN; q++) {
            const L = lanes[(q * 5 + 3) % n];
            if (L.sig) continue;
            const x = x5 + 10 + ((time * 0.06 + q * ((W - x5) / flowN) * 1.3) % (W - x5));
            if (x > end) continue;
            c.fillStyle = rgba(C.ink, 0.85 * spreadAt(x));
            c.beginPath();
            c.arc(x, laneY(L, x, time), 2, 0, Math.PI * 2);
            c.fill();
          }
        }
      }

      // Stations: rings at the breaks, with work piled up waiting; the last ring has given way to the stream
      const bottom = lanes[lanes.length - 1];
      STAGES.forEach((st, i) => {
        const x = xs[i], shown = clamp((dx - x + 6) / 30, 0, 1);
        if (shown <= 0) return;
        const y = pathY(x, time), isOpen = open.shown === i && open.on > 0.4;
        if (i < 4) {
          c.beginPath();
          c.arc(x, y, r, 0, Math.PI * 2);
          c.fillStyle = C.ground;
          c.fill();
          c.lineWidth = isOpen ? 1.9 : 1.5;
          c.strokeStyle = mix(C.ink, C.ground, shown * (isOpen ? 1 : 0.8));
          c.stroke();
          // Documents waiting at the handoff, out of the way of an opened strand
          for (let k = 0; k < PILES[i]; k++) {
            const px = x + r + 8 + (k % 2) * 2, py = y - r - 5 - k * 12;
            const a = shown * 0.8 * (1 - cover(px));
            if (a < 0.02) continue;
            c.fillStyle = rgba(C.ink, a);
            c.fillRect(px - 4, py - 5.5, 8, 10);
            c.fillStyle = C.ground;
            c.fillRect(px - 2.5, py - 3, 5, 1.2);
            c.fillRect(px - 2.5, py - 0.5, 5, 1.2);
            c.fillRect(px - 2.5, py + 2, 3, 1.2);
          }
        }
        // The name rides under the station, bending with the line
        const nfs = phone() ? 11.5 : 13;
        const fn = i < 4 ? (xx: number) => pathY(xx, time) + r + (phone() ? 15 : 18) : (xx: number) => Math.max(laneY(bottom, xx, time), pathY(xx, time)) + (phone() ? 14 : 16);
        const k = shown * (open.shown === i ? 0.75 + 0.25 * open.on : 0.72);
        text.draw(c, [{ t: st.stage, c: mix(C.ink, C.ground, k) }], `${isOpen ? 600 : 500} ${nfs}px ${fontFamily()}`, nfs, fn, x);
      });

      // The claim: lowercase, one line, riding the opened line in ink
      if (open.shown >= 0 && open.on > 0.05) {
        const a = clamp((open.on - 0.35) / 0.55, 0, 1);
        const segs = [{ t: STAGES[open.shown].claim, c: mix(C.ink, C.ground, a * 0.95) }];
        const fn =
          open.shown === 4
            ? (x: number) => laneY(lanes[(lanes.length - 1) / 2], x, time) - 4
            : (x: number) => baseY(x, time) - lift(x) - 4;
        if (a > 0.02) text.draw(c, segs, claimFont, fs, fn, open.cx);
        if (a > 0.5 && announced !== open.shown) {
          announced = open.shown;
          live!.textContent = `${STAGES[open.shown].stage}: ${STAGES[open.shown].claim}.`;
        }
      }

      raf = requestAnimationFrame(frame);
    }

    const start = () => {
      if (!raf && visible) raf = requestAnimationFrame(frame);
    };
    const local = (clientX: number) => clientX - cv.getBoundingClientRect().left;
    const nearest = (x: number) => xs.reduce((b, v, i) => (Math.abs(v - x) < Math.abs(xs[b] - x) ? i : b), 0);
    const choose = (i: number) => {
      if (i !== activeRef.current) selectRef.current(i);
    };
    // Desktop: the cursor walks the stations
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || !settled(now())) return;
      const x = local(e.clientX), i = nearest(x);
      if (Math.abs(xs[i] - x) < (phone() ? 40 : 90)) choose(i);
    };
    // Phone (and click): a tap snaps to the nearest station
    const onClick = (e: MouseEvent) => choose(nearest(local(e.clientX)));
    let rt = 0;
    const onResize = () => {
      window.clearTimeout(rt);
      rt = window.setTimeout(() => {
        const keep = performance.now() - t0;
        setup();
        t0 = performance.now() - keep;
      }, 150);
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });

    cv.addEventListener("pointermove", onMove);
    cv.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);
    io.observe(cv);
    document.fonts?.ready.then(() => {
      family = "";
      text = new CurveText(dpr);
    });
    setup();
    start();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      cv.removeEventListener("pointermove", onMove);
      cv.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(rt);
    };
  }, []);

  return (
    <div className="relative mx-auto h-[280px] max-w-[1160px] md:h-[330px]">
      <canvas ref={cvRef} aria-hidden="true" className="absolute inset-0 block size-full cursor-pointer touch-pan-y font-stream" />
      <p className="sr-only">
        How an AI rollout usually goes, one article per step. Budget: bought as a line item, measured by no one. Training: taught to prompt, never to build. First try: used
        like a search engine. Week three: the novelty fades and nobody checks. These four are where rollouts break, and the path waits at each of them. The question:
        start with the work people hate. There the path becomes a stream.
      </p>
      <p ref={liveRef} aria-live="polite" className="sr-only" />
    </div>
  );
}
