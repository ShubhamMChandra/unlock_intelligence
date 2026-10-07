# 2026-04-12 — First live run of Module 1 (cross-industry friends beta)

**Status:** Pre-run. Retro section (bottom of file) gets filled in Sunday evening after the run.
**Date:** Sunday 2026-04-12, 10:30am – 11:45am CT
**Venue:** 1 West Superior, Chicago IL
**Canonical reference:** `../run-of-show.md`
**Round 1 persona test:** `/knowledge/learnings/2026-04-07-persona-beta-test-2026-04-12-demo.md`
**Round 2 persona test:** `/knowledge/learnings/2026-04-08-persona-beta-test-round-2-new-lineup.md`

This is the first-ever live run of Module 1. It ships the **v1 structure** (demo first, no framework opener, expanded matrix, deliberate failure moment in the build phase, constraint callout in the closer) based on two rounds of synthetic persona testing. Everything Sunday-specific — the five attendees, the venue, the dates — becomes retro notes after the run.

---

## Cohort context

Five friends across industries, all mid-career. Plus Jordan (actor in career transition, not attending but receiving feedback remotely).

| Attendee | Role | Notes |
|---|---|---|
| **Zeshawn Qadir** | General Counsel at a multi-state cannabis operator (~$3B mcap) | Chicago-based. Ex-Polsinelli Private Equity M&A Shareholder (~10 years at the firm). Joined the GC role ~1 month ago. This is his first in-house corporate job. Strong M&A framework from Big Law, but at Polsinelli the investment bankers ran the diligence tooling for him — he's never had to build his own scaffolding. |
| **Alan** | Founder — AI consulting firm + solo app-based startups | Actively running both at once. Fragmented. Classic founder problem: needs focus, not more ideas. |
| **Thomas "Tommy" Nathan** | Product Marketer at Housecall Pro | Vertical SaaS for home service businesses (HVAC, plumbing, electrical, cleaning). Permira-owned. Tommy's buyer is a plumber or HVAC contractor running a small business — "main street SMB," not a tech buyer. Competes with Jobber, ServiceTitan, FieldEdge, Workiz. |
| **Jess Nickelman** | Strategy Consultant at AEA Consulting | Rare combination: ex-L.E.K. Consulting (tier-one strategy rigor) plus first-hand venue management experience at the Podlasie Club in Chicago. AEA is a global cultural-sector strategy firm (museums, performing arts centers, cultural districts). She brings both the analytical frame and the felt knowledge of actually running a cultural space. |
| **Bill McCue** | Senior Account Executive at Workday | Enterprise HCM/Financials SaaS. Deals $1M–$10M+, 18–24 month cycles, heavy research burden per account. |

**Format:** In-person at 1 West Superior, Chicago. Everyone brings a laptop with Claude Pro, Claude Code Desktop installed, and a blank Next.js scaffold (`unlock-demo` folder with dev server verified) per pre-work.
**Pre-work:** Updated setup from `../../pre-class-setup.md` — Claude Pro signup, Claude Code Desktop install, Git on Windows, Node.js + `create-next-app` scaffold via the one-prompt setup, bookmark the shared Google Doc, think of one real current initiative you need to communicate about to multiple stakeholders.
**Conversion goal:** Validate the lesson format. Testimonials are promised already. The real test is whether these five walk out genuinely thinking it was worth their Sunday morning.

---

## What v1 changed from v0

The run ships the changes surfaced across two rounds of persona testing plus the 2026-04-11 architecture pivot:

1. **Cut the "plant framework + bad-prompt/good-prompt" verbal opener entirely.** Four of five round-1 personas flagged it as 2023-era YouTube filler.
2. **Lead with the live demo**, not the framework.
3. **Matrix expanded from ~3 to ~6–8 min**, mapped during or just after the demo instead of standalone.
4. **Deliberate failure-and-recovery moment** baked into the build phase. Five of six round-2 personas named this as the strongest trust-building move in the lesson. Not negotiable.
5. **Closer scraper names its constraint out loud** ("this works when the target has a public web presence, here's what we'd do if they didn't").
6. **Block 2 pivoted from meeting-prep-with-connectors to Vercel app + Claude Code live extension** (2026-04-11). The old "Claude reads calendar → web searches → writes briefs" demo was just a prompt with tools — not an agent. The new demo is two flavors of agent (the hosted app + Claude Code itself) hitting the same theory punch.
7. **Block 5 pivoted from Claude Projects to Claude Code Desktop scaffolding a full Next.js app from a blank project** (2026-04-11). Attendees now build their own working copy of the app Jess just used, starting from the blank scaffold they set up in pre-work. Same primitives as Block 2, closes the "kiddie version" gap Priya flagged in round 2.

