"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

const roles = [
  "VP Marketing",
  "HR Directors",
  "Project Managers",
  "Senior Consultants",
  "Operations Leads",
  "C-Suite Executives",
];

export function ProofBar() {
  return (
    <section className="relative border-y border-white/[0.04] bg-black/20 py-6" aria-label="Past attendees">
      <ScrollReveal>
        <div className="mx-auto max-w-[1120px] px-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Built for professionals from:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            {roles.map((role, i) => (
              <span key={role} className="flex items-center gap-2">
                <span>{role}</span>
                {i < roles.length - 1 && (
                  <span className="text-muted-foreground/40" aria-hidden="true">&middot;</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
