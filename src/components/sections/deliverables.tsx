/**
 * What: Icon grid of tangible workshop outputs.
 * Why: Shows concrete artifacts buyers receive from training.
 * How: Simple icon + text grid with spacing, no card containers.
 * Deps: lucide icons, SectionWrapper, GradientDivider.
 */

import { BookOpen, GitBranch, Map, Award, FileText, Users } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GradientDivider } from "@/components/ui/gradient-divider";

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
      <SectionWrapper id="deliverables" className="tone-deliverables">
        <div className="mb-8 space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
            Deliverables
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What You Leave With
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Documents and tools, not just slides.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {deliverables.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-4 md:p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                    <Icon className="h-4.5 w-4.5 text-foreground/60" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
}
