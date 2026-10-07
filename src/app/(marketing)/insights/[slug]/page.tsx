/**
 * What: Static insight article page by slug.
 * Why: SEO and deep links for each long-form piece; reading the article connects its stream.
 * How: generateStaticParams plus ArticleBody, which carries the sticky reading strip and the closing ask.
 * Deps: data/insights, ArticleBody.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { insights, getInsightBySlug } from "@/data/insights";
import { ArticleBody } from "@/components/stream/insights/article-body";

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    return { title: "Not found" };
  }

  return {
    title: article.title,
    description: article.subtitle,
    openGraph: {
      title: article.title,
      description: article.subtitle,
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-w-0 pb-16">
      <ArticleBody article={article} />
    </main>
  );
}
