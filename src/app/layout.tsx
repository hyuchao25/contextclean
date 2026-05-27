import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteUrl } from "./seo";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ContextClean - Clean Logs & Stack Traces for AI",
  description:
    "Clean noisy logs and stack traces before sending them to ChatGPT, Claude, Cursor, Codex, or other AI coding tools.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ContextClean - Clean Logs & Stack Traces for AI",
    description:
      "Clean noisy logs and stack traces before sending them to AI coding tools.",
    url: siteUrl,
    siteName: "ContextClean",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ContextClean - Clean Logs & Stack Traces for AI",
    description:
      "Clean noisy logs and stack traces before sending them to AI coding tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6232467855116032"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
