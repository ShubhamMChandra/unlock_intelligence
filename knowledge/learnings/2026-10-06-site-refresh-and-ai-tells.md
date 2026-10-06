# 2026-10-06: Site Refresh and "Looks AI-Made" Tells

## Context
Site came back online after ~6 months idle (manual Vercel redeploy). Same session: a polish pass on the live homepage, a tech-forward homepage concept on a design canvas (v1, then a shorter v2), and the first v2 piece shipped to the real site (tabbed Process Matrix). Constraint from Shubham: a friend was reviewing the live site, and nothing should look obviously AI-generated.

## Key Insights

### 1. Stale dates make a live site look abandoned
**What we learned:** "Spring 2026" appeared in five places (hero, enroll, final CTA, sticky bar, prices) long after spring. A buyer reads that as "nobody is running this."
**Action taken:** Replaced with evergreen "Founding cohort" copy. Any future cohort date should live in `src/lib/constants.ts`, not in section copy.

### 2. The visual tells that read as "AI made this"
**What we learned:** Shubham flagged these directly:
- Stacked full-width bands separated by hairline rules ("bands on bands"), each opening with a numbered mono label (`01 · The problem`)
- Faint grid backdrop plus a radial glow behind the hero, gradient text, a pulsing-dot pill badge
- Every section built from the same label → h2 → grid/box pattern (same root cause as the April "template feel" diagnosis)
**Action taken:** v2 is one continuous page on a single ground color, separated by space and alignment changes, with no section dividers or numbered labels.

### 3. Copy tells matter as much as visual ones
**What we learned:** "X, not Y" constructions ("documents, not slides", "8 hours, not 8 weeks") and heavy em-dash use read as AI-written.
**Action taken:** v2 copy avoids both. Existing site copy still has a few "X, Not Y" headings (Why section). Revisit.

### 4. Show the method, don't describe it
**What we learned:** The strongest, most differentiated element was a worked Process Matrix: real process steps, owner, what AI does, guardrail. One notation across the page: amber square = AI insertion point, hollow square = stays human. Amber does nothing else.
**Action taken:** Shipped as `src/components/sections/process-matrix.tsx` with HR / Finance / Marketing tabs, directly under the hero. Rows are illustrative and labeled as worked examples from Module 1.

## What Worked
- Using real site copy, prices, and stats only; no invented numbers in mockups
- Merging curriculum + deliverables into one "what happens in the eight hours" section (v2 is about half v1's length)
- Small document drawings (matrix, workflow map, 30/60/90 roadmap) as deliverable visuals

## What Didn't Work
- v1 concept: too long, clunky, structurally monotonous
- Decorative hero effects (grid, glow, gradient, pulse): removed before shipping

## Open Questions / Next
- Build the rest of v2 on the site: "eight hours" section with document drawings, compact pricing with seat blocks, continuous layout
- Pre-existing failing test: `Who > renders section header` (Who section no longer rendered)

## References
- Design canvas: https://claude.ai/artifact/6qdwHnwUwzxTKw4A6WoszH (v1 and v2 artboards)
- PR: https://github.com/ShubhamMChandra/unlock_intelligence/pull/1
- Earlier design reviews: `2026-04-02-design-review.md`, `2026-04-03-design-elevation-debate.md`
