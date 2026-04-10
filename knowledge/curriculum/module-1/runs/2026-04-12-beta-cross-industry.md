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

**Format:** In-person at 1 West Superior, Chicago. Everyone brings a laptop with Claude Pro.
**Pre-work:** 3 items from `2026-04-12-beta-pre-class-setup.md` — Claude Pro signup, bookmark the shared Google Doc, think of one recurring task worth killing.
**Conversion goal:** Validate the lesson format. Testimonials are promised already. The real test is whether these five walk out genuinely thinking it was worth their Sunday morning.

---

## What v1 changed from v0

The run ships the changes surfaced across two rounds of persona testing:

1. **Cut the "plant framework + bad-prompt/good-prompt" verbal opener entirely.** Four of five round-1 personas flagged it as 2023-era YouTube filler.
2. **Lead with the live demo**, not the framework.
3. **Matrix expanded from ~3 to ~6–8 min**, mapped during or just after the demo instead of standalone.
4. **Deliberate failure-and-recovery moment** baked into the build phase. Five of six round-2 personas named this as the strongest trust-building move in the lesson. Not negotiable.
5. **Closer scraper names its constraint out loud** ("this works when the target has a public web presence, here's what we'd do if they didn't").

---

## Run sheet — 8 beats, ~75 minutes

> Rough durations. Read the room, follow the energy, adapt. The one hard constraint: start Block 7 (closer) with at least 10 minutes left in the room.

### 1. Welcome + frame (~3 min)

Name each person by first name, name each industry, joke about the spread (GC, founder, PMM, cultural-sector consultant, enterprise SaaS AE — this is a dinner party crowd, not a business audience). Set the expectation:

> *"By the end of today, each of you walks out with a Claude Project that's reading your real files and doing actual work for you. Not prompts. Tools. You're the first 5 people to ever sit through this — I want your honest feedback at the end."*

### 2. ★ Live volunteer demo on real meeting data (~15 min)

**Volunteer: Jess.** Her work is research-heavy and obviously knowledge-work shaped, which makes her the "easy case" for the demo. Her cultural-sector focus also shows the demo generalizing beyond typical B2B examples, which is a nice side benefit for the room.

Three phases: setup → run → react/bridge. Detailed breakdown below. Lock the demo path with Jess by Wednesday via text (dummy account pre-loaded with her 3 real meetings, or live OAuth if her work laptop allows it).

### 3. The 5-component matrix (~6–8 min)

Show the matrix visual. Map Jess's task across People / Tools / Trainings / Guardrails / Metrics — before and after. Verbal, fast. Tie to the horizontal frame:

> *"Most AI training picks a person and gives them a tool — 'how do I get my people to use AI?' We just rebuilt the whole row. The horizontal question is: which of my processes should I redesign?"*

Give it real time. If the demo runs fast, the matrix gets 8 minutes. If the demo runs long, 5 minutes is the floor. Don't let it shrink below that — the persona tests flagged it as underinvested even at 6 minutes.

### 4. UI walkthrough (~60 sec)

Screen-share Claude on the projector, walk through it once: "Click Projects, click New Project, paste here, drop files here." Eat the navigation friction once for everyone.

### 5. ★ Build phase — each person personalizes their starter (~25–30 min)

Direct them to the shared Google Doc. Each attendee finds a Claude Project starter built for them personally, with a "WHY THIS WORKS" annotation block underneath. Say aloud:

> *"Here's an example I built for you and here's why it's good. Paste it in and personalize it, or write your own using this as a model. Either way, the structure is the lesson. File upload is optional — paste a paragraph of context instead if you can't share a file."*

**Circulate order:** Zeshawn first (new industry, new role, highest uncertainty, most confidentiality-sensitive), Alan second (fragmented founder — his starter is a kill-list, which requires honest self-reporting), then Tommy, Jess, Bill. Hard cases get the most 1:1 attention.

**Deliberate failure moment (don't skip):** Somewhere in this block, surface a real Claude failure and catch it publicly. Either naturally (it'll happen — narrate when it does) or deliberately (ask Claude something just outside its confidence and let it fabricate, then show the fix). Say aloud:

> *"See that? It just fabricated that number. Watch how I fix it."*

Tighten the instructions, rerun, show the corrected output. Five of six round-2 personas named this as the single most trust-building moment of the whole lesson. It's what separates "sales demo" from "training."

Around the 5-minute-left mark: *"Don't sweat it if you're not done — I'll help anyone stalled in the 15 minutes after we wrap."*

### 6. Show-and-tell (~7–10 min)

Quick tour around the table. Each person shows their Project's output on the projector. Default 90 sec each; drop to 60 sec if you're over time.

### 7. ★ Closer — competitive intel scraper on Bill's real account (~7 min)

**Target: Bill's real prospect.** Three reasons he's the right closer subject:

