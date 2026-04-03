"use client";

import { X } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { GradientDivider } from "@/components/ui/gradient-divider";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const negativeItems = [
  "Used ChatGPT a few times, unsure why",
  "Watched an AI webinar, forgot it next week",
  "Feels like everyone else \u201Cgets it\u201D",
  "Avoids AI conversations in meetings",
  "Treating AI as just a search engine",
  "No system, no strategy, no confidence",
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
              <div className="space-y-1">
                <span className="font-mono text-xs tracking-wider text-muted-foreground">// the-reality</span>
                <p className="text-sm font-semibold uppercase tracking-wider text-foreground/70">The Reality</p>
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everyone&rsquo;s talking about AI.<br />Most people are falling behind.
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                AI isn&rsquo;t replacing people &mdash; it&rsquo;s replacing people who don&rsquo;t know how to use it. While the tools multiply daily, most professionals are stuck in the same loop: watching tutorials that don&rsquo;t stick, experimenting with ChatGPT without a real strategy, and quietly wondering if the person in the next meeting actually knows more than they do.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The gap between AI-aware and AI-fluent is widening fast. The ones who cross it first don&rsquo;t just survive the transition &mdash; they get promoted, they lead the strategy, they become indispensable.
              </p>

              <blockquote className="border-l-2 border-indigo-400/50 pl-5 italic text-foreground/80">
                &ldquo;You don&rsquo;t need to become an engineer.
                You need to become <GradientText>dangerous</GradientText> with the tools
                engineers build.&rdquo;
              </blockquote>
            </div>
          </ScrollReveal>

          {/* Negative checklist card */}
          <ScrollReveal delay={200}>
            <GlassCard className="border-red-500/10 bg-red-500/[0.02]">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Where most professionals actually are
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
      </SectionWrapper>
    </>
  );
}
