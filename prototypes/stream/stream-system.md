# Unlock Intelligence: "Stream" design system (prototype spec, 2026-10-07)

The founder chose this direction. Build inside it exactly. Copy is placeholder, but it must sound real; content matters more than wording.

## The idea
Before: separate teams, each passing work along by hand, so work waits and piles up at every handoff. After two days with Unlock: the handoffs are connected by AI and the work runs as one stream. The teams are still there, and people keep the calls that are theirs.

The hero lives at `proto/flow.html` (the index page). Read its CSS and canvas script to see the look: dark spruce ground, fine off-white lines, one amber line, Archivo headings.

## Grammar (applies to every page)
- **Lines are work.** A broken or dashed line means waiting and handoffs (the before). A continuous flowing line means it runs (the after).
- **Amber means an agent runs this, and nothing else.** Never use amber on links, buttons, titles, decoration or prices.
- **Ink (off-white) is what a person keeps:** decisions, sign-offs, relationships.
- **Teams are named.** They never vanish. Show the handoffs going away; never show the people going away. HR buyers read vanishing people as headcount cuts, which is a hard no.
- **Three states:**
  - **broken:** something is waiting
  - **flowing:** the work moves
  - **open:** lines part around a point so it can be read. Text sits bare in the opening, never in a tooltip box.
- **The stream is a gesture used where it means something,** never wallpaper. No decorative wave dividers, and never lines behind body text. Most of any page is still, dark, well-set type.

## Tokens (copy these exactly)
```
--ground: #0F1311;  --panel: #171C19;  --ink: #E8EBE3;  --muted: #9AA199;  --rule: #2A312C;  --amber: #F0A62A;
--sans: "Archivo", "Helvetica Neue", Arial, sans-serif;   (headings: weight 700-800, font-stretch 80-86%; UI 500-650)
--serif: "Source Serif 4", Georgia, serif;                 (leads and long reading)
color-scheme: dark;
```
Google Fonts link: `https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..100,400..800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap`

Long-form reading (Insights articles) may use a slightly lifted panel (#171C19) for comfort. Keep it dark.

## Shared chrome (same on every page)
- **Header:**
  - On the left, the half-bracket mark `<svg viewBox="0 0 24 24"><path d="M9 3H16V6H12V18H16V21H9Z" fill="currentColor"/></svg>` plus "Unlock Intelligence", linking to `index.html`.
  - On the right, links: Program → `index.html#program`, Pricing → `index.html#pricing`, Insights → `insights.html`, Faculty → `team.html`, Talk to us → `contact.html`.
  - On phones, a "Menu" text button that toggles the links.
- **Footer:** "Unlock Intelligence" and the closing ask "Bring us one process." linking to `contact.html`, plus the same links.
- **Primary button:** an ink pill (ink background, ground-coloured text, radius 999px, min-height 46px).

## Rules
- Phone first: design at 390px, then desktop at 1440px. No horizontal scroll. 16px side gutters.
- Touch: tap-driven. Never trap vertical scroll. Respect `prefers-reduced-motion`.
- No AI tells (the founder's own list):
  - no all-caps eyebrow labels above headings
  - no numbered mono labels ("01 ·")
  - no gradient text, glows, blobs, glass cards or grid backdrops
  - no "X, not Y" copy
  - no em dashes
  - no middle-dot meta strings
  - sentence case everywhere
  - no invented statistics
- Every figure carries its source. The one estimate, $9,750 per person per year in time recovered, is always labelled as an estimate with its math: 2.5 hours a week × $75 an hour × 52 weeks.
- Never invent attendees, testimonials or client logos.
- Each page is a complete HTML document (`<!doctype html>`, `<meta charset="utf-8">`, viewport meta with `viewport-fit=cover`, its own `<title>` and `<style>`). Inline CSS and JS only. Fonts from Google Fonts only. No other external hosts.

## Real content sources (read these; don't invent the program)
- **Program (two days):** `git -C /home/user/unlock_intelligence show origin/claude/blissful-mccarthy-1qyyoq:src/components/sections/eight-hours.tsx`
- **Team bios:** `git -C /home/user/unlock_intelligence show origin/claude/blissful-mccarthy-1qyyoq:src/components/sections/team.tsx` (Shubham Chandra, JT O'Connor; state UChicago roles exactly as written there)
- **Pricing:** `/home/user/unlock_intelligence/src/lib/constants.ts` and `git ... show origin/claude/blissful-mccarthy-1qyyoq:src/components/sections/enroll.tsx`
- **FAQ:** `git ... show origin/claude/blissful-mccarthy-1qyyoq:src/components/sections/faq.tsx`
- **Insights articles:** `ls /home/user/unlock_intelligence/src/app/'(marketing)'/insights/` and `/home/user/unlock_intelligence/src/content` or `src/lib` (search for the article data)
- **ICP:** `/home/user/unlock_intelligence/knowledge/strategy/icp-and-buyer-personas.md`
- **Critiques that shaped this system:** `<scratchpad>/stream-fable.md`, `<scratchpad>/stream-visionary.md`
- **Design skill:** `/root/.claude/plugins/cache/claude-plugins-official/frontend-design/d4226d062928/skills/frontend-design/SKILL.md`

Scratchpad = /tmp/claude-0/-home-user-unlock-intelligence/9e7a341e-d94d-57c8-9c6c-a0234e942e8e/scratchpad
Output folder: `<scratchpad>/proto/site/`
