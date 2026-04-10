# Module 1 — Run of show: The Process Matrix

**Status:** Draft v0.1 (written 2026-04-07, pre-beta). Will be refined after the 2026-04-12 first live run and the retro that follows.

**Duration:** ~60 min (standard program hour) or ~75 min (extended in-person version with a larger hands-on phase).

**Format:** Live, instructor-led. In-person or Zoom. Assumes each attendee has a laptop and a Claude Pro account.

**Learning objective:** By the end of Module 1, each attendee has seen Claude act agentically on real data, built their own reusable Claude Project for one of their own recurring tasks, and can explain the 5-component process matrix in their own words.

**Program context:** This is Hour 1 of an 8-hour program. Everything after this hour assumes the matrix framework as the organizing intellectual spine.

## Prerequisites for the attendee

- A Claude Pro subscription ($20, cancellable) — needed for Projects
- One recurring task they'd love to never do again, held in their head (no form required)
- Optional: a reference file or two from that task (a sample document, a template, a brief)

## Materials the instructor needs ready

- A projector or screen-share
- A pre-built "demo account" with data relevant to the live demo — ideally populated with the volunteer's real context (see the 2026-04-12 beta run at `runs/2026-04-12-beta-cross-industry.md` for the dummy-account pattern, which generalizes beyond that specific cohort)
- A shared Google Doc containing: (1) a generic 6-line Project template, (2) one personalized starter Project per attendee with a "WHY THIS WORKS" annotation block
- A pre-written primary demo prompt, plus two fallbacks
- A 1-page visual of the 5-component matrix
- A pre-built tool or workflow to demo at the closer — something the instructor actually uses, not a prop
- A 5-question feedback form (Google Form)

## The run

### Block 1 — Welcome and frame (~3 min)

Name everyone in the room. Say what industry they're in out loud. Joke about the spread if there is one — the mix is the asset. Set the expectation in one sentence:

> "By the end of this hour, each of you walks out with a Claude Project that's reading your real files and doing actual work for you. Not prompts. Tools."

If this is a beta or early cohort, add the honest ask:

> "I want your honest feedback at the end. Be brutal — it's how this gets better."

Do not start teaching the framework yet. Go straight into the demo.

### Block 2 — Live demo on real data (~12–15 min)

This is the headline beat. If this beat lands, every subsequent block becomes easier. If it misses, the rest of the hour is rescue work.

**Pick a volunteer before the session starts.** For the first live run, pick the person whose job is most clearly knowledge-work-shaped (consultant, PM, analyst). For later cohorts, once you've run this several times, consider picking the hardest case instead — the person whose job is least obviously AI-shaped. Universality lands harder when the unlikely case works.

**Structure:** three loose phases.

**Phase A — Setup.** Bring the volunteer to the projector. If you're using the dummy-account pattern, open the pre-loaded account. If you're using live OAuth, walk them through authorizing a connector. Drop a calming line while things load: *"Claude doesn't store your data. It reads it when you ask, then forgets."*

**Phase B — Run.** Frame the task in one sentence: *"I'm going to ask Claude to do something that would take 30 minutes to do by hand on a Sunday night. Watch what it DOES, not just what it says."* Paste the pre-written prompt. Never type it live — typos kill momentum. Claude runs the multi-step task. Narrate while it works. Don't just stare at the screen — say what's happening out loud so the room sees the steps.

Somewhere in the middle of the run, drop the 30-second theory beat:

> "Same Claude. Same model you all have on your laptops. The first way everyone uses it asks it to predict the most likely next words. What I just did gave it a job, real data, and a goal. That's the entire difference."

Keep it to 30 seconds. The framework section comes later.

**Phase C — React and bridge.** When Claude finishes, read the output on the projector. Pause. Look at the volunteer. Capture their reaction — the room's eyes will follow their face, and their face is the lesson. If they don't react out loud, ask: *"Would you actually use this on Monday?"* Their answer is what the room remembers. Then bridge:

