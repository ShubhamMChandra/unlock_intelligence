/**
 * What: The team strip. One ink line, the University of Chicago, parts into two strands (Shubham's
 *       and J.T.'s), each passing one station, and both converge into the band: your team, in the room.
 * Why: Two people, one shared start, different paths, one room. The page opens on the same object
 *      as the homepage, with the people as the stations.
 * How: Canvas 2D. The line and strands draw in left to right, then the band fans out. One strand is
 *      open at a time: its lines part and a short phrase rides it. Cursor on desktop, a tap on phones,
 *      and two real links that scroll to each bio. Reduced motion draws the settled state.
 * Deps: stream/canvas primitives, team-copy, next/link.
 */
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { CurveText, clamp, ease, fitCanvas, mix, parting, readColors, reducedMotion, rgba } from "@/components/stream/canvas";
import { textLink } from "@/components/stream/styles";
import { TEAM } from "@/components/stream/team/team-copy";

const T_DRAW = 2600, T_FAN = 1400;

interface Strand {
  name: string;
  station: string;
  phrase: string;
  /** Shorter phrase for phones, where the strand is too short for the full one */
  short: string;
  live: string;
}

const STRANDS: [Strand, Strand] = [
  {
    name: "Shubham Chandra",
    station: "Digital Realty",
    phrase: "teaches at uchicago, builds at digital realty",
    short: "teaches and builds",
    live: "Shubham Chandra. Teaches at UChicago, builds at Digital Realty.",
  },
  {
    name: "J.T. O’Connor",
    station: "operations and business development",
    phrase: "your contact from first conversation to delivery",
    short: "your point of contact",
    live: "J.T. O’Connor. Your contact from first conversation to delivery.",
  },
];

type StationAt = "inside" | "after" | "below";

/** Where things sit, as fractions of the width. Phone and desktop differ only in proportion. */
interface Layout {
  s0: number; // the line starts to part
  s1: number; // fully apart
  c0: number; // the strands start to converge
  c1: number; // one line again: the band begins
  fan: number; // how far the band takes to fan out
  amp: number; // half the distance between the strands, as a fraction of height
  uni: number; // centre of "University of Chicago"
  phrase: [number, number]; // centre of each strand's phrase
  name: [number, number]; // centre of each name
  station: [number, number]; // each station dot
  stationAt: [StationAt, StationAt]; // label rides inside the lens, after the name, or under it
  room: number; // centre of "your team, in the room"
}

const PHONE: Layout = {
  s0: 0.3, s1: 0.47, c0: 0.5, c1: 0.74, fan: 0.1, amp: 0.1,
  uni: 0.165, phrase: [0.47, 0.6], name: [0.5, 0.52], station: [0.5, 0], stationAt: ["inside", "below"], room: 0.87,
};
const DESK: Layout = {
  s0: 0.15, s1: 0.36, c0: 0.54, c1: 0.75, fan: 0.1, amp: 0.2,
  uni: 0.075, phrase: [0.45, 0.45], name: [0.33, 0.33], station: [0, 0], stationAt: ["after", "after"], room: 0.87,
};

