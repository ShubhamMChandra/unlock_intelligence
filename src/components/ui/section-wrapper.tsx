import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  theme?: "dark" | "light";
  className?: string;
}

export function SectionWrapper({ children, id, theme = "dark", className }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32",
        theme === "light" && "theme-light",
        className
      )}
    >
      <div className="mx-auto max-w-[1120px] px-6">
        {children}
      </div>
    </section>
  );
}
