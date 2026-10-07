/**
 * What: Who teaches it — credentials copy beside instructor portraits.
 * Why: Instructor credentials are the strongest pre-launch proof.
 * How: Two-column layout, square next/image portraits, no cards.
 * Deps: next/image, next/link.
 */
import Image from "next/image";
import Link from "next/link";

const members = [
  {
    name: "Shubham Chandra",
    role: "Head of Curriculum",
    image: "/images/team/team-member-2.jpg",
    bio: "Teaches AI-driven entrepreneurship at the University of Chicago and builds AI automation systems at Digital Realty. MS in Computer Science, University of Chicago.",
  },
  {
    name: "J.T. O’Connor",
    role: "Program Director",
    image: "/images/team/team-member-1.JPEG",
    bio: "Your main point of contact from first conversation through delivery. Background in operations and business development, building AI-powered marketing and outreach systems.",
  },
];

export function Team() {
  return (
    <section id="team" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-12 px-4 sm:px-6 md:flex-row md:gap-16">
        <div className="flex flex-col items-start gap-5 md:max-w-[420px] md:flex-1">
          <h2 className="text-[2rem] font-medium leading-[1.05] tracking-[-0.035em] md:text-[2.75rem]">
            Who teaches it
          </h2>
          <p className="text-[17px] leading-relaxed text-foreground/65">
            Our team teaches at the University of Chicago and builds AI at
            Digital Realty and Garner Health. The workflows taught here are the
            kind we build at work.
          </p>
          <Link
            href="/team"
            className="inline-flex min-h-11 items-center text-sm font-medium text-foreground/70 underline decoration-foreground/25 underline-offset-[6px] transition-colors hover:text-foreground hover:decoration-foreground/60"
          >
            Meet the full team
          </Link>
        </div>

        <div className="grid flex-1 gap-8 sm:grid-cols-2">
          {members.map((member) => (
            <div key={member.name} className="flex flex-col gap-3">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover saturate-[0.85]"
                  style={{ objectPosition: "center 15%" }}
                  sizes="(max-width: 640px) 100vw, 320px"
                />
              </div>
              <h3 className="text-[17px] font-medium">{member.name}</h3>
              <p className="-mt-1.5 text-sm text-foreground/70">{member.role}</p>
              <p className="text-sm leading-relaxed text-foreground/60">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
