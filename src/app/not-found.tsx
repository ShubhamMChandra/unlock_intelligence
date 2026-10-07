/**
 * What: The site-wide 404, set in the Stream world.
 * Why: A lost visitor should still be in the same place as the homepage, with a way back.
 * How: Renders under the root layout only, so it paints its own ground and type and includes the Stream header and footer.
 * Deps: StreamHeader, StreamFooter, stream/not-found/lost-line, stream/styles, next/link.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { StreamHeader } from "@/components/stream/stream-header";
import { StreamFooter } from "@/components/stream/stream-footer";
import { LostLine } from "@/components/stream/not-found/lost-line";
import { pill, textLink } from "@/components/stream/styles";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ground font-stream text-[15px] leading-normal text-ink [color-scheme:dark] selection:bg-ink/20 [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-[3px] [&_:focus-visible]:outline-ink">
      <StreamHeader />
      <main className="mx-auto max-w-[1160px] px-4 pb-20 md:px-8">
        <LostLine />
        <h1 className="m-0 text-[40px] font-extrabold leading-none tracking-[-0.015em] [font-stretch:80%] md:text-[64px]">
          This page isn&rsquo;t here.
        </h1>
        <p className="mb-0 mt-3 max-w-[46ch] font-serif text-[17px] text-haze md:text-[18px]">
          The link may be old, or the page moved.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href="/" className={pill}>
            Back to the homepage
          </Link>
          <span className="flex gap-6">
            <Link
              href="/insights"
              className={cn(
                "flex min-h-10 items-center text-[15px] font-semibold",
                textLink,
              )}
            >
              Why this works
            </Link>
            <Link
              href="/contact"
              className={cn(
                "flex min-h-10 items-center text-[15px] font-semibold",
                textLink,
              )}
            >
              Talk to us
            </Link>
          </span>
        </div>
      </main>
      <StreamFooter />
    </div>
  );
}