> "What you just watched took six minutes to run but ninety seconds to build. The instruction was four sentences. Now I'm going to show you the framework that makes this possible."

### Block 3 — The 5-component matrix (~6–8 min)

This is the intellectual spine of the whole program and the reason Module 1 isn't just "AI tricks." Don't rush it. Persona beta-testing flagged this as the single most under-invested beat in early drafts — give it real time.

Show the matrix visual. Five columns: **People / Tools / Trainings / Guardrails / Metrics**. Two rows: "Before AI" and "After AI."

Map the volunteer's task across both rows, verbally, using what the room just watched. "Before AI, who did this? What tools? How did they learn? Where's the review step? What's measured? Now after — who does it? What tools? What new skill do they need? Where's the guardrail? What's the new metric?"

The teaching move: *most AI training fixes one column. We just rebuilt the whole row.*

Tie it back to the vertical-vs-horizontal distinction:

> "Vertical thinking is 'how do I get my person to use AI?' Horizontal thinking is 'which of my processes should I redesign?' What you just watched was horizontal. Everything else in the program is built on that distinction."

If time permits, show the "before" row for one or two other attendees side-by-side with the volunteer's. The cross-industry thesis lands structurally when you do this, not just emotionally.

### Block 4 — UI walkthrough (~60 sec)

Before anyone touches their laptop, screen-share Claude on the projector and walk through it once: *"Click Projects in the sidebar. Click New Project. Name it. Here's where you paste instructions. Here's where you drop files."* Front-load the navigation friction once for everyone instead of absorbing it five times during the build phase.

### Block 5 — Build phase (~25–30 min)

The "I built that" moment is the conversion trigger. This is where attendees stop watching and start making.

**Setup (~2 min).** Direct them to the shared Google Doc. Each attendee finds their name, and under it a pre-built starter Project tailored to their industry, plus a "WHY THIS WORKS" annotation block explaining each line. Frame it out loud:

> "Here's an example I built for you and here's why it's good. You can paste it in and use it as-is, or you can write your own from scratch using this as a model. Either way, the structure is the lesson."

Also say this: *"File upload is optional. If you can't upload a real work file, paste a paragraph of context instead."*

**Build (~20–25 min).** Each attendee opens Claude, creates a new Project, pastes their starter, personalizes the variables for their actual situation, optionally uploads a file, and runs it on a real task they brought. The instructor circulates — hardest cases first. If one of the attendees is a creative or someone whose job is less obviously AI-shaped, walk to them first so their starter gets live instructor attention.

Around the five-minutes-left mark, say:

> "If you're not done, don't sweat it. I'll help anyone stalled in the fifteen minutes after we wrap."

**The deliberate failure moment.** Somewhere in here, intentionally surface a failure — either in the instructor's own demo run or in the first attendee's first output. Don't fake it. Pick a real imperfection and name it out loud: *"See this line? It made something up. Watch how I fix it."* Then tighten the instructions and rerun. Non-technical people need to see a failure and a recovery. Without this, the whole hour feels like a sales demo instead of a training. Sam's persona feedback from the 2026-04-07 beta test put it bluntly: *"Blind trust is the thing that'll get them fired."*

### Block 6 — Show and tell (~7–10 min)

Each attendee takes a minute or ninety seconds at the projector showing what their Project did with their real task. Keep it short — the point is breadth, not depth. Five "IT DID THAT" moments in a row is the emotional payoff. Cross-industry proof becomes empirical at this beat.

If time is tight, cap each person at 60 seconds instead of 90.

### Block 7 — The closer: "hour 4" preview (~7 min)

Bridge from show-and-tell:

> "What each of you just built is ONE Project doing ONE task. That's Hour 1 of the full program. Now I want to show you what Hour 4 looks like — and this is something I actually built and use, not a prop."

