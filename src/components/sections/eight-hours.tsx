/**
 * What: The eight hours — two sessions, eight modules, three documents.
 * Why: One section for how it works, curriculum, and deliverables.
 * How: Length bars and session timelines draw in once on scroll.
 * Deps: framer-motion, cn.
 */
"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Module {
  code: string;
  title: string;
  description: string;
}

interface Session {
  name: string;
  modules: Module[];
}

interface Length {
  label: string;
  hours: string;
  percent: number;
  ours?: boolean;
  openEnded?: boolean;
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const lengths: Length[] = [
  { label: "This program", hours: "8h", percent: 20, ours: true },
  { label: "General Assembly", hours: "32h", percent: 80 },
  { label: "Coursera", hours: "40h+", percent: 100, openEnded: true },
];

const sessions: Session[] = [
  {
    name: "Day 1: Personal unlock",
    modules: [
      { code: "01", title: "Live demo on real data", description: "The instructor builds a Watchtower live on a volunteer\u2019s real external dependency." },
      { code: "02", title: "The matrix, filled live", description: "The room maps that demo across people, tools, trainings, guardrails, and metrics." },
      { code: "03", title: "Personalized build", description: "Each attendee builds their own Watchtower from a starter written for their role." },
      { code: "04", title: "Second pass", description: "Build, run, tighten: read the first output honestly and run it again." },
      { code: "05", title: "Structured share", description: "Same pattern, very different outputs across industries." },
    ],
  },
  {
    name: "Day 2: Scaffolding through application",
    modules: [
      { code: "01", title: "Pick the process you\u2019ve been postponing", description: "The one that matters and keeps getting avoided." },
      { code: "02", title: "Map it across the matrix", description: "Today and rebuilt states, with AI insertion points marked." },
      { code: "03", title: "Extract the next three to five builds", description: "A starter paragraph for each insertion point, ready to paste." },
      { code: "04", title: "Pair pressure-test", description: "A peer from another role checks the map for blind spots." },
      { code: "05", title: "One named action for Monday", description: "Certificate, peer reflection, and the first build to run." },
    ],
  },
];

const matrixCells = [
  "empty", "empty", "empty", "empty", "empty",
  "human", "ai", "human", "ai", "ai",
] as const;

function DocumentFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="flex h-[168px] flex-col gap-2 rounded-xl bg-white/[0.035] p-[18px] ring-1 ring-white/[0.06]"
    >
      <span className="h-[7px] w-[46%] rounded-[2px] bg-foreground/55" />
      <span className="h-1 w-[66%] rounded-[2px] bg-foreground/15" />
      {children}
    </div>
  );
}

function FlowBox({ ai = false }: { ai?: boolean }) {
  return (
    <span
      className={cn(
        "h-6 w-10 shrink-0 rounded",
        ai ? "bg-[var(--amber)]" : "border-[1.5px] border-foreground/45"
      )}
    />
  );
}

function FlowLine() {
  return <span className="h-px flex-1 bg-foreground/30" />;
}

