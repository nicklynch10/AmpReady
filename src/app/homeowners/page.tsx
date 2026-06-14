import type { Metadata } from "next";
import HomeownersPageClient from "./HomeownersPageClient";

export const metadata: Metadata = {
  title: "For Homeowners — EV Charger Installation Quotes",
  description:
    "Get a real EV charger installation quote without the back-and-forth. Upload photos of your panel and parking area, answer a few questions, and get matched with qualified local electricians.",
  keywords: [
    "EV charger installation quote",
    "home EV charger cost",
    "Level 2 charger install",
    "EV charger electrician",
    "residential EV charging",
    "panel upgrade EV charger",
    "EV charger installation price",
    "EV charger permit",
  ],
  openGraph: {
    title: "For Homeowners — EV Charger Installation Quotes",
    description:
      "Get a real EV charger installation quote without the back-and-forth. Upload photos and get matched with qualified electricians.",
    url: "https://ampready.com/homeowners",
  },
  alternates: {
    canonical: "https://ampready.com/homeowners",
  },
};

export default function HomeownersPage() {
  return <HomeownersPageClient />;
}
