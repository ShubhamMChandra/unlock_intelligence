/**
 * What: The Insights index: how AI rollouts usually go, and where they break.
 * Why: The five articles read as one rollout; four diagnose the breaks, the last is the way in.
 * How: Server page with metadata; the strip and list live in one client wrapper so they move together.
 * Deps: InsightsIndex, Closing.
 */
import type { Metadata } from "next";
import { InsightsIndex } from "@/components/stream/insights/insights-index";
import { Closing } from "@/components/stream/sections/closing";

const description = "Perspectives on AI workforce development, from the classroom and the enterprise.";

export const metadata: Metadata = {
  title: "Why this works",
  description,
  openGraph: {
    title: "Why this works",
    description,
  },
};

export default function InsightsPage() {
  return (
    <main className="min-w-0">
      <InsightsIndex />
      <Closing />
    </main>
  );
}
