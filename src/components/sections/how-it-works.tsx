"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const sessions = [
  {
    number: "01",
    tag: "Session 1 \u00B7 4 Hours",
    title: "Foundation & Fluency",
    description:
      "Build the mental model. Learn the real vocabulary. Master prompting as a discipline, not a guessing game.",
    deliverableLabel: "Deliverable",
    deliverable: "Prompt playbook customized to your team\u2019s workflows",
  },
  {
    number: "02",
    tag: "Session 2 \u00B7 4 Hours",
    title: "Strategy & Mastery",
    description:
      "Go beyond individual tools into systems. Automate your workflows. Walk into any room and lead the AI conversation.",
    deliverableLabel: "Deliverable",
    deliverable: "Workflow automation map for your team\u2019s operations",
  },
];

const outcome = {
  number: "\u2726",
  tag: "The Result",
  title: "What Your Team Leaves With",
  description:
    "Every participant leaves with a certified skill set, a personal AI strategy document, and role-specific prompts and workflows they can use immediately.",
  deliverableLabel: "For your records",
  deliverable: "Executive summary of team-wide competency gains",
};

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" theme="light">
      <ScrollReveal>
        <div className="mb-12 space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-foreground/70">The Program</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Two Sessions. Real Deliverables.</h2>
          <p className="text-muted-foreground">Structured for professionals. Built around real outcomes.</p>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sessions.map((session, i) => (
          <ScrollReveal key={session.number} delay={i * 100}>
            <GlassCard className="h-full flex flex-col">
              <GradientText className="text-2xl font-bold">{session.number}</GradientText>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{session.tag}</p>
              <h3 className="mt-3 text-lg font-semibold">{session.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{session.description}</p>
              <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3">
                <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {session.deliverableLabel}
                </span>
                <span className="text-sm font-medium">{session.deliverable}</span>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}

        {/* Outcome card */}
        <ScrollReveal delay={200}>
          <GlassCard className="h-full flex flex-col border-indigo-400/10 bg-indigo-500/[0.03]">
            <GradientText className="text-2xl font-bold">{outcome.number}</GradientText>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{outcome.tag}</p>
            <h3 className="mt-3 text-lg font-semibold">{outcome.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{outcome.description}</p>
            <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3">
              <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {outcome.deliverableLabel}
              </span>
              <span className="text-sm font-medium">{outcome.deliverable}</span>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
