# 2026-10-07: Stream rebrand direction

## Context
We wanted a rebrand-level upgrade for the site, using the same method as the WAM / Streamline Intel upgrade:
- Strip the AI tells.
- Give one signal colour one meaning.
- Build one tactile object.
- Keep everything else quiet.
- Refine in small passes.

The prototype is at `prototypes/stream/index.html`.

## Key Insights

### 1. The conceit: from handoffs to flow
**What we learned:** The founder's own framing landed where a dozen invented metaphors did not: "what used to be independent nodes with manual handoff... now connected by AI and become a stream." The hero plays that story:
- **Before:** teams as rings on a dashed path, with documents piling up at each handoff.
- **The connect:** an amber line connects them.
- **After:** the path fans into a band of lines.
- **At rest:** the band opens at one team to show what an agent runs there and what a person keeps.

The headline stages with it: "From handoffs", then "to flow, in two days." flows in.

**Why it matters:** The buyer can see the outcome before they read it.

**Action taken:** The grammar is written down in `prototypes/stream/stream-system.md`.

### 2. The grammar
- **Amber** means an agent runs it, and nothing else. Never use it on links, buttons or prices.
- **Ink** is what a person keeps.
- **Teams never vanish.** HR buyers read vanishing people as headcount cuts.
- **Three states:** broken, flowing, open.
- **No wave dividers or wallpaper lines.**
- **Text in the stream** is lowercase, one line, with no period. It sits small and regular weight, and bends with the line glyph by glyph (the word is warped, not just rotated per letter).

### 3. Interaction stays light and never breaks the beauty
- Desktop: the cursor walks the stream.
- Phone: a tap snaps to the nearest team. Vertical scroll never opens anything.
- The opening is a small parting of the lines, never a box or tooltip.

### 4. Dark is right for this
The founder chose dark ("dark is striking"). This supersedes the earlier light-ground preference for this site.

## What Didn't Work (rejected, and why)
- **Classroom props** (Dry Erase whiteboard, tent cards): "college kids in a class". The register is professional seminars taught by UChicago alumni.
- **Casebook / Letters:** looked like "hey Claude, summarize this document".
- **Badge personalization:** forced, more an optimization than a conceit. The course is an intro / advanced-beginner overview, so per-function personalization is shallow.
- **Express train:** gimmicky.
- **Case method:** stodgy.
- **Org-chart thread:** confusing, a clickable exhibit, not a full conceit. Its curved-line look was liked.
- **Interoffice envelope:** "who writes things on paper".
- **Bracket and tiles heroes:** needed instructions to understand. Needing instructions is the tell.
- **Lock / tumblers, The Fold, Footnote, The Week, Watchtower beam, Acetate, Room:** didn't survive critique.
- **A hover lens that broke the lines:** "you moving it shouldn't break beauty".
- **Inner pages with a decorative hairline beside a standard layout:** "doesn't incorporate the conceit". The inner pages must be built on the same object.

## Decisions
- Keep the $9,750 figure, always labelled as an estimate with its math: 2.5 h/week × $75 × 52.
- Copy is placeholder. The founder cares about content and structure more than exact wording.

## Open Questions
- **Inner pages (pass 2):** see `prototypes/stream/inner-pages-plan.md`.
  - Insights: the usual AI rollout as stations, one article per break.
  - Article: reading connects the sections.
  - Team: two UChicago paths converging into one room.
  - Contact: form fields as rings.
  - 404: a tangled line.
- **Team bios:** some agent-drafted lines are unverified. Use only text from the site's team source.
- **Building Stream into the Next.js site:** base it on the v2 branch, in small passes.

## References
- `prototypes/stream/index.html` (homepage prototype)
- `prototypes/stream/stream-system.md` (design system spec)
- `prototypes/stream/inner-pages-plan.md`
