# Module 1: The Process Matrix

The first hour of the Unlock Intelligence program. Teaches horizontal (process) thinking against vertical (people) thinking, through a live demo on real data and a hands-on build exercise where each attendee creates a reusable Claude Project for one of their own recurring tasks.

## What's in this folder

### `run-of-show.md` — the live plan

How an instructor runs Module 1 today. Block-by-block, with teaching moves, key lines, materials, and pacing guardrails. This is the canonical version and should be edited as the lesson evolves.

### `worksheet.md` — the participant-facing handout

What attendees read and fill in during the hour. The bad-prompt-vs-good-prompt example, the deal-review second example, the weekly workflow audit exercise, the 5-component matrix, the "what comes next" table. This is attendee-facing content, not instructor notes.

### `runs/` — every time Module 1 has been taught

A chronological log of live instances. Each file captures one cohort: pre-run context, the plan as executed, retro notes. This is where institutional memory lives. See `runs/README.md` for the naming and content conventions.

### `audience-learnings/` — cross-cutting synthesis by profession

What we've learned about running Module 1 for specific audiences. Starts empty and fills in as the module gets run for lawyers, accountants, consultants, healthcare workers, etc. Once an audience file accumulates enough distinct patterns, it becomes the basis for a dedicated variant — for example, a `module-1-accountants/` sibling folder with its own adapted run-of-show. See `audience-learnings/README.md`.

## How the pieces fit

The canonical run-of-show is the default. Every live run gets logged in `runs/` with a retro. Over time, cross-cutting patterns get pulled up into `audience-learnings/`. Eventually, when an audience accumulates enough distinct needs, the module forks.

Concrete example. Suppose Module 1 has been run three times for cohorts of accountants and the same stalls keep showing up — confidentiality concerns about client data, unfamiliarity with the default "weekly report" example, questions about audit trails, a preference for a journal-entry example over a status-report example. Those patterns go in `audience-learnings/accountants.md`. Once the patterns are rich enough that the standard run-of-show would need meaningful overrides to work, the team creates `knowledge/curriculum/module-1-accountants/` — a sibling folder — and forks the canonical run-of-show into an accountant-specific version.

That's the mechanism for going from a generic lesson to a specialized one without losing the generic version or duplicating what's shared.

## Missing (to be written)

- `instructor-notes.md` — general teaching craft for this module (common stall points, recovery patterns, timing calibration across cohort sizes)
- `confidentiality-for-regulated-professions.md` — the one-pager flagged in the 2026-04-07 persona beta test as a deal-killer gap for lawyers, and likely relevant for healthcare, finance, and anyone handling client data