- His job is literally enterprise account research — the scraper does exactly what he needs
- He'll get the biggest "I could use this Monday" reaction, which makes the closer land for the whole room
- He's the attendee whose work most directly maps to the scraper's output shape

Three phases: bridge → run → connect. Detailed breakdown below.

**Watch-out from round 2:** Priya (consultant persona) flagged that the closer can accidentally undercut what attendees just built — "is what I built the kiddie version?" Tighten the "this is Hour 4 of the full program, you'll build one of these in session 2" bridge to prevent that read. Jordan (actor persona) flagged that the closer can feel isolating for attendees who don't have "an account to close." Mitigation: name that the scraper pattern generalizes (Tommy could run one on competitor press, Zeshawn on diligence targets, Jess on peer institutions) so nobody feels "not invited."

### 8. Honest debrief + exit survey (~7–8 min)

Two parts:

- **Live round-table (~5 min):** Three questions from `2026-04-12-beta-discussion-questions.md`. Ask in order Q2 → Q1 → Q3 (emotional → behavioral → social). Take visible handwritten notes. Don't defend anything.
- **Exit survey (~3 min):** Hand out the paper survey from `2026-04-12-beta-exit-survey.md`. Say: *"Last thing. Five minutes. No names. Please fill it out before you leave — if you take it home, you won't."* Envelope at the door.

---

## The 5 personalized starters — drafted below, copy to Google Doc on Saturday

These are ready-to-paste drafts. Each has a "WHY THIS WORKS" annotation block. On Saturday, copy them into the shared Google Doc with each attendee's real name as the section heading.

### Zeshawn Qadir — M&A Target First-Pass Diligence

*Calibration: Zeshawn has a strong M&A framework from his PE shareholder years at Polsinelli, but at Big Law the investment bankers ran the diligence tooling. In-house at a smaller cannabis MSO team, he's now the one who has to build the scaffolding. This starter gives him a first-pass filter so he can decide which deals warrant outside counsel and which he can triage internally.*

**Paste into Claude → New Project → Custom Instructions:**

```
You are a senior M&A diligence analyst at a boutique advisory firm that specializes in cannabis, adjacent-industry, and regulated-industry deals. You have done hundreds of transactions and you know where the landmines are. You are pragmatic and deal-fluent — you know the difference between a red flag that kills a deal, a red flag that changes the price, and one that just needs a disclosure schedule.

I am a newly-appointed General Counsel at a multi-state cannabis operator. I am evaluating potential deal targets. For each target I bring you, produce a first-pass diligence summary I can use to decide whether to engage outside counsel for a full review.

For each target I will provide: (1) target company name, (2) state(s) of operation, (3) deal type (license transfer, asset purchase, equity deal, or unknown), and (4) any public financials, press, or documents I paste.

Produce:

1. LICENSE SITUATION — What licenses they hold, which states, what's required for transfer or change-of-control.
2. 280E EXPOSURE — How their current tax posture affects the deal structure and what survives an acquisition.
3. REGULATORY RED FLAGS — Open enforcement matters, advertising or marketing violations, product recalls, state compliance issues.
4. CONTRACT STRUCTURE CONCERNS — Non-assignable agreements, change-of-control triggers, landlord consent requirements.
5. THREE QUESTIONS I SHOULD ASK OUTSIDE COUNSEL before authorizing a full diligence run.
6. ESTIMATED ENGAGEMENT COMPLEXITY — Low, Medium, or High, with one sentence of reasoning.

Constraints:
- Flag anything you are uncertain about. Say "I don't know" when that is accurate.
- Never invent regulatory citations, case names, or statute numbers.
- Do not give legal advice. This is first-pass scaffolding, not conclusions.
- Defer to outside counsel on anything material. Your job is to save me from paying full diligence fees on deals that aren't worth the spend.

Verification: I will engage outside counsel for full review on anything that gets past this first pass.
```

**WHY THIS WORKS:**

- **Role** — "Senior M&A diligence analyst at a boutique advisory firm" signals to Claude that it should think like the advisors Zeshawn used to work alongside at Polsinelli, not like a generalist legal AI. The "cannabis and adjacent-industry" qualifier anchors industry knowledge.
- **Context** — Naming his situation (new GC, evaluating targets, deciding whether to engage outside counsel) tells Claude what the output is FOR. Without this, Claude would default to a full legal memo — way too much for first-pass work.
- **Inputs** — The four-field schema lets Claude prompt him if he's missing something, and sets expectations for what "enough context" looks like.
- **Success criteria** — Numbered sections that match how real diligence memos are structured. The 280E and license-transfer items are cannabis-specific and require industry knowledge. The "three questions to ask outside counsel" is the key move — it turns the output into a question for the NEXT action, not a conclusion.
- **Constraints** — The hallucination warning is doubled ("flag uncertainty" AND "never invent citations") because legal hallucinations are particularly dangerous. The "first-pass scaffolding, not conclusions" line protects Zeshawn's risk posture.
- **Verification** — Explicitly offloads the final call to outside counsel. This isn't abdication — it's the correct use of in-house tooling.

