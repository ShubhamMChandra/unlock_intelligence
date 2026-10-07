/**
 * What: "Who runs the room": the two people behind the program, with a link to their full bios.
 * Why: Credentials are the strongest pre-launch proof; they stay short here and long on /team.
 * How: Server component; two columns under hairlines.
 * Deps: StreamSection, next/link.
 */
import Link from "next/link";
import { StreamSection } from "@/components/stream/stream-section";
import { textLink } from "@/components/stream/styles";

const PEOPLE = [
  {
    name: "Shubham Chandra",
    role: "Head of Curriculum",
    bio: "Teaches AI-driven entrepreneurship at the University of Chicago. By day he builds AI automation systems at Digital Realty, which is where the workflows in this program come from.",
  },
  {
    name: "J.T. O’Connor",
    role: "Program Director",
    bio: "Your point of contact from the first conversation through delivery. He comes from operations and business development, and has built AI-powered marketing and outreach systems himself.",
  },
];

export function Faculty() {
  return (
    <StreamSection id="faculty" title="Who runs the room" lead="Two people who build AI systems in their own jobs, and teach your team to build their own.">
      <div className="grid gap-4 md:grid-cols-2 md:gap-7">
        {PEOPLE.map((p) => (
          <div key={p.name} className="border-t border-rule pt-3.5">
            <h3 className="m-0 text-[19px] font-bold [font-stretch:86%]">{p.name}</h3>
            <p className="m-0 text-sm text-haze">{p.role}</p>
            <p className="mt-2 font-serif text-[15.5px] text-haze">{p.bio}</p>
          </div>
        ))}
        <Link href="/team" className={`text-[15px] ${textLink}`}>
          Meet the team
        </Link>
      </div>
    </StreamSection>
  );
}
