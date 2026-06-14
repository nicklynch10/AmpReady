import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog — EV Charger Installation Guides & Resources",
  description: "Practical advice for homeowners and electricians on EV charger installation, costs, panel upgrades, and permits.",
  keywords: ["EV charger blog", "EV charger installation guide", "Level 2 charger", "panel upgrade", "EV charging costs"],
  openGraph: {
    title: "Blog — EV Charger Installation Guides & Resources",
    description: "Practical advice for homeowners and electricians.",
    url: "https://ampready.com/blog",
  },
  alternates: {
    canonical: "https://ampready.com/blog",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
