"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { ParallaxOrbs } from "@/components/ui/parallax-orbs";
import { Button } from "@/components/ui/button";

const headlineWords = [
  { text: "Make", gradient: false },
  { text: "Your", gradient: false },
  { text: "Team", gradient: false },
  { text: "\n", gradient: false },
  { text: "AI\u2011Fluent", gradient: true },
  { text: "in", gradient: false },
  { text: "8\u00a0Hours.", gradient: false },
];

const trustItems = [
  "Led by a University of Chicago instructor",
  "Completion certificate for L&D records",
  "Curriculum customized to your industry",
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
      <ParallaxOrbs />

      <div className="relative z-10 mx-auto max-w-[1120px] px-6 text-center">
        {/* Cohort pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
        >
          <span>Founding Cohort &mdash; Spring 2026</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {headlineWords.map((word, i) =>
            word.text === "\n" ? (
              <br key={i} className="hidden sm:block" />
            ) : (
              <motion.span
                key={i}
                variants={wordVariant}
                className={`inline-block mr-[0.25em] ${
                  word.gradient
                    ? "bg-gradient-to-br from-[#818CF8] to-[#C4B5FD] bg-clip-text text-transparent"
                    : ""
                }`}
              >
                {word.text}
              </motion.span>
            )
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          A live, instructor-led program that turns AI-curious professionals
          into confident, daily users. Two half-day sessions. Real tools.
          Real workflows. No technical background required.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto min-h-[44px] bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-600 hover:to-violet-600 px-6 py-3 text-base"
            render={<Link href="/contact" />}
          >
            Get a Custom Proposal &rarr;
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto min-h-[44px] border border-white/[0.1] px-6 py-3 text-base"
            render={<a href="#curriculum" />}
          >
            See the Curriculum &darr;
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
        >
          {trustItems.map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator removed — no longer needed without min-h-dvh */}
    </section>
  );
}
