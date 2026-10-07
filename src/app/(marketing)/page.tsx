/**
 * What: The homepage: the stream hero, then the program in the order a buyer asks about it.
 * Why: From handoffs to flow, in two days; everything below the hero stays quiet.
 * How: Composes Stream sections; only the hero ships client JavaScript.
 * Deps: components/stream.
 */
import { StreamHero } from "@/components/stream/stream-hero";
import { EveryoneAlone } from "@/components/stream/sections/everyone-alone";
import { TwoDays } from "@/components/stream/sections/two-days";
import { ByMonday } from "@/components/stream/sections/by-monday";
import { Faculty } from "@/components/stream/sections/faculty";
import { Pricing } from "@/components/stream/sections/pricing";
import { Questions } from "@/components/stream/sections/questions";
import { Closing } from "@/components/stream/sections/closing";

export default function Home() {
  return (
    <main>
      <StreamHero />
      <EveryoneAlone />
      <TwoDays />
      <ByMonday />
      <Faculty />
      <Pricing />
      <Questions />
      <Closing />
    </main>
  );
}
