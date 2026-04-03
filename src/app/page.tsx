import { Hero } from "@/components/sections/hero";
import { ProofBar } from "@/components/sections/proof-bar";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Curriculum } from "@/components/sections/curriculum";
import { Who } from "@/components/sections/who";
import { Why } from "@/components/sections/why";
import { Team } from "@/components/sections/team";
import { Enroll } from "@/components/sections/enroll";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProofBar />
      <Problem />
      <HowItWorks />
      <Curriculum />
      <Who />
      <Why />
      <Team />
      <Enroll />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
