"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

const institutions = [
  { name: "University of Chicago", logo: "/images/logos/uchicago.png", invert: true },
  { name: "Digital Realty", logo: "/images/logos/digital-realty.png", invert: true },
  { name: "Garner Health", logo: "/images/logos/garner-health.svg", invert: false },
];

export function ProofBar() {
  return (
    <section className="relative border-y border-white/[0.04] bg-black/20 py-8" aria-label="Instructor credentials">
      <ScrollReveal>
        <div className="mx-auto max-w-[1120px] px-6 flex flex-col items-center gap-5">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Our instructors have built AI systems at
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
            {institutions.map((inst) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={inst.name}
                src={inst.logo}
                alt={inst.name}
                className={`h-7 md:h-8 w-auto max-w-[140px] md:max-w-none opacity-60 ${
                  inst.invert ? "brightness-0 invert" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
