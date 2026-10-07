/**
 * What: The Insights index body: the rollout strip, the page head, and the articles in rollout order.
 * Why: Strip and list are one object. Hovering or focusing a row opens its station; tapping a station marks its row.
 * How: Client wrapper holding the open station; rows are plain links to each article.
 * Deps: RolloutStrip, insights/articles, data/insights, next/link, stream/styles.
 */
"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getInsightBySlug } from "@/data/insights";
import { STAGES } from "@/components/stream/insights/articles";
import { RolloutStrip } from "@/components/stream/insights/rollout-strip";
import { lead, sectionTitle } from "@/components/stream/styles";

export function InsightsIndex() {
  const [active, setActive] = useState(0);
  const select = useCallback((i: number) => setActive(i), []);

  return (
    <>
      <section aria-label="How AI rollouts usually go, and where they break" className="pt-2 md:pt-4">
        <RolloutStrip active={active} onSelect={select} />
      </section>

      <div className="mx-auto max-w-[1160px] px-4 pb-8 pt-6 md:px-8 md:pt-8">
        <header className="max-w-[60ch]">
          <h1 className={cn(sectionTitle, "text-[40px] md:text-[56px] [font-stretch:80%]")}>Insights</h1>
          <p className={cn(lead, "max-w-[44ch] text-[17px] md:text-[18px]")}>
            Perspectives on AI workforce development, from the classroom and the enterprise.
          </p>
          <p className="mt-3 max-w-[60ch] text-[13.5px] leading-relaxed text-haze">
            Written by Shubham Chandra, who teaches AI-driven entrepreneurship at the University of Chicago and builds AI automation systems at Digital Realty.
          </p>
        </header>

        <ol className="mt-10 border-t border-rule md:mt-14">
          {STAGES.map((st, i) => {
            const article = getInsightBySlug(st.slug);
            if (!article) return null;
            const on = active === i;
            return (
              <li key={st.slug} className="border-b border-rule">
                <Link
                  href={`/insights/${st.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-current={on ? "true" : undefined}
                  className="group grid gap-1.5 py-6 outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink md:grid-cols-[150px_1fr_auto] md:items-baseline md:gap-8 md:py-8"
                >
                  <span className={cn("text-[13px] font-medium transition-colors", on ? "text-ink" : "text-haze")}>{st.stage}</span>
                  <span className="grid gap-2">
                    <span
                      className={cn(
                        "text-[24px] font-bold leading-[1.08] tracking-[-0.01em] [font-stretch:84%] md:text-[32px]",
                        "underline decoration-1 underline-offset-[6px] transition-[text-decoration-color]",
                        on ? "decoration-ink/50" : "decoration-transparent"
                      )}
                    >
                      {st.title}
                    </span>
                    <span className="max-w-[56ch] font-serif text-[16px] leading-snug text-haze">{article.subtitle}</span>
                  </span>
                  <span className="text-[13px] text-haze">{article.readingTime}</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
