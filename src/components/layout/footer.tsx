import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { GradientText } from "@/components/ui/gradient-text";

const footerLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Curriculum", href: "/#curriculum" },
  { label: "Enroll", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
          <Link href="/" className="flex items-center gap-2" aria-label="Unlock Intelligence home">
            <Logo size={24} />
            <span className="font-semibold text-sm tracking-tight">
              Unlock <GradientText>Intelligence</GradientText>
            </span>
          </Link>
          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-[#71717A] hover:text-[#FAFAFA] transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-white/[0.06] text-xs text-[#71717A]">
          <span>&copy; {new Date().getFullYear()} Unlock Intelligence. All rights reserved.</span>
          <span className="hidden md:inline">Built for humans. Powered by the future.</span>
          <a href="mailto:hello@unlockintelligence.co" className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors">
            hello@unlockintelligence.co
          </a>
        </div>
      </div>
    </footer>
  );
}