---

## Run sheet — 8 beats, ~75 minutes

> Rough durations. Read the room, follow the energy, adapt. The one hard constraint: start Block 7 (closer) with at least 10 minutes left in the room.

### 1. Welcome + frame (~3 min)

Name each person by first name, name each industry, joke about the spread (GC, founder, PMM, cultural-sector consultant, enterprise SaaS AE — this is a dinner party crowd, not a business audience). Set the expectation:

> *"By the end of today, each of you walks out with a real working app on your laptop that you built, running on your real initiative, generating real documents for your Monday morning. Not prompts. Tools. You're the first 5 people to ever sit through this — I want your honest feedback at the end."*

### 2. ★ Live volunteer demo — Vercel app + Claude Code extension (~15 min)

**Volunteer: Jess primary, Tommy pre-briefed backup.** Two beats in one block: beat 1 uses the hosted Vercel app on Jess's real work (app-as-agent), beat 2 opens Claude Code Desktop on Shubham's local copy and live-extends the app based on what the room asks for (Claude-Code-as-agent). Both make the same theory point: two flavors of agent, one block.

Flash card below. Print A5, two-sided. Front: phases. Back: contingencies + hard rules. Pin to projector or hold in left hand. Don't read from it — glance.

---

#### BLOCK 2 — FLASH CARD (front)

**Volunteer: Jess** · Backup: Tommy · ~15 min · You drive the keyboard, she talks

---

##### PHASE A — Setup (~90 sec)

- [ ] "Jess, come up here for a minute"
- [ ] Switch projector → your laptop
- [ ] Open browser tab: `unlock-demo.vercel.app` (already deployed, already working)
- [ ] Frame the room: *watch this app do something on Jess's real work — then I'll show you how it was made*
- [ ] "Two things in one block. Hang with me."

> ★ **The frame that matters:** this is real work, not a toy

---

##### PHASE B — Beat 1: Use the app on Jess's real work (~3–4 min)

- [ ] Ask Jess, out loud to the room:
  - "What's your role, in one sentence?" → type in **Role** field
  - "One real initiative you're working on right now — something you need to communicate about" → type in **Initiative** field
  - "Who are the 2 or 3 people you need to talk to about it?" → multi-select **Stakeholders**
- [ ] If she hedges on specifics → "her real work, not a sanitized version"
- [ ] Hit **Generate**
- [ ] Wait for the documents. **Don't fill the silence.** Narrate only if it lags: *"one call to the Anthropic API per stakeholder — tailored output per person"*
- [ ] Documents appear. Read the FIRST ONE out loud, slowly, whole thing
- [ ] **STOP. Look at Jess. 2–3 sec pause.**
- [ ] If silent → "Would you send that one? Close? Wrong shape?"
- [ ] Capture her reaction. Room's eyes follow her face.

> ★ **Jess's face is the lesson. Don't block the room's view of it.**

---

##### PHASE B — Beat 2: Live extend via Claude Code (~5–6 min)

- [ ] Pivot: *"Let me show you how this was made."*
- [ ] Alt-tab → Claude Code Desktop (local copy of the same project, already open)
- [ ] Split view if possible: Claude Code left, `localhost:3000` right
- [ ] Ask the room (NOT Jess this time): *"what's one thing this should also do?"*
- [ ] Accept the first concrete ask. Don't negotiate scope.
  - Safe shapes: new audience type, new input field, a tone toggle, a disclaimer line
  - Unsafe: auth, DB, real API integrations → redirect gently
