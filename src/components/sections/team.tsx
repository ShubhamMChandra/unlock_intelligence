"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const members = [
  {
    name: "Shubham Chandra",
    role: "Head of Curriculum",
    image: "/images/team/team-member-2.png",
    bio: "Builds AI automation systems at Digital Realty and teaches AI-driven entrepreneurship at the University of Chicago. Former strategy lead at NJOY (acquired by Altria for $2.8B) and Head of Business Ops at Garner Health.",
    imageStyle: { objectPosition: "center 35%" } as const,
    wrapperClassName: "",
  },
  {
    name: "J.T. O\u2019Connor",
    role: "Head of Partnerships",
    image: "/images/team/team-member-1.JPEG",
    bio: "Background spanning public equities and real estate \u2014 built marketing and outreach systems across industries. Brings a deal-maker\u2019s instinct for what moves people and a builder\u2019s eye for AI-powered workflows.",
    imageStyle: {} as const,
    wrapperClassName: "scale-[1.65] origin-[center_0%]",
  },
];

export function Team() {
  return (
    <SectionWrapper id="team">
      <ScrollReveal>
        <div className="mb-12 space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
            Your Instructors
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built by Practitioners
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2">
        {members.map((member, i) => (
          <ScrollReveal key={member.name} delay={i * 100}>
            <GlassCard className="h-full overflow-hidden p-0">
              <div className="relative h-64 w-full overflow-hidden">
                <div className={member.wrapperClassName + " relative h-full w-full"}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={member.imageStyle}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-indigo-400">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
