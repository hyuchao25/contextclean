import type { MetadataRoute } from "next";
import { pages, siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : page.path.includes("clean-") ? 0.8 : 0.3,
  }));
}