import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ampready.com";

  const staticRoutes = [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/homeowners`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/electricians`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/how-it-works`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/contact`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/get-started`, priority: 0.9, changeFrequency: "weekly" as const },
  ];

  const blogPosts = [
    "how-much-does-ev-charger-installation-cost",
    "do-i-need-a-panel-upgrade",
    "level-1-vs-level-2-vs-level-3-charging",
    "how-to-prepare-for-ev-charger-installation",
    "ev-charger-installation-leads-guide",
    "understanding-ev-charger-permits-and-inspections",
  ];

  const blogRoutes = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: new Date("2026-06-14"),
  }));

  return [...staticRoutes, ...blogRoutes];
}