- [ ] Type 2–3 sentences into Claude Code. Read them aloud while typing.
- [ ] Hit enter
- [ ] **Narrate while Claude Code works. Do NOT go silent.**
  - "It just read the project files — knows what it's working with"
  - "Asking me to approve — watch"
  - "Writing a new file"
  - "Dev server refreshed — new field is there in the preview"
- [ ] Flip to browser tab → show new feature live on `localhost:3000`
- [ ] Ask the room: "see it?" — let them confirm

---

##### PHASE C — Theory beat + bridge (~3 min)

- [ ] **30-SECOND THEORY BEAT — non-negotiable.** Hit these in order:
  - The app is an AGENT — one job, many outputs, your role + your stakeholders → documents
  - Claude Code is an AGENT — reads codebase, decides, writes, verifies
  - Both have a LOOP. Read → decide → act → check.
  - Prompt predicts words. Agent has a job.
  - **Two flavors of agent. One block.**

> ★ **If you skip one thing, don't skip this beat.** It's why Block 2 exists.

- [ ] If room riffs with "could it also do X" → pin it: *"hold that — in 25 min you're building your own version on your laptop"*
- [ ] Bridge to Block 3: *"Look at what just happened. Let's name what changed."*
- [ ] Walk to the matrix on the projector

---

#### BLOCK 2 — FLASH CARD (back)

##### CONTINGENCIES

**Claude Code errors mid-live-edit**
- [ ] Narrate as a feature: *"look — watch how I fix it"*
- [ ] Tell Claude in plain English what broke, retry once
- [ ] This IS the deliberate-failure moment pulled forward — Block 5 still gets its own
- [ ] Do NOT panic-close the app

**Vercel app errors or is slow**
- [ ] One retry with Generate
- [ ] If still broken → skip Beat 1, go straight to Claude Code build from scratch on the projector ("we'll build it now instead of showing you a built one")
- [ ] Frame the error as proof of why you build local copies

**Jess freezes or can't name a real initiative**
- [ ] Tommy is pre-briefed — call him up instead
- [ ] Or: use a pre-canned example (your own — "here's one from my Monday at Digital Realty")
- [ ] Don't burn more than 20 sec recovering — move

**Rate limit hits on Claude Code**
- [ ] Switch model to Sonnet (not Opus)
- [ ] Worst case: narrate the limit as a real lesson, cut Beat 2 short, go to theory beat early

**Room riffs with "could it also do X"**
- [ ] Pin it for Block 5: *"that's literally what you're about to build"*
- [ ] Don't kill the energy, redirect it

---

##### HARD RULES

- Stop Phase B with at least **3 min left** for theory beat + bridge
- Theory beat is non-negotiable
- Jess's face is the lesson — don't block it
- No silence while Claude Code works — narrate
- Don't negotiate scope with the room's feature ask — accept and build
- The app is real, deployed, already working — don't apologize for it

### 3. Live matrix fill on Jess's demo (~6–8 min)

**v0.2 — see rationale:** `/knowledge/learnings/2026-04-10-curriculum-2day-reframe.md`. This block used to be a taught framework. It's now a live fill on the demo the room just watched. Columns are never named upfront. They emerge from the act of filling, then get named after the cells are full. This is the first live test of the reframe — watch Jess and the room carefully.

Pull up the empty matrix on the projector. Two rows ("Today" / "Rebuilt"), five empty columns. Hand out the worksheet page 2 version so each attendee can fill along. **Do not say "people, tools, trainings, guardrails, metrics" yet.** Not once.

Open with the move:

> *"Look at what just happened. Let's name what changed."*

Then walk the five columns as questions to the room, filling Jess's answers in the "Today" row first, all the way across, before touching the "Rebuilt" row.

> *"Before today, who was doing the prep for one of those client meetings?"* — column 1
>
> *"What were they doing it in — what tool, what surface?"* — column 2
>
> *"What did that person need to know or have seen before to do it well?"* — column 3
>
> *"Who was checking the output before it went in front of a client?"* — column 4
>
> *"And how did anyone know the prep was actually any good?"* — column 5

Write Jess's answers verbatim, even if they're messy. Her "Today" row is almost certainly going to be: *Jess herself, Google + Notion + past AEA decks, cultural-sector context + the client's board history, Jess again (no second pair of eyes), and a felt sense of "I walked in ready" with no real metric.* Don't clean it up. The scruffiness is the point — it shows what running this by hand actually costs.

