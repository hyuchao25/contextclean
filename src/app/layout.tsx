import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContextClean",
  description: "Clean logs and stack traces for AI tools.",
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