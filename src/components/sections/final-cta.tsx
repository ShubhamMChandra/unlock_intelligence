"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";

const metaItems = [
  "Founding cohort: Spring 2026",
  "Limited to 10 teams",
  "No technical background required",
];

export function FinalCTA() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1120px] px-6 text-center">
        <ScrollReveal>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            The Companies Investing in AI Fluency Now
            <br />
            <GradientText>Will Lead.</GradientText>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Early-moving teams build the workflows, habits, and institutional knowledge
            <br className="hidden sm:block" />
            that late adopters spend years trying to replicate.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-10">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-violet-500 px-8 py-3 text-base text-white hover:from-indigo-600 hover:to-violet-600"
              render={<Link href="/contact" />}
            >
              Get Your Custom Proposal &rarr;
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-muted-foreground">
            {metaItems.map((item, i) => (
              <span key={item} className="inline-flex items-center gap-2">
                {item}
                {i < metaItems.length - 1 && (
                  <span aria-hidden="true" className="text-muted-foreground/40">
                    &middot;
                  </span>
                )}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
