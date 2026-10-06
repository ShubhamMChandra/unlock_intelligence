/**
 * What: Composes homepage sections in one scroll page.
 * Why: Marketing landing is section-driven static content.
 * How: Renders ordered section components inside main.
 * Deps: Section components from components/sections.
 */
import { Hero } from "@/components/sections/hero";
import { ProcessMatrix } from "@/components/sections/process-matrix";
import { EightHours } from "@/components/sections/eight-hours";
import { Team } from "@/components/sections/team";
import { Enroll } from "@/components/sections/enroll";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProcessMatrix />
      <EightHours />
      <Team />
      <Enroll />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
