"use client";

import { BookOpen, GitBranch, Map, Award, FileText, Users } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GradientDivider } from "@/components/ui/gradient-divider";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const deliverables = [
  { icon: BookOpen, title: "Prompt Playbook", description: "Customized to your role and workflows" },
  { icon: GitBranch, title: "Workflow Automation Map", description: "Ready to implement Monday morning" },
  { icon: Map, title: "90-Day AI Strategy", description: "Your personal implementation roadmap" },
  { icon: Award, title: "Completion Certificate", description: "For L&D records and LinkedIn" },
  { icon: FileText, title: "Executive Summary", description: "Team competency report for leadership" },
  { icon: Users, title: "6-Month Community Access", description: "Ongoing peer support and resources" },
];

export function Deliverables() {
  return (
    <>
      <GradientDivider direction="light-to-dark" />
      <SectionWrapper id="deliverables">
        <ScrollReveal>
          <div className="mb-12 space-y-2 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
              What You Leave With
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What You Leave With
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Documents and tools, not just slides.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {deliverables.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="h-full rounded-xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-xl md:p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                    <Icon className="h-5 w-5 text-indigo-400" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold md:text-base">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
}
