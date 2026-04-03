# Unlock Intelligence

Marketing website for [Unlock Intelligence](https://unlockintelligence.co) — a cohort-based AI mastery program that transforms curious professionals into AI authorities in a single weekend.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, TypeScript)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms:** [Web3Forms](https://web3forms.com/) (free tier)
- **Fonts:** Inter + JetBrains Mono via `next/font`
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/) via GitHub Actions

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, navbar, footer)
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Design system (Tailwind + shadcn theme)
│   └── contact/
│       └── page.tsx        # Contact/enrollment page
├── components/
│   ├── layout/
│   │   ├── navbar.tsx      # Fixed nav with scroll-to-pill animation
│   │   └── footer.tsx      # Site footer
│   ├── sections/           # Landing page sections
│   │   ├── hero.tsx
│   │   ├── proof-bar.tsx
│   │   ├── problem.tsx
│   │   ├── how-it-works.tsx
│   │   ├── curriculum.tsx
│   │   ├── who.tsx
│   │   ├── why.tsx
│   │   ├── team.tsx
│   │   ├── enroll.tsx
│   │   ├── faq.tsx
│   │   └── final-cta.tsx
│   ├── contact/            # Contact page components
│   │   ├── contact-form.tsx
│   │   └── process-card.tsx
│   └── ui/                 # Shared UI primitives
│       ├── glass-card.tsx
│       ├── gradient-divider.tsx
│       ├── gradient-text.tsx
│       ├── logo.tsx
│       ├── parallax-orbs.tsx
│       ├── scroll-reveal.tsx
│       ├── section-wrapper.tsx
│       └── ... (shadcn components)
└── lib/
    └── utils.ts            # cn() helper
```

## Design System

The site uses a dark-first design with indigo/violet accent colors:

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#09090B` | Page background |
| `--primary` | `#818CF8` | Indigo accent |
| `--accent` | `#A78BFA` | Violet accent |
| `--emerald` | `#34D399` | Success/positive |
| Gradient | `#6366F1 → #8B5CF6` | CTAs, highlights |

Light sections use `.theme-light` class to override CSS variables locally.

## Deployment

Pushes to `main` automatically deploy to Cloudflare Pages via GitHub Actions.

**Required secrets:**
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

## Environment Variables

Create `.env.local` for local development:

```env
# Web3Forms (get a free key at https://web3forms.com)
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

## License

All rights reserved.
