/**
 * What: "What happens next" beside the contact form: three steps in sequence, the refund line, and email.
 * Why: The buyer wants to know what a note sets in motion before sending one.
 * How: Server component; a plain ordered list set in serif, then two short lines.
 * Deps: stream/styles.
 */
import { cn } from "@/lib/utils";
import { textLink } from "@/components/stream/styles";

const STEPS = [
  "We read your note and reply within one business day.",
  "We match you to a cohort, or scope a private one for your team.",
  "You get a confirmation, prep materials and calendar invites.",
];

export function WhatNext() {
  return (
    <aside aria-labelledby="what-next" className="min-[900px]:pt-[18px]">
      <h2 id="what-next" className="m-0 text-[20px] font-extrabold leading-[1.1] [font-stretch:82%] md:text-[22px]">
        What happens next
      </h2>
      <ol className="mt-4 grid list-decimal gap-3 pl-5 font-serif text-[16.5px] leading-[1.5] marker:font-stream marker:text-[14px] marker:text-haze">
        {STEPS.map((s) => (
          <li key={s} className="pl-1">
            {s}
          </li>
        ))}
      </ol>
      <p className="mt-6 border-t border-rule pt-5 font-serif text-[16.5px] leading-[1.5] text-haze">
        If you complete both sessions and don&rsquo;t feel you gained usable skills, we refund you. No paperwork.
      </p>
      <p className="mt-4 text-[15px]">
        Prefer email?{" "}
        <a href="mailto:hello@unlockintelligence.co" className={cn("font-semibold", textLink)}>
          hello@unlockintelligence.co
        </a>
      </p>
    </aside>
  );
}
