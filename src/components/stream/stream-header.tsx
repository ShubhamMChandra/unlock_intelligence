/**
 * What: Quiet top bar for every marketing page: mark, links, and a phone menu.
 * Why: The stream is the loud object; the chrome stays still and small.
 * How: Client component for the phone toggle; usePathname marks the current page.
 * Deps: next/link, next/navigation, Logo.
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { streamLinks } from "@/components/stream/stream-links";

export function StreamHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = (href: string) => !href.includes("#") && pathname.startsWith(href);

  return (
    <header className="relative z-20 mx-auto max-w-[1160px] px-4 md:px-8">
      <div className="flex items-center justify-between py-3.5">
        <Link href="/" className="flex min-h-11 items-center gap-2.5 text-[15px] font-bold [font-stretch:85%]" aria-label="Unlock Intelligence, home">
          <Logo size={22} />
          Unlock Intelligence
        </Link>
        <nav aria-label="Main" className="hidden gap-6 text-sm text-haze md:flex">
          {streamLinks.map((l) => (
            <Link key={l.href} href={l.href} aria-current={current(l.href) ? "page" : undefined} className={cn("transition-colors hover:text-ink", current(l.href) && "text-ink")}>
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="min-h-11 px-1 text-sm text-haze md:hidden"
          aria-expanded={open}
          aria-controls="phone-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="phone-menu" aria-label="Main" className="grid border-t border-rule pb-4 md:hidden">
          {streamLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={current(l.href) ? "page" : undefined}
              className={cn("flex min-h-12 items-center border-b border-rule text-[17px] text-haze", current(l.href) && "text-ink")}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
