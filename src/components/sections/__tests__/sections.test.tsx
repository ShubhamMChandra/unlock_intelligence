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

// ─── Hero ─────────────────────────────────────────
describe("Hero", () => {
  it("renders cohort pill text", () => {
    render(<Hero />);
    expect(screen.getByText(/Cohort 5/)).toBeInTheDocument();
    expect(screen.getByText(/Now Enrolling/)).toBeInTheDocument();
  });

  it("renders all headline words", () => {
    render(<Hero />);
    expect(screen.getByText("Become")).toBeInTheDocument();
    expect(screen.getByText("Needed.")).toBeInTheDocument();
  });

  it("renders subtitle text", () => {
    render(<Hero />);
    expect(screen.getByText(/Two focused sessions/)).toBeInTheDocument();
    expect(screen.getByText(/without writing a single line of code/)).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByText(/Join the Next Cohort/)).toBeInTheDocument();
    expect(screen.getByText(/See the Curriculum/)).toBeInTheDocument();
  });

  it("renders trust indicators", () => {
    render(<Hero />);
    expect(screen.getByText("No technical background needed")).toBeInTheDocument();
    expect(screen.getByText("Certificate of completion")).toBeInTheDocument();
    expect(screen.getByText("Lifetime resource access")).toBeInTheDocument();
  });
});

