/**
 * What: The closing ask: "Bring us one process."
 * Why: Every page ends on the same single action.
 * How: Server component; large statement, one sentence, one button.
 * Deps: next/link, stream/styles.
 */
import Link from "next/link";
import { pill } from "@/components/stream/styles";

export function Closing() {
  return (
    <section className="mx-auto grid max-w-[1160px] justify-items-start gap-3 px-4 pb-16 pt-24 md:px-8">
      <h2 className="m-0 text-[40px] font-extrabold leading-none tracking-[-0.015em] [font-stretch:80%] md:text-[64px]">Bring us one process.</h2>
      <p className="mb-2 mt-0 max-w-[46ch] font-serif text-[17px] text-haze">
        The one that waits at every handoff. We&rsquo;ll show you what it looks like as a stream.
      </p>
      <Link href="/contact" className={pill}>
        Bring us one process
      </Link>
    </section>
  );
}
