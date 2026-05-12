import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}