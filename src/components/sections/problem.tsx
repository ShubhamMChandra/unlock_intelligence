"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { GradientDivider } from "@/components/ui/gradient-divider";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const negativeItems = [
  "Teams using AI sporadically with no shared framework",
  "No shared vocabulary or framework for how to use AI well",
  "No internal standard for evaluating AI output quality",
  "Other companies in your industry are training their teams \u2014 creating a gap that widens every quarter",
  "Training options are either 8-week courses nobody finishes or YouTube",
  "The gap between AI-curious and AI-competent keeps growing",
];

export function Problem() {
  return (
    <>
      <GradientDivider direction="dark-to-light" />
      <SectionWrapper id="problem" theme="light">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
          {/* Copy column */}
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-foreground/70">The Reality</p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The AI Skills Gap Is Already<br />Costing You.
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                You&rsquo;ve seen the potential. Leadership is talking about AI transformation. But across the organization, adoption looks the same: a handful of early adopters experimenting in isolation, no shared playbook, and no way to measure whether the output is actually good.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The gap between &ldquo;we should use AI&rdquo; and &ldquo;we use AI well&rdquo; doesn&rsquo;t close on its own. It closes when someone gives your people a shared framework, practical reps, and a standard to work from. That&rsquo;s what this program delivers.
              </p>

              <blockquote className="border-l-2 border-indigo-400/50 pl-5 italic text-foreground/80">
                &ldquo;Your people don&rsquo;t need to become engineers.
                They need to become <GradientText>confident, competent users</GradientText> of the tools
                engineers build.&rdquo;
              </blockquote>
            </div>
          </ScrollReveal>

          {/* Negative checklist card */}
          <ScrollReveal delay={200}>
            <GlassCard className="border-red-500/10 bg-red-500/[0.02]">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                What&rsquo;s actually happening across teams
              </p>
              <ul className="space-y-3">
                {negativeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto min-h-[44px] bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-600 hover:to-violet-600"
              render={<Link href="/contact" />}
            >
              Talk to Us About Your Team &rarr;
            </Button>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
