import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stakeholder brief generator",
  robots: { index: false, follow: false },
};

export default function GeneratorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a2e]">
      {children}
    </div>
  );
}
