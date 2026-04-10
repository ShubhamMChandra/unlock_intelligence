# Unlock Intelligence — Claude Code Instructions

## Project Overview

Marketing website and internal cockpit for Unlock Intelligence, a cohort-based AI education program. Next.js 16 (App Router) with TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, and Supabase.

## Commands

- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build
- `npm test` — Run tests with Vitest
- `npm run lint` — ESLint
- `npm run vercel` — Vercel CLI (pass subcommands after `--`, e.g. `npm run vercel -- deploy`)
- `npm run vercel:env` — Pull development env from linked Vercel project to `.env.local`
- `npm run vercel:pull` — Sync Vercel project settings + preview env into `.vercel/` (needed before `vercel build` locally)

## Architecture

- **App Router** — Pages in `src/app/`, layouts in `layout.tsx`
- **Server Components by default** — Only add `"use client"` when the component needs browser APIs, state, or event handlers
- **Section-based composition** — Landing page is composed of independent section components in `src/components/sections/`
- **shadcn/ui** — UI primitives in `src/components/ui/`. Add new ones with `npx shadcn@latest add <component>`
- **Hybrid rendering** — Marketing pages are statically generated. Cockpit routes (`/cockpit`) are dynamic with Supabase backend
- **Route groups** — `(marketing)/` wraps public pages with Navbar/Footer/CTA. `cockpit/` has its own minimal layout

## Code Conventions

### TypeScript
- Strict mode enabled
- Use `interface` for component props, not `type`
- Export components as named exports, not default (except pages)
- No `any` — use proper types or `unknown`

### Styling (Tailwind CSS v4 + shadcn)
- Use Tailwind utility classes, not custom CSS (except globals.css design tokens)
- Use shadcn CSS variables for colors: `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`
- Custom brand colors via CSS variables: `text-[var(--indigo)]`, `text-[var(--violet)]`, `text-[var(--emerald)]`
- Use `cn()` from `@/lib/utils` to merge class names conditionally
- Dark theme is the default — light sections use `.theme-light` wrapper class
- Responsive: mobile-first, use `md:` breakpoint for desktop

### Components
- Keep section components self-contained with their own content/copy
- Use `ScrollReveal` wrapper for scroll-triggered animations
- Use `SectionWrapper` for consistent section padding and max-width
- Use `GlassCard` for card containers
- Use `GradientText` for gradient-styled text
- Prefer `lucide-react` icons over inline SVGs
- Use `next/image` for all images, `next/link` for all internal links

### Animations
- Use Framer Motion for scroll animations and complex transitions
- Keep animations subtle — 0.6s duration, ease-out curve
- ScrollReveal: once-only, 12% threshold, -40px bottom margin
- No layout-shifting animations

## Git Best Practices

- **Conventional commits:** `feat:`, `fix:`, `chore:`, `style:`, `ci:`, `docs:`, `refactor:`, `test:`
- **Atomic commits** — One logical change per commit
- **Branch naming:** `feat/description`, `fix/description`, `chore/description`
- **Never commit:** `.env.local`, `node_modules/`, `.next/`, `out/`
- **PR workflow:** Feature branches off `main`, squash merge preferred

## File Organization

```
src/
├── app/
│   ├── (marketing)/  # Public pages with Navbar/Footer/CTA layout
│   ├── cockpit/      # Internal task board (own layout)
│   └── api/cockpit/  # Task CRUD API routes
├── components/
│   ├── layout/       # Navbar, Footer, sticky CTA
│   ├── sections/     # Landing page sections
│   ├── insights/     # /insights article UI
│   ├── cockpit/      # Cockpit task board UI
│   ├── contact/      # Contact page components
│   └── ui/           # Shared primitives (shadcn + custom)
├── data/             # Structured content (e.g. insights articles)
├── lib/
│   ├── supabase/     # Supabase client, server, types
│   └── utils.ts      # Utilities and site constants
└── hooks/            # Custom React hooks (if needed)
```

## Deployment

- **Production:** Cloudflare Pages
- **CI/CD:** GitHub Actions (`.github/workflows/deploy-pages.yml`)
- **Trigger:** Push to `main` branch
- **Build:** `npm ci && npm run build`, deploy `out/` directory
- **Vercel (optional):** Repo is linked via `vercel link` (`.vercel/` is gitignored). Use `npm run vercel -- deploy` for Vercel previews or a second host; `npm run vercel:env` syncs dashboard env vars to `.env.local`

## Cockpit Task API

The cockpit at `/cockpit` is a shared task board for the founding team. It uses Supabase for persistence.

Claude Code can create and update tasks during sessions via these API routes:

```
# Create a task
curl -X POST http://localhost:3000/api/cockpit/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "...", "category": "product", "owner": "shubham"}'

# List tasks (supports filters: status, category, owner, priority)
curl http://localhost:3000/api/cockpit/tasks?status=todo&owner=shubham

# Update a task
curl -X PATCH http://localhost:3000/api/cockpit/tasks/UUID \
  -H "Content-Type: application/json" \
  -d '{"status": "done"}'

# Delete a task
curl -X DELETE http://localhost:3000/api/cockpit/tasks/UUID
```

# Add a note to a task
curl -X POST http://localhost:3000/api/cockpit/tasks/UUID/notes \
  -H "Content-Type: application/json" \
  -d '{"author": "claude", "content": "Updated the copy in beta-email.md"}'

# List notes for a task
curl http://localhost:3000/api/cockpit/tasks/UUID/notes
```

**Field values:**
- category: `product`, `curriculum`, `business-gtm`, `ops`
- status: `todo`, `in-progress`, `blocked`, `at-risk`, `postponed`, `complete`
- priority: `low`, `medium`, `high`, `urgent`
- owner: `shubham`, `jt`, or `null`
- note author: `shubham`, `jt`, `claude`

## Do NOT

- Add a CSS preprocessor (Sass, Less) — use Tailwind
- Add a state management library — this is a marketing site
- Add analytics/tracking code without explicit permission
- Modify shadcn component source files in `ui/` — extend via wrapper components instead
- Use `dangerouslySetInnerHTML` unless absolutely necessary

## Knowledge Base

The team maintains a shared knowledge base at `/knowledge/` in the repo. Use `/update-kb` to add learnings, strategy updates, or ideas after productive sessions.

**Proactive updates:** After any session that involves agent reviews, design debates, strategy discussions, copy changes, or plan creation — proactively invoke `/update-kb` to capture insights. Don't wait for the user to ask. The knowledge base is how the team's institutional knowledge compounds across sessions.

**Before recommending:** Check `knowledge/strategy/icp-and-buyer-personas.md` and `knowledge/ideas/backlog.md` before making recommendations — don't re-suggest rejected ideas or misalign with the established ICP.

**Before writing insight/article copy:** Read `knowledge/learnings/2026-04-03-mckinsey-style-editorial.md` and apply the McKinsey-style editorial standards. Every article must use the "while X, only Y" construction, anchor all statistics with comparisons, use organizational framing (not "you/your"), and follow claim-evidence-implication paragraph structure. Check the before/after in `knowledge/learnings/2026-04-03-article1-rewrite-before-after.md` for calibration.
