/**
 * What: "How most teams use AI today": fifteen short strokes that never connect, each trading places with one throwaway prompt.
 * Why: The before state of the stream, shown as loose fragments: everyone alone, one chat at a time.
 * How: Server component; absolutely placed strokes with staggered CSS animations (act-line, act-word in globals.css).
 * Deps: StreamSection.
 */
import { StreamSection } from "@/components/stream/stream-section";

const STROKES = ["M0 10 q30 -8 60 4", "M0 10 q24 10 50 -2", "M0 10 q30 6 54 -6", "M0 10 q20 -12 46 2", "M0 10 q30 10 58 0", "M0 10 q24 -10 52 4"];

// x and y in percent of the field; delay in seconds keeps no two neighbours in step
const ACTS: [number, number, number, string][] = [
  [2, 14, 0.0, "summarize this"],
  [22, 24, 5.4, "rewrite it nicer"],
  [42, 10, 3.0, "make it shorter"],
  [61, 22, 7.2, "fix the tone"],
  [80, 12, 1.8, "is this right?"],
  [8, 50, 6.3, "try again"],
  [28, 44, 2.4, "explain this tab"],
  [48, 56, 8.1, "make a table"],
  [67, 46, 4.2, "one more time"],
  [84, 54, 0.9, "write a reply"],
  [3, 84, 3.6, "bullet points, please"],
  [24, 78, 7.8, "more formal"],
  [44, 88, 1.2, "check my math"],
  [63, 80, 5.7, "polish this"],
  [82, 86, 2.7, "help with Excel"],
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
        aria-label="Fifteen separate prompts, each a person working alone, none of them connected"
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
              className="absolute -top-2.5 left-0 h-5 w-16 overflow-visible animate-act-line"
              style={{ animationDelay: `${delay}s` }}
            >
              <path d={STROKES[i % STROKES.length]} className="fill-none stroke-current opacity-70 [stroke-linecap:round] [stroke-width:1.4]" />
            </svg>
            <em
              className="absolute -top-[9px] left-0 whitespace-nowrap text-[12.5px] not-italic text-haze opacity-0 animate-act-word md:text-[13.5px]"
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
