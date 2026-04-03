"use client";

import Link from "next/link";
import { Check, Star } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";

const professionalFeatures = [
  "Both live sessions (8 hours total)",
  "Full curriculum access + session recordings",
  "Private cohort community (6 months)",
  "Prompt playbook tailored to your role",
  "Personal AI Authority Plan (yours to keep)",
  "Certificate of completion",
];

const corporateFeatures = [
  "5+ seats, custom scheduling",
  "Role-specific curriculum tailoring",
  "Private cohort for your team only",
  "Executive summary report post-program",
  "Volume pricing & invoicing available",
];

export function Enroll() {
  return (
    <SectionWrapper id="enroll">
      <ScrollReveal>
        <div className="mb-12 space-y-2 text-center">
          <span className="font-mono text-xs tracking-wider text-muted-foreground">
            // enroll
          </span>
          <p className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
            Enroll
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            One Decision That Pays for Itself
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Investment details are shared directly &mdash; every engagement is
            tailored. Reach out and we&rsquo;ll get back to you within one
            business day.
          </p>
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {/* Professional Seat */}
        <ScrollReveal>
          <GlassCard className="relative h-full border-indigo-500/30 bg-indigo-500/[0.04]">
            <span className="mb-4 inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
              For Individuals
            </span>
            <h3 className="mb-2 text-xl font-bold">Professional Seat</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Join an upcoming cohort as an individual. You&rsquo;ll work
              alongside a cohort of peers from different industries &mdash;
              which makes the learning richer.
            </p>
            <ul className="mb-8 space-y-3">
              {professionalFeatures.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground/80"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-600 hover:to-violet-600"
              render={<Link href="/contact" />}
            >
              Reserve Your Seat &rarr;
            </Button>
          </GlassCard>
        </ScrollReveal>

        {/* Corporate License */}
        <ScrollReveal delay={150}>
          <GlassCard className="h-full">
            <span className="mb-4 inline-block rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-muted-foreground">
              For Teams
            </span>
            <h3 className="mb-2 text-xl font-bold">Corporate License</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Bring the program to your team. We tailor the curriculum to your
              industry and run a private cohort for your people.
            </p>
            <ul className="mb-8 space-y-3">
              {corporateFeatures.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground/80"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              variant="outline"
              className="w-full"
              render={<Link href="/contact?type=corporate" />}
            >
              Contact Us &rarr;
            </Button>
          </GlassCard>
        </ScrollReveal>
      </div>

      {/* Guarantee */}
      <ScrollReveal>
        <div className="mt-12 flex items-start justify-center gap-3 text-center text-sm text-muted-foreground">
          <Star className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
          <p className="max-w-xl">
            If you complete both sessions and don&rsquo;t feel you&rsquo;ve
            gained immediately applicable skills, we&rsquo;ll refund you. No
            questions, no forms, no friction.
          </p>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
