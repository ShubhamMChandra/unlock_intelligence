# Module 1 — Run of show: The Process Matrix

**Status:** Draft v0.3 (restructured 2026-04-12 after the beta run. Aspiration moved to front, build made collaborative, R-D-C workflow added as final build. See v0.2 in git history for the previous structure.)

**Duration:** ~70 min (standard) or ~80 min (extended in-person with deeper customization and build phases).

**Format:** Live, instructor-led. In-person or Zoom. Assumes each attendee has a laptop and a Claude Pro account.

**Learning objective:** By the end of Module 1, each attendee has seen the full potential of agentic AI (the competitive intel scraper), used a role-aware document generator on their own real work, can explain the 5-component process matrix in their own words, and has built a complete research-decision-communication workflow collaboratively.

**Program context:** This is Hour 1 of an 8-10 hour program. Everything after this hour assumes the matrix framework as the organizing intellectual spine.

## Prerequisites for the attendee

- A Claude Pro subscription ($20, cancellable) — needed for Projects
- One real initiative they need to communicate about to multiple stakeholders, held in their head (no form required)
- Optional: a reference file or two from that initiative (a sample document, a template, a brief)

## Materials the instructor needs ready

- A projector or screen-share
- hpc-markets.com loaded in a browser tab, pre-tested on a real account the day before
- The document generator running at localhost:3001 (or deployed URL), pre-tested
- The Gamma deck loaded and ready to project (5 slides — title, destination, matrix, R-D-C, closing)
- A 1-page visual of the 5-component matrix (printed handout, empty cells)
- A pre-tested R-D-C build workflow — the three-phase prompt chain that drives Beat 5
- A demo API key in the shared Google Doc ($50 cap, rotated after the session)
- A 7-question feedback form (printed or Google Form)

## The run

### Beat 1 — Opener (~3-5 min)

Name everyone in the room. Say what industry they're in out loud. Joke about the spread if there is one — the mix is the asset. Set the expectation in one sentence:

> "By the end of this hour, you'll have seen where this goes, learned the basics, and built a complete workflow — research, decision, communication — on your own real initiative. Together."

If this is a beta or early cohort, add the honest ask:

> "I want your honest feedback at the end. Be brutal — it's how this gets better."

Do not start teaching the framework yet. Do not mention the matrix. Go straight into the aspiration.

**Gamma cue:** Title slide on projector during this beat.

### Beat 2 — "Here's what you can build eventually" (~12-15 min)

This is the aspirational demo. The room sees the destination before they build anything. If this beat lands, the rest of the hour has a North Star. If it misses, every subsequent block needs to independently justify itself.

**Why this comes first, not last:** In v0.2, the scraper was the closer (Block 7). Round-2 persona testing flagged that showing a six-step scraper AFTER attendees built a one-step tool created an undercut — "is what I just built the kiddie version?" Moving it to the front reframes it as a destination, not a comparison. Attendees build knowing where the road goes, not discovering it after.

**Structure:** three phases.

**Phase A — Frame.** Don't sell. Position it as what's real:

> "Before we build anything, I want to show you where this goes. This is something I actually built and use at Digital Realty every Monday morning. Not a prop."

**Phase B — Run.** Turn to an attendee — pick someone whose job has an obvious competitive-intel angle (enterprise sales, consulting, due diligence). Ask for a real target:

> "Name a real company you're tracking right now. One where they have a public web presence."

They name it. Type the company name into the scraper at hpc-markets.com. Then narrate the 6 steps as they fire:

1. **Site crawl** — *"It's reading their corporate site — about page, leadership, recent press releases."*
2. **Press scan** — *"Searching business press. Last 90 days of coverage."*
3. **LinkedIn signals** — *"LinkedIn next. Job postings, team growth, org changes."*
4. **News synthesis** — *"Pulling everything together into a single picture."*
5. **Competitive context** — *"Cross-referencing against what we already know about our positioning."*
6. **Brief generation** — *"And here's the brief. One page. Ready for a Monday morning call."*

**Phase C — React and bridge.** When it finishes, read the brief on the projector. Pause. Then:

> *"This is what I used to spend two hours doing on a Monday morning. It takes ninety seconds now."*

**Name how the scraper generalizes to each person in the room.** Don't let it feel like only one person's tool. Say each one out loud — this prevents the "not invited" feeling:

> *"Tommy, you could run one of these on every competitor in your landscape every Monday. Zeshawn, this is a diligence pre-screen on any acquisition target with a public footprint. Jess, point it at a peer institution before a client pitch. Alan, run it on any company you're about to sell consulting to. Same bones, different target."*