Then walk the same five questions again for the "Rebuilt" row. The Claude Project is the person. The Project is the tool. The instructions + the uploaded context is the training. The verification step she'd add is the guardrail. The metric is whatever she names — probably "45 minutes became 4" or "I stopped skipping the prep on Friday meetings."

**Only after all ten cells are full, name the columns:**

> *"What you just told me has a name. People. Tools. Trainings. Guardrails. Metrics. Every process you run has all five — whether anyone wrote them down or not. Most AI training fixes one column. We just rebuilt the whole row. That's the whole game."*

Then the punchline:

> *"Most AI training asks 'how do I get my person to use AI?' That's vertical thinking — pick a person, give them a tool, hope it works. What we just did was horizontal. We didn't give Jess a tool. We picked a process and redesigned all five components of it. Everything else today is built on that distinction."*

**If time permits — cross-industry side-by-side (~90 sec).** Pick Tommy or Bill and run the same five questions on their version of meeting prep. Tommy's "Today" people column is the competitive intel analyst or PMM doing teardown-by-hand; Bill's is the AE doing account research between calls. Rebuilt row lands the same way. The cross-industry thesis becomes structural when the room sees two totally different businesses fill the same five columns.

**Pacing guardrails.** Eight-minute ceiling, five-minute floor. Do not let this block shrink below five. If the demo ran long and you're squeezed, cut the cross-industry side-by-side first, then tighten the narration on the fill — don't cut columns. Every column has to get filled in both rows, or the "you just did all five" move doesn't land.

**What to watch for (this is a live test).** The whole move depends on the room doing the filling, not nodding at a taught framework. Watch eyes during the "Today" row. If Jess is the only one speaking and the other four are glazed, the fill-first move is underperforming — abbreviate the "Rebuilt" row narration and get to the name-the-columns beat faster. If hands are pointing at the screen and people are interrupting Jess with their own answers, it's working — give it the full eight minutes. Capture which of the two happened in the Sunday retro. That signal is the whole reason this block got rewritten.

### 4. UI walkthrough (~60 sec)

Screen-share Claude Code Desktop on the projector. Walk through it once: "Open folder, this is where you paste the prompt, this is the approve button, this is the preview pane with `localhost:3000`." Eat the navigation friction once for everyone. The one thing that matters: *"when Claude Code asks to run a command, click approve. Don't read every line."*

### 5. ★ Build phase — each person builds their own copy of the app (~25–30 min)

Each attendee already has a blank Next.js scaffold from pre-work (`unlock-demo` folder, Node.js installed, `create-next-app` defaults, dev server verified). Sunday they build their own working copy of the app Jess just used — same primitives, same shape, their own real initiative loaded into it.

Flash card below. Same print format as Block 2: A5, two-sided. Front: phases. Back: contingencies + hard rules.

---

#### BLOCK 5 — FLASH CARD (front)

**~25–30 min · You circulate · They drive their own keyboards · Claude Code does the heavy lifting**

---

##### SETUP (~2 min)

- [ ] "Open the Google Doc I sent — top of the doc"
- [ ] Point them to the **Anthropic API key** (raw, pasted Saturday, $50 cap, rotates Monday)
- [ ] "Copy the key. Don't worry about security — this is a demo key, it dies tomorrow."
- [ ] "Open Claude Code Desktop. Open your `unlock-demo` folder from pre-work."
- [ ] **The frame:**
  - Each of you builds your own working version of what Jess just used
  - Starting from the blank page you set up Friday night
  - Claude Code does the heavy lifting — you drive it
- [ ] "Everyone on the same page? Good. Find the Block 5 prompt in `starters.md` in the doc. Paste it into Claude Code."

> ★ **"You're not writing code. You're managing an agent."**

---

##### BUILD (~15 min)

- [ ] They paste the pre-written Block 5 build prompt (one prompt, engineered Saturday, same for everyone)
- [ ] Walk the room once, out loud, through what to expect:
  - Claude Code will ask for the API key → paste it, approve
  - Claude Code will install `@anthropic-ai/sdk` → approve
  - It'll write the form, the API route, the `.env.local` → approve each step
  - ~10–15 min of agentic work per person
  - "Click approve. Don't read every line. You're not in production."
