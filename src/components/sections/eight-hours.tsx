/**
 * What: The eight hours — two sessions, eight modules, three documents.
 * Why: One section for how it works, curriculum, and deliverables.
 * How: Length bars and session timelines draw in once on scroll.
 * Deps: framer-motion, cn.
 */
"use client";

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
    name: "Session 1: Foundation and fluency",
    modules: [
      { code: "01", title: "The Process Matrix", description: "Map a process across people, tools, training, guardrails, and metrics." },
      { code: "02", title: "The AI Toolkit", description: "Prompting, agents, and specialized tools, and how to judge new ones." },
      { code: "03", title: "Reading a Process", description: "Map a real process end to end and mark where AI comes in." },
      { code: "04", title: "Your First AI Workflow", description: "Build the AI-assisted version of that process in the room." },
    ],
  },
  {
    name: "Session 2: Strategy and mastery",
    modules: [
      { code: "05", title: "AI Strategy for Your Team", description: "Score your top ten processes and draft the internal business case." },
      { code: "06", title: "Workflow Guardrails", description: "Review points, quality checks, and privacy boundaries built in." },
      { code: "07", title: "Building AI Culture", description: "Make AI use normal and safe to try, including for skeptics." },
      { code: "08", title: "Your 90-Day Roadmap", description: "A plan your team can start next week, reviewed by the cohort." },
    ],
  },
];

const blueprintCells = [
  "ai", "empty", "human", "empty", "ai",
  "empty", "ai", "empty", "ai", "empty",
  "human", "empty", "ai", "empty", "empty",
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
    title: "AI Integration Blueprint",
    session: "Session 1",
    description: "Where AI fits in your team’s processes, step by step.",
    drawing: (
      <div className="mt-2 grid flex-1 grid-cols-5 grid-rows-3 gap-1.5">
        {blueprintCells.map((cell, i) => (
          <span
            key={i}
            className={cn(
              "rounded-[2px]",
              cell === "ai" && "bg-[var(--amber)]",
              cell === "human" && "border-[1.5px] border-foreground/45",
              cell === "empty" && "bg-white/[0.06]"
            )}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Workflow Automation Map",
    session: "Session 2",
    description: "The AI-assisted version of a real process, ready to run.",
    drawing: (
      <div className="flex flex-1 flex-col justify-center gap-4">
        <div className="flex items-center">
          <FlowBox />
          <FlowLine />
          <FlowBox ai />
          <FlowLine />
          <FlowBox ai />
        </div>
        <div className="flex items-center pl-[24%]">
          <FlowBox ai />
          <FlowLine />
          <FlowBox />
        </div>
      </div>
    ),
  },
  {
    title: "90-Day AI Roadmap",
    session: "Session 2",
    description: "A plan tied to the processes you mapped, reviewed by the cohort.",
    drawing: (
      <div className="flex flex-1 flex-col justify-center gap-3 font-mono text-[10px] text-foreground/45">
        <div className="flex items-center gap-2.5">
          <span className="w-[18px]">30</span>
          <span className="h-2.5 w-[36%] rounded-[2px] bg-foreground/55" />
        </div>
        <div className="flex items-center gap-2.5">
          <span className="w-[18px]">60</span>
          <span className="ml-[22%] h-2.5 w-[40%] rounded-[2px] bg-foreground/35" />
        </div>
        <div className="flex items-center gap-2.5">
          <span className="w-[18px]">90</span>
          <span className="ml-[46%] h-2.5 w-[34%] rounded-[2px] bg-foreground/20" />
        </div>
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
                    initial={{ width: reduceMotion ? `${length.percent}%` : "0%" }}
                    whileInView={{ width: `${length.percent}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.9, delay: i * 0.08, ease }}
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
                  <span className="shrink-0 font-mono text-xs text-foreground/50">4 hours, live</span>
                </div>
                <div aria-hidden="true" className="flex items-center">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-foreground" />
                  <motion.span
                    className="h-0.5 flex-1 origin-left bg-foreground/50"
                    initial={{ scaleX: reduceMotion ? 1 : 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.1, ease }}
                  />
                  <span className="h-2 w-2 shrink-0 rounded-full bg-foreground" />
                </div>
              </div>
              <ol className="flex flex-col gap-4">
                {session.modules.map((module) => (
                  <li key={module.code} className="grid grid-cols-[36px_1fr] gap-2">
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
            Your team leaves with three working documents.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <div key={doc.title} className="flex flex-col gap-3.5">
                <DocumentFrame>{doc.drawing}</DocumentFrame>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[17px] font-medium">{doc.title}</h3>
                  <span className="shrink-0 font-mono text-[11px] text-foreground/45">{doc.session}</span>
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