const documents = [
  {
    title: "A working Watchtower",
    when: "Day 1",
    description: "A Claude Project on a real external dependency. Used Monday, then again every week.",
    drawing: (
      <div className="flex flex-1 flex-col justify-center gap-2.5">
        {[true, false, false, true].map((flagged, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span className={cn("h-2 w-2 shrink-0 rounded-full", flagged ? "bg-[var(--amber)]" : "bg-foreground/20")} />
            <span className={cn("h-1.5 rounded-[2px] bg-foreground/30", i % 2 ? "w-[52%]" : "w-[70%]")} />
            <span className="ml-auto h-1.5 w-[12%] rounded-[2px] bg-foreground/15" />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "A horizontal process map",
    when: "Day 2",
    description: "The process you\u2019ve been postponing, mapped today and rebuilt.",
    drawing: (
      <div className="mt-2 grid flex-1 grid-cols-[34px_repeat(5,minmax(0,1fr))] grid-rows-2 items-stretch gap-1.5 font-mono text-[9px] text-foreground/45">
        {matrixCells.map((cell, i) => (
          <Fragment key={i}>
            {i % 5 === 0 && (
              <span className="self-center">{i === 0 ? "today" : "rebuilt"}</span>
            )}
            <span
              className={cn(
                "rounded-[2px]",
                cell === "ai" && "bg-[var(--amber)]",
                cell === "human" && "border-[1.5px] border-foreground/45",
                cell === "empty" && "bg-white/[0.06]"
              )}
            />
          </Fragment>
        ))}
      </div>
    ),
  },
  {
    title: "An implementation queue",
    when: "Day 2",
    description: "Three to five starter paragraphs, written in the room, ready to paste.",
    drawing: (
      <div className="flex flex-1 flex-col justify-center gap-2 font-mono text-[10px] text-foreground/45">
        {["Mon", "Tue", "Wed"].map((day, i) => (
          <div key={day} className="flex items-center gap-2.5">
            <span className="w-[26px]">{day}</span>
            <span className={cn("h-5 flex-1 rounded-[3px]", i === 0 ? "bg-[var(--amber)]" : "border-[1.5px] border-foreground/30")} />
          </div>
        ))}
      </div>
    ),
  },
];

export function EightHours() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-16 px-4 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-16">
          <h2 className="max-w-[15ch] text-[2.25rem] font-medium leading-[1.02] tracking-[-0.04em] md:text-[3.75rem]">
            What happens in the eight hours.
          </h2>
          <div
            role="img"
            aria-label="Program length compared: this program 8 hours, General Assembly 32 hours, Coursera 40 or more hours"
            className="flex w-full flex-col gap-3 text-[13px] text-foreground/60 md:w-[420px] md:shrink-0"
          >
            {lengths.map((length, i) => (
              <div key={length.label} className="grid grid-cols-[120px_1fr_44px] items-center gap-3">
                <span className={cn(length.ours && "text-foreground")}>{length.label}</span>
                <span className="h-2">
                  <motion.span
                    className={cn(
                      "block h-full rounded-[1px]",
                      length.ours && "bg-foreground",
                      !length.ours && !length.openEnded && "bg-foreground/30",
                      length.openEnded && "bg-linear-to-r from-foreground/30 from-80% to-transparent"
                    )}
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${length.percent}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.9, delay: i * 0.08, ease }}
                  />
                </span>
                <span className={cn("font-mono", length.ours && "text-foreground")}>
                  {length.hours}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div id="curriculum" className="grid scroll-mt-24 gap-14 md:grid-cols-2 md:gap-[72px]">
          {sessions.map((session) => (
            <div key={session.name} className="flex flex-col gap-7">
              <div className="flex flex-col gap-3.5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-medium tracking-[-0.015em]">{session.name}</h3>
                  <span className="shrink-0 font-mono text-xs text-foreground/50">Half-day, live</span>
                </div>
                <div aria-hidden="true" className="flex items-center">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-foreground" />
                  <motion.span
                    className="h-0.5 flex-1 origin-left bg-foreground/50"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={reduceMotion ? { duration: 0 } : { duration: 1.1, ease }}
                  />
                  <span className="h-2 w-2 shrink-0 rounded-full bg-foreground" />
                </div>
              </div>
              <ol className="flex flex-col gap-4">
                {session.modules.map((module) => (
                  <li key={module.code} className="grid grid-cols-[28px_1fr] gap-2">
                    <span className="pt-[3px] font-mono text-xs text-foreground/45">{module.code}</span>
                    <span className="flex flex-col gap-1">
                      <span className="text-base font-medium">{module.title}</span>
                      <span className="text-sm leading-relaxed text-foreground/60">{module.description}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[15px] text-foreground/60">
            Your team leaves with three working artifacts.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <div key={doc.title} className="flex flex-col gap-3.5">
                <DocumentFrame>{doc.drawing}</DocumentFrame>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[17px] font-medium">{doc.title}</h3>
                  <span className="shrink-0 font-mono text-[11px] text-foreground/45">{doc.when}</span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/60">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
