"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GradientDivider } from "@/components/ui/gradient-divider";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const sessionOne = {
  title: "Session One \u2014 Foundation & Fluency",
  modules: [
    {
      number: 1,
      title: "How AI Actually Works (Without the Math)",
      description:
        "The mental model every non-technical professional needs. Why AI is probabilistic, not deterministic \u2014 and why that changes how you use it.",
    },
    {
      number: 2,
      title: "The Prompt Engineering Discipline",
      description:
        "From guessing to precision. The anatomy of a great prompt. Role-framing, context injection, and chain-of-thought techniques that actually work.",
    },
    {
      number: 3,
      title: "Your AI Toolkit",
      description:
        "Beyond ChatGPT. Mapping the landscape: writing, analysis, images, voice, research, and automation tools. Know what to reach for and when.",
    },
    {
      number: 4,
      title: "Building Your First AI Workflow",
      description:
        "Live workshop: replace a recurring manual task with an AI system. You leave with one real, working workflow built around your actual job.",
    },
  ],
};

const sessionTwo = {
  title: "Session Two \u2014 Strategy & Mastery",
  modules: [
    {
      number: 5,
      title: "AI Strategy for Your Role",
      description:
        "How to position yourself as the AI driver in your team. Framework: Identify \u2192 Automate \u2192 Amplify \u2192 Lead. Practical, role-specific playbooks.",
    },
    {
      number: 6,
      title: "Advanced Prompting & Evaluation",
      description:
        "Quality control for AI output. How to spot hallucinations. Iteration techniques and output calibration so you trust what AI gives you.",
    },
    {
      number: 7,
      title: "Leading AI Adoption",
      description:
        "How to bring AI into your team without resistance. The 5-minute AI pitch. The basics of ethics and trust that every AI champion needs.",
    },
    {
      number: 8,
      title: "Your Personal AI Authority Plan",
      description:
        "Build your 90-day AI implementation roadmap. Certificate session and peer review of your strategy documents. Leave with a plan, not just notes.",
    },
  ],
};

function SessionColumn({ session, delay = 0 }: { session: typeof sessionOne; delay?: number }) {
  return (
    <ScrollReveal delay={delay}>
      <div>
        <div className="mb-4 flex items-center gap-2 text-sm font-medium">
          <span className="h-2 w-2 rounded-full bg-indigo-400" />
          {session.title}
        </div>
        <Accordion>
          {session.modules.map((mod) => (
            <AccordionItem key={mod.number} className="border-white/[0.06]">
              <AccordionTrigger className="py-4 text-sm font-medium hover:no-underline">
                <span>
                  <span className="mr-2 font-mono text-xs text-muted-foreground">
                    Module {mod.number}:
                  </span>
                  {mod.title}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{mod.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ScrollReveal>
  );
}

export function Curriculum() {
  return (
    <>
      <GradientDivider direction="light-to-dark" />
      <SectionWrapper id="curriculum" theme="dark">
        <ScrollReveal>
          <div className="mb-12 space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Curriculum</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What You&rsquo;ll Actually Learn</h2>
            <p className="text-muted-foreground">No fluff. No theory for theory&rsquo;s sake. Everything maps to your job.</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <SessionColumn session={sessionOne} />
          <SessionColumn session={sessionTwo} delay={150} />
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-600 hover:to-violet-600"
              render={<Link href="/contact" />}
            >
              Request a Curriculum Walkthrough &rarr;
            </Button>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
