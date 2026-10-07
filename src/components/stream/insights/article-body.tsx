/**
 * What: One insight article set as calm long-form reading, under its reading strip, ending on the closing ask.
 * Why: The words carry the article; the strip above says where the reader is in it.
 * How: Server component. Each section heading gets the id the strip points at. Stats, bullets, the
 *      comparison and the callout are set as plain type on the ground, without cards.
 * Deps: data/insights types, insights/articles, ReadingStrip, next/link, stream/styles.
 */
import Link from "next/link";
import type { InsightArticle, InsightSection } from "@/data/insights";
import { getRelatedInsights } from "@/data/insights";
import { sectionId, stageFor } from "@/components/stream/insights/articles";
import { ReadingStrip } from "@/components/stream/insights/reading-strip";
import { pill, textLink } from "@/components/stream/styles";

const END_ID = "article-end";
const prose = "max-w-[65ch] font-serif text-[17.5px] leading-[1.72] text-ink/[0.88]";

interface ArticleBodyProps {
  article: InsightArticle;
}

export function ArticleBody({ article }: ArticleBodyProps) {
  const title = stageFor(article.slug)?.title ?? article.title;
  const sections = article.sections.map((s) => ({ id: sectionId(s.heading), label: s.heading }));
  const related = getRelatedInsights(article.relatedSlugs);

  return (
    <div>
      <ReadingStrip sections={sections} endId={END_ID} />

      <article className="mx-auto max-w-[1160px] px-4 pt-8 md:px-8 md:pt-14">
        <div className="mx-auto max-w-[680px]">
          <header>
            <h1 className="m-0 text-[36px] font-extrabold leading-[1.02] tracking-[-0.015em] [font-stretch:80%] md:text-[54px]">{title}</h1>
            <p className="mt-4 max-w-[44ch] font-serif text-[19px] leading-snug text-haze md:text-[21px]">{article.subtitle}</p>
            <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-haze">
              <span>{article.author}</span>
              <span>{article.readingTime}</span>
            </p>
          </header>

          <section aria-labelledby="takeaways" className="mt-10 border-t border-rule pt-6">
            <h2 id="takeaways" className="m-0 text-[15px] font-semibold">
              Key takeaways
            </h2>
            <ul className="mt-3 grid list-disc gap-2.5 pl-5 font-serif text-[16px] leading-relaxed text-ink/[0.85] marker:text-haze">
              {article.keyTakeaways.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>

          {article.sections.map((section) => (
            <Section key={section.heading} section={section} />
          ))}
          <div id={END_ID} aria-hidden="true" />
        </div>
      </article>

      <section aria-labelledby="closing-ask" className="mx-auto max-w-[1160px] px-4 pt-20 md:px-8 md:pt-28">
        <div className="mx-auto grid max-w-[680px] justify-items-start gap-3">
          <h2 id="closing-ask" className="m-0 text-[40px] font-extrabold leading-none tracking-[-0.015em] [font-stretch:80%] md:text-[56px]">
            Bring us one process.
          </h2>
          <p className="mb-2 mt-0 max-w-[46ch] font-serif text-[17px] text-haze">
            The one that waits at every handoff. We&rsquo;ll show you what it looks like as a stream.
          </p>
          <Link href="/contact" className={pill}>
            Bring us one process
          </Link>

          {related.length > 0 && (
            <nav aria-labelledby="related" className="mt-16 w-full border-t border-rule pt-6">
              <h2 id="related" className="m-0 text-[15px] font-semibold">
                Keep reading
              </h2>
              <ul className="mt-4 grid gap-4">
                {related.map((r) => {
                  const st = stageFor(r.slug);
                  return (
                    <li key={r.slug} className="grid gap-1">
                      {st && <span className="text-[13px] text-haze">{st.stage}</span>}
                      <Link href={`/insights/${r.slug}`} className={`text-[19px] font-bold leading-snug [font-stretch:86%] ${textLink}`}>
                        {st?.title ?? r.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
      </section>
    </div>
  );
}

interface SectionProps {
  section: InsightSection;
}

function Section({ section }: SectionProps) {
  return (
    <section className="mt-14 md:mt-16">
      <h2
        id={sectionId(section.heading)}
        className="m-0 text-[25px] font-bold leading-[1.1] tracking-[-0.01em] [font-stretch:84%] md:text-[30px]"
      >
        {section.heading}
      </h2>

      {section.stats && section.stats.length > 0 && (
        <dl className="mt-6 grid gap-5 border-y border-rule py-5 sm:grid-cols-3 sm:gap-6">
          {section.stats.map((stat) => (
            <div key={stat.label} className="grid gap-1">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="m-0 text-[32px] font-bold leading-none [font-stretch:84%]">{stat.value}</dd>
              <dd className="m-0 font-serif text-[15px] leading-snug text-ink/[0.85]">{stat.label}</dd>
              <dd className="m-0 text-[12.5px] text-haze">{stat.source}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-5 grid gap-5">
        {section.paragraphs.map((p, i) => (
          <p key={i} className={`m-0 ${prose}`}>
            {p}
          </p>
        ))}
      </div>

      {section.bullets && section.bullets.length > 0 && (
        <ul className="mt-6 grid max-w-[65ch] list-disc gap-3 pl-5 font-serif text-[17px] leading-[1.65] text-ink/[0.88] marker:text-haze">
          {section.bullets.map((b) => (
            <li key={b.bold}>
              <strong className="font-semibold text-ink">{b.bold}:</strong> {b.text}
            </li>
          ))}
        </ul>
      )}

      {section.comparison && (
        <div className="mt-7 w-full max-w-full overflow-x-auto overscroll-x-contain">
          <table className="w-full min-w-[520px] border-collapse text-left text-[14px] leading-snug">
            <thead>
              <tr className="border-b border-rule">
                <th scope="col" className="w-[28%] py-3 pr-4 font-semibold">
                  <span className="sr-only">Measure</span>
                </th>
                <th scope="col" className="py-3 pr-4 font-semibold text-haze">
                  {section.comparison.leftHeader}
                </th>
                <th scope="col" className="py-3 font-semibold">
                  {section.comparison.rightHeader}
                </th>
              </tr>
            </thead>
            <tbody>
              {section.comparison.rows.map((row) => (
                  <tr key={row.label} className="border-b border-rule align-top">
                    <th scope="row" className="py-3 pr-4 font-medium">
                      {row.label}
                    </th>
                    <td className="py-3 pr-4 font-serif text-[15px] text-haze">{row.left}</td>
                    <td className="py-3 font-serif text-[15px] text-ink/[0.9]">{row.right}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.callout && (
        <blockquote className="mx-0 mb-0 mt-8 max-w-[34ch] border-l border-rule pl-5 font-serif text-[22px] leading-[1.4] text-ink md:text-[25px]">
          <p className="m-0">{section.callout}</p>
        </blockquote>
      )}
    </section>
  );
}
