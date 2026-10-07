/**
 * What: Founding cohort pricing — seat counter, two plans, guarantee.
 * Why: Conversion peak; price transparency for HR buyers.
 * How: Team plan on a raised surface, individual plan outlined.
 * Deps: next/link, Button, cn, constants.
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  FOUNDING_SPOTS_REMAINING,
  FOUNDING_SPOTS_TOTAL,
  INDIVIDUAL_FOUNDING_PRICE,
  INDIVIDUAL_REGULAR_PRICE,
  TEAM_FOUNDING_PRICE_LABEL,
  TEAM_REGULAR_PRICE_LABEL,
} from "@/lib/constants";

const seatsTaken = FOUNDING_SPOTS_TOTAL - FOUNDING_SPOTS_REMAINING;

export function Enroll() {
  return (
    <section id="enroll" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10 px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex flex-col gap-4 md:max-w-[560px]">
            <h2 className="text-[2rem] font-medium leading-[1.05] tracking-[-0.035em] md:text-[2.75rem]">
              Founding cohort pricing
            </h2>
            <p className="text-foreground/65">
              Founding members get our lowest price and direct access to the
              instructors to shape the curriculum. We send a proposal within
              one business day.
            </p>
          </div>
          <div className="flex items-center gap-3.5">
            <div
              role="img"
              aria-label={`${FOUNDING_SPOTS_REMAINING} of ${FOUNDING_SPOTS_TOTAL} founding seats open`}
              className="flex gap-1"
            >
              {Array.from({ length: FOUNDING_SPOTS_TOTAL }, (_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-5 w-3 rounded-[2px]",
                    i < seatsTaken ? "bg-foreground/25" : "border-[1.5px] border-foreground"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-foreground/60">
              {FOUNDING_SPOTS_REMAINING} of {FOUNDING_SPOTS_TOTAL} seats open
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-2xl bg-white/[0.035] p-6 ring-1 ring-white/[0.06] md:p-9">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-xl font-medium">Team Training</h3>
              <span className="text-[13px] text-foreground/60">Private cohort, 5+ seats</span>
            </div>
            <p className="flex flex-wrap items-baseline gap-2">
              <span className="text-5xl font-medium tracking-[-0.04em] tabular-nums md:text-[3.25rem]">
                {TEAM_FOUNDING_PRICE_LABEL.replace("/seat", "")}
              </span>
              <span className="text-[15px] text-foreground/60">
                per seat, then {TEAM_REGULAR_PRICE_LABEL.replace("/seat", "")}
              </span>
            </p>
            <p className="text-[15px] leading-relaxed text-foreground/65">
              A private cohort with starters written for each attendee&rsquo;s
              actual role, scheduled around your team, with an executive
              summary for leadership afterward. Volume pricing and invoicing
              available.
            </p>
            <Button
              className="mt-auto h-12 w-full rounded-none bg-foreground text-[15px] font-medium text-background transition-colors duration-150 hover:bg-foreground/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              nativeButton={false}
              render={<Link href="/contact?type=corporate" />}
            >
              Request a proposal
            </Button>
          </div>

          <div className="flex flex-col gap-5 rounded-2xl p-6 ring-1 ring-white/10 md:p-9">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-xl font-medium">Individual Enrollment</h3>
              <span className="text-[13px] text-foreground/60">Open cohort</span>
            </div>
            <p className="flex flex-wrap items-baseline gap-2">
              <span className="text-5xl font-medium tracking-[-0.04em] tabular-nums md:text-[3.25rem]">
                {INDIVIDUAL_FOUNDING_PRICE}
              </span>
              <span className="text-[15px] text-foreground/60">
                per person, then {INDIVIDUAL_REGULAR_PRICE}
              </span>
            </p>
            <p className="text-[15px] leading-relaxed text-foreground/65">
              Both live sessions, a working Watchtower, a map of one real
              process, an implementation queue, a certificate, and six months
              in the cohort community.
            </p>
            <Button
              variant="outline"
              className="mt-auto h-12 w-full rounded-none border-foreground/35 bg-transparent text-[15px] font-medium text-foreground transition-colors duration-150 hover:bg-foreground/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Get started
            </Button>
          </div>
        </div>

        <div className="grid gap-4 text-sm leading-relaxed text-foreground/55 md:grid-cols-2 md:gap-12">
          <p>
            For scale: the average knowledge worker spends 2.5 hours a week on
            work AI could handle. At $75 an hour, that&rsquo;s $9,750 per
            person per year.
          </p>
          <p>
            If your team finishes both sessions and doesn&rsquo;t feel they
            gained usable skills, we refund you. No paperwork.
          </p>
        </div>
      </div>
    </section>
  );
}
