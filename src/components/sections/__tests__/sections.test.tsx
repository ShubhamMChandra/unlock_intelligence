import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

// Mock framer-motion to render plain divs/spans
vi.mock("framer-motion", () => {
  const React = require("react");
  const actual = {
    motion: new Proxy(
      {},
      {
        get: (_target: unknown, prop: string) => {
          return React.forwardRef((props: Record<string, unknown>, ref: unknown) => {
            const {
              initial: _initial,
              animate: _animate,
              exit: _exit,
              variants: _variants,
              whileInView: _whileInView,
              viewport: _viewport,
              transition: _transition,
              style,
              ...rest
            } = props;
            return React.createElement(prop, { ...rest, style, ref });
          });
        },
      }
    ),
    useScroll: () => ({ scrollY: { get: () => 0, onChange: () => () => {} } }),
    useTransform: () => 0,
    useReducedMotion: () => true,
    AnimatePresence: ({ children }: { children: unknown }) => children,
  };
  return actual;
});

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => {
    const React = require("react");
    return React.createElement("a", { href, ...props }, children);
  },
}));

// Mock @base-ui/react/accordion for Curriculum tests
vi.mock("@base-ui/react/accordion", () => {
  const React = require("react");
  const Accordion = {
    Root: React.forwardRef(({ children, className, ...props }: Record<string, unknown>, ref: unknown) =>
      React.createElement("div", { className, ref, ...props }, children)
    ),
    Item: React.forwardRef(({ children, className, ...props }: Record<string, unknown>, ref: unknown) =>
      React.createElement("div", { className, ref, ...props }, children)
    ),
    Header: ({ children, ...props }: Record<string, unknown>) =>
      React.createElement("div", props, children),
    Trigger: React.forwardRef(({ children, className, ...props }: Record<string, unknown>, ref: unknown) =>
      React.createElement("button", { className, ref, ...props }, children)
    ),
    Panel: React.forwardRef(({ children, className, ...props }: Record<string, unknown>, ref: unknown) =>
      React.createElement("div", { className, ref, ...props }, children)
    ),
  };
  return { Accordion };
});

// Mock @base-ui/react/button
vi.mock("@base-ui/react/button", () => {
  const React = require("react");
  const Button = React.forwardRef(
    ({ children, className, render, ...props }: Record<string, unknown>, ref: unknown) => {
      if (render && React.isValidElement(render)) {
        return React.cloneElement(render as React.ReactElement, { className, ref, ...props }, children);
      }
      return React.createElement("button", { className, ref, ...props }, children);
    }
  );
  return { Button };
});

// Mock next/image
vi.mock("next/image", () => ({
  default: ({ src, alt, fill, ...props }: Record<string, unknown>) => {
    const React = require("react");
    return React.createElement("img", { src, alt, ...props });
  },
}));

import { Hero } from "../hero";
import { ProofBar } from "../proof-bar";
import { Problem } from "../problem";
import { HowItWorks } from "../how-it-works";
import { Curriculum } from "../curriculum";
import { Who } from "../who";
import { Why } from "../why";
import { Team } from "../team";
import { Enroll } from "../enroll";
import { FAQ } from "../faq";
import { FinalCTA } from "../final-cta";
import { EightHours } from "../eight-hours";
import { ProcessMatrix } from "../process-matrix";
import { fireEvent } from "@testing-library/react";

// ─── Hero ─────────────────────────────────────────
describe("Hero", () => {
  it("renders cohort line with seats open", () => {
    render(<Hero />);
    expect(screen.getByText(/Founding cohort, 7 of 10 seats open/)).toBeInTheDocument();
  });

  it("renders all headline words", () => {
    render(<Hero />);
    expect(screen.getByText(/Make your team/i)).toBeInTheDocument();
    expect(screen.getByText(/AI\u2011fluent/)).toBeInTheDocument();
  });

  it("renders subtitle text", () => {
    render(<Hero />);
    expect(screen.getByText(/Two live half-day sessions/)).toBeInTheDocument();
    expect(screen.getByText(/No coding required/)).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByText(/Request a proposal/).closest("a")).toHaveAttribute("href", "/contact");
    expect(screen.getByText(/See the eight hours/).closest("a")).toHaveAttribute("href", "#how-it-works");
  });

  it("renders instructor trust line", () => {
    render(<Hero />);
    expect(screen.getByText(/Taught by a University of Chicago instructor/)).toBeInTheDocument();
  });
});