- [ ] Then: **circulate.** Don't hover at the front.
- [ ] **Circulate order:**
  - **Zeshawn first** — most at risk of early stall (new to this kind of tooling, confidentiality-sensitive, new industry)
  - **Alan** — might improvise off the prompt, pull him back to "run it first, change it second"
  - **Tommy** → **Jess** → **Bill** (higher self-serve confidence)
- [ ] Watch the **4 stall archetypes** for Claude Code specifically:
  - **Reader** — reads every line Claude Code outputs before approving → "just approve, we're not in production"
  - **Improviser** — edits the prompt before running it → "run it first, change it second"
  - **Perfectionist** — not satisfied with first working version → "if it generated one document, you're done — move on"
  - **Frozen** — hasn't clicked approve in 60 sec → walk over, approve one step with them, unstick

---

##### USE (~8 min)

- [ ] When an attendee's dev server is running → "now put your real initiative in"
- [ ] Their real role, real current initiative, real 2–3 stakeholders (same thing Jess did, but theirs)
- [ ] Hit generate. Read the documents.
- [ ] **Call out the first working demo to the whole room** — pin energy, make it contagious
- [ ] Encourage reactions: "would you send that one Monday morning?"
- [ ] Don't fix their output — that's not the point. The point is: one form → tool shaped like their job.

---

##### OPTIONAL — CUSTOMIZE (~5 min, only if time)

- [ ] Fast-finishers get a second prompt: add a disclaimer, a citation field, a tone toggle, a "plain English" style
- [ ] Point them back to `starters.md` → customization prompts
- [ ] "One change. Ship it. Come back to the room."

---

##### SHOW-AND-TELL PREP (at the 20-min mark)

- [ ] "Screenshot your app. Screenshot one of the generated documents. AirDrop to me."
- [ ] Same rule as Block 6: don't go around the table, pick by energy
- [ ] "Don't sweat unfinished — I'll help anyone stalled in the 15 min after we wrap"

---

##### ★ DELIBERATE FAILURE MOMENT ★

- [ ] When Claude Code hits a real error on someone's build (wrong package, typo, API error, rate limit) → **stop the room**
- [ ] Walk to that person's laptop or bring it up on the projector
- [ ] Narrate: *"Look what just happened. Claude Code made a mistake. Watch me fix it."*
- [ ] Talk to Claude Code in plain English. Show the fix in real time.
- [ ] Attribute: *"This is the most important moment of the day. 5 out of 6 personas named this as the thing that built trust."*
- [ ] **Do not skip this even if everything goes smoothly.** If nothing fails naturally, ask Claude Code to do something just past its confidence (e.g., integrate a made-up API), let it stumble, show the fix.

> ★ **The failure moment happens no matter what. Narrate it. It's a feature, not a bug.**

---

#### BLOCK 5 — FLASH CARD (back)

##### CONTINGENCIES

**Rate limit hits mid-build**
- [ ] Switch their model to Sonnet (not Opus — separate lower cap)
- [ ] Still stuck → run their prompt on your projector Claude, AirDrop result to them
- [ ] Worst case → pair them up with someone whose build is working

**Wifi dies**
- [ ] Phone hotspot (in `todo.md` prep list)
- [ ] If hotspot can't handle 5 concurrent sessions → stagger: 2 build at a time, 3 read/watch
- [ ] Last resort → everyone watches one person's build on the projector, narrated

**Pre-work didn't work for someone** (shouldn't happen — Friday night text reminder)
- [ ] Pair them with a neighbor whose scaffold is running
- [ ] Or: share your projector — they do the real initiative on your running app
- [ ] Do NOT try to fix their scaffold live — 5 min black hole

**Claude Code loops on an error** (same error twice)
- [ ] Stop it. Simplify the prompt. Retry once.
- [ ] Still looping → abandon that approach, pivot to a simpler feature
- [ ] This is often the deliberate-failure moment in disguise — narrate it as one

**Attendee's API key doesn't work**
- [ ] Most likely they pasted quotes or extra whitespace — check the `.env.local` line
- [ ] Worst case → have them use Shubham's backup key (second key in the doc, same $50 cap)

