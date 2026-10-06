/**
 * What: Process Matrix — tabbed worked examples (HR, Finance, Marketing).
 * Why: Shows the program's core method instead of describing it.
 * How: Client tabs swap the process; amber square marks an AI insertion point.
 * Deps: React state, cn.
 */
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface MatrixRow {
  step: string;
  owner: string;
  ai: string | null;
  guard: string;
}

interface Process {
  key: string;
  label: string;
  title: string;
  rows: MatrixRow[];
}

const processes: Process[] = [
  {
    key: "onboarding",
    label: "HR",
    title: "New-hire onboarding",
    rows: [
      { step: "Collect role details", owner: "Hiring manager", ai: null, guard: "Relationship call; the manager owns it" },
      { step: "Draft offer and welcome letters", owner: "HR generalist", ai: "Drafts from approved templates", guard: "HR reviews every letter" },
      { step: "Build the first-week schedule", owner: "HR and manager", ai: "Proposes a plan from calendars", guard: "Manager confirms" },
      { step: "Answer policy questions", owner: "HR team", ai: "Answers from the handbook", guard: "Every answer cites its source" },
      { step: "Summarize day-30 check-ins", owner: "HR generalist", ai: "Groups themes across surveys", guard: "No personal data leaves the HRIS" },
    ],
  },
  {
    key: "finance",
    label: "Finance",
    title: "Month-end close",
    rows: [
      { step: "Pull statements and transactions", owner: "Staff accountant", ai: "Extracts and matches line items", guard: "Unmatched items go to a person" },
      { step: "Reconcile accounts", owner: "Staff accountant", ai: "Flags variances over threshold", guard: "Controller sets the thresholds" },
      { step: "Draft variance commentary", owner: "FP&A analyst", ai: "Writes first-pass explanations", guard: "Analyst rewrites before review" },
      { step: "Approve journal entries", owner: "Controller", ai: null, guard: "Accountability sits with the controller" },
      { step: "Prepare the leadership summary", owner: "CFO office", ai: "Builds the first draft", guard: "Every number links to its source" },
    ],
  },
  {
    key: "marketing",
    label: "Marketing",
    title: "Campaign launch",
    rows: [
      { step: "Set audience and goal", owner: "Marketing lead", ai: null, guard: "Strategy call; the lead owns it" },
      { step: "Draft copy variants", owner: "Content marketer", ai: "Writes variants in brand voice", guard: "Brand guide in every prompt" },
      { step: "Adapt assets per channel", owner: "Designer", ai: "Resizes and adapts copy", guard: "Designer approves final files" },
      { step: "Legal and brand review", owner: "Brand manager", ai: null, guard: "Sign-off stays with people" },
      { step: "Weekly performance recap", owner: "Marketing ops", ai: "Summarizes channel results", guard: "Numbers pulled from the dashboards" },
    ],
  },
];

function Mark({ ai }: { ai: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block h-2.5 w-2.5 shrink-0",
        ai ? "bg-[var(--amber)]" : "border-[1.5px] border-foreground/45"
      )}
    />
  );
}

export function ProcessMatrix() {
  const [active, setActive] = useState(processes[0].key);
  const process = processes.find((p) => p.key === active) ?? processes[0];
  const aiCount = process.rows.filter((r) => r.ai).length;
  const humanCount = process.rows.length - aiCount;

  return (
    <section aria-labelledby="matrix-title" className="tone-hero pb-16 md:pb-24">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <figure className="m-0 rounded-2xl bg-white/[0.035] p-4 ring-1 ring-white/[0.06] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div
              aria-label="Example process"
              className="flex gap-1 rounded-full bg-background/80 p-1"
            >
              {processes.map((p) => (
                <button
                  key={p.key}
                  type="button"
                  aria-pressed={p.key === active}
                  onClick={() => setActive(p.key)}
                  className={cn(
                    "min-h-10 rounded-full px-4 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground",
                    p.key === active
                      ? "bg-foreground text-background"
                      : "text-foreground/60 hover:text-foreground"
                  )}
                >
                  {p.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-foreground/60">
              <span className="flex items-center gap-2">
                <Mark ai />
                AI insertion point
              </span>
              <span className="flex items-center gap-2">
                <Mark ai={false} />
                Stays human
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pt-7 pb-3">
            <h2 id="matrix-title" className="text-2xl font-medium tracking-[-0.02em] md:text-[28px]">
              {process.title}
            </h2>
            <p className="font-mono text-xs text-foreground/50">
              {aiCount} AI insertion points, {humanCount}{" "}
              {humanCount === 1 ? "step stays human" : "steps stay human"}
            </p>
          </div>

          {/* Desktop: table grid */}
          <div className="hidden md:block">
            <div className="grid grid-cols-[20px_1.3fr_0.9fr_1.3fr_1.3fr] gap-4 border-b border-white/[0.08] py-2.5 font-mono text-[11px] uppercase tracking-[0.06em] text-foreground/45">
              <span />
              <span>Step</span>
              <span>Owner</span>
              <span>What AI does</span>
              <span>Guardrail</span>
            </div>
            {process.rows.map((r) => (
              <div
                key={r.step}
                className="grid grid-cols-[20px_1.3fr_0.9fr_1.3fr_1.3fr] items-center gap-4 border-b border-white/[0.05] py-3.5 text-[15px]"
              >
                <Mark ai={Boolean(r.ai)} />
                <span>{r.step}</span>
                <span className="text-foreground/60">{r.owner}</span>
                <span className={r.ai ? "text-foreground" : "text-foreground/45"}>
                  {r.ai ?? "Stays human"}
                </span>
                <span className="text-foreground/60">{r.guard}</span>
              </div>
            ))}
          </div>

          {/* Mobile: stacked rows */}
          <ol className="md:hidden">
            {process.rows.map((r) => (
              <li
                key={r.step}
                className="flex gap-3 border-b border-white/[0.06] py-4 last:border-b-0"
              >
                <span className="pt-1.5">
                  <Mark ai={Boolean(r.ai)} />
                </span>
                <div className="min-w-0 space-y-1">
                  <p className="text-[15px] font-medium">{r.step}</p>
                  <p className="text-sm text-foreground/60">
                    {r.owner}
                    {r.ai ? ` · ${r.ai}` : " · Stays human"}
                  </p>
                  <p className="text-[13px] text-foreground/45">{r.guard}</p>
                </div>
              </li>
            ))}
          </ol>

          <figcaption className="pt-5 text-[13px] text-foreground/50">
            Worked examples from Module 1. In the session, your team builds
            this for one of its own processes.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
