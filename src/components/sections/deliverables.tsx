/**
 * What: Icon grid of tangible artifacts the team walks out with.
 * Why: Concrete proof of value — three working artifacts, three credentials.
 * How: GlassCard grid with inline icon layout, ScrollReveal on sections.
 * Deps: lucide icons, SectionWrapper, GlassCard, GradientDivider, ScrollReveal.
 */
"use client";

import { Radar, GitBranch, ListChecks, Award, FileText, Users } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientDivider } from "@/components/ui/gradient-divider";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const deliverables = [
  {
    icon: Radar,
    title: "A working Watchtower",
    description:
      "A Claude Project on your real external dependency. Used Monday, again on the 8th, again on the 15th.",
  },
  {
    icon: GitBranch,
    title: "A horizontal process map",
    description:
      "One real process \u2014 the one you\u2019ve been postponing \u2014 mapped across people, tools, trainings, guardrails, metrics.",
  },
  {
    icon: ListChecks,
    title: "An implementation queue",
    description:
      "Three to five starter paragraphs, pre-written in the room, ready to paste. Replaces the strategy doc nobody reads.",
  },
  {
    icon: Award,
    title: "Completion certificate",
    description: "For L&D records and professional profiles.",
  },
  {
    icon: FileText,
    title: "Executive summary",
    description:
      "A team competency report written for your leadership, not your L&D team.",
  },
  {
    icon: Users,
    title: "Six months of cohort access",
    description: "Peer pressure-test channel for your next builds.",
  },
];

export function Deliverables() {
  return (
    <>
      <GradientDivider direction="light-to-dark" />
      <SectionWrapper id="deliverables" className="tone-deliverables">
        <ScrollReveal>
          <div className="mb-8 space-y-2 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-foreground/55">
              Deliverables
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.022em] sm:text-4xl">
              What your team leaves with on Monday morning
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-foreground/70">
              Three working artifacts. Three credentials. Zero homework.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <GlassCard key={item.title} className="h-full p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--navy-deep)]/20">
                    <Icon className="h-5 w-5 text-[var(--navy)]" />
                  </div>
                  <h3 className="text-base font-medium">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">
                    {item.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
