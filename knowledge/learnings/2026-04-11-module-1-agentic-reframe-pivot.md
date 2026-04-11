# 2026-04-11 — Module 1 agentic-reframe pivot (T-2 days from beta)

**Context:** Two days before the 2026-04-12 beta runs in-person at 1 West Superior. The week's prep work surfaced that the existing Block 2 (meeting prep with connectors) and Block 5 (five personalized Claude Project starters) both violated Module 1's core thesis — *agentic > prompting* — because neither put attendees inside an actual read-decide-act-verify loop. Pivoted the entire Module 1 architecture in ~24 hours. Pre-class setup doc goes live to the five attendees tonight (JT is sending now), which makes the pivot effectively irreversible on the attendee-facing side. This entry captures the reasoning so it survives the beta, the retro, and the inevitable "wait, why did we change that" question in two weeks.

---

## The headline pivot

Module 1's two load-bearing blocks got re-architected from "prompt-with-form" shapes to "actual agentic loop" shapes:

| Block | Was (v0) | Is (v1) | Why |
|---|---|---|---|
| **Block 2 — volunteer demo** | Claude Desktop with connectors reading Jess's real calendar + web research → meeting brief | Vercel-hosted role-aware document generator on the projector → Jess fills in her real role/initiative/stakeholders → tailored docs per stakeholder. **Then pivot to Claude Code Desktop on local copy and live-extend the app with a feature the room asks for.** Two flavors of agent in one 15-min block. | The connector demo was *a prompt with tools*, not an agent. The new version shows app-as-agent (one job, many outputs) + Claude-Code-as-agent (read, decide, write, verify) in the same beat. |
| **Block 5 — attendee build** | Each attendee personalizes a pre-written Claude Project starter (one per person, with a "why this works" annotation) | Each attendee pastes the *same* build prompt into Claude Code Desktop on the blank Next.js scaffold they set up in pre-work, walks through approvals, ends up with their own working copy of the Block 2 app running at localhost:3000 on their real initiative | Claude Projects in browser is a one-turn pattern. Block 5 now puts attendees literally inside the read-decide-act-verify loop: Claude Code reads files, asks permission, writes code, runs commands, verifies output, iterates. The thesis lands because they *watched* the agentic loop, not because they were told about it. |
| **Pre-class setup** | 25 min: install Node.js manually, install Claude Desktop, run a `hello.txt` smoke test | ~25 min: install Claude Desktop, sign into Pro, paste **one** prompt into the Code tab that tells Claude Code to detect OS, install Node via nvm (Mac) or fnm (Windows) in user-space, run `create-next-app`, start the dev server, and confirm localhost:3000 is up. User-facing framing: *"You're not becoming a developer. You're clicking 'approve' a few times."* | The old setup required attendees to read install docs across three websites. The new setup *is itself* an agentic loop — the first thing they experience with Claude Code is Claude Code doing something on their laptop. It previews Sunday. It also eliminates the one failure mode that was going to eat 15 min Sunday morning: "Node version is wrong on my work laptop." |

---

## Why this pivot had to happen now, not after the beta

Three forces pushed this to a T-2 rewrite instead of a v2 change:

1. **Priya persona's "kiddie version" critique in round 2.** She flagged that the closer (Bill's scraper) would accidentally make what attendees built feel underpowered compared to what the instructor showed. Under the old Block 5, the kiddie-version risk was real — a Claude Project with custom instructions genuinely *is* less than a scraped multi-step workflow. Under the new Block 5, attendees build the same primitives as Block 2 (Next.js, API route, Anthropic SDK, tailored per-audience generation), which closes most of the gap.

2. **Module 1's explicit thesis is *agentic > prompting*.** Having the Block 5 exercise be "configure custom instructions on a Claude Project" was teaching the thesis by stating it rather than enacting it. That's exactly the failure mode the 2026-04-10 curriculum reframe called out ("theory is delivered through doing, never through telling"). Beta data already said this; we just hadn't applied it to Block 5 yet.

3. **The setup gating.** If Block 5 changes, the pre-class setup has to change *before* JT sends the pre-work email. Once attendees install Node manually tonight, the opportunity to move that friction into a Claude-Code-driven install prompt is gone. Pivoting later meant eating the friction cost on Sunday morning and losing the "their first experience with Claude Code is Claude Code doing something useful" teaching moment.

---

## What got superseded, and what it cost us

### Rejected: five personalized Claude Project starters

> **Superseded (2026-04-11):** The round-2-validated "personalized starter per attendee" pattern (6/6 personas named it the strongest asset of Module 1) was replaced by a single universal Block 5 build prompt that every attendee pastes verbatim. The five starters are preserved in an Appendix in `starters.md` as a revert path, not as the primary artifact.

