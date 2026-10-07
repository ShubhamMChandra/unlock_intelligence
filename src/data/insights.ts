/**
 * What: Insight article types and all article content.
 * Why: Data-driven insights pages without a CMS.
 * How: Typed arrays plus slug lookup helper functions.
 * Deps: None; imported by app/insights and Playwright.
 */
export interface StatHighlight {
  value: string;
  label: string;
  source: string;
}

export interface ComparisonRow {
  label: string;
  left: string;
  right: string;
}

export interface InsightSection {
  heading: string;
  paragraphs: string[];
  callout?: string;
  stats?: StatHighlight[];
  bullets?: { bold: string; text: string }[];
  comparison?: {
    leftHeader: string;
    rightHeader: string;
    rows: ComparisonRow[];
  };
}

export interface InsightArticle {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  readingTime: string;
  category: string;
  keyTakeaways: string[];
  sections: InsightSection[];
  cta: {
    text: string;
    href: string;
  };
  relatedSlugs: string[];
}

export const insights: InsightArticle[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // Article 1
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "ai-training-budget-line-item",
    title: "Your AI training budget is a line item, not a strategy",
    subtitle:
      "84% of companies plan to spend more on AI. Only 35% have a mature program for teaching people to use it.",
    author: "Shubham Chandra, Head of Curriculum",
    readingTime: "8 min read",
    category: "Workforce Strategy",
    keyTakeaways: [
      "84% of companies plan to increase AI investment next year. Only 35% have a mature, organization-wide AI literacy program. That gap compounds every quarter.",
      "Platform licenses, lunch-and-learns, and prompt workshops all share one problem: none of them measure whether anyone works differently after.",
      "The same skill gap shows up in a University of Chicago classroom and a Fortune 500 conference room, and in both rooms it is a workflow gap: people who have tried ChatGPT and still cannot say where it fits in their own week.",
      "Training becomes a strategy when it starts with a specific pain point and someone measures what changes.",
    ],
    sections: [
      {
        heading: "Three common investments, one shared failure",
        stats: [
          { value: "84%", label: "of companies plan to raise AI investment next year", source: "Deloitte, State of AI in the Enterprise, 2026" },
          { value: "35%", label: "have a mature, organization-wide AI literacy program", source: "DataCamp and YouGov, State of Data & AI Literacy, 2026" },
          { value: "3%", label: "of learners finish the open online courses they start", source: "Reich and Ruip\u00e9rez-Valiente, Science, 2019" },
        ],
        paragraphs: [
          "Most AI training budgets go to three things: platform licenses (LinkedIn Learning, Coursera), lunch-and-learns, and prompt workshops. While 84% of companies plan to raise AI investment next year, only 35% have a mature, organization-wide program for teaching people to use it, and the distance between those two numbers is where the budget goes.",
          "Platform licenses are the default move. L&D signs a deal, sends an email, and waits. Open online courses finish about 3% of the people who start them, according to an MIT and Harvard study of 5.6 million edX learners, and a corporate library runs on the same self-paced model. Live, instructor-led programs finish at a far higher rate, because someone in the room expects everyone back.",
          "Six months in, in the rollouts I've seen, hardly anyone has logged in since week one. The license renews anyway, because canceling it would mean admitting the initiative failed.",
          "Lunch-and-learns have a different problem. Whoever has a free hour runs them, and that person has usually never built AI into real work. I've talked to L&D directors who run these monthly. Not one has followed up to check whether anyone applied a single thing.",
          "Prompt workshops are the newest thing: half-day sessions on crafting the perfect prompt. Teaching someone to prompt better without showing them where AI fits in their work is like teaching someone to type faster without saying what to write.",
          "What all three have in common: nobody measures whether anything changed. Ask how training went and you hear \"people seem more comfortable\" or \"engagement was positive.\" Those answers measure sentiment, and sentiment says nothing about whether anyone works differently.",
        ],
      },
      {
        heading: "What a training strategy looks like",
        paragraphs: [
          "A strategy starts with a specific pain point. Which tasks eat the most time for the least value? For an operations team it is usually the weekly status report; for legal, vendor contract review; for finance, the monthly commentary. The strategy begins with one of those tasks and nothing broader.",
          "The measurement changes too. Completion rates show who clicked through and login rates show who remembered their password, which is about all they show. Whether anyone's work changed is a separate question, and almost nobody asks it.",
          "The best programs track one metric: can someone now do in 30 minutes what used to take 3 hours? If yes, training worked. If they can't name a task that changed, it didn't.",
          "Once AI sits inside an existing workflow, adoption stops being something anyone has to remember. The weekly report gets drafted from the tracker because that is now how the report gets made. Teams that reach that point stop saying \"we trained on AI\" and start saying \"this is how we do the report.\"",
        ],
      },
      {
        heading: "The line-item test",
        paragraphs: [
          "Look at where AI training sits in your L&D budget. If it's next to compliance training and the annual leadership retreat, it will deliver the same results: a checkbox.",
          "Compliance training exists to protect the company from liability, and leadership retreats exist to make people feel valued, so neither was ever designed to change how work gets done. AI training that sits beside them inherits the same expectation: attend, check the box, move on.",
          "Framing sets the expectation. A budget line called an investment gets asked about returns at the next review, while a line called a perk never does.",
        ],
        callout:
          "If you can't name three workflows your team does differently since the last training, the training didn't work.",
      },
      {
        heading: "The skill gap looks the same in a classroom and a conference room",
        paragraphs: [
          "I teach 75+ students at the University of Chicago and build AI automation systems at a $40B enterprise. The skill gap is the same on both sides.",
          "A 22-year-old graduate student and a senior VP with two decades of experience make the same mistakes. They hit the same walls and have the same breakthrough moments. The VP just takes a little longer to admit they're stuck.",
          "Everyone has heard of AI and most have tried ChatGPT, so the gap sits further along, at the point where somebody shows them where AI fits in their specific work: the report they write every week, the follow-up email they send after every meeting.",
          "Until training gets that specific, it stays theoretical. And theoretical training is what a line item buys.",
        ],
      },
    ],
    cta: {
      text: "See how this program is structured",
      href: "/#program",
    },
    relatedSlugs: ["stop-teaching-prompting", "ai-adoption-dies-three-weeks"],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Article 2
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "stop-teaching-prompting",
    title: "Stop teaching people to prompt. Teach them to build.",
    subtitle:
      "Prompting is a tactic. Building an agent that runs part of your own job is the skill that sticks.",
    author: "Shubham Chandra, Head of Curriculum",
    readingTime: "8 min read",
    category: "Training Design",
    keyTakeaways: [
      "Prompting is to AI what typing is to writing. It's the input, not the skill.",
      "Non-technical professionals can build a working agent in one live session, from a starter written for their role, without writing code.",
      "Two moments convert skeptics: the time savings shock (2 hours to 10 minutes) and the ownership moment (\"I built this\").",
      "Tools handed down by IT get tried once and dropped within weeks. Tools people build for their own work stay open on Monday morning, because they were built for Monday morning's task.",
    ],
    sections: [
      {
        heading: "The prompting trap",
        stats: [
          { value: "2.5 hrs", label: "a week per person on steps an agent could run, as a working assumption", source: "Our estimate; put in your own number" },
          { value: "$9,750", label: "per person per year at that rate", source: "2.5 hrs \u00d7 $75/hr fully loaded \u00d7 52 weeks" },
        ],
        paragraphs: [
          "Everyone is teaching prompting. Workshops, webinar series and certification programs have made it the default answer to \"how do we upskill on AI.\"",
          "Prompting is to AI what typing is to writing. No company would send a team to a typing workshop and call it a communications program, yet most prompt courses deliver exactly that: a faster way to talk to a tool, with no attention to whether the tool is pointed at the right problem.",
          "Take a conservative assumption: one person spends 2.5 hours a week on steps an agent could run. At $75 an hour, fully loaded, that is $9,750 a year per person, and it scales with the team. Prompt workshops aren't capturing it because they aren't changing what people do with their working hours.",
        ],
      },
      {
        heading: "What building looks like for non-technical people",
        bullets: [
          { bold: "HR coordinator", text: "Builds an agent that drafts job descriptions in the company's voice and tone" },
          { bold: "Marketing lead", text: "Builds one that turns campaign data into exec summaries for the Monday standup" },
          { bold: "Ops manager", text: "Builds one that generates weekly status reports from project notes, replacing a 90-minute Friday task" },
          { bold: "Sales team", text: "Connects their CRM to an AI workflow that drafts follow-up emails from call notes" },
          { bold: "Finance team", text: "Automates monthly variance commentary that used to mean pulling data from three different systems" },
        ],
        paragraphs: [
          "None of these require code. Each is an agent built from a starter written for that role and pointed at one recurring task.",
          "Tell someone \"you're going to learn to build AI tools\" and they picture software engineering. Watching the instructor build one on a volunteer's real work, then building their own the same day without writing code, dissolves that. The thing they built on day one becomes the thing they show their manager.",
        ],
        callout:
          "Your team can already prompt. Can they build something that saves them two hours every week?",
      },
      {
        heading: "The two moments that convert skeptics",
        paragraphs: [
          "The first is the time savings shock. A task that took two hours now takes ten minutes, and the Friday report is done before the coffee gets cold. It shows on their faces.",
          "The second is ownership. Watching a demo proves the instructor can do it. Building one proves they can, and \"I built this\" is the sentence that turns a skeptic.",
          "These two moments explain a pattern. AI tools that IT rolls out with a company-wide email get tried once and left alone. Agents that people build for their own tasks get opened again, because the builder already knows what the next run is for.",
          "Ownership is the difference, and a platform license has never produced it.",
        ],
      },
      {
        heading: "Why this changes the adoption math",
        comparison: {
          leftHeader: "Tools imposed from above",
          rightHeader: "Tools built from within",
          rows: [
            { label: "Usage after launch", left: "Tried once, then dropped", right: "Opened again the next week" },
            { label: "Adoption timeline", left: "Excitement for 2-3 weeks, then abandonment", right: "Usage grows as people refine their tools" },
            { label: "Maintenance", left: "IT owns it; users submit tickets", right: "Builders iterate on their own" },
            { label: "Knowledge retention", left: "Forgot the training by Friday", right: "Built something they use every day" },
          ],
        },
        paragraphs: [
          "People use the tools they built, and abandon the ones somebody else handed them, usually within a few weeks.",
          "Open online courses finish about 3% of the people who start, according to an MIT and Harvard study of edX learners, while HBS Online reports an 85% completion rate for its cohort-based courses. Even so, completion only proves attendance. The result that matters is someone doing a piece of their job differently on Monday.",
          "The programs that change behavior are the ones where people leave with something they built and will open again on Tuesday morning.",
        ],
      },
    ],
    cta: {
      text: "See what participants build",
      href: "/#monday",
    },
    relatedSlugs: ["same-mistake-everyone-makes", "what-do-you-hate"],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Article 3
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "ai-adoption-dies-three-weeks",
    title: "Why AI adoption dies in three weeks",
    subtitle:
      "The pattern is predictable. The fix isn't more training. It's a different kind.",
    author: "Shubham Chandra, Head of Curriculum",
    readingTime: "8 min read",
    category: "AI Adoption",
    keyTakeaways: [
      "AI adoption follows a predictable arc: excitement in week one, broken trust in week two, silent abandonment by week three.",
      "The technology holds up. Adoption breaks when tools get deployed without anyone teaching what AI is good at, or fitting it into how people already work.",
      "Where adoption held, one decision stands out: an ops or finance lead, rather than IT, was made responsible for adoption inside their own team.",
      "Training turns into a new way of working only when somebody asks, three weeks later, what changed.",
    ],
    sections: [
      {
        heading: "The three-week pattern",
        paragraphs: [
          "Week one is excitement. The CEO sends an all-hands email, everyone tries ChatGPT, and a Slack channel appears by lunchtime. Someone in marketing drafts a blog post in ten minutes and the momentum feels real.",
          "Week two is reality. Someone pastes AI-generated text into a client deliverable without checking it, and a draft goes out with statistics the model invented. Trust cracks. The enthusiasts keep going while everyone else gets quiet.",
          "Week three is silence. People go back to the old way, and because nobody is checking, nobody notices. Six months later the license renewal comes around and someone in procurement asks \"are people even using this?\"",
          "Most leaders I talk to can describe this arc from memory, and in DataCamp's 2026 survey with YouGov, 59% of enterprise leaders reported an AI skills gap. Far fewer can say what their own organization did in week three.",
        ],
      },
      {
        heading: "What a typical rollout leaves out",
        paragraphs: [
          "Nobody teaches what AI is good at, and what it isn't. Without that calibration every bad output feels like a betrayal, and the conclusion people reach is \"this doesn't work.\" The thought \"I gave it bad context\" never occurs, because nobody told them context was the input.",
          "AI gets positioned as a separate activity. \"Use AI more\" reads as a guilt trip, because it says nothing about which step of which task. When someone has to open a different tool, work out what to ask, then work out what to do with the answer, most people do it the old way.",
          "There's no accountability loop. Leadership asked for training, training happened, and the box got checked. Nobody went back three weeks later to ask whether anyone works differently.",
        ],
        callout:
          "The common thread is that nobody ever checked. Until leadership asks \"show me what changed,\" nothing will.",
      },
      {
        heading: "What makes adoption stick",
        bullets: [
          { bold: "Embed AI into existing workflows", text: "If someone has to leave their primary tool to use AI, adoption is already lost. The AI step has to sit inside the work itself." },
          { bold: "Designate AI champions by function", text: "Ops leads, finance managers and marketing directors who drive adoption inside their own teams. IT can run the platform, but it does not know the workflows and has none of the credibility with the team." },
          { bold: "Measure time saved on real tasks", text: "How much time did finance save on monthly reporting? \"Number of people trained\" is an input metric. Time saved on real tasks is the one that justifies the investment." },
        ],
        paragraphs: [
          "In the companies where AI stuck, somebody treated it as an operational change, with an owner and a number to report. Where it fizzled, it had been handled as an IT deployment and left to run itself.",
        ],
      },
      {
        heading: "The enterprise reality",
        paragraphs: [
          "I've watched this pattern play out across departments, geographies, and seniority levels at a $40B enterprise. Whatever their training hours, the teams that keep using AI are the ones where it became part of the workflow.",
          "Training bought like a gym membership gets gym-membership results. Habits form from structured practice on real problems, with someone checking whether anything changed.",
        ],
      },
    ],
    cta: {
      text: "See how the program is structured",
      href: "/#program",
    },
    relatedSlugs: ["ai-training-budget-line-item", "stop-teaching-prompting"],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Article 4
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "same-mistake-everyone-makes",
    title: "The same mistake everyone makes with AI",
    subtitle:
      "It happens in university classrooms and Fortune 500 conference rooms. The error is the same.",
    author: "Shubham Chandra, Head of Curriculum",
    readingTime: "7 min read",
    category: "AI Adoption",
    keyTakeaways: [
      "The biggest barrier to AI adoption is the mental model people bring to it. They treat AI like a search engine and judge it on search engine terms.",
      "Students and executives make the same error, and the only thing that has shifted it, in either room, is structured practice on real work.",
      "AI is a capable but context-starved collaborator. Brief it like a colleague, not a search bar.",
    ],
    sections: [
      {
        heading: "The universal error",
        stats: [
          { value: "66%", label: "of leaders would not hire someone without AI skills", source: "Microsoft and LinkedIn, Work Trend Index, 2024" },
          { value: "56%", label: "wage premium for workers with AI skills", source: "PwC, Global AI Jobs Barometer, 2025" },
        ],
        paragraphs: [
          "The sequence runs like this: a vague question goes in, a surface-level answer comes back, and the person decides AI is not that useful and stops. The whole cycle usually takes a couple of days.",
          "I've seen it in a University of Chicago classroom and in a Fortune 500 conference room. Students ask AI to \"analyze this\" and get back observations they already knew. They accept it as the ceiling. So do VPs.",
          "The twenty-two-year-old and the C-suite executive walk away thinking the same thing: \"it's just giving me what I already know.\" Neither realizes that the question produced that answer.",
          "Two thirds of leaders told Microsoft and LinkedIn they would not hire someone without AI skills. What they mean by skill is judgment: knowing where AI fits in real work and when to trust what comes back, and judgment is something no tutorial has managed to teach.",
        ],
      },
      {
        heading: "Why the search engine metaphor breaks everything",
        paragraphs: [
          "Google rewards keywords and hands back an answer. AI rewards context and hands back a starting point. Most people bring the Google habit to the second tool, then blame the tool.",
          "Treated like search, AI gets queries with no context about who is asking or what they need, and the first result gets accepted the way a top search result does.",
          "The result is a population of professionals who tried AI once, got a mediocre answer, and now quietly think it is overhyped. They are wrong for an understandable reason, which is that nobody ever corrected the metaphor.",
        ],
        callout:
          "A bad AI interaction and a useful one usually differ by thirty seconds of context the person did not provide.",
      },
      {
        heading: "The reframe that helps",
        paragraphs: [
          "Think of AI as a capable colleague who just walked into the room with no context. Quick and willing, and unaware of the situation or of what \"good\" looks like here.",
          "Brief it the way a smart colleague gets briefed on day one: the role, the audience, what success looks like, what has already been tried. When people make this shift, output jumps from generic to useful, and the only thing that changed was the input.",
          "Most training programs skip this and open with the features of ChatGPT. Features change every quarter, so that lesson expires fast, while a mental model keeps paying off for years.",
        ],
      },
      {
        heading: "What this means for training",
        paragraphs: [
          "The tools work fine. ChatGPT, Copilot, Claude and Gemini are all capable enough, so the thing that needs fixing is the mental model, and a lunch-and-learn has never fixed one.",
          "What fixes it is practice on real problems: the report due Friday, the analysis the board wants next week, the proposal that has sat half-written for a month. Working one of those through with AI is what moves the mental model.",
          "PwC's 2025 Global AI Jobs Barometer found a 56% wage premium for workers with AI skills. The premium rewards judgment about when AI helps and when it does not, and the people earning it got there by doing the work differently, over and over, until the new way became the default.",
        ],
      },
    ],
    cta: {
      text: "See what the program covers",
      href: "/#program",
    },
    relatedSlugs: ["stop-teaching-prompting", "ai-adoption-dies-three-weeks"],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Article 5
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "what-do-you-hate",
    title:
      "What do you hate, why do you hate it, and who do you wish could do it?",
    subtitle:
      "The best AI training doesn't start with AI. It starts with a question.",
    author: "Shubham Chandra, Head of Curriculum",
    readingTime: "8 min read",
    category: "Training Design",
    keyTakeaways: [
      "The most effective AI training opens with a question about the job: \"What do you hate about it, why, and who do you wish could do it?\"",
      "Saying the frustration out loud, in a room where everyone else has the same one, is what moves people from skeptical to impatient.",
      "Participants leave with a working agent for a problem they just named, a map of one real process, and a queue of the next three to five builds.",
      "Teams that get a return on AI tend to start from a task someone already resents, and work backward to the tool.",
    ],
    sections: [
      {
        heading: "The question that starts every program",
        paragraphs: [
          "The first thing participants hear is three questions. What do you hate about your job? Why do you hate it? And who do you wish could do it? The definition of a large language model can wait.",
          "The answers are consistent across roles and industries: reformatting data between systems, writing the same status update in three formats, drafting boilerplate that nobody reads carefully but everyone demands. All of it is repetitive work someone wishes they could hand off.",
          "That \"someone\" they wish could do it? More often than not, an AI can. But nobody has drawn the line between \"I hate writing weekly status reports\" and \"an agent can draft that from the tracker.\"",
        ],
      },
      {
        heading: "Discussion gets a room further than a lecture does",
        paragraphs: [
          "The format is borrowed from the University of Chicago tradition: discussion over lecture, questions over slides. The instructor sets up the conditions, and the room works the problem through for itself.",
          "When a room full of professionals says its pain points out loud, the first thing they notice is that the frustration is shared. The operations manager hates the same kind of work the marketing director hates.",
          "That recognition creates energy, and the room shifts from audience to working group. It carries people from \"I'm not sure AI is relevant\" on the first morning to \"I built an agent for my own work\" by the end of day one, and to a mapped process with the next builds queued by the end of day two.",
        ],
        callout:
          "The moment a room realizes they all lose hours every week to the same kind of task, skepticism turns into urgency.",
      },
      {
        heading: "From pain to a working agent in two days",
        paragraphs: [
          "Day one opens with those three questions, then a live demo in which the instructor builds an agent on one volunteer's real work. Each person then builds their own from a starter written for their role, reads the first output critically, tightens it, and runs it again. Day two belongs to the team: one real process mapped end to end, the next three to five builds pulled out of it, and one named action for Monday.",
          "By the end of the second day, three things leave the room with the team:",
        ],
        bullets: [
          { bold: "A working agent", text: "built by each person on day one, from a starter written for their role" },
          { bold: "A map of one real process", text: "how it runs today and how it runs rebuilt, with the agent steps marked" },
          { bold: "An implementation queue", text: "the next three to five builds, with one named action for Monday" },
        ],
      },
      {
        heading: "Why this scales",
        paragraphs: [
          "The organizations getting a real return on AI share a starting point: a list of repetitive, time-consuming tasks, and a tool worked backward from each one. An awareness campaign never made that list.",
          "The question is the same whoever is in the room: what do you hate, and who do you wish could do it? People who name their own problem tend to own the solution.",
        ],
      },
      {
        heading: "One question tells a leader where the gap is",
        paragraphs: [
          "A team that can answer \"what do you hate\" but has nothing to show for \"what have you built to fix it\" has located its own gap.",
          "Spending on AI training is growing fast, and most of it is headed for platforms nobody finishes. The programs that return the money start with a real problem and end with a tool somebody uses the following week.",
          "The bridge still to be built runs between \"AI could probably help\" and \"here is the agent I built last Tuesday, and here is what it took off my plate.\"",
        ],
      },
    ],
    cta: {
      text: "Get a proposal for your team",
      href: "/contact",
    },
    relatedSlugs: ["stop-teaching-prompting", "ai-training-budget-line-item"],
  },
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insights.find((a) => a.slug === slug);
}

export function getRelatedInsights(slugs: string[]): InsightArticle[] {
  return slugs
    .map((s) => insights.find((a) => a.slug === s))
    .filter(Boolean) as InsightArticle[];
}
