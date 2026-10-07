# Inner pages, pass 2: the stream carries the page

## Founder's note
"it doesnt really feel like its incorporated the conceit well. i meant in the interior pages."

## What went wrong in pass 1
- Insights became a hairline in the margin.
- Team became a three-dot line beside each bio.
- Both were a standard dark layout with a line added as garnish.

## Rule for pass 2
Every inner page opens on the homepage's own object, the same band:
- the same canvas look
- the same lines
- rings on a dashed path
- text riding the curve
- the same tap-to-open

The page's own content is the stations, and the state of the stream says something true about that content. Below the strip, content is still clean, well-set type, and the strip and the content stay linked: hovering or tapping one opens the other.

The engine is one shared `site/stream.js`, extracted from flow.html, so every page draws the identical object.

## Pages

### Insights index: the usual AI rollout, and the break at each step
- **The strip:**
  - A dashed path with five rings, one per article, in rollout order:
    - Budget: "Your AI training budget is a line item…"
    - Training: "Stop teaching people to prompt…"
    - First try: "The same mistake everyone makes…" (using it like a search engine)
    - Week three: "Why AI adoption dies in three weeks"
    - The question: "What do you hate…"
  - The path is broken through the first four. At the fifth (start with the pain), it fans into the band and flows off the right edge.
  - The articles diagnose the breaks; the last one is the way in.
- **Interaction:** tap a ring, and the path opens there. The article's claim rides the line in lowercase, on one line, with no period.
- **The list:** the article list below carries each article's stage name, and hovering a list row opens its ring.

### Article: reading connects it
- **The strip:**
  - A thin sticky strip with one ring per section heading on a dashed path.
  - As you read, the line goes solid in ink up to your position, and each ring dissolves as you pass it, like the hero.
  - Only the current section's name rides the line.
- **At the end:** the path fans into the band (amber centre), and the closing ask sits at its mouth.
- **Navigation:** tap a ring to jump to that section.

### Team: two UChicago alumni, two paths, one room
- **The strip:**
  - Both lines leave one ring, "University of Chicago".
  - They part into two strands:
    - Shubham's runs through "Digital Realty".
    - J.T.'s runs through "Operations and business development".
  - Then they converge into the band at "Your team, in the room".
  - The shape is the opening itself.
  - Names ride the strands.
- **Interaction:** tap a strand to open a verified line from the bio.
- **Below the strip:** photos and bios, using verified text only.

### Contact and 404
Background agent drafts, both stream-native in their brief:
- **Contact:** fields are rings that close as they fill and fan into a stream on submit.
- **404:** a tangled line.

Check them against this rule.

## Watch for
- **Don't collapse to a timeline:** keep the band's character (lanes, wobble, text on the curve), not a straight hairline with dots.
- **Amber still means an agent runs it.** Reading progress and career paths are ink. The band keeps its amber centre only where the band appears.
- **Phone first:** the strip is 260 to 320px tall. Labels must fit at 390px, so use short station names.