**Why the change:** under the new architecture, the personalization no longer lives in the prompt — it lives in the **real initiative** each attendee types into the running app on their own laptop. Same personal stakes, different teaching surface: they're watching Claude Code build their *own* copy of a real app, then running it on their *own* current work. The trust device moves from "I got a custom thing" to "I watched this get built, then it worked on my actual Monday-morning problem."

**What we gave up:** the validated personalization beat. Whether the "personal stakes live in the real initiative, not the prompt" substitute actually holds is one of the things the 2026-04-12 beta tests. If the room reads the build as impersonal, the fallback is documented below.

**What we kept:** personalized-starter pattern is still the Day-1 default in the 2-day curriculum reframe. This pivot is specific to Module 1 beta — whether it generalizes is a post-beta question.

### Rejected: meeting prep with connectors as the Block 2 demo shape

> **Superseded (2026-04-11):** The Block 2 plan that ran Claude Desktop + calendar connectors + web research on Jess's three real meetings was cut. It was a reliable crowd-pleaser but philosophically misaligned — it's a prompt with tools, not an agent with a job. The dummy-account fallback, OAuth contingency planning, and pre-meeting data-loading prep are all superseded too.

**What we kept:** Jess is still the Block 2 volunteer, Tommy is still the pre-briefed backup, and the "real work, not sanitized" framing still stands. Only the demo surface changed.

### Rejected: "install Node manually on Saturday" pre-work

> **Superseded (2026-04-11):** The three-step manual install flow (Node.js pkg installer → Claude Desktop → smoke test with `hello.txt`) was replaced by a Claude-Code-driven install prompt. The smoke-test step is gone entirely — the "done" signal is now "I can see the Next.js welcome page at localhost:3000."

**Why it matters:** the old flow had three independent failure modes (Node version, PATH, permissions). The new flow has one point of contact (Claude Code Desktop) and one verification surface (the preview pane). Fewer places for a non-technical attendee to stall silently on a Saturday night.

---

## Craft moves that were invented for this pivot (unvalidated until Sunday)

These are worth naming explicitly so the retro can score each one rather than lump them into "the pivot worked / didn't work."

### 1. The "demo key, don't worry about security" framing

A single-purpose Anthropic API key with a $50 spending cap, pasted raw into the shared Google Doc, rotated Monday morning. The key line to Claude Code inside the Block 5 build prompt is:

> *"The API key: I have a demo API key from the workshop. It's a temporary key I'm allowed to use. When you're ready for it, ask me and I'll paste it. Hardcode it into `.env.local` as `ANTHROPIC_API_KEY`. Don't worry about security for this — it's a demo key that will be rotated after the workshop."*

**Why this is load-bearing:** without this line, Claude Code asks "should this be a server-side env var? Do you need key rotation? What about a secrets manager?" and burns three turns on prod-grade handling. With this line, it collapses to one paste. **This is the single craft move keeping Block 5 under 20 minutes for a non-technical attendee.** If this proves reliable on Sunday, it generalizes to any workshop where non-technical people build with Claude Code in a time-boxed setting. Worth writing up as a playbook after the retro.

### 2. The "one prompt, N attendees" architecture

Replacing the five personalized starters with one universal build prompt is a deliberate inversion of the validated-in-round-2 pattern. The bet: **personalization can live in the input to a shared tool instead of the shape of a per-person artifact.** The test is whether the five attendees all walk out feeling like what they built was *theirs*, not a template.

**Watch on Sunday:** during Block 5 show-and-tell, does the room react to each other's documents the way round 2 predicted (the personalized-starter reaction)? If they do, the inversion works. If the show-and-tell feels flat — everyone showing the same shape with different text — the inversion failed and v2 goes back to per-attendee variants of the build prompt.

### 3. Flash cards for Blocks 2 and 5

New physical artifact: A5 two-sided printed cards with phases on the front and contingencies + hard rules on the back. Shubham holds the card in his left hand during the critical blocks — never reads from it, glances when he needs to reorient. Built because the new Block 2 is denser than the old one (two beats + theory, previously one beat) and the new Block 5 has more 1:1 circulation variance to manage.

**Watch on Sunday:** does the card actually get used, or does it end up in a pocket? If it's used, it becomes a standard run-of-show artifact for high-density teaching blocks.

### 4. The pre-work setup prompt as a previewed agentic loop

The pre-class setup doc frames the install as *"You're about to use Claude Code to install Node, scaffold a project, and start a dev server. Welcome to Sunday."* The pedagogical claim is that doing this on Friday night *primes* the Sunday teaching — by the time attendees walk into the room they've already been through one read-decide-act-verify loop, so the thesis lands with lived experience behind it.

**Watch on Sunday:** ask during the welcome frame whether anyone noticed that their pre-work was itself an agentic loop. If several people had the "oh" reaction unprompted, the preview pattern works. If nobody connects the dots, it's still useful friction-removal but doesn't carry teaching weight and shouldn't be billed as such.