**A note on confidentiality (Zeshawn-specific):** Do NOT upload privileged or confidential documents to this Project. Until you've worked through your company's acceptable-use policy with respect to Claude Pro's data handling, treat this tool as a structured thinking aid, not a document review system. Paste anonymized context or public information only. Real diligence on non-public materials still goes through your outside counsel's workflow.

**You can:**
- Paste as-is and use it for public-information research on potential targets
- Modify "cannabis and adjacent-industry" if you're also evaluating CBD, hemp, beverage, or non-cannabis deals
- Write your own using this structure as a model

---

### Alan — Founder Weekly Focus & Kill-List

*Calibration: Alan is running an AI consulting firm AND trying to launch small app-based startups. His problem is not "validate an idea" — it's "which of these should I stop doing so I can double down on the one that's working." This is a weekly triage tool, not a one-shot analyzer.*

**Paste into Claude → New Project → Custom Instructions:**

```
You are a ruthless early-stage operator who has shut down more of your own projects than most founders have launched. You have no emotional attachment to any of my projects. Your job is to help me see which ones deserve another week of my time and which ones I am emotionally avoiding killing.

Every week, I will paste in:
1. A list of my active projects, one line each.
2. Where my time actually went this week by project (rough hours, honest estimates).
3. The single most honest thing I can say about each project's traction this week (even if it's "nothing happened").
4. Any external signal from this week — customer feedback, revenue, deletions, enthusiasm, silence.

For each project, produce:

- READ — One sentence on what this project actually is right now, not what I want it to be.
- SIGNAL — What this week's data is actually telling us. Positive, negative, or noise.
- VERDICT — Double down, maintain, kill, or park.
- ONE-WEEK TEST — If you said "maintain" or "double down," the single cheapest experiment I can run this week to validate or invalidate the core thesis. If you said "kill" or "park," what I should do this week to actually let go (stop checking analytics, archive the repo, tell the one user, etc.).

Then, across all projects:

- THE OVERALL CALL — Am I spread too thin this week? If yes, which project do I stop doing first? Name it. Don't hedge.
- ONE UNCOMFORTABLE QUESTION I am avoiding.

Constraints:
- Be honest, not encouraging. I don't need a cheerleader — I have one of those and it's the problem.
- If I give you bad data ("I don't know how many hours I spent"), say so and refuse to rate that project.
- Don't let me reframe a failing project as a "pivot." If it's dying, say it's dying.
- Never recommend "launch to more users" as a fix for a traction problem that isn't caused by a marketing problem.

Verification: I'll come back next week with what I actually did. You'll see the pattern in whether I followed through.
```

**WHY THIS WORKS:**

- **Role** — "Ruthless early-stage operator who has shut down more of their own projects than most founders have launched" is designed to overrule Claude's default encouragement bias. Claude is trained to be helpful, and "helpful" usually means "supportive." This role flips that setting.
- **Context** — Explicitly names the failure mode (spread too thin, emotionally avoiding killing things). That tells Claude what output is actually useful, which isn't "tell me my ideas are great."
- **Inputs** — The four structured inputs force Alan to do the work of observing his own week before running the tool. The tool is only as useful as the honesty of the data.
- **Success criteria** — The "Verdict" field with four options (double down / maintain / kill / park) forces a choice. "Kill" and "park" are explicitly allowed — most AI tools never suggest stopping. The "uncomfortable question" line is where the real value sits.
- **Constraints** — The anti-pivot line is the most important one. Founders love to reframe failure as pivot. Claude would normally let this slide. The constraint forces it not to.
- **Verification** — "I'll come back next week" sets this up as a CADENCE tool, not a one-shot. Addresses the maintenance/upkeep gap round-2 personas (Priya, Mira) flagged.

**You can:**
- Paste as-is and run it every Friday for a 15-minute weekly review
- Modify the "operator" role if you prefer a different voice (ex-founder, ex-VC, ex-builder)
- Write your own from scratch using this structure

---

### Thomas "Tommy" Nathan — Home Services Vertical SaaS Competitor Teardown

*Calibration: Tommy's buyer at Housecall Pro is a plumber or HVAC contractor running a small business — NOT a tech buyer. Generic B2B PMM frameworks don't translate. This starter is tuned for the "main street SMB" positioning problem, where you judge messaging by whether a skeptical tradesperson would actually believe it.*

**Paste into Claude → New Project → Custom Instructions:**

