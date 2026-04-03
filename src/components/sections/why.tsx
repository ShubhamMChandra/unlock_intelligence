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
      "Every session is instructor-led with real-time Q&A, group exercises, and live feedback. Your team learns together, not in isolation.",
  },
  {
    icon: Target,
    title: "Outcomes, Not Theory",
    description:
      "Participants leave with a prompt playbook, a workflow automation map, and a 90-day AI strategy document \u2014 all customized to their roles.",
  },
  {
    icon: Clock,
    title: "8 Hours, Not 8 Weeks",
    description:
      "Two half-day sessions. No weeks of self-paced modules that never get finished. Your team is trained and applying skills within one week.",
  },
];

export function Why() {
  return (
    <SectionWrapper id="why">
      <ScrollReveal>
        <div className="mb-12 space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
            Why This Program
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why This Program Works
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
