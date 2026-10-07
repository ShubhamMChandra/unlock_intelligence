/**
 * What: "Founding cohort pricing": seats drawn as lines (taken solid, open dashed), two plans, the estimate and the refund.
 * Why: Prices from one source of truth; the one estimate always shows its math.
 * How: Server component reading lib/constants.
 * Deps: StreamSection, constants, next/link.
 */
import Link from "next/link";
import { StreamSection } from "@/components/stream/stream-section";
import { pill, pillGhost } from "@/components/stream/styles";
import {
  FOUNDING_SPOTS_REMAINING,
  FOUNDING_SPOTS_TOTAL,
  INDIVIDUAL_FOUNDING_PRICE,
  INDIVIDUAL_REGULAR_PRICE,
  TEAM_FOUNDING_PRICE_LABEL,
  TEAM_REGULAR_PRICE_LABEL,
} from "@/lib/constants";

const seatPrice = (label: string) => label.replace("/seat", "");

export function Pricing() {
  const taken = FOUNDING_SPOTS_TOTAL - FOUNDING_SPOTS_REMAINING;
  const seats = (
    <div className="mt-[18px] flex flex-wrap items-center gap-1.5" role="img" aria-label={`${FOUNDING_SPOTS_REMAINING} of ${FOUNDING_SPOTS_TOTAL} founding seats open`}>
      {Array.from({ length: FOUNDING_SPOTS_TOTAL }, (_, i) =>
        i < taken ? (
          <i key={i} className="h-[26px] w-[3px] rounded-sm bg-ink opacity-35" />
        ) : (
          <i key={i} className="h-[26px] w-0 border-l-2 border-dashed border-ink" />
        ),
      )}
      <span className="ml-2.5 text-sm text-haze">
        {FOUNDING_SPOTS_REMAINING} of {FOUNDING_SPOTS_TOTAL} founding seats open
      </span>
    </div>
  );

  return (
    <StreamSection
      id="pricing"
      title="Founding cohort pricing"
      lead="Eight hours across two days. Founding seats are our lowest price, and the cohorts are small enough that your team works with the instructors directly. Ask for a proposal and we reply within one business day."
      aside={seats}
    >
      <div className="grid gap-3.5 md:grid-cols-2 md:gap-[18px]">
        <div className="grid content-start gap-2.5 rounded-[18px] bg-panel p-5">
          <p className="m-0 text-sm text-haze">Team training, private cohort of 5 or more</p>
          <p className="m-0 text-[40px] font-extrabold tabular-nums tracking-[-0.02em] [font-stretch:82%]">
            {seatPrice(TEAM_FOUNDING_PRICE_LABEL)}{" "}
            <small className="text-[15px] font-medium tracking-normal text-haze [font-stretch:100%]">a seat, then {seatPrice(TEAM_REGULAR_PRICE_LABEL)}</small>
          </p>
          <p className="m-0 font-serif text-[15.5px] text-haze">
            A private cohort scheduled around your team. Each person starts from a starter agent written for their role and leaves with a working agent, a map of one real process, the next three to five builds, and a certificate. Leadership gets an executive summary afterward. Volume pricing and invoicing available.
          </p>
          <Link href="/contact?type=corporate" className={`justify-self-start ${pill}`}>
            Request a proposal
          </Link>
        </div>
        <div className="grid content-start gap-2.5 rounded-[18px] bg-panel p-5">
          <p className="m-0 text-sm text-haze">Individual, open cohort</p>
          <p className="m-0 text-[40px] font-extrabold tabular-nums tracking-[-0.02em] [font-stretch:82%]">
            {INDIVIDUAL_FOUNDING_PRICE} <small className="text-[15px] font-medium tracking-normal text-haze [font-stretch:100%]">then {INDIVIDUAL_REGULAR_PRICE}</small>
          </p>
          <p className="m-0 font-serif text-[15.5px] text-haze">
            Both days live, a working agent of your own, a map of one real process, the next three to five builds, a certificate, and six months in the cohort community.
          </p>
          <Link href="/contact?type=individual" className={`justify-self-start ${pillGhost}`}>
            Ask for a seat
          </Link>
        </div>
        <p className="m-0 mt-1 max-w-[80ch] text-[13.5px] text-haze md:col-span-2">
          To size it, put your own numbers in: if one person spends 2.5 hours a week on steps an agent could run, at $75 an hour that is $9,750 a year (2.5 &times; $75 &times; 52).
        </p>
        <p className="m-0 max-w-[80ch] text-[13.5px] text-haze md:col-span-2">
          If your team finishes both days and doesn&rsquo;t feel it gained skills it can use, we refund the seats. One email is enough.
        </p>
      </div>
    </StreamSection>
  );
}