```
You are a senior product marketing manager with a deep feel for vertical SaaS aimed at trades and home services. You know the buyer is a plumber or HVAC contractor running a small business — not a VP of Ops at a tech company. You judge positioning by what would actually move a skeptical tradesperson on a sales call, not by what would look clever in a LinkedIn post.

When I bring you a competitor, produce a teardown that helps me understand how they show up to the buyer we actually fight for.

For each teardown I will provide: (1) competitor name, (2) their website URL if it's not obvious, (3) the specific question I have this week ("are they moving upmarket?", "did they change pricing?", "how are they winning HVAC specifically?", etc.).

Produce:

1. THEIR STATED POSITIONING — How they describe themselves on their homepage and pricing page. Quote the actual language.
2. THEIR ACTUAL POSITIONING — Based on recent content, customer reviews, news coverage, and integration partners, what they really are right now. Note any gap between (1) and (2). The gap is usually where the opportunity lives.
3. WHO THEY'RE ACTUALLY BUILT FOR — Team size, vertical specialization, technical sophistication of their buyer. Triangulate from pricing, features, and case-study subjects.
4. THEIR THREE STRONGEST CLAIMS and whether each is defensible — not what a CMO would say, what a plumber would believe.
5. WHERE THEY ARE WEAK — Two or three positioning gaps, product gaps, or trust gaps we could exploit on a sales call today.
6. THE 30-SECOND SALES PITCH — When this competitor comes up in a deal, here's what the rep should actually say. One paragraph, plain-spoken, no marketing voice.

Constraints:
- Web-research everything. Don't work from memory on this competitor.
- If you can't verify a claim, say so. Don't guess at pricing, headcounts, or customer counts.
- Don't be polite. We're trying to win deals, not make friends.
- No marketing jargon in the sales pitch. Plumbers don't say "end-to-end solution." They say things like "it shows me where my trucks are."

Verification: I'll fact-check any specific claim — pricing, customer counts, funding — before briefing sales.
```

**WHY THIS WORKS:**

- **Role** — "Deep feel for vertical SaaS aimed at trades and home services" is the key calibration. Without it, Claude defaults to tech-buyer positioning logic, which is wrong for this audience. The "tradesperson, not a VP of Ops" line reinforces it.
- **Context** — The buyer description changes what makes a claim "defensible." That one detail reshapes the entire output.
- **Inputs** — The three-field schema lets Tommy ask different questions week-to-week without rewriting the project.
- **Success criteria** — The stated-vs-actual positioning split is the core IP. It's how senior PMMs actually think, and most junior PMMs don't know to look for the gap. The "30-second sales pitch" output forces Claude out of marketing voice and into actual deal language.
- **Constraints** — The "No marketing jargon" and "plumbers don't say end-to-end solution" lines are explicit anti-patterns. Claude honors these when they're this specific.
- **Verification** — Tommy owns the fact-check step. Keeps the tool honest, teaches the discipline.

**You can:**
- Paste as-is and use it for any competitor in your current set (Jobber, ServiceTitan, FieldEdge, Workiz)
- Modify the buyer description if you're targeting a specific vertical slice (HVAC-first, plumbing-first)
- Write your own from scratch using the structure

---

### Jess Nickelman — Cultural Venue Peer Benchmarking

*Calibration: Jess has L.E.K.-level analytical rigor combined with first-hand venue management experience from the Podlasie Club. Her starter leans into that combination. She's not a generic consultant doing cultural projects — she's someone who has actually worked a front-of-house shift at a cultural space.*

**Paste into Claude → New Project → Custom Instructions:**

```
You are a senior strategy consultant at a cultural-sector firm. You have done peer benchmarking on cultural institutions — museums, performing arts centers, cultural districts, community venues, heritage sites — for over a decade. You have the rare combination of analytical rigor AND first-hand venue knowledge: you have read the Cultural Infrastructure Index and you have worked a front-of-house shift. You know the difference between what an annual report says and what actually happens in the building on a Friday night.

When I bring you a cultural institution or venue, produce a peer benchmark that helps me situate them against comparable organizations for a client engagement.

For each benchmark I will provide: (1) the target institution (name, city, type), (2) the specific dimension I want to benchmark (operating budget, attendance, programming model, earned-vs-contributed revenue mix, community engagement strategy, or something else), and (3) the client question driving the benchmark ("should they expand their footprint?", "is their ticket pricing sustainable?", "how do similar venues handle community programming?", etc.).

Produce:

1. PEER SELECTION — Five to seven peer institutions, with one sentence on why each is comparable. Explicitly note where the match is close and where the comparison is imperfect.
2. THE BENCHMARK TABLE — A simple comparison of the target and peers on the specific dimension I asked about. Use public data — annual reports, IRS 990s, press coverage, the institution's own site.
3. TWO OUTLIERS — One peer doing this unusually well, one doing it unusually poorly, with one sentence each on what it suggests.
4. THREE QUESTIONS THIS RAISES FOR THE CLIENT — What the benchmark surfaces that the client should think about before making their decision.
5. AN HONEST NOTE ON DATA QUALITY — Where the numbers are soft, where you couldn't find data, where the peer comparison is shaky.

Constraints:
- Flag anything you can't verify. Nonprofit data is patchy — say so when it is.
- Prefer recent data (last 3 years) unless older is the only thing available.
- Don't invent numbers. If you can't find a revenue figure, say so and move on.
- Don't dress things up. We serve cultural clients because we respect them, not because we flatter them.

Verification: I'll cross-check specific numbers against audited financials or industry databases before using them in a client deliverable.
```

