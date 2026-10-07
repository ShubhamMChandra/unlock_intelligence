/**
 * What: "Questions": the buyer's and the attendee's common questions, one tap to open each.
 * Why: Answers objections before the forward to a VP; the rule above an answer parts as it opens.
 * How: Server component; native details elements, so it works without JavaScript.
 * Deps: StreamSection, next/link.
 */
import Link from "next/link";
import { StreamSection } from "@/components/stream/stream-section";
import { textLink } from "@/components/stream/styles";

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is there a corporate or team option?",
    a: (
      <>
        Yes. For teams of five or more we offer custom scheduling, role-specific tailoring and volume pricing.{" "}
        <Link href="/contact?type=corporate" className={`text-ink ${textLink}`}>
          Ask for a proposal
        </Link>{" "}
        and we&rsquo;ll put one together.
      </>
    ),
  },
  {
    q: "How do you measure outcomes?",
    a: "Everyone takes a confidence assessment before and after. Your team then receives an executive summary with aggregated results, completion tracking and competency gains you can hand straight to L&D.",
  },
  {
    q: "Do I need any technical background?",
    a: "None. The program is designed for people who have never written code and never plan to. If you can use email and a web browser, you have everything you need.",
  },
  {
    q: "Is this online or in person?",
    a: "Both. Cohorts run live over video, or at select city venues. We can schedule across time zones and run more than one cohort for larger teams.",
  },
  {
    q: "What if someone misses a session?",
    a: "Sessions are recorded in full. The recording is available within 24 hours, and they can rejoin a future cohort for the missed session at no extra cost.",
  },
  {
    q: "We already have Coursera or LinkedIn Learning. Why this?",
    a: "Those are good reference libraries. This is live, built around exercises your team does together on its own work, and you leave with a map of one real process and the builds that come next.",
  },
  {
    q: "Is this affiliated with the University of Chicago?",
    a: "Unlock Intelligence is an independent program. Our Head of Curriculum teaches AI and entrepreneurship at the University of Chicago and brings that rigor here. The curriculum is original.",
  },
];

export function Questions() {
  return (
    <StreamSection id="faq" title="Questions" lead="Tap one to open it.">
      <div>
        {FAQS.map(({ q, a }) => (
          <details key={q} className="group border-t border-rule last:border-b">
            <summary className="flex min-h-11 cursor-pointer list-none items-center py-[15px] text-[16.5px] font-semibold [&::-webkit-details-marker]:hidden">
              {q}
            </summary>
            <p className="relative mb-[18px] mt-0 max-w-[62ch] pt-3.5 font-serif text-base text-haze before:absolute before:left-0 before:top-0 before:h-px before:w-1/2 before:bg-ink/50 before:content-[''] after:absolute after:right-0 after:top-0 after:h-px after:w-1/2 after:bg-ink/50 after:content-[''] group-open:before:animate-part group-open:after:animate-part motion-reduce:before:w-[12%] motion-reduce:after:w-[12%] motion-reduce:before:animate-none motion-reduce:after:animate-none">
              {a}
            </p>
          </details>
        ))}
      </div>
    </StreamSection>
  );
}
