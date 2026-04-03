/**
 * What: Problem framing — editorial treatment with pain points.
 * Why: Explains pain before presenting the program solution.
 * How: Full-width editorial layout with prominent blockquote and ROI framing.
 * Deps: next/link, lucide, SectionWrapper, Button, GradientDivider.
 */
"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GradientDivider } from "@/components/ui/gradient-divider";

const negativeItems = [
  "Teams experimenting with AI individually, with no shared approach",
  "People prompting differently, no way to share what works",
  "No standard for judging whether AI output is good enough to use",
  "Competitors in your space are training their teams, and the gap widens every quarter",
  "The only options are 8-week courses nobody finishes, or YouTube",
  "Your best people are figuring it out alone and keeping it to themselves",
];

export function Problem() {
  return (
    <>
      <GradientDivider direction="dark-to-light" />
      <SectionWrapper id="problem" theme="light">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
          {/* Copy column — editorial, no label */}
          <div className="space-y-6">
            <h2 className="text-4xl font-light tracking-tight md:text-5xl">
              The AI Skills Gap Is Already
              <br />
              Costing You.
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Leadership is talking about AI transformation. But across the
              org, adoption looks the same everywhere: a handful of early
              adopters experimenting alone, no shared playbook, and no way to
              tell if the output is any good.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              That gap between &ldquo;we should use AI&rdquo; and &ldquo;we
              use AI well&rdquo; doesn&rsquo;t close on its own. It closes
              when someone gives your people a shared framework, hands-on
              practice, and a clear standard.
            </p>

            <blockquote className="border-l-2 border-[var(--navy-deep)]/50 pl-6 py-2">
              <p className="text-lg italic text-foreground/80 leading-relaxed">
                &ldquo;Your people don&rsquo;t need to become engineers. They
                need to become{" "}
                <span className="font-medium text-[var(--navy-deep)]">
                  good users
                </span>{" "}
                of the tools engineers build.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Negative checklist — no glass card, lighter treatment */}
          <div className="rounded-xl border border-red-500/10 bg-red-500/[0.02] p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              What&rsquo;s actually happening across teams
            </p>
            <ul className="space-y-4">
              {negativeItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground/80"
                >
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ROI framing — ammunition for the champion to forward */}
        <div className="mt-12 rounded-xl border border-foreground/[0.06] bg-foreground/[0.02] px-6 py-5 text-center">
          <p className="text-lg font-medium text-foreground/90">
            The average knowledge worker spends{" "}
            <span className="font-bold text-[var(--navy-deep)]">
              2.5 hours per week
            </span>{" "}
            on tasks AI could handle.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            At $75/hour, that&rsquo;s $9,750 per employee per year in
            recoverable time.
          </p>
        </div>

        {/* Industry stats strip */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              value: "82%",
              label:
                "of enterprises invest in AI training, yet 59% still report a skills gap",
              source: "DataCamp, 2026",
            },
            {
              value: "$5.5T",
              label:
                "in market performance at risk from the global AI skills gap",
              source: "IDC, 2026",
            },
            {
              value: "2\u00d7",
              label:
                "higher AI ROI for organizations with mature upskilling programs",
              source: "DataCamp, 2026",
            },
          ].map((stat) => (
            <div key={stat.value} className="text-center sm:text-left">
              <span className="text-2xl font-bold text-[var(--navy-deep)] md:text-3xl">
                {stat.value}
              </span>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-1 text-xs italic text-foreground/40">
                {stat.source}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="w-full sm:w-auto min-h-[44px] bg-[var(--navy-deep)] text-white hover:bg-[#15293F]"
            render={<Link href="/contact" />}
          >
            Talk to Us About Your Team &rarr;
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