**WHY THIS WORKS:**

- **Role** — The "read the Cultural Infrastructure Index AND worked a front-of-house shift" line is the calibration specific to Jess. It tells Claude to use BOTH analytical rigor AND practical venue knowledge. Most consulting tools miss the second half.
- **Context** — Framing around "client engagement" anchors the output in her day-to-day work, not generic research.
- **Inputs** — Separating the benchmark dimension from the client question prevents Claude from defaulting to "here's everything about this institution." It forces focus.
- **Success criteria** — The peer-selection + benchmark-table + outliers + questions-raised structure mirrors how L.E.K. and AEA decks actually get built. The "honest note on data quality" section is the thing junior consultants forget; building it into the tool enforces the discipline.
- **Constraints** — "Don't invent numbers" is critical because cultural-sector data is patchy and Claude will happily fill gaps. "We serve cultural clients because we respect them, not because we flatter them" is a tone constraint that keeps the output from becoming a puff piece.
- **Verification** — Cross-checking against audited financials protects her professional reputation — a discipline every L.E.K. alum already has.

**You can:**
- Paste as-is and use it for any cultural institution
- Modify the sector if you're specialized in one type of venue (performing arts, museums, libraries, cultural districts)
- Write your own using the structure

---

### Bill McCue (Workday) — Enterprise Account Research + Discovery Prep

*Calibration: Workday enterprise deals are $1M-$10M+, 18-24 month cycles, heavy research burden per account. His starter is account research + discovery prep, tuned for enterprise complexity — more depth per account, more stakeholders to track, credibility on the line in front of senior HR, Finance, or Ops leaders.*

**Paste into Claude → New Project → Custom Instructions:**

```
You are my head of sales operations at a major enterprise SaaS company. You have run hundreds of enterprise deal cycles and you know what separates a discovery call that moves a deal forward from one that doesn't. You have zero patience for surface-level research — you know that my prospects have already seen LinkedIn, and they expect me to know something they don't.

When I bring you an account, produce a discovery prep brief I can actually use to run a first meeting with a senior HR, Finance, or Operations leader.

For each account I will provide: (1) account name, (2) who I'm meeting (name + title), (3) how this meeting got set (inbound, referral, cold, prior relationship), and (4) the specific business problem I'm going in to explore.

Produce:

1. THE 90-SECOND READ — What this company actually is right now. Recent earnings or funding, major leadership changes, obvious strategic pivots in the last 12 months. Cite sources.
2. THEIR CURRENT STACK (if findable) — What HCM, Financials, or related systems they appear to be using today, based on job postings, LinkedIn signals, press releases, or vendor case studies. If you can't find it, say so. Don't guess.
3. THE LIKELY PAIN — Based on their stage, industry, and public signals, what are the 2-3 most probable operational pains a senior HR or Finance leader is actually feeling this quarter? Tie each pain to a specific signal you can point at.
4. THREE DISCOVERY QUESTIONS that aren't generic ("what are your goals?"). Questions that surface real problems, anchored to something specific about THIS company.
5. ONE NON-OBVIOUS ANGLE — Something most AEs wouldn't think to ask about, but that could differentiate me in this meeting.
6. ONE THING I SHOULD NOT SAY — A phrase, claim, or pitch move that would blow my credibility in this meeting given what I've just learned.

Constraints:
- Web-research everything. Prefer the last 90 days.
- If you can't verify something, say so and move on. Don't guess at headcounts, revenues, or stack details.
- Don't be generic. "They probably want to improve efficiency" is useless. Be specific to THIS company THIS quarter.
- Cite sources for claims that matter.

Verification: I'll cross-check the top 2 facts before I walk into the meeting. This is pre-call intel, not a script.
```

**WHY THIS WORKS:**

