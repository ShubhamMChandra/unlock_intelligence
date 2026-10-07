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
    q: "How does it work for a team?",
    a: (
      <>
        Teams of five or more get a private cohort. We schedule it around your calendar, write the starter agents for each person&rsquo;s role, price by seat with volume discounts, and send leadership an executive summary afterward.{" "}
        <Link href="/contact?type=corporate" className={`text-ink ${textLink}`}>
          Ask for a proposal
        </Link>{" "}
        and we&rsquo;ll send one.
      </>
    ),
  },
  {
    q: "How much time does it take?",
    a: "Eight hours across two days. Beyond that, only what your team chooses to build afterward.",
  },
  {
    q: "How do you measure outcomes?",
    a: "Everyone rates their own confidence before and after, and we track who completed each day. You get an executive summary with the before-and-after scores and completion, written so you can forward it to your VP.",
  },
  {
    q: "Does my team need a technical background?",
    a: "No. We built the program for people who have never written code and don't plan to. If they can use email and a web browser, they can do everything in the two days.",
  },
  {
    q: "Is this online or in person?",
    a: "Both. Cohorts run live over video. For a private team cohort we can also come to you, by arrangement. We schedule across time zones and split larger teams into more than one cohort.",
  },
  {
    q: "What if someone misses a day?",
    a: "Every day is recorded in full and the recording is available within 24 hours. They can also sit in on that day with a future cohort at no extra cost.",
  },
  {
    q: "We already have Coursera or LinkedIn Learning. Why this?",
    a: "Keep them; they are good reference libraries. This program is live, your team works on its own process in the room, and you leave with that process mapped and a short list of the builds that come next.",
  },
  {
    q: "Is this affiliated with the University of Chicago?",
    a: "Unlock Intelligence is an independent program. Our Head of Curriculum teaches AI-driven entrepreneurship at the University of Chicago, but the university is not involved and the curriculum is our own.",
  },
  {
    q: "What if it doesn't work for us?",
    a: "If your team finishes both days and doesn't feel it gained skills it can use, we refund the seats. One email is enough.",
  },
];

export function Questions() {
  return (
    <StreamSection id="faq" title="Questions" lead="Open a question to read the answer.">
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
