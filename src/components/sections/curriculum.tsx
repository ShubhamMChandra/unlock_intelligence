/**
 * What: Expandable curriculum modules per session.
 * Why: Depth without wall of text on first view.
 * How: Accordion lists modules; links to contact for teams.
 * Deps: next/link, Accordion, SectionWrapper, ScrollReveal, Button.
 */
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
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
      title: "How AI Works (Without the Math)",
      description:
        "The mental model you need. Why AI is probabilistic, not deterministic, and what that means for how you use it.",
    },
    {
      number: 2,
      title: "The Prompt Engineering Discipline",
      description:
        "How to go from guessing to precision. The anatomy of a great prompt. Role-framing, context injection, and chain-of-thought \u2014 the techniques worth learning.",
    },
    {
      number: 3,
      title: "Your AI Toolkit",
      description:
        "What\u2019s out there besides ChatGPT. Writing, analysis, image, voice, research, and automation tools \u2014 and when to use which.",
    },
    {
      number: 4,
      title: "Building Your First AI Workflow",
      description:
        "Live workshop: pick a task you do every week and replace it with an AI-assisted workflow. You leave with something that works.",
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
        "A four-step framework for driving AI adoption on your team: Identify \u2192 Automate \u2192 Amplify \u2192 Lead.",
    },
    {
      number: 6,
      title: "Advanced Prompting & Evaluation",
      description:
        "How to check AI output. How to spot hallucinations. Iteration and calibration techniques so you can trust what you get back.",
    },
    {
      number: 7,
      title: "Leading AI Adoption",
      description:
        "How to bring AI into your team without getting pushback. The 5-minute pitch to your manager. Ethics and trust basics.",
    },
    {
      number: 8,
      title: "Your Personal AI Authority Plan",
      description:
        "Build a 90-day roadmap for how you\u2019ll use AI. Certificate session and peer review of your strategy. You walk out with a plan.",
    },
  ],
};

function SessionColumn({ session }: { session: typeof sessionOne }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2 text-sm font-medium">
        <span className="h-2 w-2 rounded-full bg-[var(--navy)]" />
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
  );
}

export function Curriculum() {
  return (
    <SectionWrapper id="curriculum" theme="dark" className="tone-curriculum">
          <div className="mb-12 space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Curriculum</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What You&rsquo;ll Learn</h2>
            <p className="text-muted-foreground">Eight modules. Everything maps to your job.</p>
          </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <SessionColumn session={sessionOne} />
          <SessionColumn session={sessionTwo} />
        </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto min-h-[44px] bg-[var(--navy-deep)] text-white hover:bg-[#15293F]"
              render={<Link href="/contact" />}
            >
              Request a Curriculum Walkthrough &rarr;
            </Button>
          </div>
      </SectionWrapper>
  );
}
