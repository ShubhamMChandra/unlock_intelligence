"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need any technical background?",
    answer:
      "None. Zero. The program is specifically designed for people who have never written code and never plan to. If you can use email and a web browser, you have everything you need.",
  },
  {
    question: "Is this online or in-person?",
    answer:
      "Both options are available. Cohorts run online via video with live interaction, or at select city venues. Contact us to check what\u2019s available in your area or for your team.",
  },
  {
    question: "What if I miss a session?",
    answer:
      "Sessions are recorded in full. You\u2019ll have access to the recording within 24 hours and can rejoin a future cohort for the missed session at no extra cost.",
  },
  {
    question: "How is this different from watching YouTube tutorials?",
    answer:
      "Passive consumption doesn\u2019t build skills. This is a live, structured cohort with exercises, real-time feedback, and peer accountability. You leave with deliverables \u2014 a prompt playbook, a workflow map, a personal AI strategy \u2014 not just notes you\u2019ll never read again.",
  },
  {
    question: "Will AI replace my job while I\u2019m taking this course?",
    answer:
      "Probably not in 8 hours. But the professionals who learn to use AI as leverage are the ones who become harder to replace \u2014 and first in line for the roles AI creates. That\u2019s exactly what this program is built to do.",
  },
  {
    question: "Is there a corporate or team option?",
    answer: null, // rendered with JSX below for the link
  },
];

export function FAQ() {
  return (
    <SectionWrapper id="faq">
      <ScrollReveal>
        <div className="mb-12 space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Common Questions
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mx-auto max-w-3xl">
          <Accordion>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} className="border-white/[0.06]">
                <AccordionTrigger className="text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer ? (
                    <p>{faq.answer}</p>
                  ) : (
                    <p>
                      Yes. For teams of 5 or more, we offer custom scheduling,
                      role-specific curriculum tailoring, and volume pricing.{" "}
                      <Link
                        href="/contact?type=corporate"
                        className="text-indigo-400 underline underline-offset-4 hover:text-indigo-300"
                      >
                        Reach out directly
                      </Link>{" "}
                      and we&rsquo;ll put together a proposal.
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
