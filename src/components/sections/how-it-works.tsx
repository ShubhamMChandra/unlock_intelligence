/**
 * What: Preview of the two-day program shape — two builds, not two lectures.
 * Why: Sets up the curriculum beats below without duplicating them.
 * How: Three cards: Day 1, Day 2, and how it's taught. ScrollReveal on heading.
 * Deps: SectionWrapper, ScrollReveal.
 */
"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const cards = [
  {
    number: "01",
    tag: "Day 1 \u00B7 Half-day",
    title: "Personal unlock",
    description:
      "Each attendee builds a Claude Project on a real external dependency they should be tracking but aren\u2019t. They use it Monday, again on the 8th, again on the 15th. The framework gets named live, on the demo the room just watched.",
    deliverableLabel: "Walks out with",
    deliverable: "A working Watchtower",
  },
  {
    number: "02",
    tag: "Day 2 \u00B7 Half-day",
    title: "The process you\u2019ve been postponing",
    description:
      "Each attendee picks the process they\u2019ve been avoiding, maps it across people, tools, trainings, guardrails, and metrics, then writes starter paragraphs for the next three to five builds. A queue, not a strategy doc.",
    deliverableLabel: "Walks out with",
    deliverable: "A horizontal map and an implementation queue",
  },
  {
    number: "03",
    tag: "How it\u2019s taught",
    title: "Theory through doing",
    description:
      "No lecture block is longer than the build that earned it. Personalized starters for every attendee mean nobody stares at a blank prompt. The instructor circulates hardest cases first and names the matrix only after the room has already filled it.",
    deliverableLabel: "The method",
    deliverable: "Skills first. Framework named after the room has used it.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" theme="light">
      <ScrollReveal>
        <div className="mb-12 space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-foreground/55">The Program</p>
          <h2 className="text-3xl font-medium tracking-[-0.022em] sm:text-4xl">Two half-days. Two builds. A queue for Monday.</h2>
          <p className="max-w-[60ch] text-foreground/70">
            Every minute in the room is your team doing the work on their own jobs. The instructor coaches, then names the pattern after the room has already used it.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.number} className="h-full flex flex-col border-l-2 border-[var(--navy-deep)]/20 pl-6">
            <span className="text-4xl font-extralight tracking-tight text-[var(--navy-deep)]/25 sm:text-5xl md:text-6xl">{card.number}</span>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-foreground/55">{card.tag}</p>
            <h3 className="mt-3 text-lg font-medium">{card.title}</h3>
            <p className="mt-2 flex-1 text-sm text-foreground/70 leading-relaxed">{card.description}</p>
            <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3">
              <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-foreground/55">
                {card.deliverableLabel}
              </span>
              <span className="text-sm font-medium">{card.deliverable}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
