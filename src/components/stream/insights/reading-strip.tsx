/**
 * What: The article's reading strip. One station per section on a dashed path; reading draws a solid ink
 *       line to where the reader is, passed stations close to a small dot, and at the end the path fans
 *       into a small stream with its amber centre.
 * Why: Reading is the work here. The article connects as you go, and only a finished read becomes a stream.
 * How: A thin sticky canvas. Scroll position maps piecewise onto the path through each section heading.
 *      The current section's name rides the line, warped. Tapping a station scrolls to its section; an
 *      sr-only nav list holds the same links for keyboards and screen readers. Scrolling never opens anything.
 * Deps: stream/canvas primitives.
 */
"use client";

import { useEffect, useRef } from "react";
import { CurveText, clamp, ease, fitCanvas, mix, readColors, reducedMotion, rgba } from "@/components/stream/canvas";

interface StripSection {
  id: string;
  label: string;
}

interface ReadingStripProps {
  sections: StripSection[];
  /** Id of the element that marks the end of the article body. */
  endId: string;
}

export function ReadingStrip({ sections, endId }: ReadingStripProps) {
  const cvRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = cvRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduce = reducedMotion();
    const N = sections.length;

    let W = 0, H = 0, dpr = 1, raf = 0, visible = true;
    let C = readColors(), text = new CurveText(1);
    let xs: number[] = [], xEnd = 0;
    // Shown values ease toward targets: reading position, the fan at the end, and the label
    const cur = { x: 0, tx: 0, fan: 0, tfan: 0, label: -1, labelOn: 0 };

    const phone = () => W < 600;
    const baseY = (x: number) => H * (phone() ? 0.37 : 0.38) + Math.sin((x / W) * 3.1 + 0.6) * 2.2;
    const R = () => (phone() ? 5.5 : 6.5);

    function setup() {
      ({ W, H, dpr } = fitCanvas(cv!, ctx!));
      C = readColors();
      text = new CurveText(dpr);
      const a = phone() ? 22 : 34, b = W * (phone() ? 0.74 : 0.8);
      xs = sections.map((_, i) => (N === 1 ? a : a + (i * (b - a)) / (N - 1)));
      xEnd = W * (phone() ? 0.83 : 0.86);
      measure();
      cur.x = cur.tx;
      cur.fan = cur.tfan;
    }

    // Where the reader is, as an x on the path
    function measure() {
      const line = Math.round(window.innerHeight * 0.32);
      const tops = sections.map((s) => document.getElementById(s.id)?.getBoundingClientRect().top ?? Infinity);
      const endEl = document.getElementById(endId);
      const endTop = endEl ? endEl.getBoundingClientRect().top : Infinity;
      const endAt = window.innerHeight * 0.9;
      // Distances still to scroll before each mark reaches its reading line
      const d = [...tops.map((t) => t - line), endTop - endAt];
      const px = [...xs, xEnd];
      let x = -10;
      if (d[0] > 0) {
        const lead = Math.max(1, d[0] + window.scrollY);
        x = -10 + (xs[0] + 10) * clamp(1 - d[0] / lead, 0, 1);
      } else {
        x = px[px.length - 1];
        for (let i = 0; i < d.length - 1; i++) {
          if (d[i + 1] > 0) {
            const span = Math.max(1, d[i + 1] - d[i]);
            x = px[i] + (px[i + 1] - px[i]) * clamp(-d[i] / span, 0, 1);
            break;
          }
        }
      }
      cur.tx = x;
      cur.tfan = d[d.length - 1] <= 0 ? 1 : 0;
    }

    let family = "";
    const fontFamily = () => {
      if (!family) family = getComputedStyle(cv!).fontFamily || "Archivo, Helvetica, Arial, sans-serif";
      return family;
    };

    function frame() {
      raf = 0;
      if (!visible) return;
      const c = ctx!, r = R(), k = reduce ? 1 : 0.16;
      cur.x += (cur.tx - cur.x) * k;
      cur.fan += (cur.tfan - cur.fan) * (reduce ? 1 : 0.06);
      // The label fades out, switches, fades in
      const wantLabel = (() => {
        let li = -1;
        for (let i = 0; i < N; i++) if (cur.tx >= xs[i] - 1) li = i;
        return li;
      })();
      if (wantLabel !== cur.label) {
        cur.labelOn += (0 - cur.labelOn) * (reduce ? 1 : 0.3);
        if (cur.labelOn < 0.05 || reduce) {
          cur.label = wantLabel;
          cur.labelOn = 0;
        }
      } else cur.labelOn += (1 - cur.labelOn) * (reduce ? 1 : 0.15);

      c.clearRect(0, 0, W, H);
      const X = cur.x;

      // Still to read: dashed
      c.lineWidth = 1.2;
      c.strokeStyle = rgba(C.ink, 0.45);
      c.setLineDash([5, 7]);
      c.beginPath();
      for (let x = Math.max(-10, X), first = true; x <= xEnd; x += 4, first = false) {
        if (first) c.moveTo(x, baseY(x));
        else c.lineTo(x, baseY(x));
      }
      c.stroke();
      c.setLineDash([]);
      // Read: one solid ink line up to the reader
      if (X > -10) {
        c.lineWidth = 1.6;
        c.strokeStyle = rgba(C.ink, 0.9);
        c.beginPath();
        c.moveTo(-10, baseY(-10));
        for (let x = -6; x <= X; x += 4) c.lineTo(x, baseY(x));
        c.lineTo(X, baseY(X));
        c.stroke();
      }

      // The end: the path fans into a small stream, amber at its centre
      if (cur.fan > 0.01) {
        const n = phone() ? 7 : 9, sp = phone() ? 3.2 : 3.4;
        const reach = xEnd + (W + 20 - xEnd) * ease(cur.fan);
        for (let i = 0; i < n; i++) {
          const sig = i === (n - 1) / 2;
          c.beginPath();
          for (let x = xEnd; x <= reach; x += 3) {
            const s = ease(clamp((x - xEnd) / ((W - xEnd) * 0.7), 0, 1));
            const y = baseY(x) + (i - (n - 1) / 2) * sp * s + Math.sin((x / W) * 9 + i * 0.4) * 0.8 * s;
            if (x === xEnd) c.moveTo(x, y);
            else c.lineTo(x, y);
          }
          c.strokeStyle = sig ? C.signal : rgba(C.ink, 0.5 * cur.fan);
          c.lineWidth = sig ? 1.6 : 0.9;
          c.stroke();
        }
      }

      // Stations: open rings ahead, small filled dots once read
      xs.forEach((x, i) => {
        const y = baseY(x), passed = clamp((X - x) / 14, 0, 1);
        const rr = r - (r - 2.6) * passed;
        c.beginPath();
        c.arc(x, y, rr, 0, Math.PI * 2);
        c.fillStyle = passed > 0.5 ? mix(C.ink, C.ground, 0.9) : C.ground;
        c.fill();
        if (passed < 0.5) {
          c.lineWidth = 1.3;
          c.strokeStyle = mix(C.ink, C.ground, i === wantLabel ? 1 : 0.7);
          c.stroke();
        }
      });

      // Only the current section's name rides the line
      if (cur.label >= 0 && cur.labelOn > 0.02) {
        const fs = phone() ? 10 : 11, font = `400 ${fs}px ${fontFamily()}`;
        const segs = [{ t: sections[cur.label].label.toLowerCase().replace(/[.:]+$/, ""), c: mix(C.ink, C.ground, 0.85 * cur.labelOn) }];
        let tw = text.width(segs, font, fs), f = fs, fnt = font;
        if (tw > W - 32) {
          f = fs - 1;
          fnt = `400 ${f}px ${fontFamily()}`;
          tw = text.width(segs, fnt, f);
        }
        const cx = clamp(xs[cur.label], tw / 2 + 12, W - tw / 2 - 12);
        text.draw(c, segs, fnt, f, (x) => baseY(x) + r + (phone() ? 12 : 13), cx);
      }

      const moving = Math.abs(cur.tx - cur.x) > 0.3 || Math.abs(cur.tfan - cur.fan) > 0.01 || (cur.labelOn < 0.99 && cur.label >= 0) || wantLabel !== cur.label;
      if (moving) raf = requestAnimationFrame(frame);
    }

    const start = () => {
      if (!raf && visible) raf = requestAnimationFrame(frame);
    };
    const onScroll = () => {
      measure();
      start();
    };
    // A tap goes to the nearest section
    const onClick = (e: MouseEvent) => {
      const x = e.clientX - cv.getBoundingClientRect().left;
      const i = xs.reduce((b, v, j) => (Math.abs(v - x) < Math.abs(xs[b] - x) ? j : b), 0);
      document.getElementById(sections[i].id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    };
    let rt = 0;
    const onResize = () => {
      window.clearTimeout(rt);
      rt = window.setTimeout(() => {
        setup();
        start();
      }, 150);
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    cv.addEventListener("click", onClick);
    io.observe(cv);
    document.fonts?.ready.then(() => {
      family = "";
      text = new CurveText(dpr);
      start();
    });
    setup();
    start();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cv.removeEventListener("click", onClick);
      window.clearTimeout(rt);
    };
  }, [sections, endId]);

  return (
    <div className="sticky top-[var(--hdr)] z-10 border-b border-rule/70 bg-ground">
      <div className="relative mx-auto h-14 max-w-[1160px] md:h-16">
        <canvas ref={cvRef} aria-hidden="true" className="absolute inset-0 block size-full cursor-pointer touch-pan-y font-stream" />
        <nav aria-label="Sections in this article">
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-2 focus-visible:z-[2] focus-visible:bg-ground focus-visible:px-2 focus-visible:py-1 focus-visible:text-[13px] focus-visible:text-ink focus-visible:outline-2 focus-visible:outline-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
