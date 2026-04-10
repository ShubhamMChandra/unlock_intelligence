# Curriculum

All teaching materials for the Unlock Intelligence program. Lesson plans, worksheets, syllabi, exercises, run-of-show documents, historical logs of live instances, and audience-specific learnings.

Marketing materials (messaging, positioning, landing page copy) live in `knowledge/artifacts/`. Research and strategy live in `knowledge/strategy/`. Dated, cross-cutting insights live in `knowledge/learnings/`. This folder is teaching only.

## Structure

```
knowledge/curriculum/
├── README.md                       ← you are here
├── syllabus.md                     ← whole 8-hour program overview
├── module-1/                       ← Module 1: The Process Matrix
│   ├── README.md                   ← module index
│   ├── run-of-show.md              ← the live plan (canonical)
│   ├── worksheet.md                ← participant-facing handout
│   ├── runs/                       ← log of every live instance
│   │   ├── README.md
│   │   └── 2026-04-12-beta-cross-industry.md
│   └── audience-learnings/         ← cross-cutting synthesis by profession
│       └── README.md
├── module-2/                       ← (not yet written)
├── module-3/                       ← (not yet written)
... and so on through module-8
```

## The per-module pattern

Every module follows the same layout. Three tiers of content.

**Tier 1 — Canonical.** The `run-of-show.md` and `worksheet.md` are the living source of truth for how the module is taught today. The run-of-show is instructor-facing (block-by-block teaching moves, key lines, materials). The worksheet is participant-facing (what attendees read and fill in). Both evolve as the lesson improves.

**Tier 2 — Historical.** The `runs/` folder logs every live instance. One file per cohort, with pre-run context, the plan as executed, cohort-specific decisions, and a retro. This is the evidence base. Anyone proposing a change to the canonical run-of-show should be able to point at runs to justify it.

**Tier 3 — Synthesis.** The `audience-learnings/` folder captures cross-cutting patterns per professional audience (lawyers, accountants, consultants, healthcare workers, etc.). Not a log of runs. A synthesis of what lands for each audience across multiple runs. When a single audience file accumulates enough distinct patterns that the canonical lesson would need meaningful overrides to work for them, that's the trigger to fork the module into a variant — for example, creating a sibling `module-1-accountants/` folder with its own adapted run-of-show, grounded in the audience-learnings evidence.

This is how a generic lesson grows into a family of specialized lessons over time, without losing the generic version and without losing track of where the adaptations came from.

## What's here today

**At the top level:**

- `syllabus.md` — the full 8-hour program structure, all 8 modules, learning objectives, deliverables, pricing. Marketing-adjacent but lives here because it's the source of truth for what the program actually teaches.

**In `module-1/`:**

- `run-of-show.md` — the canonical instructor plan for Module 1 (draft v0.1, pre-beta, to be refined after 2026-04-12)
- `worksheet.md` — the participant-facing handout
- `runs/2026-04-12-beta-cross-industry.md` — the first live run, cross-industry friends beta, with full detailed prep and to-do list
- `audience-learnings/` — empty, starts filling in after the first few real runs

## What's missing (to build as the program develops)

- Modules 2 through 8, each in their own `module-N/` folder with the same structure
- `module-1/instructor-notes.md` — general teaching craft for the module
- `module-1/confidentiality-for-regulated-professions.md` — the one-pager flagged in the 2026-04-07 persona beta test as a deal-killer gap for lawyers
- Shared exercise templates that get referenced across modules, probably in a future `shared/` subfolder

## Conventions

- One folder per module (`module-1/` through `module-8/`), not flat files
- Canonical files named by function (`run-of-show.md`, `worksheet.md`), not by content
- Historical runs named `YYYY-MM-DD-cohort-descriptor.md`
- Audience-learnings named `audience-name.md`
- Dated files (retros, learnings, one-off observations) belong in `knowledge/learnings/`, not here. This folder is living reference material, not a log of past work.
