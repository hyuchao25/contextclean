"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { pages } from "../seo";

const nonAdPaths = new Set([
  "/about",
  "/community",
  "/contact",
  "/privacy",
  "/terms",
]);
const eligiblePaths = new Set(
  pages.map((page) => page.path).filter((path) => !nonAdPaths.has(path)),
);

export default function AdSenseScript() {
  const pathname = usePathname();

  if (!eligiblePaths.has(pathname)) return null;

  return (
    <Script
      id="contextclean-adsense"
      async
      strategy="afterInteractive"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6232467855116032"
      crossOrigin="anonymous"
    />
  );
}
