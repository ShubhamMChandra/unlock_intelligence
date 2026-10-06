# 2026-10-06: wam.team Rebrand and Light-Theme Preference

## Context
Applied the "looks AI-made" principles from `2026-10-06-site-refresh-and-ai-tells.md` to Shubham's other site, wam.team (repo `ShubhamMChandra/stremeline-associates`), on a ~10 minute deadline before showing it to a designer / AI engineer friend.

## Key Insights

### 1. Shubham prefers light themes and palettes over dark
**What we learned:** Stated directly after the wam.team rebrand landed in light.
**Why it matters:** Default to light grounds for new designs, mockups, and refreshes. Unlock Intelligence is still dark by default; a light pass is worth proposing rather than assuming dark.
**Action taken:** wam.team shipped on a light paper ground (#F4F2EC) with ink text (#16150F).

### 2. The AI-tells checklist transfers across sites
**What we learned:** wam.team had the same tells plus a few more: drifting gradient blobs, SVG noise overlay, button glows, `// label` mono eyebrows, serif-italic closer lines, dark/light bands with gradient seams, a fake terminal with invented numbers, scroll hijacking (Lenis), 3D tilt and magnetic buttons, a comic starburst logo.
**Action taken:** Removed all of them. One signal color (vermilion #E5481F) used only to mark "agent runs this step". Schibsted Grotesk replaced Inter.

### 3. "Show the method" worked again
**What we learned:** The wam.team equivalent of the Process Matrix is a tabbed workflow map (lead intake, CRM hygiene, sales to onboarding, weekly reporting): step, where it lives, what the agent does, the human check. Filled square = agent, hollow = person.
**Action taken:** It leads the homepage, directly under the hero.

## What Worked
- Splitting work across agents by file ownership (homepage and design system vs. inner pages) to hit a hard deadline without conflicts

## Open Questions / Next
- Consider a light-theme pass on Unlock Intelligence
- wam.team blog articles and case-study numbers were not rewritten or verified

## References
- PR: https://github.com/ShubhamMChandra/stremeline-associates/pull/1
- Principles source: `2026-10-06-site-refresh-and-ai-tells.md` (on branch `claude/blissful-mccarthy-1qyyoq`)