Swap the names for whoever is actually in the room.

Then the bridge:

> "That's where we're going. Same primitives — structured inputs, real data, multi-step. By the end of this program, each of you builds one of these for your own work. Today we start with the basics."

**Pacing guardrail:** 15-minute ceiling. If the attendee starts asking follow-ups ("wait, can it also do X?"), redirect: *"We'll get to that. First, the basics."*

**Gamma cue:** Slide 2 (destination) on projector during this beat.

### Beat 3 — "Here's the basics + we'll customize together" (~15-20 min)

This is the document generator — the teaching surface for the rest of the hour. Three inputs (role, initiative, stakeholders), tailored outputs per audience. One job, many outputs.

**Phase A — Show the tool (~3-4 min).** Open the document generator on the projector at localhost:3001. Walk through what it does in plain language:

> "Three inputs. Your role — what you actually do. Your initiative — the thing you're working on right now. And who you need to communicate to — your stakeholders. It generates a tailored document for each audience. One tool, many outputs."

Run it once on your own pre-loaded example so the room sees the output shape before anyone has to provide their own data. Don't explain the technology. Show the result.

**Phase B — Run it on the first volunteer (~3-4 min).** Pick someone whose initiative is clearly communicable. Ask for their real role, real initiative, real stakeholders. Type them in. Hit generate. Read the first document out loud on the projector. Capture their reaction — the room's eyes follow their face.

If they don't react out loud, ask: *"Would you send that on Monday?"*

**Phase C — Customize together (~10-12 min).** Move through each attendee. This is the collaborative heart of the new structure — don't go around the table mechanically. Let the energy flow. If one person's output sparks a reaction from another, lean into that.

For each person:
- They call out their role, initiative, and stakeholders
- The instructor (or the attendee, depending on comfort) types them in and runs the generator
- Brief reaction: "Close? Wrong shape? What would you change?"

**If energy is high and time permits:** take one customization request from the room and implement it live — open Claude Code, describe the change, show the agentic loop (read, decide, write, verify). This is optional but powerful if it lands. Don't force it.

**Craft move:** The customization step should feel like the room is building this together, not like five people taking turns. Narrate the patterns: *"See how his output has a different shape than yours? Same tool, different audience. That's the point."*