**Attendee's work laptop blocks the install**
- [ ] Personal laptop pivot (already in risks)
- [ ] If no personal laptop → pair them with Jess or Tommy

---

##### HARD RULES

- **Circulate. Don't drift.** Don't get stuck at the front or on one person.
- **Don't fix it for them.** Coach through. Hands on their keyboard is a last resort.
- **When someone hits a working demo, call it out to the room.** Contagious energy beats silent progress.
- **The failure moment happens no matter what.** Narrate, don't hide.
- **Around 5 min left mark:** *"Don't sweat unfinished — I'll help anyone stalled in the 15 min after we wrap"*
- **Don't let perfectionists polish.** First working version → move on.
- **Don't let readers read every line.** "Just approve, we're not in production."

### 6. Show-and-tell (~7–10 min)

Quick tour around the table. Each person shows their running app + the generated documents for their real initiative on the projector. Default 90 sec each; drop to 60 sec if you're over time. Pick by energy, not table order — hit the most visibly excited person first, the most skeptical last.

### 7. ★ Closer — competitive intel scraper on Bill's real account (~7 min)

**Target: Bill's real prospect.** Three reasons he's the right closer subject:

- His job is literally enterprise account research — the scraper does exactly what he needs
- He'll get the biggest "I could use this Monday" reaction, which makes the closer land for the whole room
- He's the attendee whose work most directly maps to the scraper's output shape

Three phases: bridge → run → connect. Detailed breakdown below.

**Watch-out from round 2:** Priya (consultant persona) flagged that the closer can accidentally undercut what attendees just built — "is what I built the kiddie version?" Tighten the "this is Hour 4 of the full program, you'll build one of these in session 2" bridge to prevent that read. Jordan (actor persona) flagged that the closer can feel isolating for attendees who don't have "an account to close." Mitigation: name that the scraper pattern generalizes (Tommy could run one on competitor press, Zeshawn on diligence targets, Jess on peer institutions) so nobody feels "not invited."

### 8. Honest debrief + exit survey (~7–8 min)

Two parts:

- **Live round-table (~5 min):** Three questions from `../../discussion-questions.md`. Ask in order Q2 → Q1 → Q3 (emotional → behavioral → social). Take visible handwritten notes. Don't defend anything.
- **Exit survey (~3 min):** Hand out the paper survey from `../../exit-survey.md`. Say: *"Last thing. Five minutes. No names. Please fill it out before you leave — if you take it home, you won't."* Envelope at the door.

---

## The Block 5 build prompt + customization prompts

**Extracted to:** `starters.md` (same folder). This file currently contains the v0 Claude Project starters and needs a Saturday rewrite to house:

1. **The Block 5 build prompt** — single well-engineered Claude Code Desktop prompt that scaffolds the role-aware document generator from a blank Next.js project. Same prompt for everyone. Finalized Saturday after a clean-machine dry-run.
2. **Customization prompts** — 3–5 short Claude Code prompts for fast-finishers (add a disclaimer, add a citation field, add a tone toggle, add a "plain English" style).

On Saturday, paste the Block 5 build prompt + the Anthropic API key (with $50 cap, rotates Monday) into the shared Google Doc at the top. Attendees copy and paste both during Block 5 setup.

---

## Block 2 — architecture notes (for Saturday prep, not the flash card)

**The app:** role-aware document generator. Next.js, Anthropic SDK, deployed to Vercel. Inputs: role, initiative, multi-select of stakeholders. Output: one tailored document per stakeholder, one API call each. Why this app: every knowledge worker in the cohort faces "I know something I need to communicate differently to different people" every week. Tommy co-shaped the concept.

**What Shubham has ready by Saturday:**
- Vercel-hosted version at a stable URL (e.g., `unlock-demo.vercel.app`), already deployed, dry-run passes
- Local copy of the same project on Shubham's laptop, Claude Code Desktop open inside it, dev server running on `localhost:3000`
- Projector switches between browser tab (hosted) and Claude Code Desktop without reconnecting cables

