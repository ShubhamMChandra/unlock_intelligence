/**
 * What: Top bar for every marketing page: the mark and the site's links, pinned as you scroll.
 * Why: Buyers read on a phone first; the other pages stay one tap away from anywhere on the page.
 * How: Client component (usePathname marks the current page). Sticky, solid ground. On phones the
 *      links sit in a second row that scrolls sideways if it ever runs out of room.
 * Deps: next/link, next/navigation, Logo, streamLinks.
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { streamLinks } from "@/components/stream/stream-links";

export function StreamHeader() {
  const pathname = usePathname();
  const current = (href: string) => !href.includes("#") && pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-30 h-[var(--hdr)] border-b border-rule bg-ground">
      <div className="mx-auto flex h-full max-w-[1160px] flex-col justify-center px-4 md:flex-row md:items-center md:justify-between md:px-8">
        <Link href="/" className="flex min-h-10 items-center gap-2.5 text-[15px] font-bold [font-stretch:85%]" aria-label="Unlock Intelligence, home">
          <Logo size={22} />
          Unlock Intelligence
        </Link>
        <nav
          aria-label="Main"
          className="-mx-4 flex gap-5 overflow-x-auto px-4 text-sm text-haze [scrollbar-width:none] md:mx-0 md:gap-6 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {streamLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={current(l.href) ? "page" : undefined}
              className={cn("flex min-h-10 shrink-0 items-center whitespace-nowrap transition-colors hover:text-ink", current(l.href) && "text-ink")}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
