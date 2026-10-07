/**
 * What: Footer for every marketing page: the closing ask and the same links as the header.
 * Why: Every page ends on one action, "Bring us one process."
 * How: Server component; hairline rule, two rows.
 * Deps: next/link, streamLinks.
 */
import Link from "next/link";
import { streamLinks } from "@/components/stream/stream-links";

export function StreamFooter() {
  return (
    <footer className="mx-auto max-w-[1160px] px-4 pb-[max(2rem,env(safe-area-inset-bottom))] md:px-8">
      <div className="flex flex-wrap items-baseline justify-between gap-3 border-t border-rule pt-5">
        <span className="text-sm font-bold [font-stretch:85%]">Unlock Intelligence</span>
        <Link href="/contact" className="text-[15px] font-semibold underline decoration-rule decoration-1 underline-offset-[6px] hover:decoration-ink">
          Bring us one process.
        </Link>
      </div>
      <nav aria-label="Footer" className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-haze">
        {streamLinks.map((l) => (
          <Link key={l.href} href={l.href} className="flex min-h-10 items-center hover:text-ink">
            {l.label}
          </Link>
        ))}
      </nav>
      <p className="mt-3 max-w-[60ch] text-[13px] text-haze">
        Unlock Intelligence is an independent program. Our faculty are University of Chicago alumni; the curriculum is original.
      </p>
    </footer>
  );
}