**What's on the Vercel app:**
- Form with three fields: role (text), initiative (textarea), stakeholders (multi-select of ~6 common types — exec, peer, direct report, client, board, vendor — plus "add your own")
- Generate button hits a Next.js API route, which calls Anthropic SDK once per selected stakeholder and returns tailored documents
- Results render as labeled cards, one per stakeholder, readable on the projector

**Why the live Claude Code extension beat exists:**
- Beat 1 shows the app-as-agent (one job, many outputs) — impressive but could read as "a prompt with a form"
- Beat 2 shows Claude-Code-as-agent (read, decide, act, check) — proves the loop
- Without beat 2, the thesis is only half-landed. Without beat 1, there's no emotional grounding in "this is your actual work."
- Both beats cost ~5 min each, theory beat is 30 sec, total fits the 15-min budget with 3 min slack.

---

## ★ Closer demo — three phases

### Phase A — Bridge

*"What each of you just built is ONE app doing ONE job — take a role, an initiative, a set of stakeholders, generate tailored documents. That's Hour 1 of the full program. Let me show you what Hour 4 looks like — and this is something I actually built and use every Monday at Digital Realty, not a prop."*

### Phase B — Set up + run the scraper

Open the scraper (pre-loaded in a tab). Turn to **Bill**:

> *"Bill — name a real account you're trying to close. One where the company has a public web presence."*

He names it. Type it in. *"This is a tool I built that I run every Monday morning. I'm pointing it at [account] right now."*

Narrate the 6 autonomous steps (site → press → LinkedIn → news → synthesis → brief). When it finishes: *"This is what I used to spend two hours doing on a Monday morning. It takes ninety seconds now."*

**Name the constraint out loud:** *"This works when the target has a public web presence. For a stealth startup or a private company with no press, you'd build a different version that leans on peer-company research or interview prep instead."*

### Phase C — Connect to the program (no pitch)

*"What you just watched is THE SAME primitives you built thirty minutes ago. A Next.js app, an API route, the Anthropic SDK, real data, multi-step. The only difference is I chained six steps instead of one. The full 8-hour program is exactly that — teaching you to chain steps for your own work. Hour 4 is everyone in the cohort building one of THESE for themselves. Hours 5–8 connect them to your team's systems. That's all I'll say about the program for now — questions later."*

Pivot straight into the debrief.

**Backup option:** If the scraper doesn't run cleanly on Bill's real account in the Saturday dry-run, swap in a different target — Tommy's competitor, Jess's peer institution, or a DLR-specific workflow.

---

## Pre-work email

**Extracted to:** `email.md` (same folder). Copy-paste into Gmail. The attached 1-pager is `../../pre-class-setup.md`.

---

## To-do list

**Canonical to-do list is at `todo.md` (same folder).** This section was the original to-do but is now superseded. Use `todo.md` for all prep tracking.

---

## Stall absorbers baked into the build phase

| Mechanism | What it absorbs |
|---|---|
| Pre-written Block 5 build prompt (one prompt, engineered Saturday) | Blank-page paralysis + "where do I start" friction. Claude Code does the heavy lifting. |
| Blank Next.js scaffold done in pre-work, dev server pre-verified | Sunday-morning install failures. 20 min of friction moved to Friday night. |
| Demo API key pre-pasted in shared Google Doc ($50 cap, rotated Monday) | Anthropic account creation + billing setup, which would block non-technical attendees cold |
| 60-second Claude Code Desktop UI walkthrough on the projector | First-timer confusion with the Code tab, approve buttons, preview pane |
| Show-and-tell flexible 60–90 sec each | Buffer if the build runs long |
| "This is a demo key — don't worry about security" said aloud | API key paranoia (Zeshawn especially) |
| "Just approve, we're not in production" said aloud | Reader archetype stalling on every command |
| "I'll help anyone stalled in the 15 min after we wrap" said aloud | Performance anxiety |
| Projector-share fallback (Shubham runs their prompt on his account, AirDrops result) | Rate limit hits on one attendee |

---

## Risks and what to watch for

