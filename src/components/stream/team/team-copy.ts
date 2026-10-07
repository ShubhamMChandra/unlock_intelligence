/**
 * What: The two people behind the program: names, roles, photos and the verified bios.
 * Why: One source for the strip's strands and the bios below it, so the two never disagree.
 * How: Plain data. The paragraphs are the verified bios from the original team page, with only
 *      light fixes (punctuation, "Design, Build, Launch", "hedge funds"); nothing is added.
 * Deps: None.
 */

export interface TeamPerson {
  id: string;
  name: string;
  first: string;
  role: string;
  image: string;
  imagePosition: string;
  paragraphs: string[];
  degree: string;
}

export const TEAM: TeamPerson[] = [
  {
    id: "shubham-chandra",
    name: "Shubham Chandra",
    first: "Shubham",
    role: "Head of Curriculum",
    image: "/images/team/team-member-2.jpg",
    imagePosition: "center 18%",
    paragraphs: [
      "Shubham teaches AI-driven entrepreneurship at the University of Chicago’s Graduate Computer Science department, in Design, Build, Launch, a course that covers AI theory and its use in real businesses. His students learn about AI as they build functioning prototypes and deploy them before the quarter ends.",
      "By day, he builds AI automation systems at Digital Realty, one of the largest data center operators in the world. He builds the same kind of workflows he teaches in this program: automated data pipelines and AI-powered decision support tools for enterprise teams. He also advises hedge funds and start-ups on their AI strategies.",
      "This dual role, an operator and educator, is what shapes the Unlock Intelligence curriculum. Every module is built from systems Shubham has shipped in production. When your team learns to build an AI workflow, it is based on one he has shipped in production.",
    ],
    degree: "Shubham holds a degree in Economics and an MS in Computer Science from the University of Chicago.",
  },
  {
    id: "jt-oconnor",
    name: "J.T. O’Connor",
    first: "J.T.",
    role: "Program Director",
    image: "/images/team/team-member-1.JPEG",
    imagePosition: "center 22%",
    paragraphs: [
      "J.T. is your main point of contact from the first conversation through program delivery and beyond. With a background in operations and business development, he ensures that every cohort runs smoothly, from scheduling and logistics to post-program follow-up. He has worked with organizations from 20-person businesses to Fortune 500 companies, so your team is in good hands.",
      "J.T. has hands-on experience building AI-powered marketing and outreach systems, which means he understands the material and can help connect the curriculum to your team’s actual workflows. When you have a question between sessions or need help applying a concept to your specific context, he’s the person who picks up the phone.",
      "His operational focus means you spend your time learning, not dealing with logistics. Enrollment, onboarding, technical setup, session coordination: J.T. handles all of it, so your team only has to show up.",
    ],
    degree: "J.T. holds a degree in Political Science from the University of Chicago.",
  },
];