// ─── ProofBar ─────────────────────────────────────
describe("ProofBar", () => {
  it("renders all roles", () => {
    render(<ProofBar />);
    expect(screen.getByText("VP Marketing")).toBeInTheDocument();
    expect(screen.getByText("HR Directors")).toBeInTheDocument();
    expect(screen.getByText("Project Managers")).toBeInTheDocument();
    expect(screen.getByText("Senior Consultants")).toBeInTheDocument();
    expect(screen.getByText("Operations Leads")).toBeInTheDocument();
    expect(screen.getByText("C-Suite Executives")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(<ProofBar />);
    expect(screen.getByText(/Built for professionals from/)).toBeInTheDocument();
  });
});

// ─── Problem ──────────────────────────────────────
describe("Problem", () => {
  it("renders section heading", () => {
    render(<Problem />);
    expect(screen.getByText(/Everyone.s talking about AI/)).toBeInTheDocument();
  });

  it("renders label", () => {
    render(<Problem />);
    expect(screen.getByText("// the-reality")).toBeInTheDocument();
    expect(screen.getByText("The Reality")).toBeInTheDocument();
  });

  it("renders negative checklist items", () => {
    render(<Problem />);
    expect(screen.getByText("Used ChatGPT a few times, unsure why")).toBeInTheDocument();
    expect(screen.getByText("No system, no strategy, no confidence")).toBeInTheDocument();
  });

  it("renders blockquote", () => {
    render(<Problem />);
    expect(screen.getByText(/You don.t need to become an engineer/)).toBeInTheDocument();
    expect(screen.getByText("dangerous")).toBeInTheDocument();
  });
});

// ─── HowItWorks ───────────────────────────────────
describe("HowItWorks", () => {
  it("renders section header", () => {
    render(<HowItWorks />);
    expect(screen.getByText("Eight Hours to Authority.")).toBeInTheDocument();
    expect(screen.getByText("// the-program")).toBeInTheDocument();
  });

  it("renders session cards", () => {
    render(<HowItWorks />);
    expect(screen.getByText("Foundation & Fluency")).toBeInTheDocument();
    expect(screen.getByText("Strategy & Mastery")).toBeInTheDocument();
  });

  it("renders deliverables", () => {
    render(<HowItWorks />);
    expect(screen.getByText("Prompt playbook tailored to your role")).toBeInTheDocument();
    expect(screen.getByText("Workflow map for your specific job")).toBeInTheDocument();
  });

  it("renders outcome card", () => {
    render(<HowItWorks />);
    expect(screen.getByText("Your AI Authority Profile")).toBeInTheDocument();
    expect(screen.getByText("The AI expert your company relies on")).toBeInTheDocument();
  });
});

// ─── Curriculum ───────────────────────────────────
describe("Curriculum", () => {
  it("renders section header", () => {
    render(<Curriculum />);
    expect(screen.getByText("// curriculum")).toBeInTheDocument();
    expect(screen.getByText(/What You.ll Actually Learn/)).toBeInTheDocument();
  });

  it("renders all 8 module titles", () => {
    render(<Curriculum />);
    expect(screen.getByText("How AI Actually Works (Without the Math)")).toBeInTheDocument();
    expect(screen.getByText("The Prompt Engineering Discipline")).toBeInTheDocument();
    expect(screen.getByText("Your AI Toolkit")).toBeInTheDocument();
    expect(screen.getByText("Building Your First AI Workflow")).toBeInTheDocument();
    expect(screen.getByText("AI Strategy for Your Role")).toBeInTheDocument();
    expect(screen.getByText(/Advanced Prompting/)).toBeInTheDocument();
    expect(screen.getByText("Leading AI Adoption")).toBeInTheDocument();
    expect(screen.getByText("Your Personal AI Authority Plan")).toBeInTheDocument();
  });

  it("renders session titles", () => {
    render(<Curriculum />);
    expect(screen.getByText(/Session One/)).toBeInTheDocument();
    expect(screen.getByText(/Session Two/)).toBeInTheDocument();
  });
});

// ─── Who ──────────────────────────────────────────
describe("Who", () => {
  it("renders section header", () => {
    render(<Who />);
    expect(screen.getByText("// who-its-for")).toBeInTheDocument();
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
    expect(screen.getByText("// why-us")).toBeInTheDocument();
    expect(screen.getByText("Built Different. On Purpose.")).toBeInTheDocument();
  });

  it("renders all three cards", () => {
    render(<Why />);
    expect(screen.getByText("Live, Not Recorded")).toBeInTheDocument();
    expect(screen.getByText("Outcomes, Not Theory")).toBeInTheDocument();
    expect(screen.getByText("8 Hours, Not 8 Weeks")).toBeInTheDocument();
  });

  it("renders card descriptions", () => {
    render(<Why />);
    expect(screen.getByText(/cohort-based experience/)).toBeInTheDocument();
    expect(screen.getByText(/prompt playbook, a workflow map/)).toBeInTheDocument();
    expect(screen.getByText(/From zero to authority in a single weekend/)).toBeInTheDocument();
  });
});

// ─── Team ────────────────────────────────────────
describe("Team", () => {
  it("renders section header", () => {
    render(<Team />);
    expect(screen.getByText("// your-instructors")).toBeInTheDocument();
    expect(screen.getByText("Built by Practitioners")).toBeInTheDocument();
  });

  it("renders Shubham Chandra card", () => {
    render(<Team />);
    expect(screen.getByText("Shubham Chandra")).toBeInTheDocument();
    expect(screen.getByText("Head of Curriculum")).toBeInTheDocument();
    expect(screen.getByText(/Digital Realty/)).toBeInTheDocument();
    expect(screen.getByText(/University of Chicago/)).toBeInTheDocument();
  });

  it("renders JT O'Connor card", () => {
    render(<Team />);
    expect(screen.getByText(/J\.T\. O.Connor/)).toBeInTheDocument();
    expect(screen.getByText("Head of Partnerships")).toBeInTheDocument();
    expect(screen.getByText(/public equities and real estate/)).toBeInTheDocument();
  });

  it("renders coming soon placeholder", () => {
    render(<Team />);
    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
  });

  it("renders team member images", () => {
    render(<Team />);
    expect(screen.getByAltText("Shubham Chandra")).toBeInTheDocument();
    expect(screen.getByAltText(/J\.T\. O.Connor/)).toBeInTheDocument();
  });
});

// ─── Enroll ──────────────────────────────────────
describe("Enroll", () => {
  it("renders section header", () => {
    render(<Enroll />);
    expect(screen.getByText("// enroll")).toBeInTheDocument();
    expect(screen.getByText("One Decision That Pays for Itself")).toBeInTheDocument();
  });

  it("renders Professional Seat card", () => {
    render(<Enroll />);
    expect(screen.getByText("Professional Seat")).toBeInTheDocument();
    expect(screen.getByText("For Individuals")).toBeInTheDocument();
    expect(screen.getByText("Both live sessions (8 hours total)")).toBeInTheDocument();
    expect(screen.getByText("Certificate of completion")).toBeInTheDocument();
  });

  it("renders Corporate License card", () => {
    render(<Enroll />);
    expect(screen.getByText("Corporate License")).toBeInTheDocument();
    expect(screen.getByText("For Teams")).toBeInTheDocument();
    expect(screen.getByText("5+ seats, custom scheduling")).toBeInTheDocument();
    expect(screen.getByText(/Volume pricing/)).toBeInTheDocument();
  });

  it("renders CTA buttons with correct links", () => {
    render(<Enroll />);
    const reserveBtn = screen.getByText(/Reserve Your Seat/);
    expect(reserveBtn.closest("a")).toHaveAttribute("href", "/contact");
    const contactBtn = screen.getByText(/Contact Us/);
    expect(contactBtn.closest("a")).toHaveAttribute("href", "/contact?type=corporate");
  });

  it("renders money-back guarantee", () => {
    render(<Enroll />);
    expect(screen.getByText(/refund you. No questions, no forms, no friction/)).toBeInTheDocument();
  });
});

// ─── FAQ ─────────────────────────────────────────
describe("FAQ", () => {
  it("renders section header", () => {
    render(<FAQ />);
    expect(screen.getByText("// faq")).toBeInTheDocument();
    expect(screen.getByText("Common Questions")).toBeInTheDocument();
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
    expect(screen.getByText(/AI era isn.t coming/)).toBeInTheDocument();
    expect(screen.getByText(/already here/)).toBeInTheDocument();
  });

  it("renders subtitle", () => {
    render(<FinalCTA />);
    expect(screen.getByText(/whether AI will change your field/)).toBeInTheDocument();
    expect(screen.getByText(/you.ll be the one who shapes/)).toBeInTheDocument();
  });

  it("renders CTA button linking to contact", () => {
    render(<FinalCTA />);
    const cta = screen.getByText(/Join the Next Cohort/);
    expect(cta.closest("a")).toHaveAttribute("href", "/contact");
  });

  it("renders metadata line", () => {
    render(<FinalCTA />);
    expect(screen.getByText("Next cohort: April 2026")).toBeInTheDocument();
    expect(screen.getByText("Limited seats available")).toBeInTheDocument();
    expect(screen.getByText("No technical background required")).toBeInTheDocument();
  });
});