// ─── ProofBar ─────────────────────────────────────
describe("ProofBar", () => {
  it("renders proof points", () => {
    render(<ProofBar />);
    expect(screen.getByText("University of Chicago")).toBeInTheDocument();
    expect(screen.getByText("8 hours")).toBeInTheDocument();
    expect(screen.getByText("3 deliverables")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(<ProofBar />);
    expect(screen.getByText(/Our team teaches at the University of Chicago/)).toBeInTheDocument();
  });
});

// ─── Problem ──────────────────────────────────────
describe("Problem", () => {
  it("renders section heading", () => {
    render(<Problem />);
    expect(screen.getByText(/AI skills gap is already/)).toBeInTheDocument();
  });

  it("renders negative checklist items", () => {
    render(<Problem />);
    expect(screen.getByText(/Teams experimenting with AI individually/)).toBeInTheDocument();
    expect(screen.getByText(/No standard for judging/)).toBeInTheDocument();
  });

  it("renders ROI framing", () => {
    render(<Problem />);
    expect(screen.getByText(/2.5 hours\/week/)).toBeInTheDocument();
    expect(screen.getByText(/\$9,750/)).toBeInTheDocument();
    expect(screen.getByText(/What inaction costs/)).toBeInTheDocument();
  });
});

// ─── HowItWorks ───────────────────────────────────
describe("HowItWorks", () => {
  it("renders section header", () => {
    render(<HowItWorks />);
    expect(screen.getByText(/Two half-days\. Two builds\. A queue for Monday/)).toBeInTheDocument();
    expect(screen.getByText("The Program")).toBeInTheDocument();
  });

  it("renders day cards", () => {
    render(<HowItWorks />);
    expect(screen.getByText("Personal unlock")).toBeInTheDocument();
    expect(screen.getByText(/process you.ve been postponing/)).toBeInTheDocument();
    expect(screen.getByText("Theory through doing")).toBeInTheDocument();
  });

  it("renders day tags", () => {
    render(<HowItWorks />);
    expect(screen.getByText(/Day 1/)).toBeInTheDocument();
    expect(screen.getByText(/Day 2/)).toBeInTheDocument();
  });

  it("renders walks-out-with deliverables", () => {
    render(<HowItWorks />);
    expect(screen.getByText("A working Watchtower")).toBeInTheDocument();
    expect(screen.getByText(/horizontal map and an implementation queue/)).toBeInTheDocument();
  });
});

// ─── Curriculum ───────────────────────────────────
describe("Curriculum", () => {
  it("renders section header", () => {
    render(<Curriculum />);
    expect(screen.getByText("Curriculum")).toBeInTheDocument();
    expect(screen.getByText(/What happens in the room/)).toBeInTheDocument();
    expect(screen.getByText(/Two half-days/)).toBeInTheDocument();
  });

  it("renders day labels and titles", () => {
    render(<Curriculum />);
    expect(screen.getByText("Day 1")).toBeInTheDocument();
    expect(screen.getByText("Day 2")).toBeInTheDocument();
    expect(screen.getByText("Personal unlock")).toBeInTheDocument();
    expect(screen.getByText("Scaffolding through application")).toBeInTheDocument();
  });

  it("renders Day 1 beats", () => {
    render(<Curriculum />);
    expect(screen.getByText("Live demo on real data")).toBeInTheDocument();
    expect(screen.getByText("The matrix, filled live")).toBeInTheDocument();
    expect(screen.getByText(/Personalized build/)).toBeInTheDocument();
    expect(screen.getByText(/Second pass/)).toBeInTheDocument();
    expect(screen.getByText(/Structured share/)).toBeInTheDocument();
  });

  it("renders Day 2 beats", () => {
    render(<Curriculum />);
    expect(screen.getByText(/Pick the process/)).toBeInTheDocument();
    expect(screen.getByText("Map the process across the matrix")).toBeInTheDocument();
    expect(screen.getByText(/Extract the next three to five builds/)).toBeInTheDocument();
    expect(screen.getByText(/Pair pressure-test/)).toBeInTheDocument();
    expect(screen.getByText(/one named action for Monday/)).toBeInTheDocument();
  });

  it("renders the walkthrough CTA", () => {
    render(<Curriculum />);
    expect(screen.getByText(/Request a curriculum walkthrough/)).toBeInTheDocument();
  });
});

// ─── Who ──────────────────────────────────────────
describe("Who", () => {
  it("renders section header", () => {
    render(<Who />);
    expect(screen.getByText(/Who It.s For/)).toBeInTheDocument();
    expect(screen.getByText(/This Is Built for You If/)).toBeInTheDocument();
  });

  it("renders yes items", () => {
    render(<Who />);
    expect(screen.getByText(/non-technical role and feel left behind/)).toBeInTheDocument();
    expect(screen.getByText(/practical skills, not theoretical overviews/)).toBeInTheDocument();
  });

  it("renders no items", () => {
    render(<Who />);
    expect(screen.getByText(/already an AI engineer or developer/)).toBeInTheDocument();
    expect(screen.getByText(/AI is a fad/)).toBeInTheDocument();
  });

  it("renders card titles", () => {
    render(<Who />);
    expect(screen.getByText(/in the right place/)).toBeInTheDocument();
    expect(screen.getByText(/isn.t for you if/)).toBeInTheDocument();
  });
});

// ─── Why ─────────────────────────────────────────
describe("Why", () => {
  it("renders section header", () => {
    render(<Why />);
    expect(screen.getByText("Why This Program")).toBeInTheDocument();
    expect(screen.getByText("Why this program works")).toBeInTheDocument();
  });

  it("renders all three cards", () => {
    render(<Why />);
    expect(screen.getByText("Live, Not Recorded")).toBeInTheDocument();
    expect(screen.getByText("Outcomes, Not Theory")).toBeInTheDocument();
    expect(screen.getByText("8 Hours, Not 8 Weeks")).toBeInTheDocument();
  });

  it("renders card descriptions", () => {
    render(<Why />);
    expect(screen.getByText(/instructor-led with real-time Q&A/)).toBeInTheDocument();
    expect(screen.getByText(/documents they.ll use Monday morning/)).toBeInTheDocument();
    expect(screen.getByText(/Two half-day sessions/)).toBeInTheDocument();
  });
});

// ─── Team ────────────────────────────────────────
describe("Team", () => {
  it("renders section header and credentials", () => {
    render(<Team />);
    expect(screen.getByText("Who teaches it")).toBeInTheDocument();
    expect(screen.getByText(/Digital Realty and Garner Health/)).toBeInTheDocument();
  });

  it("renders Shubham Chandra", () => {
    render(<Team />);
    expect(screen.getByText("Shubham Chandra")).toBeInTheDocument();
    expect(screen.getByText("Head of Curriculum")).toBeInTheDocument();
    expect(screen.getByText(/Teaches AI-driven entrepreneurship at the University of Chicago/)).toBeInTheDocument();
  });

  it("renders JT O'Connor", () => {
    render(<Team />);
    expect(screen.getByText(/J\.T\. O.Connor/)).toBeInTheDocument();
    expect(screen.getByText("Program Director")).toBeInTheDocument();
    expect(screen.getByText(/operations and business development/)).toBeInTheDocument();
  });

  it("renders team member images", () => {
    render(<Team />);
    expect(screen.getByAltText("Shubham Chandra")).toBeInTheDocument();
    expect(screen.getByAltText(/J\.T\. O.Connor/)).toBeInTheDocument();
  });

  it("links to the team page", () => {
    render(<Team />);
    expect(screen.getByText("Meet the full team").closest("a")).toHaveAttribute("href", "/team");
  });
});

// ─── Enroll ──────────────────────────────────────
describe("Enroll", () => {
  it("renders section header", () => {
    render(<Enroll />);
    expect(screen.getByText("Founding cohort pricing")).toBeInTheDocument();
  });

  it("renders seats open", () => {
    render(<Enroll />);
    expect(screen.getByText("7 of 10 seats open")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "7 of 10 founding seats open" })).toBeInTheDocument();
  });

  it("renders Team Training plan", () => {
    render(<Enroll />);
    expect(screen.getByText("Team Training")).toBeInTheDocument();
    expect(screen.getByText("$1,095")).toBeInTheDocument();
    expect(screen.getByText(/per seat, then \$1,595/)).toBeInTheDocument();
    expect(screen.getByText(/Volume pricing/)).toBeInTheDocument();
  });

  it("renders Individual Enrollment plan", () => {
    render(<Enroll />);
    expect(screen.getByText("Individual Enrollment")).toBeInTheDocument();
    expect(screen.getByText("$1,295")).toBeInTheDocument();
    expect(screen.getByText(/per person, then \$1,995/)).toBeInTheDocument();
  });

  it("renders CTA buttons with correct links", () => {
    render(<Enroll />);
    const proposalBtn = screen.getByText(/Request a proposal/);
    expect(proposalBtn.closest("a")).toHaveAttribute("href", "/contact?type=corporate");
    const startedBtn = screen.getByText(/Get started/);
    expect(startedBtn.closest("a")).toHaveAttribute("href", "/contact");
  });

  it("renders guarantee and cost framing", () => {
    render(<Enroll />);
    expect(screen.getByText(/refund you. No/)).toBeInTheDocument();
    expect(screen.getByText(/\$9,750 per person per year/)).toBeInTheDocument();
  });
});

