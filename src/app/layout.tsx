import type { Metadata, Viewport } from "next";
import { Archivo, Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// The marketing site's two voices: Archivo (with its width axis) for headings and UI, Source Serif for reading
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Unlock Intelligence | From handoffs to flow, in two days",
    template: "%s | Unlock Intelligence",
  },
  description:
    "A live, two-day AI program for working teams, taught by University of Chicago alumni. Bring one real process and rebuild it with agents.",
  metadataBase: new URL("https://unlockintelligencehq.com"),
  openGraph: {
    title: "Unlock Intelligence | From handoffs to flow, in two days",
    description: "A live, two-day AI program for working teams. Bring one real process and rebuild it with agents.",
    type: "website",
    url: "https://unlockintelligencehq.com",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Unlock Intelligence: from handoffs to flow, in two days",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unlock Intelligence | From handoffs to flow, in two days",
    description: "A live, two-day AI program for working teams. Bring one real process and rebuild it with agents.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${archivo.variable} ${sourceSerif.variable} antialiased`}>
      <body className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
