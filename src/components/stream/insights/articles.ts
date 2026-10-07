/**
 * What: The five insight articles in rollout order, with each one's stage name, claim and display title.
 * Why: The index strip, the list and the article page all read the same order and names, so they never drift.
 * How: A plain ordered array keyed by slug, plus a heading-to-id helper shared by the article body and its strip.
 * Deps: None.
 */

export interface RolloutStage {
  slug: string;
  stage: string;
  claim: string;
  title: string;
}

/** How an AI rollout usually goes: four breaks, then the way in. */
export const STAGES: RolloutStage[] = [
  { slug: "ai-training-budget-line-item", stage: "Budget", claim: "bought as a line item, measured by no one", title: "Your AI training budget is a line item, not a strategy" },
  { slug: "stop-teaching-prompting", stage: "Training", claim: "taught to prompt, never to build", title: "Stop teaching people to prompt. Teach them to build." },
  { slug: "same-mistake-everyone-makes", stage: "First try", claim: "used like a search engine", title: "The same mistake everyone makes with AI" },
  { slug: "ai-adoption-dies-three-weeks", stage: "Week three", claim: "the novelty fades and nobody checks", title: "Why AI adoption dies in three weeks" },
  { slug: "what-do-you-hate", stage: "The question", claim: "start with the work people hate", title: "What do you hate, why do you hate it, and who do you wish could do it?" },
];

export const stageFor = (slug: string) => STAGES.find((s) => s.slug === slug);

/** "Why this happens (it's not the technology)" becomes "why-this-happens-its-not-the-technology". */
export const sectionId = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
