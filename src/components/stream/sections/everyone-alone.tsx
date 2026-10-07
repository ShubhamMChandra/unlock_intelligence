/**
 * What: "How most teams use AI today": twenty short strokes that never connect, each trading places with one throwaway prompt.
 * Why: The before state of the stream, shown as loose fragments: everyone alone, one chat at a time.
 * How: Server component; absolutely placed strokes with staggered CSS animations (act-line, act-word in globals.css).
 * Deps: StreamSection.
 */
import { StreamSection } from "@/components/stream/stream-section";

const STROKES = ["M0 10 q30 -8 60 4", "M0 10 q24 10 50 -2", "M0 10 q30 6 54 -6", "M0 10 q20 -12 46 2", "M0 10 q30 10 58 0", "M0 10 q24 -10 52 4"];

// x and y in percent of the field; delay in seconds keeps no two neighbours in step
const ACTS: [number, number, number, string][] = [
  [2, 12, 0.0, "summarize this"],
  [19, 20, 7.63, "rewrite it nicer"],
  [36, 8, 6.26, "make it shorter"],
  [52, 24, 4.89, "fix the tone"],
  [68, 12, 3.52, "is this right?"],
  [84, 22, 2.15, "draft an email"],
  [7, 46, 0.78, "try again"],
  [24, 38, 8.41, "explain this tab"],
  [41, 54, 7.04, "make a table"],
  [57, 42, 5.67, "one more time"],
  [74, 52, 4.3, "translate this"],
  [88, 40, 2.93, "write a reply"],
  [2, 78, 1.56, "bullet points, please"],
  [18, 86, 0.19, "more formal"],
  [35, 74, 7.82, "check my math"],
  [52, 88, 6.45, "polish this"],
  [69, 76, 5.08, "what does this mean"],
  [85, 84, 3.71, "help with Excel"],
  [12, 64, 2.34, "name ideas"],
  [62, 66, 0.97, "shorter"],
];

export function EveryoneAlone() {
  return (
    <StreamSection
      id="today"
      title="How most teams use AI today"
      lead="Everyone got a license. Each person works it out alone, one chat at a time, and the work still waits at every handoff."
    >
      <div
        role="img"
        aria-label="Twenty separate prompts, each a person working alone, none of them connected"
        className="relative h-[230px] overflow-hidden text-ink md:h-[200px]"
      >
        {ACTS.map(([x, y, delay, prompt], i) => (
          <span
            key={prompt}
            className="absolute left-[calc(var(--x)*0.66%)] top-[calc(var(--y)*1%)] md:left-[calc(var(--x)*1%)]"
            style={{ "--x": x, "--y": y } as React.CSSProperties}
          >
            <svg
              viewBox="-2 0 64 20"
              aria-hidden="true"
              className="absolute -top-2.5 left-0 h-5 w-16 overflow-visible animate-act-line motion-reduce:animate-none"
              style={{ animationDelay: `${delay}s` }}
            >
              <path d={STROKES[i % STROKES.length]} className="fill-none stroke-current opacity-70 [stroke-linecap:round] [stroke-width:1.4]" />
            </svg>
            <em
              className="absolute -top-[9px] left-0 whitespace-nowrap text-[12.5px] not-italic text-haze opacity-0 animate-act-word motion-reduce:animate-none md:text-[13.5px]"
              style={{ animationDelay: `${delay}s` }}
            >
              {prompt}
            </em>
          </span>
        ))}
      </div>
    </StreamSection>
  );
}
