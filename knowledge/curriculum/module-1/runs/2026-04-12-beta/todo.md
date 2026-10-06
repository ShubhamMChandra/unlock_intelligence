# Sunday 2026-04-12 demo — to-do list

**Demo:** Sunday 2026-04-12, 10:30am – 11:45am CT · 1 West Superior, Chicago IL
**Attendees:** Zeshawn Qadir (GC, cannabis MSO), Alan (founder), Tommy Nathan (PMM, Housecall Pro), Jess Nickelman (AEA Consulting), Bill McCue (Sr AE, Workday) · Jordan (actor, not attending but wants feedback)
**Full run sheet:** `run-sheet.md` (same folder)

This is the skim-and-check-off version. Work top to bottom. If you need the full context on why something matters, go to the full run sheet.

---

## ★★ Game day status (2026-04-12)

**Critical remaining item: the Vercel-hosted demo app has not been built yet.** The rehearsal build session Friday night (where Shubham would play an attendee step by step, Claude records prompts) started but only got through planning. No code was written. No prompts were logged. The rehearsal log at `rehearsal-log.md` is empty.

**What this means for Sunday morning:**

- [ ] **★★ Option A: Build the demo app now.** If there's time before 10:30am, use Claude Code to build the hidden-page MVP in this repo (`/lab/generator` was the proposed route). Deploy to Vercel. ~60–90 min depending on iteration. This gives you the Vercel-hosted demo for Block 2 Beat 1.
- [ ] **★★ Option B: Skip Beat 1, go straight to the Claude Code live-build on the projector.** If there's no time, drop Block 2 Beat 1 (the Vercel-hosted app demo) and make Block 2 entirely about building the feature live in Claude Code on the projector with Jess's ask. This was already documented as the Block 2 fallback in the contingency plan. Loses the "here's what you'll build" → "now watch how it was made" two-beat structure, but the agentic loop still lands.
- [ ] **Block 5 build prompt was NOT cold-tested on a clean profile.** The prompt in `starters.md` is the best draft, but it has not been verified end-to-end on a blank scaffold. If you pick Option A and it works, that's partial validation. Watch for failures during Block 5 and be ready to troubleshoot live.

**Everything else in the Sunday morning checklist below still applies.**

---

## Done (Wed–Thu)

- [x] Venue confirmed — 1 West Superior, Sunday 10:30am–11:45am CT
- [x] Saturday evening blocked for heavy prep
- [x] Competitive intel scraper tested — works (hpc-markets.com)
- [x] Skimmed discussion questions

## Done (Friday so far)