- **Role** — "Head of sales operations at a major enterprise SaaS company" + "zero patience for surface-level research" tells Claude this is enterprise-grade, not mid-market. The anti-LinkedIn line is critical — most AI account research tools just re-surface LinkedIn data.
- **Context** — Enterprise HR / Finance / Operations leader is the specific buyer persona. Different from SMB or mid-market.
- **Inputs** — Meeting type (inbound / referral / cold / prior rel) matters because it changes what the AE should open with. Usually missed.
- **Success criteria** — The 90-second read + current stack + likely pain structure mirrors how real enterprise pre-call memos look. The "one thing I should NOT say" section is the sharpest move — most tools only tell you what TO do, not what to avoid. In enterprise sales, credibility lives or dies on what you don't say.
- **Constraints** — "Don't be generic" is the constant battle with AI research tools. Enforced by requiring each pain to be tied to a specific signal.
- **Verification** — Cross-checking top facts protects credibility. Enterprise sales reps live and die on cred.

**You can:**
- Paste as-is and use it before any enterprise discovery call
- Modify the buyer persona if you're in a different function (HR, Finance, Ops)
- Write your own using the structure

---

## ★ Volunteer demo — three phases (the headline beat)

### Phase A — Setup

Jess at the projector with her laptop mirrored. If dummy-account path (likely), open the pre-loaded account with her 3 real meetings already in the Calendar. If live-OAuth path, walk her through Claude → Settings → Connectors → Google Calendar → Authorize.

Calming line during any load time: *"Claude doesn't store your data — it reads it when you ask, then forgets."*

### Phase B — Run the demo

Frame in one sentence: *"I'm going to ask Claude to do something it would take you 30 minutes to do by hand on a Sunday night. Watch what it DOES, not just what it says."*

Paste the pre-written Option D prompt (below). Hit send.

Claude pulls her calendar, hits the web for each meeting attendee/organization, synthesizes prep notes. **Narrate as it works.** Don't just stare:

> *"See what it just did? It just looked at her real calendar."*
>
> *"Now it's going OUT to the web for each person she's meeting with. Three different searches in a row. She didn't write code. She wrote an instruction."*

Drop the 30-second theory beat mid-run:

> *"Same Claude. Same model you all have on your laptops. The first prompt I showed you asked it to predict the most likely next words. This one gave it a job, real data, and a goal. That's the entire difference."*

### Phase C — React + bridge

Read the output. Pause. **Look at Jess. Capture her reaction.** The room's eyes follow her face.

If she doesn't react out loud, ask: *"Would you actually use this before your next client call?"*

Bridge to build:

> *"What you just watched took six minutes to run but ninety seconds to build. The instruction was four sentences. Now turn to your laptops — I have one of these waiting for each of you."*

---

## The work-laptop problem + dummy account pattern

Many professionals can't authorize Claude on their work laptop — locked-down devices, IT policies, privacy concerns. This will keep coming up. The recurring solution: build a dummy Google account ahead of time. Ask the volunteer for 3 real meeting names + people + organizations. Pre-populate the dummy's Calendar with those exact meetings. On the day, the demo runs on the dummy account — but the data on the projector is the volunteer's real meetings.

**Important nuance from round-2 personas (Alex flagged this):** Don't frame the dummy account to the room as "a workaround because her laptop doesn't allow OAuth." That accidentally signals "this won't work at your company." Treat it as a clean demo environment. Save any "here's how this works on your real calendar" talk for later in the lesson when trust is higher.

---

## Pre-written demo prompts (paste, NEVER type live)

### PRIMARY — Option D — Calendar + Web Research

> *"Look at every meeting on my calendar this week. For each meeting, identify who I'm meeting with and what company or institution they're from. Then search the web for that person and organization — pull recent news, recent funding or grants, recent announcements, anything from the last 30 days. For each meeting, draft a 'prep note' with: (1) who they are in 1 sentence, (2) the 3 most relevant things from the news, (3) 3 talking points I should be ready for, (4) 2 smart questions I could ask. Use real meeting titles. Don't make anything up — if you can't find info on someone, say so."*

### PLAN B — Option C — Drive Folder Synthesis

> *"Read every document in my [FOLDER NAME] folder. Find the open questions and unresolved decisions across all of them. Group them by topic. For each group, draft a 1-paragraph status memo I could send to my team — what's decided, what's still open, what needs a decision this week. Be specific. Use real document names. Don't invent decisions that aren't in the docs."*

### PLAN C — Web Research Only (no connector at all)

> *"I'm trying to figure out [REAL QUESTION JESS IS WRESTLING WITH]. Go research it. Find the 3 most credible recent sources. For each, summarize what they say in 2 sentences and tell me what the source's bias is. Then synthesize: what's the consensus? Where do experts disagree? What would you do if you were me? Don't make anything up — link the sources."*

Lock the primary Saturday based on the dry-run. If Option D produces a clean output on Jess's real calendar, use it. If not, fall back to C (Drive) or web-only.

---

## ★ Closer demo — three phases

### Phase A — Bridge

*"What each of you just built is ONE Project doing ONE task. That's Hour 1 of the full program. Let me show you what Hour 4 looks like — and this is something I actually built and use every Monday at Digital Realty, not a prop."*

