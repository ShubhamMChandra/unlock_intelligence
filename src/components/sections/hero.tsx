/**
 * What: Above-the-fold hero — headline left, pitch and CTAs right.
 * Why: Primary conversion. Asymmetric editorial layout, no decoration.
 * How: Single fade in. Ink-on-paper primary CTA, text-link secondary.
 * Deps: framer-motion, next/link, Button, constants.
 */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FOUNDING_SPOTS_REMAINING, FOUNDING_SPOTS_TOTAL } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Hero() {
  return (
    <section id="hero" className="pt-32 pb-12 md:pt-44 md:pb-16">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10 px-4 sm:px-6 md:flex-row md:items-end md:justify-between md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="min-w-0 md:flex-1"
        >
          <p className="mb-6 text-sm text-foreground/60 md:mb-8">
            Founding cohort, {FOUNDING_SPOTS_REMAINING} of {FOUNDING_SPOTS_TOTAL} seats open
          </p>
          <h1 className="max-w-[12ch] text-[2.75rem] font-medium leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem]">
            Make your team <em className="font-semibold">AI&#8209;fluent</em> in eight hours.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease }}
          className="flex flex-col gap-6 md:w-[340px] md:shrink-0 md:pb-2"
        >
          <p className="text-[17px] leading-relaxed text-foreground/65">
            Two live half-day sessions. Your team maps its own processes, finds
            where AI belongs, and builds working AI workflows in the room. No
            coding required.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button
              className="h-12 rounded-none bg-foreground px-6 text-[15px] font-medium text-background transition-colors duration-150 hover:bg-foreground/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Request a proposal
            </Button>
            <a
              href="#how-it-works"
              className="inline-flex min-h-11 items-center text-[15px] font-medium text-foreground/70 underline decoration-foreground/25 underline-offset-[6px] transition-colors hover:text-foreground hover:decoration-foreground/60 focus-visible:text-foreground focus-visible:decoration-foreground focus-visible:outline-none"
            >
              See the eight hours
            </a>
          </div>
          <p className="text-[13px] text-foreground/50">
            Taught by a University of Chicago instructor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
