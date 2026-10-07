/**
 * What: The homepage hero. Teams pass work along a dashed path by hand; an amber line connects them;
 *       the path fans into one stream, and the stream opens at one team to show who does what there.
 * Why: The whole offer in one object: from handoffs to flow, in two days. Amber is what an agent runs.
 * How: Canvas 2D timeline (before, connect, spread), then a resting opening the visitor can move:
 *      cursor on desktop, a tap that snaps to the nearest team on phones. Scrolling never opens anything.
 * Deps: stream/canvas primitives, next/link.
 */
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { CurveText, clamp, ease, fitCanvas, mix, parting, readColors, reducedMotion, rgba } from "@/components/stream/canvas";
import { pill } from "@/components/stream/styles";

const T_BEFORE = 5200, T_THREAD = 3380, T_SPREAD = 1800;

// What an agent now runs at each team, and what a person there keeps
const STATIONS: Record<string, [string, string]> = {
  Sales: ["deal logged, account enriched", "the relationship stays with the rep"],
  Finance: ["terms checked against policy", "exceptions go to the controller"],
  Legal: ["contract drafted from approved clauses", "counsel signs"],
  Procurement: ["vendor forms collected and checked", "a buyer approves new vendors"],
  Ops: ["accounts set up the day it closes", "the ops lead confirms the plan"],
  Client: ["welcome pack sent", "the kickoff call stays with you"],
};

const FLOW_WORDS = ["to", "flow,", "in", "two", "days."];

interface Node {
  name: string;
  x: number;
}
interface Line {
  i: number;
  sig: boolean;
  pts: number;
}
interface Packet {
  seg: number;
  p: number;
  wait: number;
  speed: number;
}

