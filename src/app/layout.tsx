import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContextClean - Clean Logs & Stack Traces for AI",
  description:
    "Clean noisy logs and stack traces before sending them to ChatGPT, Claude, Cursor, Codex, or other AI coding tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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