/**
 * What: "What changes by Monday": what an agent runs, beside what a person keeps.
 * Why: The stream's two colours as a decision your team makes: amber for agents, ink for people.
 * How: Server component; two lists, amber marks only the agent list.
 * Deps: StreamSection.
 */
import { StreamSection } from "@/components/stream/stream-section";

const RUNS = [
  ["Weekly status report", "Drafted from the tracker. You read it, you send it."],
  ["Match transactions", "Runs nightly. Exceptions come to a person."],
  ["Draft offer letters", "Drafted from approved templates."],
];
const KEEPS = [
  ["Approve journal entries", "Stays with the controller."],
  ["Hiring decisions", "Always a person's call."],
  ["Key client renewals", "The relationship stays with the account owner."],
];

function List({ heading, items, agent }: { heading: string; items: string[][]; agent?: boolean }) {
  return (
    <div>
      <h3 className="mb-1.5 text-sm font-semibold text-haze">{heading}</h3>
      <ul className="m-0 list-none p-0">
        {items.map(([title, note]) => (
          <li key={title} className="border-b border-rule py-[11px]">
            <span className="flex items-center gap-2 text-[15.5px] font-semibold">
              {agent && <span aria-hidden="true" className="inline-block h-0.5 w-4 rounded-[1px] bg-signal" />}
              {title}
            </span>
            <span className="font-serif text-[15px] text-haze">{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ByMonday() {
  return (
    <StreamSection
      id="monday"
      title="What changes by Monday"
      lead="Your team decides what an agent runs and which calls stay with people, then builds the agents. Here is how that split can look."
    >
      <div className="grid gap-[22px] md:grid-cols-2 md:gap-8">
        <List heading="An agent runs it" items={RUNS} agent />
        <List heading="A person keeps it" items={KEEPS} />
      </div>
    </StreamSection>
  );
}
