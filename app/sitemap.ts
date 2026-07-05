import type { MetadataRoute } from "next";

const SITE = "https://cyclesyncedlifting.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${SITE}/blog/best-workout-tracker-for-women`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}/blog/cycle-syncing-workout-plan`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}/blog/lifting-on-your-period`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/blog/what-is-a-power-window`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${SITE}/support`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
