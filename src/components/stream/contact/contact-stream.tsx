/**
 * What: The contact page's stream strip: a dashed path through four stations (Name, Email, Your process, Us).
 *       Each station closes to a dot as its field is completed; on send an amber line runs through and the
 *       path fans into a band carrying "we'll reply within one business day".
 * Why: The visitor's enquiry is the process entering the stream. The strip reflects the form; the form is the DOM.
 * How: Canvas 2D; eased per-station progress fed through a ref (no effect restarts per keystroke), a short
 *      timeline after sending, IntersectionObserver pauses the loop offscreen. Reduced motion draws settled states.
 * Deps: stream/canvas primitives.
 */
"use client";

import { useEffect, useRef } from "react";
import { CurveText, clamp, ease, fitCanvas, mix, parting, readColors, reducedMotion, rgba } from "@/components/stream/canvas";

const NAMES = ["Name", "Email", "Your process", "Us"];
const PHRASE = "we’ll reply within one business day";
const T_THREAD = 1700, T_SPREAD = 1400;

interface ContactStreamProps {
  /** Completion of Name, Email and Your process, in order. */
  done: [boolean, boolean, boolean];
  sent: boolean;
}

interface Target {
  done: [boolean, boolean, boolean];
  sent: boolean;
}

export function ContactStream({ done, sent }: ContactStreamProps) {
  const cvRef = useRef<HTMLCanvasElement>(null);
  const target = useRef<Target>({ done, sent });
  const kick = useRef<() => void>(() => {});

  useEffect(() => {
    target.current = { done, sent };
    kick.current();
  }, [done, sent]);

  useEffect(() => {
    const cv = cvRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduce = reducedMotion();

    let W = 0, H = 0, dpr = 1, raf = 0, visible = true, sentAt = -1;
    let C = readColors(), text = new CurveText(1);
    const p = [0, 0, 0];
    const t0 = performance.now();

    const phone = () => W < 520;
    const baseY = (x: number, time: number) =>
      H * 0.37 + Math.sin((x / W) * 3.4 + 0.6) * H * 0.05 + Math.sin((x / W) * 1.3 + time * 0.0002) * H * 0.03;
    const lane = () => (phone() ? 4 : 4.4);
    const stationX = () => [0.1, 0.37, 0.63, 0.9].map((k) => W * k);

    function setup() {
      ({ W, H, dpr } = fitCanvas(cv!, ctx!));
      C = readColors();
      text = new CurveText(dpr);
    }

    let family = "";
    const fontFamily = () => {
      if (!family) family = getComputedStyle(cv!).fontFamily || "Archivo, Helvetica, Arial, sans-serif";
      return family;
    };

    function timeline(now: number) {
      if (sentAt < 0) return { threadX: -40, spread: 0 };
      if (reduce) return { threadX: W + 40, spread: 1 };
      const t = now - sentAt, k = clamp(t / T_THREAD, 0, 1);
      return { threadX: -20 + (W + 60) * ease(k), spread: ease(clamp((t - T_THREAD * 0.85) / T_SPREAD, 0, 1)) };
    }

    function frame(now: number) {
      raf = 0;
      const c = ctx!, tg = target.current;
      const time = reduce ? 0 : now - t0;
      if (tg.sent && sentAt < 0) sentAt = now;
      for (let i = 0; i < 3; i++) {
        const want = tg.done[i] ? 1 : 0;
        p[i] = reduce ? want : p[i] + (want - p[i]) * 0.09;
        if (Math.abs(want - p[i]) < 0.002) p[i] = want;
      }
      const { threadX, spread } = timeline(now);
      const xs = stationX(), R = phone() ? 11 : 13;
      const n = phone() ? 11 : 13;
      c.clearRect(0, 0, W, H);

      // The opening the reply rides in, centred between Email and Your process
      const fs = phone() ? 10 : 11.5, font = `400 ${fs}px ${fontFamily()}`;
      const phraseSegs = (a: number) => [{ t: PHRASE, c: mix(C.ink, C.ground, a) }];
      const tw = text.width(phraseSegs(1), font, fs);
      const words = clamp((spread - 0.7) / 0.3, 0, 1);
      const gapX = W * 0.5, gapHw = tw / 2 + (phone() ? 30 : 60);

      const bandY = (i: number, x: number) => {
        const y = baseY(x, time) + (i - (n - 1) / 2) * lane() * spread + Math.sin((x / W) * 8.5 + i * 0.17 + time * 0.0006) * 1.5 * spread;
        return words > 0 ? parting(y, baseY(x, time) + lane() * 0.5, x, gapX, gapHw, words, phone() ? 8 : 9) : y;
      };

      if (spread === 0) {
        // Each stretch of path turns solid up to a station once that station is complete
        const bounds = [-20, ...xs, W + 20];
        for (let s = 0; s < bounds.length - 1; s++) {
          const a = bounds[s], b = bounds[s + 1];
          const f = s < 3 ? p[s] : 0;
          const solidTo = Math.max(a + (b - a) * ease(f), Math.min(b, threadX));
          if (solidTo > a) {
            c.setLineDash([]);
            c.lineWidth = 1.5;
            c.strokeStyle = rgba(C.ink, 0.9);
            c.beginPath();
            c.moveTo(a, baseY(a, time));
            for (let x = a + 4; x < solidTo; x += 4) c.lineTo(x, baseY(x, time));
            c.lineTo(solidTo, baseY(solidTo, time));
            c.stroke();
          }
          if (solidTo < b) {
            c.setLineDash([6, 8]);
            c.lineWidth = 1.3;
            c.strokeStyle = rgba(C.ink, 0.5);
            c.beginPath();
            c.moveTo(solidTo, baseY(solidTo, time));
            for (let x = solidTo + 4; x < b; x += 4) c.lineTo(x, baseY(x, time));
            c.lineTo(b, baseY(b, time));
            c.stroke();
          }
        }
        c.setLineDash([]);
        if (threadX > -20) {
          c.strokeStyle = C.signal;
          c.lineWidth = 2.4;
          c.lineCap = "round";
          c.beginPath();
          c.moveTo(-20, baseY(-20, time));
          for (let x = -16; x <= threadX; x += 4) c.lineTo(x, baseY(x, time));
          c.stroke();
          c.fillStyle = C.signal;
          c.beginPath();
          c.arc(threadX, baseY(threadX, time), 3.2, 0, Math.PI * 2);
          c.fill();
          c.lineCap = "butt";
        }
      } else {
        const pts = phone() ? 70 : 120;
        for (let i = 0; i < n; i++) {
          const sig = i === (n - 1) / 2;
          c.beginPath();
          for (let j = 0; j <= pts; j++) {
            const x = (j / pts) * (W + 40) - 20, y = bandY(i, x);
            if (j) c.lineTo(x, y);
            else c.moveTo(x, y);
          }
          c.strokeStyle = sig ? C.signal : rgba(C.ink, (0.3 + 0.38 * (1 - Math.abs(i - n / 2) / n)) * spread);
          c.lineWidth = sig ? 2.2 : 1.05;
          c.stroke();
        }
      }

      // Stations: open rings that close to a dot when complete; they dissolve as the amber line passes
      for (let i = 0; i < 4; i++) {
        const x = xs[i], y = baseY(x, time);
        const passed = clamp((threadX - x + 10) / 50, 0, 1);
        const k = i < 3 ? ease(p[i]) : passed;
        const r = R * (1 - k) + 3.2 * k;
        if (passed < 1) {
          c.globalAlpha = 1 - passed;
          c.beginPath();
          c.arc(x, y, r, 0, Math.PI * 2);
          c.fillStyle = mix(C.ink, C.ground, k);
          c.fill();
          c.lineWidth = 1.6;
          c.strokeStyle = C.ink;
          c.stroke();
          c.globalAlpha = 1;
        }
        const before = (xx: number) => baseY(xx, time) + R + (phone() ? 16 : 18);
        const after = (xx: number) => bandY(n - 1, xx) + (phone() ? 14 : 16);
        const fn = (xx: number) => before(xx) + (after(xx) - before(xx)) * spread;
        const nfs = phone() ? 12 : 13;
        const strong = i < 3 ? 0.6 + 0.4 * p[i] : 0.6 + 0.4 * passed;
        text.draw(c, [{ t: NAMES[i], c: mix(C.ink, C.ground, strong) }], `500 ${nfs}px ${fontFamily()}`, nfs, fn, x);
      }

      if (words > 0.02) {
        const centre = (n - 1) / 2;
        text.draw(c, phraseSegs(words), font, fs, (x) => bandY(centre, x) + (phone() ? 11 : 12), gapX);
      }

      // The path drifts gently while on screen; reduced motion draws once per change
      if (visible && !reduce) raf = requestAnimationFrame(frame);
    }

    const draw = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    kick.current = draw;

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
    document.fonts?.ready.then(() => {
      family = "";
      text = new CurveText(dpr);
      draw();
    });
    setup();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      kick.current = () => {};
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.clearTimeout(rt);
    };
  }, []);

  const [a, b, c] = done;
  return (
    <div className="relative h-[132px] md:h-[148px]">
      <canvas ref={cvRef} aria-hidden="true" className="absolute inset-0 block size-full touch-pan-y font-stream" />
      <p className="sr-only">
        {sent
          ? "Sent. Your note is in the stream and we’ll reply within one business day."
          : `Progress: name ${a ? "done" : "to fill in"}, email ${b ? "done" : "to fill in"}, your process ${c ? "described" : "not yet described"}.`}
      </p>
    </div>
  );
}