export function StreamHero() {
  const cvRef = useRef<HTMLCanvasElement>(null);
  const liveRef = useRef<HTMLParagraphElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const replayRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const cv = cvRef.current, live = liveRef.current, headline = h1Ref.current, replay = replayRef.current;
    if (!cv || !live || !headline || !replay) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduce = reducedMotion();
    let seed = 11;
    const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

    let W = 0, H = 0, dpr = 1, t0 = 0, raf = 0, visible = true, seen = false;
    let C = readColors(), text = new CurveText(1);
    let nodes: Node[] = [], lines: Line[] = [], packets: Packet[] = [];
    const hand = { tx: 0, ton: 0 };
    // The open station and how open it is; switching stations closes one, then opens the next
    const opening: { st: Node | null; op: number } = { st: null, op: 0 };
    const win = { cx: -9999, hw: 140 };
    let announced = "";

    const phone = () => W < 600;
    const baseY = (x: number, time: number) =>
      H * (phone() ? 0.34 : 0.33) + Math.sin((x / W) * 4.2 + time * 0.00025) * H * 0.055 + Math.sin((x / W) * 1.6 + 0.9) * H * 0.045;
    const laneSpacing = () => Math.min(phone() ? 7.5 : 6.5, H * 0.014);

    function setup() {
      ({ W, H, dpr } = fitCanvas(cv!, ctx!));
      C = readColors();
      text = new CurveText(dpr);
      const names = phone() ? ["Sales", "Finance", "Legal", "Ops", "Client"] : ["Sales", "Finance", "Legal", "Procurement", "Ops", "Client"];
      nodes = names.map((name, i) => ({ name, x: W * (phone() ? 0.12 : 0.09) + i * ((W * (phone() ? 0.76 : 0.82)) / (names.length - 1)) }));
      const n = phone() ? 21 : 31, pts = phone() ? 64 : 110;
      lines = Array.from({ length: n }, (_, i) => ({ i, sig: i === (n - 1) / 2, pts }));
      seed = 11;
      packets = Array.from({ length: phone() ? 7 : 10 }, (_, i) => ({ seg: i % (nodes.length - 1), p: rand(), wait: rand() * 900, speed: 0.00036 + rand() * 0.00024 }));
      hand.ton = 0;
      opening.st = null;
      opening.op = 0;
      t0 = performance.now();
    }

    function state(time: number) {
      // Reduced motion: the same story as two still frames, before then after
      if (reduce) return time < 3500 ? { threadX: -20, spread: 0, connect: 0 } : { threadX: W + 40, spread: 1, connect: 1 };
      const k = clamp((time - T_BEFORE) / T_THREAD, 0, 1);
      return { threadX: -20 + (W + 60) * ease(k), spread: ease(clamp((time - T_BEFORE - T_THREAD * 0.85) / T_SPREAD, 0, 1)), connect: k };
    }

    function lineY(L: Line, x: number, time: number, spread: number) {
      const n = lines.length, lane = (L.i - (n - 1) / 2) * laneSpacing() * spread;
      const y = baseY(x, time) + lane + Math.sin((x / W) * 8.5 + L.i * 0.17 + time * 0.0006) * 1.8 * spread;
      if (opening.st && opening.op > 0.001 && spread > 0.95) {
        return parting(y, baseY(x, time) + laneSpacing() * 0.5, x, win.cx, win.hw, ease(opening.op), phone() ? 9 : 10);
      }
      return y;
    }

    const nearest = (x: number) => nodes.reduce((b, nd) => (Math.abs(nd.x - x) < Math.abs(b.x - x) ? nd : b), nodes[0]);

    function frame(now: number) {
      raf = 0;
      if (!visible) return;
      const c = ctx!, time = now - t0;
      const { threadX, spread, connect } = state(time);
      const R = phone() ? 15 : 18;
      const target = hand.ton && spread > 0.95 ? nearest(hand.tx) : null;
      if (target !== opening.st) {
        opening.op = Math.max(0, opening.op - 0.05);
        if (opening.op === 0) opening.st = target;
      } else if (opening.st) opening.op = Math.min(1, opening.op + 0.03);
      if (reduce) c.globalAlpha = time < 3500 ? 1 - clamp((time - 3100) / 400, 0, 1) : clamp((time - 3500) / 600, 0, 1);
      const flowing = String(connect > 0.6);
      if (headline!.dataset.flowing !== flowing) headline!.dataset.flowing = flowing;
      c.clearRect(0, 0, W, H);

      if (spread === 0) {
        // Before and during the connect: solid behind the amber line, dashed ahead of it
        c.lineWidth = 1.4;
        c.strokeStyle = rgba(C.ink, 0.6);
        c.beginPath();
        c.moveTo(-20, baseY(-20, time));
        for (let x = -14; x <= Math.min(threadX, W + 20); x += 6) c.lineTo(x, baseY(x, time));
        c.stroke();
        c.setLineDash([7, 9]);
        c.beginPath();
        let first = true;
        for (let x = Math.max(-20, threadX); x <= W + 20; x += 6) {
          if (first) c.moveTo(x, baseY(x, time));
          else c.lineTo(x, baseY(x, time));
          first = false;
        }
        c.stroke();
        c.setLineDash([]);
        if (threadX > -20) {
          c.strokeStyle = C.signal;
          c.lineWidth = 2.6;
          c.lineCap = "round";
          c.beginPath();
          c.moveTo(-20, baseY(-20, time));
          for (let x = -16; x <= threadX; x += 4) c.lineTo(x, baseY(x, time));
          c.stroke();
          c.fillStyle = C.signal;
          c.beginPath();
          c.arc(threadX, baseY(threadX, time), 3.5, 0, Math.PI * 2);
          c.fill();
        }
      } else {
        const n = lines.length;
        for (const L of lines) {
          c.beginPath();
          for (let j = 0; j <= L.pts; j++) {
            const x = (j / L.pts) * (W + 40) - 20, y = lineY(L, x, time, spread);
            if (j) c.lineTo(x, y);
            else c.moveTo(x, y);
          }
          const alpha = L.sig ? 1 : (0.3 + 0.38 * (1 - Math.abs(L.i - n / 2) / n)) * spread;
          c.strokeStyle = L.sig ? C.signal : rgba(C.ink, alpha);
          c.lineWidth = L.sig ? 2.4 : 1.1;
          c.stroke();
        }
        // Work moving along the stream without stopping (ink: it is the work, not the agent)
        // Each piece of work has its own lane, pace and small drift, so the flow never looks like a conveyor
        const flowN = phone() ? 7 : 12;
        const hash = (k: number) => {
          const v = Math.sin(k * 12.9898) * 43758.5453;
          return v - Math.floor(v);
        };
        for (let q = 0; q < flowN; q++) {
          let li = Math.floor(hash(q + 1) * n);
          if (lines[li].sig) li = (li + 3) % n;
          const L = lines[li], pace = 0.03 * (0.65 + 0.7 * hash(q + 21));
          const drift = Math.sin(time * 0.0004 + q * 2.3) * 30 * hash(q + 41);
          const x = ((time * pace + drift + hash(q + 61) * (W + 40)) % (W + 40) + (W + 40)) % (W + 40) - 20;
          c.fillStyle = rgba(C.ink, (0.6 + 0.35 * hash(q + 81)) * spread);
          c.beginPath();
          c.arc(x, lineY(L, x, time, spread), 1.8 + 0.8 * hash(q + 101), 0, Math.PI * 2);
          c.fill();
        }
      }

      // Documents crawl, wait, and pile up at each handoff, until the amber line reaches them
      for (const pk of packets) {
        if (reduce) break;
        if (pk.wait > 0) pk.wait -= 16;
        else {
          pk.p += pk.speed * 16;
          if (pk.p >= 1) {
            pk.p = 0;
            pk.seg = (pk.seg + 1) % (nodes.length - 1);
            pk.wait = 580 + rand() * 1250;
          }
        }
      }
      const piles = new Array(nodes.length).fill(0);
      for (const pk of packets) {
        let x: number, y: number;
        if (pk.wait > 0) {
          const ni = pk.seg, k = piles[ni]++;
          x = nodes[ni].x + R + 8;
          y = baseY(nodes[ni].x, time) - R - 6 - k * 11;
        } else {
          const a = nodes[pk.seg].x + R + 4, b = nodes[pk.seg + 1].x - R - 4;
          x = a + (b - a) * pk.p;
          y = baseY(x, time) - 2;
        }
        const a = (1 - clamp((threadX - x) / 40, 0, 1)) * (1 - spread);
        if (a < 0.02) continue;
        c.fillStyle = rgba(C.ink, a);
        c.fillRect(x - 5, y - 7, 10, 13);
        c.fillStyle = rgba(C.ground, a);
        c.fillRect(x - 3, y - 4, 6, 1.4);
        c.fillRect(x - 3, y - 1, 6, 1.4);
        c.fillRect(x - 3, y + 2, 4, 1.4);
      }

      // Teams: the ring (the handoff) dissolves as the amber line arrives; the name stays and rides under the stream
      const bottom = lines[lines.length - 1];
      const open = opening.op > 0.5 ? opening.st : null;
      for (const nd of nodes) {
        const passed = clamp((threadX - nd.x + 10) / 50, 0, 1), y = baseY(nd.x, time);
        if (passed < 1) {
          c.beginPath();
          c.arc(nd.x, y, R * (1 - 0.5 * passed), 0, Math.PI * 2);
          c.fillStyle = rgba(C.ground, 1 - passed);
          c.fill();
          c.lineWidth = 1.6;
          c.strokeStyle = rgba(C.ink, 1 - passed);
          c.stroke();
        }
        const before = (x: number) => baseY(x, time) + R + (phone() ? 17 : 20);
        const after = (x: number) => lineY(bottom, x, time, spread) + (phone() ? 15 : 17);
        const fn = (x: number) => (spread > 0 ? before(x) + (after(x) - before(x)) * spread : before(x));
        const isOpen = open === nd;
        const fs = Math.round((phone() ? 12 - spread * 0.5 : 13.5 - spread) * 2) / 2;
        text.draw(c, [{ t: nd.name, c: mix(C.ink, C.ground, isOpen ? 1 : 0.95 - 0.35 * spread) }], `${isOpen ? 600 : 500} ${fs}px ${fontFamily()}`, fs, fn, nd.x);
      }

      // The opening: the words hang from the amber line and follow it exactly. Amber is what an agent runs; ink is what a person keeps.
      if (opening.st && spread > 0.95) {
        const st = opening.st, [runs, stays] = STATIONS[st.name];
        const fs = phone() ? 10 : 11, font = `400 ${fs}px ${fontFamily()}`;
        const a = ease(clamp((opening.op - 0.35) / 0.65, 0, 1));
        const segs = [{ t: runs, c: mix(C.signal, C.ground, a) }, { t: " ", c: C.ground }, { t: stays, c: mix(C.ink, C.ground, a) }];
        const tw = text.width(segs, font, fs);
        const cx = clamp(st.x, tw / 2 + 16, W - tw / 2 - 16);
        win.cx = cx;
        win.hw = tw / 2 + (phone() ? 36 : 80);
        const upper = lines[(lines.length - 1) / 2];
        if (a > 0.02) text.draw(c, segs, font, fs, (x) => lineY(upper, x, time, spread) + (phone() ? 11 : 12), cx);
        if (opening.op > 0.9 && announced !== st.name) {
          announced = st.name;
          live!.textContent = `${st.name}. An agent: ${runs}. A person: ${stays}.`;
        }
      }
      c.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }

    let family = "";
    function fontFamily() {
      if (!family) family = getComputedStyle(cv!).fontFamily || "Archivo, Helvetica, Arial, sans-serif";
      return family;
    }

    const start = () => {
      if (!raf && visible) raf = requestAnimationFrame(frame);
    };
    const ready = () => state(performance.now() - t0).spread > 0.95;
    // Desktop: the stream opens only while the cursor is on it, at the nearest team
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || !ready()) return;
      const r = cv.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      const half = ((lines.length - 1) / 2) * laneSpacing() + 12;
      const onBand = Math.abs(y - baseY(x, performance.now() - t0)) < half;
      hand.ton = onBand ? 1 : 0;
      if (onBand) hand.tx = x;
    };
    const onLeave = (e: PointerEvent) => {
      if (e.pointerType === "mouse") hand.ton = 0;
    };
    // Touch: a tap on the stream opens the nearest team; a tap off it closes
    const onClick = (e: MouseEvent) => {
      if (!ready() || window.matchMedia("(hover: hover)").matches) return;
      const r = cv.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      const half = ((lines.length - 1) / 2) * laneSpacing() + 24;
      const onBand = Math.abs(y - baseY(x, performance.now() - t0)) < half;
      hand.ton = onBand ? 1 : 0;
      if (onBand) hand.tx = x;
    };
    const onReplay = () => {
      setup();
      start();
    };
    let rt = 0;
    const onResize = () => {
      window.clearTimeout(rt);
      rt = window.setTimeout(setup, 150);
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      // The story starts when the hero is first actually on screen
      if (visible && !seen) {
        seen = true;
        t0 = performance.now();
      }
      start();
    });

    cv.addEventListener("pointermove", onMove);
    cv.addEventListener("pointerleave", onLeave);
    cv.addEventListener("click", onClick);
    replay.addEventListener("click", onReplay);
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
      replay.removeEventListener("click", onReplay);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(rt);
    };
  }, []);

  return (
    <section aria-label="Introduction" className="relative mx-auto h-[min(78svh,640px)] min-h-[460px] max-w-[1160px] md:h-[min(80svh,680px)]">
      <canvas ref={cvRef} aria-hidden="true" className="absolute inset-0 block size-full touch-pan-y font-stream" />
      <p className="sr-only">
        A new client moves from signed to onboarded through Sales, Finance, Legal, Procurement, Ops and the client. Today every handoff is by hand. After two days the
        handoffs are connected into one stream: an agent runs the routine steps, and people keep the calls that are theirs.
      </p>
      <p ref={liveRef} aria-live="polite" className="sr-only" />
      <button
        ref={replayRef}
        type="button"
        className="absolute right-3 top-1 z-[2] min-h-10 px-1 text-[13px] text-haze underline underline-offset-4 md:right-7 md:top-2"
      >
        Replay
      </button>
      <div className="pointer-events-none absolute inset-x-4 bottom-[22px] flex flex-wrap items-end justify-between gap-4 md:inset-x-8 md:bottom-9">
        <div className="grid gap-3">
        <h1
          ref={h1Ref}
          data-flowing="false"
          className="group m-0 max-w-[11ch] text-[34px] font-extrabold leading-[0.98] tracking-[-0.015em] [font-stretch:80%] md:text-[58px]"
        >
          <span>
            From{" "}
            <span className="underline decoration-ink/45 decoration-dashed decoration-2 underline-offset-[7px] transition-[text-decoration-color] duration-[900ms] group-data-[flowing=true]:decoration-transparent">
              handoffs
            </span>
          </span>{" "}
          {FLOW_WORDS.map((w, i) => (
            <span key={w}>
              <span
                className="inline-block -translate-x-[34px] translate-y-2 opacity-0 blur-[6px] transition-[opacity,translate,filter] duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] group-data-[flowing=true]:translate-x-0 group-data-[flowing=true]:translate-y-0 group-data-[flowing=true]:opacity-100 group-data-[flowing=true]:blur-none motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-none motion-reduce:transition-none"
                style={{ transitionDelay: `${i * 110}ms` }}
              >
                {w}
              </span>
              {i < FLOW_WORDS.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>
        <p className="m-0 max-w-[42ch] font-serif text-[15.5px] leading-snug text-haze md:text-[17px]">
          A live, two-day AI program for working teams. Bring one real process. Your team rebuilds it so an agent runs the routine steps and your people keep the decisions.
        </p>
        </div>
        <Link href="/contact" className={`pointer-events-auto ${pill}`}>
          Bring us one process
        </Link>
      </div>
    </section>
  );
}