Then run a real multi-step tool. The instructor should use something they genuinely use at work — a competitive intel scraper, a research agent, a document synthesizer. Not something built for the demo. Pick one attendee in the room and run the tool on their actual context (a competitor they track, a client they're researching, etc.). Name the constraint out loud if there is one — for example: *"This works when the target has a public web presence. Here's what we'd do if they didn't."*

Close with:

> "Same primitives you just used. I chained six steps instead of one. The full program teaches you to chain steps for your own work. That's all I'll say about the program for now — questions later."

Don't pitch. The closer's job is to make them want more, not to sell.

### Block 8 — Honest debrief (~5 min)

Go around the table:

> "Be brutal. What worked? What didn't? Where did you check out? What was missing?"

Drop the feedback form link in the chat so they can fill it out later when they're alone and will say things they wouldn't say to your face. The form catches what the verbal round misses.

## Pacing guardrails

- Do not let Block 1 eat more than ~3 minutes. The demo is the hook, not the framing.
- The single hard constraint: start Block 7 with at least 10 minutes left. If you're running long, the flex zones are Block 6 (cut show-and-tell to 60 seconds each) and Block 5 (offer the post-wrap stay-after).
- If Block 2 takes 18 minutes instead of 15, that's fine. If it takes 22, cut Block 3 to four minutes and keep moving.

## Variations

**60-minute version (standard program hour).** Cut Block 5 to 15 minutes and Block 6 to 3–4 minutes. Keep Blocks 2, 3, and 7 intact — they're the substance.

**Remote / Zoom version.** The build phase is harder because you can't physically walk to people. Use breakout rooms of 2–3 attendees, drop into each one in turn. The dummy-account pattern for the live demo works unchanged. Show-and-tell uses screen-share rotation.

**Mixed seniority cohort.** If you have a mix of AI-fluent and AI-beginner attendees, the personalized starters do the heavy lifting — each person gets a starter calibrated to their level. Circulate to the beginners first during the build phase.

## Risks and what to watch for

- **The live demo fails on real data.** Have a fallback prompt ready (usually a web-research-only version with no connector). Never type the primary prompt live.
- **The build phase runs long.** Cut show-and-tell to 60 seconds per person; offer the stay-after window for anyone unfinished.
- **Nothing fails during the session.** If everything works perfectly, the room will leave thinking this is a sales demo, not a training. Surface an imperfection deliberately.
- **The framework gets buried.** The matrix has to actually happen, even if Block 2 runs long. Skip anything else first.
- **Regulated-profession attendees freeze on file upload.** File upload is always optional. Have a 1-page confidentiality / data-policy reference doc ready to link for lawyers, healthcare workers, and analysts.

## Sources this is distilled from

- `../syllabus.md` — the program-level context for where Module 1 fits
- `worksheet.md` — the participant-facing content and the original 60-minute skeleton (same folder)
- `runs/2026-04-12-beta-cross-industry.md` — the first real instance of this run of show
- `/knowledge/learnings/2026-04-07-persona-beta-test-2026-04-12-demo.md` — round 1 persona feedback that shaped the block ordering (demo first, framework after), the expanded matrix treatment, and the deliberate-failure moment
- `/knowledge/learnings/2026-04-08-persona-beta-test-round-2-new-lineup.md` — round 2 persona feedback with the updated attendee mix, which validated the deliberate failure moment and surfaced the dummy-account framing nuance, the closer undercut risk, and the maintenance/cadence gap

## To refine after 2026-04-12

- Lock in the Block 2 ordering. Did leading with the demo actually land the way the persona test predicted?
- Lock in the expanded matrix treatment. Was 6–8 minutes too long, right, or still too short?
- Lock in the deliberate failure moment. Did a real attendee see it as teaching or as a stumble?
- Calibrate the show-and-tell block based on what the actual attendees brought. If the distribution of work wasn't even, the block's timing may need to flex.
- Capture any verbal moves that worked in the real run that aren't in this document yet. Instructor craft lives in the voice, not the outline.
