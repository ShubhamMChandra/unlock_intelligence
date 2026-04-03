/**
 * What: Two-session structure and timing explanation.
 * Why: Clarifies format before curriculum detail below.
 * How: Numbered steps with left-border accent, ScrollReveal on heading.
 * Deps: SectionWrapper, ScrollReveal.
 */
"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const sessions = [
  {
    number: "01",
    tag: "Session 1 \u00B7 4 Hours",
    title: "Foundation & Fluency",
    description:
      "Build the mental model. Learn the vocabulary. Get good at prompting \u2014 treat it as a discipline, not guesswork.",
    deliverableLabel: "Deliverable",
    deliverable: "Prompt playbook customized to your team\u2019s workflows",
  },
  {
    number: "02",
    tag: "Session 2 \u00B7 4 Hours",
    title: "Strategy & Mastery",
    description:
      "Move from individual tools to systems. Automate your workflows. Become the person your team turns to on AI.",
    deliverableLabel: "Deliverable",
    deliverable: "Workflow automation map for your team\u2019s operations",
  },
];

const outcome = {
  number: "\u2726",
  tag: "The Result",
  title: "What Your Team Leaves With",
  description:
    "Everyone leaves with a certificate, a personal AI strategy, and role-specific tools they can put to work immediately.",
  deliverableLabel: "Keep scrolling",
  deliverable: "See everything your team receives",
};

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" theme="light">
        <ScrollReveal>
        <div className="mb-12 space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-foreground/70">The Program</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Two Sessions. Real Deliverables.</h2>
          <p className="text-muted-foreground">Structured for working professionals, built around what they&rsquo;ll use after.</p>
        </div>
        </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sessions.map((session) => (
          <div key={session.number} className="h-full flex flex-col border-l-2 border-[var(--navy-deep)]/20 pl-6">
            <span className="text-5xl font-extralight tracking-tight text-[var(--navy-deep)]/25 md:text-6xl">{session.number}</span>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">{session.tag}</p>
            <h3 className="mt-3 text-lg font-semibold">{session.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{session.description}</p>
            <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3">
              <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {session.deliverableLabel}
              </span>
              <span className="text-sm font-medium">{session.deliverable}</span>
            </div>
          </div>
        ))}

        {/* Outcome step */}
        <div className="h-full flex flex-col border-l-2 border-[var(--navy-deep)] pl-6">
          <span className="text-5xl font-extralight tracking-tight text-[var(--navy-deep)]/25 md:text-6xl">{outcome.number}</span>
          <p className="mt-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">{outcome.tag}</p>
          <h3 className="mt-3 text-lg font-semibold">{outcome.title}</h3>
          <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{outcome.description}</p>
          <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3">
            <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {outcome.deliverableLabel}
            </span>
            <span className="text-sm font-medium">{outcome.deliverable}</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