- **Vercel app errors in Block 2.** Fallback: skip Beat 1, go straight to building the app from scratch in Claude Code on the projector. Frame the outage as why local copies matter.
- **Block 2 Claude Code live-edit loops or errors.** Narrate as a feature, retry once with a simpler ask, pivot if still stuck. This becomes the deliberate-failure moment pulled forward — Block 5 still gets its own.
- **Pre-work didn't work for someone** (scaffold missing, dev server won't start). Text-reminder Friday night should prevent this. Sunday fallback: pair them with a working neighbor or share Shubham's projector app for their real initiative. Do NOT try to fix the scaffold live.
- **Build phase runs long.** Cut show-and-tell to 60 sec each; offer the 15-min post-wrap stay-after for anyone unfinished.
- **Zeshawn confidentiality freeze.** He's 1 month into a GC role at a cannabis company. Emphasize that the demo key is Shubham's (not his), the $50 cap limits exposure, and whatever he types is staying on his laptop — the API call is role/initiative/stakeholders text, not document upload. If he pushes, be ready to talk about Anthropic's data retention on API calls verbally.
- **Alan improvises off the Block 5 build prompt.** His archetype. Pull him back: "run it once first, then change it."
- **Bill's account might not scrape well in Block 7.** Fallback: if the scraper doesn't produce a clean brief on his real account in the Saturday dry-run, pick a different attendee's closer target (Tommy's competitor, Jess's peer institution).
- **The matrix is still the weakest block.** Two rounds of personas agreed. Accept it's imperfect this cohort. Watch the real-room reaction carefully and fix for v2 after the retro.
- **Rate limit hits on Claude Code during Block 5.** Sonnet default. Projector-share fallback (Shubham runs their prompt on his account, AirDrops the result). Worst case: pair two attendees on one machine.
- **Venue wifi can't handle 5 concurrent Claude Code sessions.** Pre-test Saturday evening during the venue dry-run. Phone hotspot is in `todo.md` prep list. Stagger builds if needed (2 at a time, 3 watch).
- **Closer undercut risk.** Priya-persona flagged that the scraper closer can accidentally make the attendees' builds feel like "the kiddie version." The new Block 5 architecture (attendees build the same primitives as Block 2) closes most of this gap, but tighten the "this is Hour 4, you'll build one in session 2" bridge anyway.
- **Claude Code Desktop app has a bug on Sunday.** Pin the current version, don't auto-update Sunday morning. Fallback: meeting-prep-in-browser revert plan (see appendix in `/Users/shubhamchandra/.claude/plans/sorted-coalescing-phoenix.md`).

---

## Persona beta test results (two rounds)

Two rounds of synthetic persona testing informed this plan:

**Round 1 — 2026-04-07.** Five personas (Maya litigator, Jordan actor, Priya consultant, Alex PMM, Sam founder) reacted to v0 structure. Key findings: cut bad-prompt/good-prompt contrast (4/5), expand matrix (3/5), add deliberate failure moment (3/5), lead with the demo (3/5), confidentiality gap for regulated professions (1/5, critical severity). These became the v1 changes above.

**Round 2 — 2026-04-08.** Six personas (Jordan actor-in-transition remote, Priya consultant, Alex PMM, Raj GC, Mira founder-wanna-be, Kasey salesperson) reacted to v1 with a new attendee mix. Validated the deliberate failure moment as the strongest single element (5/6). Surfaced new issues: dummy account framing as accidental demo theater, closer undercutting the build for observers, maintenance/cadence gap, task-vs-decision use case gap, the "transition user with no door" problem from Jordan.

Full findings:

- `/knowledge/learnings/2026-04-07-persona-beta-test-2026-04-12-demo.md`
- `/knowledge/learnings/2026-04-08-persona-beta-test-round-2-new-lineup.md`

---

## Retro (fill in Sunday evening 4/12)

*To be written Sunday evening 2026-04-12. Cover:*

- *What worked (specific moments, not generalities)*
- *What didn't (specific moments)*
- *Where I checked out as an instructor — where I felt myself wanting to change course live*
- *What surprised me about the attendees' reactions*
- *What the exit surveys said (summary + standout quotes)*
- *What the discussion questions surfaced*
- *What to promote to the canonical `run-of-show.md`*
- *What stays cohort-specific*
- *Whether the v1 changes landed the way the personas predicted*
- *Which attendee was most impressed, which was least, and why*
- *Anything Jordan (absent) said when I shared the recap*