### Phase B — Set up + run the scraper

Open the scraper (pre-loaded in a tab). Turn to **Bill**:

> *"Bill — name a real account you're trying to close. One where the company has a public web presence."*

He names it. Type it in. *"This is a tool I built that I run every Monday morning. I'm pointing it at [account] right now."*

Narrate the 6 autonomous steps (site → press → LinkedIn → news → synthesis → brief). When it finishes: *"This is what I used to spend two hours doing on a Monday morning. It takes ninety seconds now."*

**Name the constraint out loud:** *"This works when the target has a public web presence. For a stealth startup or a private company with no press, you'd build a different version that leans on peer-company research or interview prep instead."*

### Phase C — Connect to the program (no pitch)

*"What you just watched is THE SAME primitives you built thirty minutes ago. Custom instructions, structured prompts, real data, multi-step. The only difference is I chained six steps instead of one. The full 8-hour program is exactly that — teaching you to chain steps for your own work. Hour 4 is everyone in the cohort building one of THESE for themselves. Hours 5–8 connect them to your team's systems. That's all I'll say about the program for now — questions later."*

Pivot straight into the debrief.

**Backup option:** If the scraper doesn't run cleanly on Bill's real account in the Saturday dry-run, swap in a different target — Tommy's competitor, Jess's peer institution, or a DLR-specific workflow.

---

## Pre-work email (send Wednesday 2026-04-08)

Subject: *"Sunday — three things to do before you show up"*

> Hey — three quick things so we can hit the ground running on Sunday morning. Should take about 15 minutes total.
>
> 1. **Sign up for Claude Pro** at claude.ai. $20/month, cancel any time. We'll use a paid feature called Projects during the session and I want you in there with me, not watching me drive. If you already have Pro you're done with this step.
> 2. **Bookmark this Google Doc** [link — will send Saturday when the starters are in it]. It's where we'll share templates during the session. When you open it Sunday, scroll to your name — there's a starter Project waiting for you that I built for you personally.
> 3. **Show up with one task in your head** — something you do every week or every other week that you would happily never do again. Doesn't have to be impressive. The more annoying it is, the better.
>
> **When:** Sunday 2026-04-12, 10:30am – 11:45am CT
> **Where:** 1 West Superior, Chicago IL
> **Bring:** laptop, charger. I'll have food and coffee.
>
> Full pre-class 1-pager attached — forward it if anyone wants more detail.
>
> See you Sunday.
> —Shubham

Full pre-class 1-pager lives at `2026-04-12-beta-pre-class-setup.md`.

---

## Shubham's to-do list (chronological)

> Today is **Wednesday 2026-04-08**. Demo is **Sunday 2026-04-12**. You have 4 days plus Sunday morning.

### WEDNESDAY 4/8 (today) — ~40 min total

- [ ] **Send the pre-work email to all 5 attendees.** Template above. Attach the pre-class 1-pager. *(10 min)*
- [ ] **Text Jess to lock the demo path:** *"Hey, for Sunday I want to demo Claude on your actual meetings. Two paths and you pick: (A) you authorize Claude to read your real Google Calendar in the room (only works if your work laptop allows it), or (B) you text me 3 real meetings you have next week — names, people, organizations — and I'll set up a dummy account with those exact meetings on it. Either works. Which is easier?"* *(5 min)*
- [ ] **Confirm 1 West Superior is available/booked** for Sunday 10:30am–11:45am CT *(5 min)*
- [ ] **Text Bill McCue** to ask for a real account name he's trying to close (public web presence). Needed for the scraper closer — don't want to be guessing live. *(3 min)*
- [ ] **Check everyone has Claude Pro** — by Thursday at latest *(passive)*
- [ ] **Block Saturday evening 4/11** for heavy prep *(1 min)*

### THURSDAY 4/9 — ~1 hour

- [ ] **Decide demo path based on Jess's Wednesday response.** If dummy-account path, create the dummy Google account today and pre-populate her 3 real meetings. Verify Claude authorizes on the dummy. *(30 min)*
- [ ] **Build the 1-page 5-component matrix visual** — Google Drawing or Figma frame. 5 columns (People / Tools / Trainings / Guardrails / Metrics). Before/after rows mapped to Jess's workflow. *(20 min)*
- [ ] **Print the exit survey** — 6 copies plus an envelope for collection at the door *(5 min)*
- [ ] **Test the competitive intel scraper** on a sample firm to confirm it still works *(15 min)*
- [ ] **Skim the discussion questions file** so you're not reading from the page Sunday *(3 min)*

### FRIDAY 4/10 — ~45 min light day

