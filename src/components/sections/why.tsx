"use client";

import { Monitor, Target, Clock } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const cards = [
  {
    icon: Monitor,
    title: "Live, Not Recorded",
    description:
      "This isn\u2019t a course you watch alone at 2am. It\u2019s a live, cohort-based experience with real-time instruction, peer exercises, and direct feedback.",
  },
  {
    icon: Target,
    title: "Outcomes, Not Theory",
    description:
      "You leave with a prompt playbook, a workflow map, and a 90-day AI strategy document \u2014 all built around your actual role.",
  },
  {
    icon: Clock,
    title: "8 Hours, Not 8 Weeks",
    description:
      "Designed for busy professionals. Two focused sessions, no homework, no prerequisites. From zero to authority in a single weekend.",
  },
];

export function Why() {
  return (
    <SectionWrapper id="why">
      <ScrollReveal>
        <div className="mb-12 space-y-2">
          <span className="font-mono text-xs tracking-wider text-muted-foreground">
            // why-us
          </span>
          <p className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
            Why This Program
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built Different. On Purpose.
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 100}>
            <GlassCard className="h-full">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                <card.icon className="h-5 w-5 text-indigo-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
