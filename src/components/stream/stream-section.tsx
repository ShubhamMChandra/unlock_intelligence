/**
 * What: Two-column section frame for the homepage: title and lead on the left, content on the right.
 * Why: Keeps every section on the same grid so the hero stays the only loud object.
 * How: Server component; stacks on phones, 300px rail plus content from 900px.
 * Deps: stream/styles.
 */
import { cn } from "@/lib/utils";
import { lead as leadClass, sectionTitle } from "@/components/stream/styles";

interface StreamSectionProps {
  id?: string;
  title: string;
  lead?: string;
  aside?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export function StreamSection({ id, title, lead, aside, className, children }: StreamSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto grid max-w-[1160px] scroll-mt-6 gap-[18px] px-4 pb-2 pt-14 md:px-8 min-[900px]:grid-cols-[300px_minmax(0,1fr)] min-[900px]:gap-12 min-[900px]:pt-[88px]",
        className,
      )}
    >
      <div>
        <h2 className={sectionTitle}>{title}</h2>
        {lead && <p className={leadClass}>{lead}</p>}
        {aside}
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
