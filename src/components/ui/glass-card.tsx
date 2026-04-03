/**
 * What: Frosted bordered card container for marketing blocks.
 * Why: Reusable surface style across sections and insights.
 * How: Applies shared Tailwind glass classes via cn merge.
 * Deps: cn utility, ReactNode children prop.
 */
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-xl border border-white/[0.06] bg-white/[0.03] p-5 md:p-8 backdrop-blur-xl", className)}>
      {children}
    </div>
  );
}
