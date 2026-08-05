import type { MetadataRoute } from "next";
import { publishedPosts } from "./blog/posts";

// `sitemap.ts` is a Route Handler that Next caches at build time unless the
// route opts into dynamic config. `revalidate` alone left it frozen at the
// build's idea of "today", so scheduled posts went live on the site but never
// entered the sitemap. Rendering per request keeps the two in step; the file is
// a dozen URLs, so the cost is nil.
export const dynamic = "force-dynamic";

const SITE = "https://cyclesyncedlifting.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const posts: MetadataRoute.Sitemap = publishedPosts(now).map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    // Real publish/update date, not "now" — a sitemap that claims every page
    // changed today teaches crawlers to ignore the field.
    lastModified: new Date(`${p.updated ?? p.date}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: p.priority,
  }));

  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...posts,
    { url: `${SITE}/support`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