// ─── FAQ ─────────────────────────────────────────
describe("FAQ", () => {
  it("renders section header", () => {
    render(<FAQ />);
    expect(screen.getByText("FAQ")).toBeInTheDocument();
    expect(screen.getByText("Common questions")).toBeInTheDocument();
  });

  it("renders all 6 questions", () => {
    render(<FAQ />);
    expect(screen.getByText("Do I need any technical background?")).toBeInTheDocument();
    expect(screen.getByText("Is this online or in-person?")).toBeInTheDocument();
    expect(screen.getByText("What if I miss a session?")).toBeInTheDocument();
    expect(screen.getByText(/different from watching YouTube tutorials/)).toBeInTheDocument();
    expect(screen.getByText(/Will AI replace my job/)).toBeInTheDocument();
    expect(screen.getByText(/corporate or team option/)).toBeInTheDocument();
  });

  it("renders answer content", () => {
    render(<FAQ />);
    expect(screen.getByText(/None. Zero./)).toBeInTheDocument();
    expect(screen.getByText(/Both options are available/)).toBeInTheDocument();
    expect(screen.getByText(/Sessions are recorded in full/)).toBeInTheDocument();
  });

  it("renders corporate FAQ with link", () => {
    render(<FAQ />);
    const link = screen.getByText("Reach out directly");
    expect(link.closest("a")).toHaveAttribute("href", "/contact?type=corporate");
  });
});

