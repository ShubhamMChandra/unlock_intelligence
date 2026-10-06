/**
 * What: Expandable day-by-day curriculum for the two-day program.
 * Why: Shows the choreography of what happens in the room without a wall of text.
 * How: Two columns (Day 1, Day 2), each with a promise and an accordion of beats.
 * Deps: next/link, Accordion, SectionWrapper, ScrollReveal, Button.
 */
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface Beat {
  number: number;
  title: string;
  description: string;
}

interface Day {
  label: string;
  title: string;
  promise: string;
  beats: Beat[];
}

const dayOne: Day = {
  label: "Day 1",
  title: "Personal unlock",
  promise:
    "Every attendee walks out with a Claude Project built on their own real work that does something they couldn\u2019t have done themselves in the time.",
  beats: [
    {
      number: 1,
      title: "Live demo on real data",
      description:
        "The instructor builds a Watchtower live on a volunteer\u2019s actual external dependency \u2014 a regulator, a competitor, a peer institution, whatever they should be tracking but aren\u2019t. Multi-step web search, synthesis, structured output. The volunteer\u2019s reaction is the lesson.",
    },
    {
      number: 2,
      title: "The matrix, filled live",
      description:
        "An empty five-column matrix goes up on the projector. The room fills every cell for the demo they just watched: people, tools, trainings, guardrails, metrics. The framework gets its name only after the cells are full. It is never taught as theory \u2014 it is the description of what the room just did.",
    },
    {
      number: 3,
      title: "Personalized build \u2014 your Watchtower",
      description:
        "Each attendee opens a Claude Project starter written for them personally, tailored to their actual external dependency, with a \u201cwhy this works\u201d annotation on every line. They paste it into Claude, personalize it, and run it on their own inputs. The instructor circulates, hardest cases first.",
    },
    {
      number: 4,
      title: "Second pass \u2014 build, run, tighten",
      description:
        "Each attendee reads their first output honestly and runs the Project a second time with one change they make themselves. \u201cBuild, run, tighten\u201d becomes a lived cadence, not a closing line. This is where most of the framework intuition gets built.",
    },
    {
      number: 5,
      title: "Structured share across the room",
      description:
        "Four attendees present; the rest are projected. The cross-industry thesis lands empirically: the same pattern, radically different outputs. Then a close that names what every attendee just touched in matrix terms and previews Day 2.",
    },
  ],
};

const dayTwo: Day = {
  label: "Day 2",
  title: "Scaffolding through application",
  promise:
    "Every attendee walks out with a horizontal map of one real process and starter paragraphs for the next three to five builds already drafted. Not a strategy document \u2014 a queue.",
  beats: [
    {
      number: 1,
      title: "Pick the process you\u2019ve been postponing",
      description:
        "Not the easiest process. Not the team\u2019s biggest. The one that matters and you keep avoiding. Each attendee writes a one-paragraph \u201ctoday\u201d description of how it currently works. The criterion is stakes, not scope \u2014 and resistance to picking it is the signal.",
    },
    {
      number: 2,
      title: "Map the process across the matrix",
      description:
        "Each attendee fills a five-column, two-row matrix for the process they picked: people, tools, trainings, guardrails, metrics, in both \u201ctoday\u201d and \u201crebuilt\u201d states. The instructor coaches the room through it as a live build. The output is a one-page horizontal map with AI insertion points marked.",
    },
    {
      number: 3,
      title: "Extract the next three to five builds",
      description:
        "For each AI insertion point on the map, the attendee writes a starter paragraph \u2014 role, context, inputs, criteria, verification. They walk out with three to five pre-seeded next builds. Monday they paste the first one. Tuesday they paste the second. The cadence is built into the artifact.",
    },
    {
      number: 4,
      title: "Pair pressure-test across roles",
      description:
        "Pair up across roles. Each attendee shares one thing they noticed about their map \u2014 usually the surprise: a guardrail that wasn\u2019t there, a metric they couldn\u2019t name, a person whose role was being conflated. The peer either confirms or pressure-tests. The cheapest way to surface blind spots without a lecture.",
    },
    {
      number: 5,
      title: "Close \u2014 one named action for Monday",
      description:
        "Certificate, peer reflection, and a single named action for Monday morning. Plus the framing that makes the queue last: a pattern that produces more queues, and a horizontal lens that turns the next stuck process into the next solved one.",
    },
  ],
};

function DayColumn({ day }: { day: Day }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[var(--navy)]" />
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-foreground/55">
          {day.label}
        </p>
      </div>
      <h3 className="text-xl font-medium tracking-[-0.01em]">{day.title}</h3>
      <p className="mt-2 mb-5 max-w-[48ch] text-sm leading-relaxed text-foreground/65">
        {day.promise}
      </p>
      <Accordion>
        {day.beats.map((beat) => (
          <AccordionItem key={beat.number} className="border-white/[0.06]">
            <AccordionTrigger className="py-4 text-sm font-medium">
              <span>
                <span className="mr-3 font-mono text-xs text-muted-foreground">
                  {String(beat.number).padStart(2, "0")}
                </span>
                {beat.title}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm leading-relaxed text-muted-foreground">{beat.description}</p>
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
      <ScrollReveal>
        <div className="mb-12 space-y-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-foreground/55">Curriculum</p>
          <h2 className="text-3xl font-medium tracking-[-0.022em] sm:text-4xl md:text-5xl">What happens in the room</h2>
          <p className="text-foreground/65 max-w-[56ch]">
            Two half-days. Two builds on your real work. A queue of next builds ready to paste Monday.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <DayColumn day={dayOne} />
        <DayColumn day={dayTwo} />
      </div>

      <div className="mt-12">
        <Button
          size="lg"
          className="h-11 w-full sm:w-auto rounded-none bg-foreground px-7 text-[15px] font-medium text-background transition-colors duration-150 hover:bg-foreground/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          render={<Link href="/contact" />}
        >
          Request a curriculum walkthrough
        </Button>
      </div>
    </SectionWrapper>
  );
}