- [x] Followed up with Jess on Block 2 volunteer role (she's primary, Tommy is briefed backup). Under the new architecture she doesn't need to share a calendar; she just needs to show up ready to fill in her real role, a current initiative, and 2–3 real stakeholders on the projected form
- [x] Texted Alan to show up with real project data + time allocation
- [x] All curriculum artifacts reviewed, updated, and humanized (run-of-show, worksheet, pre-class setup, exit survey, discussion questions)
- [x] Worksheet rewritten from scratch — 4-page session companion (orientation, matrix, build reference, take-home)
- [x] Instructor agent review saved to `knowledge/learnings/2026-04-10-instructor-review-module-1.md`
- [x] Syllabus updated (cohort cap 20, duration 8-10 hours, Module 4/5 prep notes)
- [x] File structure reorganized — reusable artifacts at module level, cohort files in `runs/2026-04-12-beta/`
- [x] Knowledge base updated with session learnings

## Friday 4/10 evening — Shubham solo, after work (~1 hour)

*Texts + scripting. Can do from the couch.*

- [ ] **★ Send the updated pre-work email ASAP** to all 5 attendees. Template in `email.md`. Attach `../../pre-class-setup.md` (the new ~25-min Claude Desktop + "let Claude Code install Node for you" flow). Note that the workshop API key will be in the shared Google Doc Saturday night, so they don't need to get their own. Include the "don't burn your Claude Pro quota Sunday morning" note. They need Saturday to install Claude Desktop and let Claude Code scaffold their `unlock-demo` project, so this email can't wait until Saturday morning. *(10 min)*
- [ ] **Text Bill McCue for a specific prospect name** — not Workday, a company he's selling TO. Public web presence needed for the scraper closer. *(5 min)*
- [ ] **Text JT** — confirm projector setup (HDMI or USB-C), ask for wifi network + password, and confirm Saturday evening timing. *(5 min)*
- [ ] **Pre-build the deliberate failure prompt.** Ask Claude about a cannabis state licensing transfer timeline or a 280E ruling — something in Zeshawn's domain that it'll fabricate. Test it, confirm it fabricates, save in a tab. *(15 min)*
- [ ] **Script your opening 15 seconds + closer bridge line.** Write down, read aloud a few times. *(15 min)*
- [ ] **Mental rehearsal before bed: Zeshawn first, then Alan.** Stall patterns — Zeshawn reads everything ("paste it first, run it once, then edit"), Alan improvises ("what are you changing? Run it first"). *(10 min)*

## Saturday 4/11 — the heavy day

### ★ Document generator build + prompt testing (Shubham, before anything else)

*Block 2 is now "demo a Vercel-hosted role-aware document generator on the projector." Block 5 is now "attendees paste a build prompt into Claude Code Desktop on their own blank scaffold and build the same app from zero in ~10–15 min." These tasks gate everything else Saturday. Nothing else matters if the Block 5 build prompt doesn't reliably produce a working app on a clean machine.*

- [ ] **★ Check each attendee's install** — text each person by noon Saturday: "did the Claude Desktop install + Claude Code setup prompt work? Can you see the Next.js welcome page at localhost:3000?" Catch failures early so there's time to debug over text, not in the room. *(15 min)*
- [ ] **★ Build the Vercel-hosted document generator app** (the thing Shubham demos in Block 2). Next.js + Anthropic SDK + Tailwind. One page: form with three fields (role, initiative, audience multi-select) → API route at `/api/generate` calls Claude Sonnet 4.5 per audience → renders tailored documents with `react-markdown`. Use the Block 5 build prompt in `starters.md` as the starting point and iterate it into the polished Block 2 version (better styling, maybe a nicer audience picker). Deploy to Vercel at something like `unlock-demo.vercel.app`. **This is the demo surface for Block 2.** It needs to look clean on the projector and load fast on venue wifi. *(~2–3 hours)*
- [ ] **★ Provision a fresh Anthropic API key for the workshop with a $50 spending cap.** console.anthropic.com → create key → set the spending cap on the key's usage (not just org-level). The $50 cap is a hard ceiling. Five people × five runs × ~$0.10/run is well under $50, and the cap protects against a runaway loop. Paste the raw key into the shared Google Doc under a "Workshop API key (rotated Monday)" heading. **Do NOT commit the key to git or any markdown file in the repo.** The Google Doc is the only place it lives. Attendees paste it into `.env.local` when Claude Code asks for it during Block 5. **Rotate/delete the key Monday morning** so the five laptops that had it are no longer live. *(10 min)*
- [ ] **★★ Cold-test the Block 5 build prompt on a clean profile.** This is the single most important Saturday task. Open a fresh Claude Desktop install (new profile or a friend's laptop with a fresh Pro account if possible), spin up a blank `create-next-app` scaffold via the pre-work prompt, paste the Block 5 build prompt from `starters.md` verbatim, walk through every approval as if you were a non-technical attendee, hand Claude the API key when it asks, confirm the app actually runs end-to-end at localhost:3000 and generates real tailored documents. Time it. **If it takes more than 20 minutes for you (experienced), cut scope until it's under 15 min for you, which means ~20 min for attendees.** If it fails on the clean profile, fix the prompt and re-test. Do not ship the prompt to the Google Doc until this passes. *(45 min)*
- [ ] **★ Cold-test the pre-work install prompt** on a clean profile too — ideally a friend or family member's laptop that doesn't already have Node.js. Download Claude Desktop fresh, sign in with a Pro account, paste the pre-work prompt from `../../pre-class-setup.md` step 3, verify Claude Code installs Node via nvm/fnm, creates the Next.js scaffold, and starts the dev server end-to-end without human intervention beyond approval clicks. If this fails on a clean machine, the whole Block 5 plan collapses — fix it or revert to fallback. *(30 min)*
- [ ] **Rewrite Block 2 and Block 5 in `run-of-show.md` and `run-sheet.md`** to match the new format. Block 2 = open the Vercel-hosted app on projector → Jess volunteers and fills in her real role/initiative/stakeholders → generate → pivot to Claude Code Desktop on Shubham's local copy and add one small feature live → theory beat. Block 5 = attendees open Claude Code Desktop on their blank scaffold → copy API key from Google Doc → paste build prompt → walk through approvals → run on their real initiative → show and tell. Can be lighter-touch — the run-sheet is the one that matters Sunday. *(30 min)*

### Shubham solo, afternoon (~1 hour, start by 2pm)

*Do this from home before heading to JT's. These are solo tasks that don't need JT or the venue.*

- [ ] **★ Create the shared Google Doc.** Three sections at the top: (1) "Workshop API key (rotated Monday)" with the raw key pasted in, (2) "Block 5 build prompt" — paste the prompt verbatim from `starters.md` so attendees can copy without leaving the doc, (3) "How to use it" — three lines: open Claude Code Desktop, select your `unlock-demo` folder, paste the prompt and paste the API key when Claude asks. Fill in phone numbers/links section below once created. *(15 min)*
- [ ] **Send the Google Doc link to all 5 attendees** as a follow-up to the pre-work email. *(5 min)*

### JT solo, anytime Saturday (text him this list)

*JT can knock these out whenever. The printing needs to wait until Shubham sends him the final PDFs (see "before JT prints" below).*

- [ ] **JT: Wifi network + password** — text to Shubham. Needed for the worksheet before printing. *(2 min)*
- [ ] **JT: Building access / parking instructions** — what do 5 people showing up at 10am on a Sunday need to know? Buzzer? Parking? Text to Shubham for the pre-class setup doc. *(5 min)*
- [ ] **JT: Confirm projector setup** — HDMI or USB-C? *(2 min)*
- [ ] **JT: Pens** — at least 6. *(grab when out)*
- [ ] **JT: Envelope or folder** for collecting exit surveys at the door. *(grab when out)*
- [ ] **JT: Order donuts + coffee** for Sunday 10am pickup/delivery, away from the projector area.
- [ ] **JT: Ask Dina to come Sunday to take photos.** Candid shots during the session — room, attendees at laptops, projector, show-and-tell. These go on the website.

### Shubham + JT together at venue, evening (~3.5 hours, arrive by 5pm)

*This is the real prep session. Everything that needs the venue, the projector, or both of you.*

**First hour (5–6pm) — build the visuals and finalize print-ready files:**
- [ ] **Finish the matrix visual** — build in Google Slides/Keynote together. Need a projector version + a printable version. *(30 min)*
- [ ] **Walk JT through the Block 2 demo flow** — what the Vercel-hosted app does, what happens when you pivot to Claude Code Desktop for the live feature add, what the theory beat is. He's playing audience tonight and the room Sunday; he needs to have seen it work once. *(15 min)*

**Before JT prints (~6pm) — fill in the blanks so printed materials are final:**
- [ ] **Fill in worksheet page 1** — add wifi network/password and Google Doc link to `../../worksheet.md`. Export to PDF. *(5 min)*
- [ ] **Send JT the final PDFs:** worksheet, matrix visual, exit survey. *(5 min)*

**JT prints (~6:15pm):**
- [ ] **🖨 JT: Print the worksheet** — 6 copies, 2 sheets double-sided per person. *(5 min)*
- [ ] **🖨 JT: Print the matrix visual** — 6 copies. *(5 min)*
- [ ] **🖨 JT: Print the exit survey** — 6 copies. *(5 min)*

**Second hour (6:30–7:30pm) — dry-runs on the venue projector and wifi:**
- [ ] **Test the projector** — connect laptop, verify the Vercel-hosted document generator renders cleanly at full-screen. Check font size at the back of the room. *(5 min)*
- [ ] **★ Test 2 simultaneous Claude Code sessions + the Vercel-hosted app on venue wifi.** If it can't handle concurrent load, you need the hotspot plan. *(10 min)*
- [ ] **Test phone hotspot as wifi backup.** *(5 min)*
- [ ] **★★ Dry-run the Block 2 demo on the projector.** Open the Vercel-hosted app, fill it in with a sample role/initiative/audience set (pretend you're Jess), hit generate, time the generation, read the output aloud as if you were narrating live. Judge document quality. If any document is mediocre or looks off-tone, fix the system prompt in the Vercel app tonight before you leave. *(20 min)*
- [ ] **★ Dry-run the Claude Code "add one feature live" pivot beat.** Open Claude Code Desktop on your local copy of the document generator project. Pick one small feature to add (e.g., a new audience type like "board of directors"). Type the instruction, walk through approvals, watch the preview pane reload with the change. Time it end-to-end. This should be under 4 minutes — if it's longer, pick a smaller feature or retry with a tighter ask. *(15 min)*
- [ ] **Dry-run the scraper on Bill's real prospect.** If not impressive, pick a different closer target. *(10 min)*
- [ ] **★ Test the deliberate failure prompt.** Confirm it fabricates reliably. Save in a browser tab. *(5 min)*

**Wrap up (7:30–8pm) — do a full walkthrough and pack:**
- [ ] **Walk through the run-of-show end to end with JT.** He plays the audience. You practice the opening, the demo narration, the matrix, the closer bridge line. He tells you what lands and what doesn't. *(20 min)*
- [ ] **Pack your bag:**
  - Laptop + charger
  - Projector adapter (confirmed with JT)
  - Phone (for hotspot)
  - Water bottle
  - All printed materials (worksheets, matrix visuals, exit surveys)
  - JT is handling donuts + coffee
- [ ] **Done by 8pm. Go home. Sleep well.**

## Sunday 4/12 morning — ~30 min before 10:30

- [ ] **Dress business casual.** Both of you. Dina is taking photos. Don't show up in sweats.
- [ ] **Arrive at 1 West Superior by 10:00am**
- [ ] **Test the projector** — connect laptop, mirror, verify Claude renders
- [ ] **Test the wifi** — run 2 simultaneous Claude queries with web research to verify bandwidth under load
- [ ] **Open all tabs in order:**
  - Tab 1: Vercel-hosted document generator (the Block 2 demo surface, `unlock-demo.vercel.app` or wherever it's deployed)
  - Tab 2: Claude Code Desktop, open on your local copy of the document generator project (for the Block 2 live-feature pivot)
  - Tab 3: Shared Google Doc (API key + Block 5 build prompt + attendee contact info)
  - Tab 4: 5-component matrix visual
  - Tab 5: The run sheet open for glance reference
  - Tab 6: Pre-built deliberate failure prompt (ready to trigger during build phase)
- [ ] **Paper materials out of the bag:** 6 worksheets, 6 exit surveys, 6 printed matrix visuals, pens, envelope ready at the door
- [ ] **Food + coffee already set out** away from the projector area
- [ ] **Phone hotspot pre-connected** as wifi backup
- [ ] **Water + snack in front of you**
- [ ] **★ Watch for Claude Pro usage limits during the build phase.** 5 people running Claude Code Desktop in parallel is a real hit on the 5-hour rolling window. As they arrive, ask each attendee when they last used Claude — anyone who's been using it heavily this morning might burn through their window mid-build. Mitigations if it happens: (1) switch their Claude Code model to Sonnet (lighter than Opus on the quota), (2) share your projector Claude Code screen so they can follow along, (3) run their build prompt on your account and AirDrop the working `unlock-demo` folder to their laptop. The worst failure mode is someone getting locked out 5 minutes into the build and going quiet — circulate and check if anyone stalls suddenly.
- [ ] **Breathe.** You've prepped. The lesson is good. Your friends are already rooting for you.

## Sunday 4/12 post-lesson

- [ ] **Help any stalled attendees finish their build** in the 15-min stay-after window (you offered this during Block 5) — get them to a running `localhost:3000` with their real initiative generating real documents before they leave
- [ ] **Write a 5-bullet retro that evening** while it's fresh. Save it in the Retro section at the bottom of `run-sheet.md`.

---

## What each block looks like Sunday (quick reference)

| Block | What | Duration |
|---|---|---|
| 1. Welcome + frame | Name everyone, joke about the spread, set the "tools not prompts" expectation | ~3 min |
| 2. ★ Live demo (Jess) | Vercel-hosted document generator on the projector → Jess fills in her real role/initiative/stakeholders → generate tailored docs → pivot to Claude Code Desktop on local copy, add one small feature live. Theory beat AFTER the output. | ~15 min |
| 3. Matrix | 5-column visual (People / Tools / Trainings / Guardrails / Metrics), before/after rows, tied to vertical vs horizontal | ~6–8 min |
| 4. UI walkthrough | 60 sec on Claude Code Desktop UI — where to paste the build prompt, where approvals appear, where the preview pane lives | ~1 min |
| 5. ★ Build phase | Attendees open Claude Code Desktop on their blank scaffold, copy API key + build prompt from Google Doc, paste, walk through approvals, end up with a working app at localhost:3000 running on their real initiative. Circulate order: Zeshawn → Alan → others. **Deliberate failure moment in here.** | ~25–30 min |
| 6. Show-and-tell | 90 sec each (drop to 60 if over) | ~7–10 min |
| 7. ★ Closer — scraper on Bill's real prospect | 6-step autonomous workflow. Name the constraint. Bridge: "not talent, not code — next three sessions. Showing destination, not showing off." Then name how it generalizes to each person. | ~10 min |
| 8. Debrief + exit survey | 3 round-table questions (Q2 → Q1 → Q3) + paper survey before anyone leaves. Budget Q3 at 2 min minimum. | ~7–8 min |

**Hard constraint:** start Block 7 with at least **15 minutes** left (closer takes 10, not 7). Flex zones are Block 6 (drop to 60 sec each) and Block 5 (offer post-wrap stay-after).

---

## Phone numbers / links (fill in Saturday when Google Doc is created)

- Jess: _______________
- Bill: _______________
- JT / venue contact (1 West Superior): _______________
- Shared Google Doc link: _______________ ← create this Saturday, then send link to all 5 attendees
- Exit survey Google Form backup (if the paper version fails): _______________

---

## If everything falls apart

- Wifi dies → phone hotspot
- Vercel-hosted app fails to load on venue wifi → pivot Block 2 to Claude Code Desktop demo only (build the app on the projector from zero using the Block 5 prompt — more dangerous timing but same pedagogical payoff)
- Claude Code Desktop hangs during Block 2 live-feature pivot → narrate the failure as a feature, show the fix, turn it into the deliberate-failure beat early
- Scraper fails on Bill's real prospect → different attendee's closer target
- Attendee's Block 5 build prompt fails mid-run → restart Claude Code with a clarifying one-liner, or paste the prompt on your projector and let them follow along on yours
- Attendee's `unlock-demo` scaffold is broken or missing → have them run the pre-work prompt again from scratch during Block 5 (loses ~5 min) or pair with a neighbor
- Rate limit hits during Block 5 → switch that attendee to Sonnet, or run their build on your projector Claude and AirDrop the result
- Nothing fails naturally during the build phase → intentionally ask Claude something slightly outside its confidence, let it fabricate, catch it, show the fix. This moment is the most important single beat in the lesson.

Good luck. You built a good thing. Now go run it.
