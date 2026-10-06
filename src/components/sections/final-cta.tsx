/**
 * What: Closing statement and last call to action.
 * Why: Final conversion moment after pricing and FAQ.
 * How: Large statement left, short line and CTA right. One fade on view.
 * Deps: framer-motion, next/link, Button.
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-28 md:py-48">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-end md:justify-between md:gap-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[14ch] text-[2.5rem] font-medium leading-none tracking-[-0.045em] sm:text-6xl lg:text-[5rem]"
        >
          The companies investing in AI fluency now will lead.
        </motion.h2>
        <div className="flex flex-col items-start gap-5 md:w-[320px] md:shrink-0">
          <p className="text-[15px] leading-relaxed text-foreground/65">
            Tell us about your team. We send a proposal within one business
            day.
          </p>
          <Button
            className="h-12 rounded-none bg-foreground px-6 text-[15px] font-medium text-background transition-colors duration-150 hover:bg-foreground/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            Request a proposal
          </Button>
        </div>
      </div>
    </section>
  );
}
