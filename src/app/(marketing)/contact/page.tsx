/**
 * What: Contact page: "Bring us one process." The form, with the stream strip that mirrors it, and what happens next.
 * Why: The single action every page ends on; the visitor's process enters the stream here.
 * How: Server page; the client form sits in Suspense because it reads ?type= to prefill interest.
 * Deps: stream/contact components, stream/styles.
 */
import type { Metadata } from "next";
import { Suspense } from "react";
import { StreamContactForm } from "@/components/stream/contact/contact-form";
import { WhatNext } from "@/components/stream/contact/what-next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Bring us one process. Tell us about your team and the process that waits at every handoff. We reply within one business day.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[1160px] px-4 pb-20 pt-10 md:px-8 md:pt-16">
      <h1 className="m-0 text-[40px] font-extrabold leading-none tracking-[-0.015em] [font-stretch:80%] md:text-[64px]">Bring us one process.</h1>
      <p className="mb-0 mt-3 max-w-[46ch] font-serif text-[17px] text-haze md:text-[18px]">
        Tell us about your team and the process that waits at every handoff. We reply within one business day, and nothing is booked until you say yes.
      </p>

      <div className="mt-6 grid gap-14 md:mt-8 min-[900px]:grid-cols-[minmax(0,640px)_minmax(0,1fr)] min-[900px]:gap-16">
        <Suspense>
          <StreamContactForm />
        </Suspense>
        <WhatNext />
      </div>
    </main>
  );
}
