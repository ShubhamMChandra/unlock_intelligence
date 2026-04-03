import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function GradientText({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("bg-gradient-to-br from-[#818CF8] to-[#C4B5FD] bg-clip-text text-transparent", className)}>
      {children}
    </span>
  );
}
