/**
 * What: Shell for every public page: the Stream world's ground, type, header and footer.
 * Why: One consistent design flow across the homepage and inner pages.
 * How: Paints the dark ground and Archivo type, then frames the page.
 * Deps: StreamHeader, StreamFooter.
 */
import { StreamHeader } from "@/components/stream/stream-header";
import { StreamFooter } from "@/components/stream/stream-footer";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen [--hdr:88px] md:[--hdr:60px] bg-ground font-stream text-[15px] leading-normal text-ink [color-scheme:dark] selection:bg-ink/20 [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-[3px] [&_:focus-visible]:outline-ink">
      <StreamHeader />
      {children}
      <StreamFooter />
    </div>
  );
}
