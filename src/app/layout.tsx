import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AdSenseScript from "./components/AdSenseScript";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { defaultDescription, siteUrl } from "./seo";

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
  title: {
    default: "ContextClean - AI Debugging Toolkit",
    template: "%s",
  },
  description: defaultDescription,
  applicationName: "ContextClean",
  category: "developer tools",
  creator: "ContextClean",
  publisher: "ContextClean",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ContextClean - AI Debugging Toolkit",
    description: defaultDescription,
    url: siteUrl,
    siteName: "ContextClean",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ContextClean - AI Debugging Toolkit",
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ContextClean",
    url: siteUrl,
    sameAs: ["https://github.com/hyuchao25/contextclean"],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <AdSenseScript />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <SiteHeader />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