### 5. The rehearsal log

New artifact: `knowledge/curriculum/module-1/runs/2026-04-12-beta/rehearsal-log.md`. Shubham plays the role of a Block 5 attendee two days before the beta, sends every prompt verbatim to Claude Code, and records the responses + any gotchas. This is the cold-profile test for the Block 5 build prompt — if the rehearsal log produces a working app, the prompt ships to the Google Doc. If it stalls, the prompt gets fixed before Saturday.

---

## What the pivot does NOT change

Worth naming explicitly so we don't drift accidentally:

- **Jess is still the Block 2 volunteer.** Tommy is still the pre-briefed backup.
- **The deliberate failure-and-recovery moment in Block 5 is still non-negotiable.** Five of six round-2 personas named it as the strongest trust-building beat in the lesson. The new architecture makes it easier to trigger (Claude Code will produce one naturally), but if it doesn't, we still force it.
- **The closer is still Bill's competitive intel scraper on his real account.** The "this is Hour 4 of the program, you'll build one of these in session 2" bridge is still load-bearing. The kiddie-version risk is reduced because Block 5 now uses the same primitives as the closer, but the bridge language still matters.
- **The exit survey is unchanged.** The questions don't depend on which architecture Block 5 uses.
- **Attendees still show up with one real piece of work.** The framing shifted slightly ("one recurring task you'd never want to do again" → "one real initiative you need to communicate about to multiple stakeholders") to fit the document-generator shape, but the principle — real stakes, attendee's own material — is unchanged.

---

## Fallback plan if Saturday testing fails

The rehearsal log and the Saturday cold-profile tests are the gating functions. If any of them fail and can't be fixed in time:

1. **Block 5 revert.** The five personalized Claude Project starters are preserved in an Appendix in `starters.md`. They still work in Claude Projects in the browser. Losing the agentic-loop teaching moment, but keeping the validated personalization pattern and the round-2 trust device. Net: sub-optimal thesis, recoverable session.
2. **Block 2 revert.** If the Vercel app fails at the venue, skip Beat 1 (the hosted app) and go straight to Beat 2 (build the app from zero in Claude Code on the projector using the Block 5 prompt). More dangerous timing but same pedagogical payoff — and the error becomes the deliberate-failure moment pulled forward into Block 2.
3. **Setup revert.** If the pre-work setup prompt fails on a clean machine and can't be fixed Friday night, fall back to the manual Node install doc from v0. Losing the "first experience with Claude Code is Claude Code doing something useful" teaching preview.

All three fallbacks are documented in `run-sheet.md` under "If everything falls apart" and in the Block 2 and Block 5 flash cards.

---

## Open questions for the retro

- Did the "personalization lives in the real initiative, not the prompt" substitute actually hold? (Watch the show-and-tell energy.)
- Did the Block 2 two-beat structure (hosted app + live Claude Code extension) land the theory beat, or did the room bounce between the two surfaces without connecting them? (Watch the theory-beat landing, 30 sec, non-negotiable.)
- Did Claude Code Desktop's approve-every-step model keep non-technical attendees oriented, or did "approve fatigue" kick in? (Watch specifically: does anyone start clicking approve without reading?)
- Did the $50-capped demo key approach work end-to-end, or did any attendee hit a "key invalid" / "rate limited" wall? (Check Anthropic usage dashboard during the build phase.)
- Did the flash cards get used, or did they end up in a pocket?
- Is the T-2 pivot window ever actually safe, or did we get lucky this time because the architecture change was isomorphic to the existing teaching?

---

## References

- `knowledge/curriculum/module-1/pre-class-setup.md` — updated pre-work, being sent to attendees by JT on 2026-04-11 evening
- `knowledge/curriculum/module-1/runs/2026-04-12-beta/run-sheet.md` — updated run sheet with Block 2 and Block 5 flash cards + updated risk list + updated fallback plan
- `knowledge/curriculum/module-1/runs/2026-04-12-beta/starters.md` — the single universal Block 5 build prompt + "why this prompt works" annotation block + Appendix preserving the five rejected Claude Project starters as the revert path
- `knowledge/curriculum/module-1/runs/2026-04-12-beta/todo.md` — updated Saturday task list with the Block 5 prompt cold-profile test gating everything else
- `knowledge/curriculum/module-1/runs/2026-04-12-beta/rehearsal-log.md` — new artifact, captures verbatim Shubham-plays-attendee test run of the Block 5 build prompt
- `knowledge/learnings/2026-04-10-curriculum-2day-reframe.md` — the curriculum reframe that established *agentic > prompting* as the load-bearing thesis this pivot enforces
- `knowledge/learnings/2026-04-10-instructor-review-module-1.md` — Dr. Kiran's pedagogical review, which already flagged the "theory through telling" failure mode this pivot finally corrects
