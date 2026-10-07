/**
 * What: One person's bio on the team page: photo, name, role, the verified paragraphs and degree.
 * Why: The strip says who they are in a phrase; this is the long answer to "why these people?"
 * How: Server component. Phone: photo on top, kept small. Desktop: photo in a 300px left column.
 * Deps: next/image, team-copy.
 */
import Image from "next/image";
import type { TeamPerson } from "@/components/stream/team/team-copy";

interface TeamBioProps {
  person: TeamPerson;
  priority?: boolean;
}

export function TeamBio({ person, priority = false }: TeamBioProps) {
  const [intro, ...rest] = person.paragraphs;
  return (
    <section
      id={person.id}
      aria-labelledby={`${person.id}-name`}
      className="mx-auto grid max-w-[1160px] scroll-mt-6 gap-5 border-t border-rule px-4 pt-8 md:px-8 min-[900px]:grid-cols-[300px_minmax(0,1fr)] min-[900px]:gap-12 min-[900px]:pt-12"
    >
      <div className="relative aspect-[4/5] w-[168px] overflow-hidden bg-panel min-[900px]:w-full">
        <Image
          src={person.image}
          alt={`Portrait of ${person.name}`}
          fill
          sizes="(min-width: 900px) 300px, 168px"
          priority={priority}
          className="object-cover grayscale"
          style={{ objectPosition: person.imagePosition }}
        />
      </div>
      <div className="min-w-0 max-w-[64ch]">
        <h2 id={`${person.id}-name`} className="m-0 text-[26px] font-extrabold leading-[1.05] tracking-[-0.01em] [font-stretch:82%] md:text-[32px]">
          {person.name}
        </h2>
        <p className="mt-1 text-[14px] font-medium text-haze">{person.role}</p>
        <p className="mt-5 font-serif text-[18px] leading-[1.55] text-ink md:text-[19.5px]">{intro}</p>
        {rest.map((p) => (
          <p key={p.slice(0, 24)} className="mt-4 font-serif text-[16px] leading-[1.65] text-ink/85 md:text-[17px]">
            {p}
          </p>
        ))}
        <p className="mt-5 text-[13.5px] text-haze">{person.degree}</p>
      </div>
    </section>
  );
}