export function TeamStrip() {
  const cvRef = useRef<HTMLCanvasElement>(null);
  const liveRef = useRef<HTMLParagraphElement>(null);
  const pickRef = useRef<(i: 0 | 1 | null) => void>(() => {});

  useEffect(() => {
    const cv = cvRef.current, live = liveRef.current;
    if (!cv || !live) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduce = reducedMotion();

    let W = 0, H = 0, dpr = 1, t0 = 0, raf = 0, visible = true;
    let C = readColors(), text = new CurveText(1), Lo = DESK;
    // Which strand is open: the resting choice (Shubham) unless the visitor picks one
    let picked: 0 | 1 | null = null, announced = -1;
    const on: [number, number] = [0, 0];
    const win: [{ cx: number; hw: number }, { cx: number; hw: number }] = [{ cx: 0, hw: 120 }, { cx: 0, hw: 120 }];

    const phone = () => W < 600;
    const fs = () => ({
      name: phone() ? 12 : 13.5,
      word: phone() ? 10 : 11,
      station: phone() ? 10.5 : 11,
      gap: phone() ? 9 : 9,
    });
    const nBundle = () => (phone() ? 4 : 6);
    const nBand = () => (phone() ? 17 : 27);
    const bundleSp = () => (phone() ? 3.2 : 3.4);
    const laneSp = () => Math.min(phone() ? 4.4 : 6, H * 0.017);

    let family = "";
    const fontFamily = () => {
      if (!family) family = getComputedStyle(cv).fontFamily || "Archivo, Helvetica, Arial, sans-serif";
      return family;
    };

    function setup() {
      ({ W, H, dpr } = fitCanvas(cv!, ctx!));
      C = readColors();
      text = new CurveText(dpr);
      Lo = phone() ? PHONE : DESK;
      t0 = performance.now();
      if (reduce) on[0] = 1;
    }

    function timeline(time: number) {
      if (reduce) return { drawX: W + 40, fanP: 1, ready: true };
      const k = clamp(time / T_DRAW, 0, 1);
      const fanP = ease(clamp((time - T_DRAW * 0.82) / T_FAN, 0, 1));
      return { drawX: -20 + (W + 60) * ease(k), fanP, ready: fanP > 0.9 };
    }

    // The geometry, all as y = f(x)
    const u = (x: number) => x / W;
    const mid = (x: number, t: number) => H * (phone() ? 0.47 : 0.5) + Math.sin(u(x) * 3.1 + t * 0.00022) * H * 0.022 + Math.sin(u(x) * 1.3 + 0.7) * H * 0.018;
    const apart = (x: number) =>
      ease(clamp((u(x) - Lo.s0) / (Lo.s1 - Lo.s0), 0, 1)) - ease(clamp((u(x) - Lo.c0) / (Lo.c1 - Lo.c0), 0, 1));
    const centre = (s: 0 | 1, x: number, t: number) => mid(x, t) + (s === 0 ? -1 : 1) * Lo.amp * H * apart(x);
    const fanAt = (x: number, fanP: number) => ease(clamp((u(x) - Lo.c1) / Lo.fan, 0, 1)) * fanP;

    /** The gap each strand opens around: its own centre; where the lines are one, just off it (past the meeting, half a lane off the amber), so nothing runs through the words. */
    function gapY(s: 0 | 1, x: number, t: number) {
      const dir = s === 0 ? -1 : 1;
      if (u(x) <= Lo.c1) return centre(s, x, t) + dir * 2 * (1 - apart(x));
      const f = fanAt(x, 1);
      return mid(x, t) + dir * (0.5 * laneSp() * f + 2 * (1 - f));
    }

    // An opening parts every line around it, as on the homepage
    const openStrand = (s: 0 | 1, y: number, x: number, t: number) =>
      on[s] > 0.001 ? parting(y, gapY(s, x, t), x, win[s].cx, win[s].hw, on[s], fs().gap) : y;
    const openBoth = (y: number, x: number, t: number) => openStrand(1, openStrand(0, y, x, t), x, t);

    const bundleY = (s: 0 | 1, j: number, x: number, t: number) => {
      const b = apart(x), n = nBundle();
      const y = centre(s, x, t) + (j - (n - 1) / 2) * bundleSp() * b + Math.sin(u(x) * 9 + j * 0.9 + s * 2 + t * 0.0006) * 0.7 * b;
      return openBoth(y, x, t);
    };
    const laneY = (k: number, x: number, t: number, fanP: number) => {
      const f = fanAt(x, fanP), n = nBand();
      const y = mid(x, t) + (k - (n - 1) / 2) * laneSp() * f + Math.sin(u(x) * 8.5 + k * 0.17 + t * 0.0006) * 1.6 * f;
      return openBoth(y, x, t);
    };
    const entryY = (x: number, t: number) => openBoth(mid(x, t), x, t);

    /** The outer edge of the stream at x, on one side: names ride it. */
    function edge(side: 0 | 1, x: number, t: number) {
      // Built from the smooth shapes rather than the drawn lines, so words never catch on a kink where the lines part
      const dir = side === 0 ? -1 : 1, other = side === 0 ? 1 : 0;
      const g = Math.exp(-Math.pow(Math.abs(x - win[side].cx) / win[side].hw, 2.2)) * on[side];
      const own = centre(side, x, t) + dir * (((nBundle() - 1) / 2) * bundleSp() * apart(x) + fs().gap * g + 0.7);
      return (side === 0 ? Math.min : Math.max)(openStrand(other, own, x, t), bandEdge(side, x, t, 1));
    }
    /** The band's settled outer edge, eased in over the meeting: words ride it level rather than climbing the fan. */
    function bandEdge(side: 0 | 1, x: number, t: number, fanP: number) {
      const k = ease(clamp((u(x) - Lo.c0) / (Lo.c1 + Lo.fan - Lo.c0), 0, 1));
      return openBoth(mid(x, t) + (side === 0 ? -1 : 1) * (((nBand() - 1) / 2) * laneSp() * fanP + 2) * k, x, t);
    }
    const outside = edge;
    /** The edge of a strand that faces the other strand. */
    function inner(s: 0 | 1, x: number, t: number) {
      const n = nBundle();
      return s === 0 ? bundleY(0, n - 1, x, t) : bundleY(1, 0, x, t);
    }

    /** Offset a curve by d along its normal (roughly), so words keep their distance on the slopes too. */
    const away = (fn: (x: number) => number, d: number) => (x: number) => {
      const sl = (fn(x + 2) - fn(x - 2)) / 4;
      return fn(x) + d * Math.sqrt(1 + sl * sl);
    };

    function stroke(fn: (x: number) => number, x0: number, x1: number, color: string, width: number) {
      if (x1 <= x0) return;
      const c = ctx!;
      c.beginPath();
      c.moveTo(x0, fn(x0));
      for (let x = x0 + 3; x < x1; x += 3) c.lineTo(x, fn(x));
      c.lineTo(x1, fn(x1));
      c.strokeStyle = color;
      c.lineWidth = width;
      c.stroke();
    }

    function frame(now: number) {
      raf = 0;
      if (!visible) return;
      const c = ctx!, time = now - t0, t = reduce ? 0 : time;
      const { drawX, fanP, ready } = timeline(time);
      const F = fs(), fam = fontFamily();

      // Open state: one strand at a time; Shubham's at rest
      const want: 0 | 1 = picked ?? 0;
      for (const s of [0, 1] as const) {
        const target = ready && want === s ? 1 : 0;
        on[s] = reduce ? target : on[s] + (target - on[s]) * 0.06;
      }

      c.clearRect(0, 0, W, H);
      c.lineCap = "round";
      const xs0 = Lo.s0 * W, xc1 = Lo.c1 * W, end = Math.min(drawX, W + 20);

      // The shared start: one line
      stroke((x) => entryY(x, t), -20, Math.min(end, xs0), rgba(C.ink, 0.8), 1.4);

      // Two strands, each a few fine lines that come apart from the one line
      const n = nBundle();
      for (const s of [0, 1] as const) {
        for (let j = 0; j < n; j++) {
          const outer = s === 0 ? j === 0 : j === n - 1;
          stroke((x) => bundleY(s, j, x, t), xs0, Math.min(end, xc1), rgba(C.ink, outer ? 0.7 : 0.42), 1);
        }
      }

      // The room: the band fans out, amber at its centre
      if (end > xc1) {
        const nb = nBand();
        for (let k = 0; k < nb; k++) {
          if (k === (nb - 1) / 2) continue;
          const a = (0.26 + 0.36 * (1 - Math.abs(k - (nb - 1) / 2) / nb)) * (0.35 + 0.65 * fanP);
          stroke((x) => laneY(k, x, t, fanP), xc1, end, rgba(C.ink, a), 1.05);
        }
        stroke((x) => laneY((nb - 1) / 2, x, t, fanP), xc1, end, C.signal, 2.2);
        // Work moving through the room without stopping
        if (fanP > 0.5) {
          for (let q = 0; q < (phone() ? 3 : 6); q++) {
            const k = (q * 7 + 3) % nb;
            if (k === (nb - 1) / 2) continue;
            const x0 = xc1, span = W - x0 + 20, x = x0 + ((time * 0.06 + q * span * 0.37) % span);
            if (x > end) continue;
            c.fillStyle = rgba(C.ink, 0.85 * fanP * clamp((x - x0) / 40, 0, 1));
            c.beginPath();
            c.arc(x, laneY(k, x, t, fanP), 2, 0, Math.PI * 2);
            c.fill();
          }
        }
      }

      const appear = (x: number, w: number) => clamp((drawX - (x - w / 2)) / Math.max(40, w * 0.6), 0, 1);
      const draw = (s: string, color: string, alpha: number, weight: number, size: number, fn: (x: number) => number, cx: number) => {
        if (alpha < 0.02) return;
        text.draw(c, [{ t: s, c: mix(color, C.ground, alpha) }], `${weight} ${size}px ${fam}`, size, fn, cx);
      };

      // University of Chicago rides the one line, under it
      {
        const w = text.width([{ t: "University of Chicago", c: C.ink }], `500 ${F.name}px ${fam}`, F.name);
        const cx = Math.max(Lo.uni * W, w / 2 + 10);
        draw("University of Chicago", C.ink, 0.82 * appear(cx, w), 500, F.name, (x) => entryY(x, t) + (phone() ? 17 : 19), cx);
      }

      for (const s of [0, 1] as const) {
        const st = STRANDS[s], dir = s === 0 ? -1 : 1, open = on[s];

        // The name rides the strand's outer edge
        const nFont = `${open > 0.5 ? 600 : 500} ${F.name}px ${fam}`;
        const nw = text.width([{ t: st.name, c: C.ink }], nFont, F.name);
        const ncx = Lo.name[s] * W;
        const nfn = away((x: number) => outside(s, x, t), s === 0 ? -8 : F.name + 5);
        draw(st.name, C.ink, (0.88 + 0.12 * open) * appear(ncx, nw), open > 0.5 ? 600 : 500, F.name, nfn, ncx);

        // The station: a small dot on the strand, and what it is
        const sFont = `400 ${F.station}px ${fam}`;
        const sw = text.width([{ t: st.station, c: C.ink }], sFont, F.station);
        const showLabel = phone() ? open : 1;
        let dx: number, dy: number, lcx: number, lfn: (x: number) => number;
        if (Lo.stationAt[s] === "inside") {
          dx = Lo.station[s] * W;
          dy = inner(s, dx, t);
          lcx = dx;
          lfn = away((x) => inner(s, x, t), s === 0 ? F.station + 6 : -7);
        } else if (Lo.stationAt[s] === "below") {
          dx = ncx - nw / 2 - (phone() ? 9 : 12);
          dy = edge(s, dx, t);
          lcx = clamp(ncx - 16, sw / 2 + 8, W - sw / 2 - 8);
          // A long label under a short name: follow the name's curve only gently, so it stays level and legible
          const y0 = nfn(ncx);
          lfn = (x) => y0 + (nfn(x) - y0) * 0.2 + F.station + 5;
        } else {
          dx = ncx + nw / 2 + (phone() ? 11 : 14);
          dy = edge(s, dx, t);
          lcx = Math.min(dx + 8 + sw / 2, W - sw / 2 - 8);
          lfn = nfn;
        }
        const da = appear(dx, 8);
        if (da > 0.02) {
          c.fillStyle = mix(C.ink, C.ground, da);
          c.beginPath();
          c.arc(dx, dy, phone() ? 2.6 : 2.8, 0, Math.PI * 2);
          c.fill();
        }
        draw(st.station, C.ink, 0.62 * showLabel * appear(lcx, sw), 400, F.station, lfn, lcx);

        // The opening: the strand's lines part and the phrase rides between them
        const pFont = `400 ${F.word}px ${fam}`;
        const phrase = phone() ? st.short : st.phrase;
        const pw = text.width([{ t: phrase, c: C.ink }], pFont, F.word);
        // Shubham's phrase may run back over the shared line (the university's name sits under it) but stops before the meeting;
        // J.T.'s starts clear of the university's name and may run on into the lower half of the band
        const pcx = s === 0
          ? clamp(Lo.phrase[0] * W, pw / 2 + 10, Lo.c1 * W - pw / 2 - 4)
          : clamp(Lo.phrase[1] * W, Lo.s0 * W + pw / 2 + 10, W - pw / 2 - 10);
        win[s].cx = pcx;
        win[s].hw = pw / 2 + 70;
        const pa = clamp((open - 0.5) / 0.45, 0, 1);
        draw(phrase, C.ink, pa, 400, F.word, (x) => openStrand(s === 0 ? 1 : 0, gapY(s, x, t), x, t) + F.word * 0.36 - dir * 0.2, pcx);

        if (open > 0.45 && announced !== s) {
          announced = s;
          live!.textContent = st.live;
        }
      }

      // Your team, in the room: it rides the band's upper edge
      {
        const rFont = `400 ${F.word}px ${fam}`;
        const rw = text.width([{ t: "your team, in the room", c: C.ink }], rFont, F.word);
        const rcx = Math.min(Lo.room * W, W - rw / 2 - 12);
        draw("your team, in the room", C.ink, 0.8 * fanP, 400, F.word, (x) => bandEdge(0, x, t, fanP) - 6, rcx);
      }

      raf = requestAnimationFrame(frame);
    }

    const start = () => {
      if (!raf && visible) raf = requestAnimationFrame(frame);
    };
    const local = (e: MouseEvent | PointerEvent) => {
      const r = cv.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const sideOf = (x: number, y: number): 0 | 1 => (y < mid(x, reduce ? 0 : performance.now() - t0) ? 0 : 1);
    const ready = () => timeline(performance.now() - t0).ready;
    pickRef.current = (i) => {
      picked = i;
      start();
    };
    // Desktop: the cursor near a strand opens it; leaving puts it back on Shubham
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || !ready()) return;
      const p = local(e);
      if (u(p.x) < Lo.s0 * 0.6) return;
      picked = sideOf(p.x, p.y);
    };
    const onLeave = (e: PointerEvent) => {
      if (e.pointerType === "mouse") picked = null;
    };
    // Phone: a tap opens the strand on that side, and it stays open
    const onClick = (e: MouseEvent) => {
      if (!ready()) return;
      const p = local(e);
      picked = sideOf(p.x, p.y);
    };
    let rt = 0;
    const onResize = () => {
      window.clearTimeout(rt);
      rt = window.setTimeout(setup, 150);
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });

    cv.addEventListener("pointermove", onMove);
    cv.addEventListener("pointerleave", onLeave);
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
      cv.removeEventListener("pointerleave", onLeave);
      cv.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(rt);
      pickRef.current = () => {};
    };
  }, []);

  return (
    <section aria-label="Two paths into one room" className="relative mx-auto max-w-[1160px]">
      <div className="relative h-[300px] md:h-[370px]">
        <canvas ref={cvRef} aria-hidden="true" className="absolute inset-0 block size-full cursor-pointer touch-pan-y font-stream" />
      </div>
      <p className="sr-only">
        One line, the University of Chicago, parts into two strands. Shubham Chandra’s strand passes Digital Realty; he teaches at UChicago and builds at Digital
        Realty. J.T. O’Connor’s strand passes operations and business development; he is your contact from the first conversation to delivery. The two strands
        meet again in one band: your team, in the room.
      </p>
      <p ref={liveRef} aria-live="polite" className="sr-only" />
      <div className="flex flex-wrap gap-x-6 gap-y-1 px-4 text-[14px] text-haze md:px-8">
        {TEAM.map((p, i) => (
          <Link
            key={p.id}
            href={`#${p.id}`}
            className={`inline-flex min-h-11 items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${textLink}`}
            onMouseEnter={() => pickRef.current(i as 0 | 1)}
            onFocus={() => pickRef.current(i as 0 | 1)}
            onMouseLeave={() => pickRef.current(null)}
          >
            Read {p.first}’s bio
          </Link>
        ))}
      </div>
    </section>
  );
}
