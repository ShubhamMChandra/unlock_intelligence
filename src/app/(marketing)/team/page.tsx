/**
 * What: The team page. Opens on the stream: one UChicago line parts into Shubham's and J.T.'s paths
 *       and meets again in the band, your team's room. Then each full bio.
 * Why: Answers "why these people?" with the verified bios, in the same object as the homepage.
 * How: Server page; the strip is the only client piece.
 * Deps: TeamStrip, TeamBio, team-copy, stream/styles, next/link.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { TeamStrip } from "@/components/stream/team/team-strip";
import { TeamBio } from "@/components/stream/team/team-bio";
import { TEAM } from "@/components/stream/team/team-copy";
import { pill } from "@/components/stream/styles";

export const metadata: Metadata = {
  title: "The team",
  description: "The two people who run the room. Practitioners who build AI systems in production, and teach your team to do the same.",
};

export default function TeamPage() {
  return (
    <main className="pb-[max(5rem,calc(1.5rem+env(safe-area-inset-bottom)))]">
      <div className="mx-auto max-w-[1160px] px-4 pt-8 md:px-8 md:pt-14">
        <h1 className="m-0 max-w-[16ch] text-[34px] font-extrabold leading-[0.98] tracking-[-0.015em] [font-stretch:80%] md:text-[54px]">
          The two people who run the room.
        </h1>
        <p className="mt-3 max-w-[40ch] font-serif text-[17px] text-haze md:text-[19px]">
          Practitioners who build AI systems in production, and teach your team to do the same.
        </p>
      </div>

      <TeamStrip />

      <div className="mt-10 space-y-14 md:mt-14 md:space-y-20">
        {TEAM.map((person, i) => (
          <TeamBio key={person.id} person={person} priority={i === 0} />
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-[1160px] px-4 md:mt-24 md:px-8">
        <div className="border-t border-rule pt-8">
          <Link href="/contact" className={pill}>
            Bring us one process
          </Link>
        </div>
      </div>
    </main>
  );
}
