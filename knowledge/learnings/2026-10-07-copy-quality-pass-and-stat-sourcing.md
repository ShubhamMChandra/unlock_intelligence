# 2026-10-07: Copy quality pass and statistic sourcing

## Context
Four-agent review of every user-visible line on the Stream site (two humanizer passes, an ICP-lens marketing review, a page and form CRO review using the local marketing skills), followed by a sourcing pass on every number in the five Insights articles. All findings were applied on branch `claude/clever-albattani-5u1hpk`.

## Key Insights

### 1. Four of the articles' "sourced" statistics were mis-attributed
**What we learned:** "86%, Deloitte" is NVIDIA's 2026 survey (Deloitte's own figure is 84%). "35%, Deloitte" is DataCamp with YouGov. "5 to 15% completion, Training Industry" traces to nothing. "81% of hiring managers, Microsoft" is a Resume Genius poll (the Microsoft and LinkedIn 2024 Work Trend Index says 66% would not hire without AI skills). "McKinsey 2.5 hours a week" could not be found anywhere. The 2026-04-06 ROI session's "swap DataCamp for Deloitte for source variety" is the likely origin of the first two.
**Why it matters:** The articles exist to be forwarded to a VP or CFO. One wrong citation discredits every other number on the page, and the credentials with it.
**Action taken:** Replaced with verified figures and full report names in the `stats` blocks of `src/data/insights.ts`. Cut what could not be sourced ("70%+ weekly engagement", "80% not logged in", "$1.2B to $6B by 2033", the "59% / 53%" pairing from two different surveys). The 2.5 hours and $9,750 are now framed everywhere as a working assumption the reader can replace, never as a finding.

### 2. The articles still described the one-day program
**What we learned:** Article 5 named three deliverables (blueprint, workflow map, 90-day strategy) and "a single day"; article 2 sold "custom GPTs". The ICP doc carried the same stale facts, so a reviewer who trusted the KB would have "corrected" the site in the wrong direction.
**Why it matters:** The one piece the site tells a champion to forward contradicted the pricing page the VP would land on.
**Action taken:** Articles now describe day one (working agent from a role starter) and day two (one process mapped, next three to five builds). Rule going forward: the live Stream components are the source of truth for program facts; the KB lags.

### 3. The site read as human copy polished one pass too far
**What we learned:** No AI vocabulary and no em dashes anywhere, but three structural tells recurred: clipped two-beat fragments as a house rhythm ("No paperwork." "Stays human."), paired aphorisms and negative parallelism in leads and titles (34 instances in the articles alone), and stacked abstract-noun lists in pricing and FAQ copy.
**Action taken:** Kept one negative parallelism per article where it carries the thesis (the title or subtitle) and varied the rest. Terse list items in the By Monday section were left alone because the fragment is the list item, not a tail on a sentence.

### 4. The first screen never said what was for sale
**What we learned:** The only plain description of the product lived in a screen-reader-only paragraph and the meta description. Deliverables sat only on the individual pricing card, the refund in a footnote, and the contact form defaulted to the individual option even though every main CTA is for teams.
**Action taken:** Added a one-sentence standfirst under the hero headline, moved the deliverables onto the team card, gave the refund its own line and a FAQ entry, defaulted the form to "Training my team", and unified "proposal within one business day" (pricing) with "reply within one business day" (contact) into one promise that names what the reply contains.

## What Worked
- Running the ICP reviewer and the CRO reviewer in parallel with the humanizers. Substance decisions (what a line should claim) came from the first two; form from the humanizers. Editing only after all four returned kept the diff to one coherent pass.
- A sourcing agent with a strict "only report a figure you saw on the page" rule, then spot-checking its two load-bearing finds by hand.

## What Didn't Work
- The humanizer alone would have polished sentences that were factually stale. Humanizing is one lens, not the review.

## Open Questions (founder decisions, copy was softened rather than removed)
- "7 of 10 founding seats open": are three seats really committed?
- In-person delivery "by arrangement" (replaced "select city venues"): is it offered?
- "Six months in the cohort community": does a space exist at launch?
- Rejoin a future cohort for a missed day: will there be a published calendar?
- Data handling on "your team's real work", tooling needed before day one, and the open-cohort date are still unanswered on the site.
- Team-size options "Under 5" and "Not sure yet" were added; are teams under five served?

## References
- Diff on branch `claude/clever-albattani-5u1hpk` (20 files)
- Verified sources: Deloitte State of AI in the Enterprise 2026; DataCamp and YouGov, 2026 State of Data & AI Literacy; Reich and Ruipérez-Valiente, "The MOOC pivot", Science, 2019; Microsoft and LinkedIn, 2024 Work Trend Index; PwC 2025 Global AI Jobs Barometer; HBS Online cohort completion (provider's own figure)
- Reviewer reports (scratchpad, this session): copy-review.md, insights-editorial-review.md
