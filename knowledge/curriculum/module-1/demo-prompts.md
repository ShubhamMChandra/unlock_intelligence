# Demo prompts — 2026-04-12 beta

Pre-written prompts for the volunteer demo (Block 2) and the closer (Block 7). Paste these. Never type live — typos kill momentum.

Lock the primary on Saturday based on the dry-run. If Option D produces a clean output on Jess's real calendar, use it. If not, fall back in order: D → A → B → C.

**Design principle:** The demo prompt must be SHORT. The run-of-show promises *"the instruction was four sentences."* The power of the demo is showing that a brief instruction produces a long, multi-step, agentic output — Claude going out and DOING things on real data, not just generating text. Do not over-engineer the prompt. The starters (Block 5) are where the craft lives. The demo prompt is where the magic lives.

---

## Volunteer demo (Block 2) — Jess's calendar

### Option D — The four-sentence version (primary)

The shortest, highest-impact version. Four sentences. This is the one that makes the "the instruction was four sentences" bridge line true.

> Look at every meeting on my calendar this week. For each one, go research the person I'm meeting with and the organization they're from — pull anything from the last 30 days: recent news, funding, leadership changes, announcements. Then write me a one-page prep brief for each meeting: who they are, what's happening at their organization right now, three talking points I should be ready for, and two smart questions I could ask. If you can't find anything on someone, say so — don't make it up.

**Why this works for the demo:**
- It's four sentences a room full of professionals can read on the projector in 10 seconds
- It triggers three distinct agentic steps the room can watch: (1) read the calendar, (2) search the web per person, (3) synthesize into structured output
- The "don't make it up" constraint is the only guardrail — just enough to show the concept without over-engineering
- The bridge line lands naturally: *"What you just watched took six minutes to run but ninety seconds to build. The instruction was four sentences."*

**Narration while it runs:**
- *"See what it just did? It looked at her real calendar — not a template, her actual meetings this week."*
- *"Now it's going out to the web. Three different searches, one per person. She didn't write code. She wrote four sentences."*
- *"Same Claude. Same model you all have on your laptops right now."*

---

### Option A — Structured version (fallback 1)

More guardrails. Use this if the dry-run on Option D produces messy output — sometimes the extra structure helps Claude organize a cleaner result. Slightly longer, still under 90 seconds to read.

> Look at every meeting on my calendar this week. For each meeting:
>
> 1. Identify who I'm meeting with and what organization they're from.
> 2. Search the web for that person and their organization. Pull recent news, recent funding or grants, leadership changes, major announcements — anything from the last 30 days.
> 3. Write a prep brief with:
>    - Who they are (one sentence)
>    - The 3 most relevant things happening at their organization right now
>    - 3 talking points I should be ready for in this meeting
>    - 2 questions I could ask that would show I did my homework
>
> Use the real meeting titles from my calendar. If you can't find recent info on someone, say so — don't fabricate.

---

### Option B — Document synthesis (fallback 2, no calendar connector needed)

Use this if the calendar connector fails entirely. Requires a pre-loaded Google Drive folder or uploaded documents. For the 2026-04-12 beta: pre-load 3-4 of Jess's real client deliverables or project briefs (ask her Wednesday which folder she'd be comfortable sharing).

> Read every document in this project. Find the open questions and unresolved decisions across all of them. Group them by topic. For each group, write a one-paragraph status memo I could send to my team: what's decided, what's still open, what needs a decision this week. Use real document names. If a decision isn't clearly resolved in the docs, flag it as open — don't assume.

**Note:** This prompt still shows agentic multi-step behavior (read multiple documents → cross-reference → synthesize) but misses the web-research "going outside" moment. Option D is stronger for the room.

---

### Option C — Web research only (fallback 3, no connectors at all)

Nuclear fallback. No connectors, no file uploads, just web research. Still agentic (Claude searches autonomously), but lower impact than Options D or A. Use this only if both the calendar and document paths fail in the Saturday dry-run.

For the 2026-04-12 beta, tailor this to Jess's actual work at AEA Consulting:

> I'm a strategy consultant advising a mid-size performing arts center that's considering expanding into a second venue. They want to know who's done this successfully and who's failed. Research this: find 5 cultural institutions that expanded from one venue to multiple locations in the last 10 years. For each, tell me what they did, whether it worked, and what went wrong if it didn't. Then give me three strategic questions my client should answer before they commit. Cite your sources. If you can't verify something, say so.

**Alternate Option C (if Jess prefers not to use her domain):**

> I'm preparing for a board meeting next week where we're presenting competitive landscape analysis. Research the top 5 cultural-sector strategy consulting firms globally. For each: what they specialize in, their 2-3 most notable recent projects, where they're growing, and where they're vulnerable. Then tell me: if I were positioning against them, what's the one thing each of them can't credibly claim? Cite sources. Don't fabricate firm names or project details.

---

## Closer demo (Block 7) — Competitive intel scraper on Bill's prospect

The scraper is at hpc-markets.com. Pre-loaded in a browser tab on Sunday morning.

### Setup

Turn to Bill. Say:

> *"Bill — name a real account you're trying to close right now. One where the company has a public web presence."*

He names it. Type the company name into the scraper. Say:

> *"This is a tool I built that I run every Monday morning at Digital Realty. I'm pointing it at [account name] right now."*

### While it runs — narrate the 6 autonomous steps

As each step fires, name it out loud so the room sees the structure:

1. **Site crawl** — *"First it's reading their corporate site — about page, leadership, recent press releases."*
2. **Press scan** — *"Now it's searching business press. Looking for the last 90 days of coverage."*
3. **LinkedIn signals** — *"LinkedIn next. Job postings, team growth, org changes."*
4. **News synthesis** — *"Pulling together everything it found into a single picture."*
5. **Competitive context** — *"Now it's cross-referencing against what we already know about our positioning."*
6. **Brief generation** — *"And here's the brief. One page. Ready to use before a Monday morning call."*

### When it finishes

Read the brief on the projector. Pause. Then:

> *"This is what I used to spend two hours doing on a Monday morning. It takes ninety seconds now."*

### Name the constraint

> *"This works when the target has a public web presence. For a stealth startup or a private company with no press, you'd build a different version — one that leans on peer-company research or interview prep instead of direct intel."*

### Generalize to each person in the room

Don't let anyone feel "not invited." Name each person:

> *"Tommy, you could run one of these on every competitor in the Housecall Pro landscape — Jobber, ServiceTitan, FieldEdge — every Monday. Zeshawn, this is a diligence pre-screen on any acquisition target with a public footprint. Jess, point it at a peer institution before a client pitch. Alan, run it on any company you're about to sell consulting to. Same bones, different target."*

### Bridge to the program

> *"Same primitives you built thirty minutes ago. Custom instructions, structured input, real data, multi-step. The only difference is I chained six steps instead of one. The distance between one step and six steps is not talent, and it's not code. It's the next three sessions of this program."*

### Backup

If the scraper doesn't run cleanly on Bill's account in the Saturday dry-run, swap in one of:
- Tommy's competitor (ServiceTitan or Jobber — guaranteed public web presence)
- Jess's peer institution (Kennedy Center, Lincoln Center — large public digital footprint)
- A DLR-specific workflow Shubham actually uses at work