**Pacing guardrail:** If running long, customize fewer attendees in Phase C. The first two runs (instructor's example + one volunteer) are non-negotiable. Attendees 3-5 can be compressed to "call out your inputs, I'll run it, quick reaction."

### Beat 4 — Matrix moment (~5-8 min)

This is the intellectual spine — but the matrix is **never taught as theory**. It is filled, in the room, on what just happened. The five components emerge from the act of filling, and the framework gets its name after the cells are full, not before.

**Hand out the printed matrix visual before starting this beat.** Empty cells. The handout is for filling, not for reading.

Open with the move:

> *"Look at what just happened. Let's name what changed."*

Pull up the empty matrix on the projector (Gamma slide 3). Two rows ("Today" and "Rebuilt"), five empty columns. **Don't introduce the columns. Don't say "people, tools, trainings, guardrails, metrics" yet.** Walk the columns as questions and let the room fill them in:

> *"Before today, who was doing this work? Write that in the first column under 'Today.'"*
>
> *"What tool were they using? Next column."*
>
> *"What did they need to know to do this well?"*
>
> *"Who was checking the output before it went anywhere?"*
>
> *"How did anyone know the work was good?"*

Fill the "Today" row first across all five columns. Then walk the same five questions for the "Rebuilt" row — what changed for each column after the document generator got involved. Let the room call out the answers. Write what they say verbatim, even if it's incomplete. The point is the act of filling, not the polish of the cells.

**Only after the cells are full, name what the columns are:**

> *"What you just told me has a name. People. Tools. Trainings. Guardrails. Metrics. Every business process you run has all five — whether anyone has thought about them or not. Most AI training fixes one column. We just rebuilt the whole row. That's the whole game."*

Then the punchline — vertical vs. horizontal:

> *"Most AI training asks 'how do I get my person to use AI?' That's vertical thinking — start with a person, add a tool, hope for the best. What we just did was horizontal. We didn't ask how to give you a tool. We asked which of your processes to redesign, and then we redesigned all five components of it. Everything else in this program is built on that distinction."*

**New addition — connect back to the aspiration:**

> *"The scraper I showed you at the top? Same five columns, six steps deep. What you just mapped is one step. Now we build the next two."*

**Pacing guardrail:** 5-minute floor, 8-minute ceiling. The persona tests flagged it as underinvested even at 6 minutes. Skip anything else first.

**Gamma cue:** Slide 3 (empty matrix) on projector for live filling.

### Beat 4b — Comprehension check (~30 sec)

Before moving to the build, confirm the framework landed. Point at someone specific: *"Before we build — tell me the difference between vertical and horizontal thinking, in your own words."* If they can say it back clearly, move on. If they stumble, spend 60 more seconds on it before anyone touches a keyboard. Do not skip this.

### Beat 5 — Research, decision, communication (~25-30 min)

This is the main build. Three phases, built collaboratively. The instructor drives pacing on the projector; each attendee follows on their own laptop with their own data. Everyone moves together — no one is 15 minutes ahead or behind.

The three phases describe a complete workflow: gather information (research), analyze it and make a call (decision), then generate tailored outputs for each stakeholder (communication). The document generator they just used in Beat 3 is the communication layer. Now they add the two phases that come before it.

**Gamma cue:** Slide 4 (R-D-C flow) on projector during this beat.

**Phase 1 — Research (~8-10 min).**

Frame it:

> "The document generator you just used takes your initiative and your stakeholders and generates outputs. But what if Claude researched your initiative first — competitive landscape, recent developments, stakeholder concerns — before generating anything?"

Each attendee provides their initiative context. Claude researches: web search, recent news, competitive signals, relevant precedents. The instructor narrates while Claude runs:

> *"Watch what it's doing. It's not generating text yet — it's gathering. Reading. Deciding what matters. This is the research phase."*

When each person has a research brief on their screen, pause. *"That's phase one. Information you didn't have five minutes ago."*

**Phase 2 — Decision (~8-10 min).**

Frame it:

> "You have the research. Now Claude analyzes it. What does the data say? What are your options? What are the trade-offs?"

Run the decision analysis on each attendee's research output. This produces a structured decision brief — options, trade-offs, a recommended path. The instructor drives pacing:

> *"This is the step most people skip. They go from information straight to communication and skip the thinking. The decision phase is where the value actually lives."*

When each person has a decision analysis, pause. *"That's phase two. A structured argument you can defend."*

**Phase 3 — Communication (~8-10 min).**

Frame it:

> "Now you have research and a decision. The last step: communicate it differently to each stakeholder. Your board gets one version. Your team gets another. Your client gets a third."

This is the document generator pattern from Beat 3, but now grounded in actual research and analysis — not just a form fill. Each attendee's communication outputs are personalized to their real stakeholders and informed by their real research.

When each person has tailored communications on their screen, the build is complete.

**The landing:**

> "You just built a complete workflow. Research. Decision. Communication. Three steps, chained. The scraper I showed you at the top? Six steps. Same pattern. The distance between three and six is the rest of this program."

**The deliberate failure moment.** Still non-negotiable. During the R-D-C build, when something fails — a fabrication, a bad assumption, a hallucinated source — stop the room and narrate the fix. Show the correction. Say:

> *"See that? It just invented a data point. Watch how I fix it."*

Tighten the instructions, rerun, show the corrected output. This takes 90 seconds and you control the timing. If no natural failure occurs by Phase 2, trigger one deliberately — have a prompt that reliably produces a fabrication in a browser tab.

**Craft move for fast finishers:** If someone's output arrives early during any phase: *"While we wait — read your output critically. What would you push back on? Where do you not trust it?"*

**Pacing guardrail:** Start this beat with at least 30 minutes remaining. This is the hard constraint. If Beats 2-4 ran long, the flex zones are Beat 3C (customize fewer attendees) and Beat 2 (redirect follow-ups earlier). Do not compress Beat 5.

### Beat 6 — Honest debrief (~5 min)

Go around the table:

> "Be brutal. What worked? What didn't? Where did you check out? What was missing?"

Drop the feedback form link in the chat so they can fill it out later when they're alone and will say things they wouldn't say to your face. The form catches what the verbal round misses.

**The cadence beat (30 sec):** Before they leave:

> *"The workflow you built today is a starting point. Run it once this week on a real task. Next week, update the instructions based on what it got wrong. Build, run, tighten. That's the loop."*

Don't pitch further. The session's job is to make them want more, not to sell.

**Gamma cue:** Slide 5 (closing) on projector.

## Pacing guardrails

- Do not let Beat 1 eat more than 5 minutes. The aspiration is the hook, not the framing.
- The single hard constraint: start Beat 5 with at least **30 minutes** left. The R-D-C build is the substance — protect its time at all costs.
- Beat 4 (matrix) has a 5-minute floor. The persona tests flagged it as underinvested even at 6 minutes. Skip anything else first.
- Beat 2 (aspiration) ceiling: 15 minutes. If the attendee reacts strongly and asks follow-ups, redirect: *"We'll get to that. First, the basics."*
- If running long, the flex zones are Beat 3C (customize fewer attendees — the first two runs are non-negotiable, attendees 3-5 can compress) and Beat 2 (tighter narration of the 6 steps).
- Do not compress Beat 4 (matrix) or Beat 5 (R-D-C build). Everything else is negotiable before these.

## Variations

**60-minute version (standard program hour).** Compress Beat 3C to two attendees instead of all five. Compress Beat 5 phases to ~6 minutes each. Keep Beats 2, 4, and the full R-D-C arc intact — they're the substance.

**Remote / Zoom version.** Beat 3C customization uses screenshare rotation — each attendee shares their screen briefly to show their output. Beat 5 is paced via the instructor calling out transitions between phases. The deliberate failure moment works unchanged. The aspiration demo (Beat 2) uses screenshare on hpc-markets.com — works the same.

**Mixed seniority cohort.** If you have a mix of AI-fluent and AI-beginner attendees, the collaborative build does the heavy lifting — pacing is instructor-driven, so no one falls behind. Circulate attention to beginners during Beat 5. The aspiration demo (Beat 2) lands harder with senior people; the tool basics (Beat 3) land harder with beginners. The matrix bridges both.

## Risks and what to watch for

- **The aspiration sets expectations too high.** The six-step scraper is impressive. If the basics in Beat 3 feel flat by comparison, the room deflates. Mitigation: frame Beat 2 explicitly as "where we're going" and Beat 3 as "where we start today." The bridge language matters — "same primitives, we start with one."
- **The collaborative build leaves some attendees passive.** If the instructor drives too hard in Beat 5, some attendees watch instead of build. Mitigation: ensure each person inputs their own data and sees their own output on their own screen. The build is collaborative in pacing but personal in content.
- **The R-D-C framework feels like a lecture.** If any phase is explained without being built, it becomes theory. Mitigation: every phase produces visible output. No phase is introduced without immediately running.
- **The matrix gets compressed.** Beats 2-3 run long and Beat 4 gets squeezed. Mitigation: 5-minute floor is non-negotiable. Compress Beat 3C first.
- **Nothing fails during the session.** If everything works perfectly, the room will leave thinking this is a sales demo, not a training. Surface an imperfection deliberately.
- **The live demo (hpc-markets.com) fails.** Have a pre-recorded run or a backup account ready. Never let the aspiration beat depend on a single live connection.
- **Regulated-profession attendees freeze on data input.** All data input is optional and can be synthetic. Have a line ready: *"Use a real initiative if you're comfortable. If not, make one up — the workflow works the same."*

## Sources this is distilled from

- `run-of-show.md` (v0.2, git history) — the previous 8-block structure this replaces
- `demo-prompts.md` — the hpc-markets.com scraper narration beats, originally written for Block 7 closer
- `matrix-visual.md` — the empty matrix grid content and design notes
- `../syllabus.md` — the program-level context for where Module 1 fits
- `/knowledge/learnings/2026-04-10-curriculum-2day-reframe.md` — the curriculum reframe that established "matrix as lens, never as subject"
- `/knowledge/learnings/2026-04-11-module-1-agentic-reframe-pivot.md` — the agentic reframe that introduced the document generator and collaborative build pattern
- `/knowledge/learnings/2026-04-07-persona-beta-test-2026-04-12-demo.md` — round 1 persona feedback
- `/knowledge/learnings/2026-04-08-persona-beta-test-round-2-new-lineup.md` — round 2 persona feedback (Priya's "kiddie version" critique, Jordan's "not invited" flag)

## To refine after next run

- Did the aspiration-first ordering land? Did attendees feel motivated or overwhelmed after Beat 2?
- Did the collaborative build in Beat 5 produce "I built that" energy, or did it feel like watching the instructor?
- Did the R-D-C three-phase arc feel like three distinct steps or one long run?
- Did the matrix at the midpoint land stronger or weaker than the matrix-after-demo position in v0.2?
- Was the deliberate failure moment needed, or did natural failures provide enough?
- What verbal moves worked in the real run that aren't in this document yet?