- [ ] **Mental rehearsal: Zeshawn first, Alan second.** Spend 20 min thinking through what you'd say when you walk over to each of them during the build phase. The starters are already drafted — you just need to know how to unstick each of them if their first run produces something mediocre. *(20 min)*
- [ ] **Update the starters in this file** with any last-minute context you've learned this week (Bill's account name, Alan's current project count, Tommy's current competitor focus, Jess's current client project) *(15 min)*
- [ ] **Light day.** Don't overdo prep. Save Saturday energy for the heavy block.

### SATURDAY 4/11 — ~4 hours (the heavy day, evening)

- [ ] **Copy the 5 starter Projects from this file into the shared Google Doc.** The starters are already drafted above — your job is to paste them into the doc, format them cleanly, and put each one under the attendee's real name as a section heading so it's easy for them to find on Sunday. **(~1 hour)**
- [ ] **★ DRY-RUN THE VOLUNTEER DEMO** on Jess's actual calendar (or the dummy account). Non-negotiable. Feel the OAuth flow if applicable, time the prompt run, judge whether the output is impressive or mediocre. *(30 min)*
- [ ] **Dry-run the scraper** on Bill's real account *(15 min)*
- [ ] **Test phone hotspot as wifi backup.** Run a Claude query via hotspot to verify bandwidth. *(10 min)*
- [ ] **Pack your bag:** laptop, charger, projector adapter (HDMI/USB-C — know 1 West Superior's setup), phone, water bottle, 6 printed exit surveys, pens, envelope for collection *(10 min)*
- [ ] **Sleep well.** Don't stay up past midnight prepping. Your Sunday-morning self needs rest more than marginal prep.

### SUNDAY 4/12 morning — ~30 min before 10:30am start

- [ ] **Arrive at 1 West Superior by 10:00am**
- [ ] **Test the projector** — connect laptop, mirror, verify Claude renders
- [ ] **Test the wifi** — run a Claude query with a connector to verify bandwidth
- [ ] **Re-test connector OAuth** — don't assume Saturday's auth is still live
- [ ] **Open all tabs in order:**
  - Tab 1: Claude (logged in, projector account)
  - Tab 2: Shared Google Doc with the 5 starters
  - Tab 3: Pre-written demo prompts doc
  - Tab 4: 5-component matrix visual
  - Tab 5: This run sheet open for glance reference
- [ ] **Paper materials out of the bag:** 6 printed exit surveys, pens, envelope ready at the door
- [ ] **Phone hotspot ready as backup.** Pre-connected, ready to switch if room wifi dies.
- [ ] **Water + snack. Breathe.** You've prepped. The lesson is good. Your friends are already rooting for you.

### SUNDAY 4/12 post-lesson

- [ ] **Help any stalled attendees finish their Projects** in the 15-min stay-after window (you offered this in Block 5)
- [ ] **Write yourself a 5-bullet retro that evening** while it's fresh. Save it in the Retro section at the bottom of this file (not a separate file).

---

## Stall absorbers baked into the build phase

| Mechanism | What it absorbs |
|---|---|
| 5 personalized annotated starters (drafted above) | Blank-page paralysis. Cuts per-person build time by ~60%. |
| 60-second UI walkthrough on the projector | First-timer confusion with Claude Projects UI |
| Show-and-tell flexible 60–90 sec each | Buffer if the build runs long |
| "File upload is optional" said aloud | Confidentiality freeze (Zeshawn especially) — paste a paragraph of context instead |
| "I'll help anyone stalled in the 15 min after we wrap" said aloud | Performance anxiety |

---

## Risks and what to watch for

- **Connector authorization fails on the projector.** The dummy-account path eliminates this. Have the dummy ready even if you're planning live OAuth.
- **Build phase runs long.** Cut show-and-tell to 60 sec; offer post-wrap stay-after for anyone unfinished.
- **Zeshawn confidentiality freeze.** He's 1 month into a GC role at a cannabis company. He will not upload real documents, and his starter explicitly acknowledges this. Be ready to talk to Claude's data policy verbally if he pushes.
- **Alan's projects are in flux.** His kill-list starter works only if he brings real data about where his time is actually going. If he brings vague "I have a few ideas" framing, push him to be specific when you circulate.
- **Bill's account might not scrape well.** Fallback: if the scraper doesn't produce a clean brief on his real account in the Saturday dry-run, pick a different attendee's closer target (Tommy's competitor, Jess's peer institution).
- **The matrix is still the weakest block.** Two rounds of personas agreed. Accept it's imperfect this cohort. Watch the real-room reaction carefully and fix for v2 after the retro.
- **Dummy account framing risk.** Alex-persona flagged that framing the dummy as a "workaround because her laptop doesn't allow OAuth" accidentally signals "this won't work at your company." Don't describe it that way to the room. Treat it as a clean demo environment.
- **Closer undercut risk.** Priya-persona flagged that the scraper closer can accidentally make the attendees' Projects feel like "the kiddie version." Tighten the "this is Hour 4, you'll build one in session 2" bridge.

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
