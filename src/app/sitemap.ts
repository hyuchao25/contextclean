import type { MetadataRoute } from "next";
import { pages, siteUrl } from "./seo";

function getPriority(path: string) {
  if (path === "/") return 1;
  if (path === "/resources" || path === "/all-guides" || path === "/solutions") {
    return 0.9;
  }
  if (path.includes("clean-")) return 0.8;
  if (
    path.includes("case-study") ||
    path.includes("workflow") ||
    path.includes("examples") ||
    path.includes("debug-")
  ) {
    return 0.7;
  }
  if (["/about", "/contact", "/privacy", "/terms"].includes(path)) return 0.4;
  return 0.6;
}

function getChangeFrequency(path: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (
    path === "/" ||
    path === "/resources" ||
    path === "/all-guides" ||
    path === "/solutions"
  ) {
    return "weekly";
  }
  if (["/about", "/contact", "/privacy", "/terms"].includes(path)) {
    return "yearly";
  }
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: getChangeFrequency(page.path),
    priority: getPriority(page.path),
  }));
}