// ─── FinalCTA ────────────────────────────────────
describe("FinalCTA", () => {
  it("renders heading", () => {
    render(<FinalCTA />);
    expect(screen.getByText(/companies investing in AI fluency now will lead\./)).toBeInTheDocument();
  });

  it("renders supporting line", () => {
    render(<FinalCTA />);
    expect(screen.getByText(/proposal within one business/)).toBeInTheDocument();
  });

  it("renders CTA button linking to contact", () => {
    render(<FinalCTA />);
    const cta = screen.getByText(/Request a proposal/);
    expect(cta.closest("a")).toHaveAttribute("href", "/contact");
  });
});

// ─── EightHours ──────────────────────────────────
describe("EightHours", () => {
  it("renders heading and both sessions", () => {
    render(<EightHours />);
    expect(screen.getByText("What happens in the eight hours.")).toBeInTheDocument();
    expect(screen.getByText("Day 1: Personal unlock")).toBeInTheDocument();
    expect(screen.getByText("Day 2: Scaffolding through application")).toBeInTheDocument();
  });

  it("renders all ten beats", () => {
    render(<EightHours />);
    expect(screen.getAllByRole("listitem")).toHaveLength(10);
    expect(screen.getByText("Live demo on real data")).toBeInTheDocument();
    expect(screen.getByText("One named action for Monday")).toBeInTheDocument();
  });

  it("renders the three artifacts", () => {
    render(<EightHours />);
    expect(screen.getByText("A working Watchtower")).toBeInTheDocument();
    expect(screen.getByText("A horizontal process map")).toBeInTheDocument();
    expect(screen.getByText("An implementation queue")).toBeInTheDocument();
  });

  it("exposes the length comparison to screen readers", () => {
    render(<EightHours />);
    expect(screen.getByRole("img", { name: /this program 8 hours/ })).toBeInTheDocument();
  });

  it("anchors how-it-works and curriculum links", () => {
    const { container } = render(<EightHours />);
    expect(container.querySelector("#how-it-works")).not.toBeNull();
    expect(container.querySelector("#curriculum")).not.toBeNull();
  });
});

// ─── ProcessMatrix ───────────────────────────────
describe("ProcessMatrix", () => {
  it("shows HR onboarding by default", () => {
    render(<ProcessMatrix />);
    expect(screen.getByRole("heading", { name: "New-hire onboarding" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "HR" })).toHaveAttribute("aria-pressed", "true");
  });

  it("switches process when a tab is pressed", () => {
    render(<ProcessMatrix />);
    fireEvent.click(screen.getByRole("button", { name: "Finance" }));
    expect(screen.getByRole("heading", { name: "Month-end close" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Finance" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "HR" })).toHaveAttribute("aria-pressed", "false");
  });

  it("counts AI insertion points for the active process", () => {
    render(<ProcessMatrix />);
    fireEvent.click(screen.getByRole("button", { name: "Marketing" }));
    expect(screen.getByText(/3 AI insertion points, 2 steps stay human/)).toBeInTheDocument();
  });
});
