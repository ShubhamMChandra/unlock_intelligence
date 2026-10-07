/**
 * What: "Two days, in the room": the program, day one and day two, each headed by its own line.
 * Why: Day one is one person's line going from dashed to solid; day two is the team's band.
 * How: Server component; two panels with small SVG lines and the real module lists.
 * Deps: StreamSection.
 */
import { StreamSection } from "@/components/stream/stream-section";

const DAYS = [
  {
    title: "Day one: one person's line",
    modules: [
      "Live demo on real data. The instructor builds an agent on a volunteer's real work.",
      "The room maps that demo across people, tools, trainings, guardrails and metrics.",
      "Each person builds their own, from a starter written for their role.",
      "Read the first output critically, fix what is wrong, and run it again.",
      "Everyone shares what they built. Same pattern, different outputs.",
    ],
    line: (
      <>
        <path d="M4 24 C 60 4, 110 34, 160 20" className="stroke-ink opacity-70 [stroke-dasharray:6_7] [stroke-width:1.4]" />
        <path d="M160 20 C 210 8, 250 30, 296 18" className="stroke-signal [stroke-width:2.6]" />
      </>
    ),
  },
  {
    title: "Day two: the team's stream",
    modules: [
      "Pick the process the team keeps postponing.",
      "Map it end to end, first as it runs today and then as it would run rebuilt, with the agent steps marked.",
      "List the next three to five agents to build.",
      "A peer from another role pressure-tests the map.",
      "One named action for Monday.",
    ],
    line: (
      <>
        <path d="M4 12 C 80 2, 150 30, 296 14" className="stroke-ink opacity-70 [stroke-width:1.3]" />
        <path d="M4 20 C 80 10, 150 38, 296 22" className="stroke-signal [stroke-width:2.6]" />
        <path d="M4 28 C 80 18, 150 46, 296 30" className="stroke-ink opacity-70 [stroke-width:1.3]" />
      </>
    ),
  },
];

export function TwoDays() {
  return (
    <StreamSection
      id="program"
      title="Two days, in the room"
      lead="Live, with your team, on your team's real work: eight hours across two days. On day one each person builds one agent for their own job. On day two the team rebuilds one shared process together."
    >
      <div className="grid gap-3.5 md:grid-cols-2 md:gap-[18px]">
        {DAYS.map((d) => (
          <div key={d.title} className="rounded-[18px] bg-panel px-[18px] pb-2 pt-[18px]">
            <svg viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true" className="block h-[34px] w-full overflow-visible fill-none [stroke-linecap:round]">
              {d.line}
            </svg>
            <h3 className="mb-1.5 mt-2.5 text-[17px] font-bold [font-stretch:88%]">{d.title}</h3>
            <ol className="m-0 list-decimal pl-5 font-serif text-[15.5px] text-haze">
              {d.modules.map((m) => (
                <li key={m} className="py-1">
                  {m}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </StreamSection>
  );
}
