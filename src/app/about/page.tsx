import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AmpReady's mission to simplify residential electrification. Built for the electrification wave — connecting homeowners with electricians for EV charger installation.",
  keywords: [
    "about AmpReady",
    "EV charger company",
    "residential electrification",
    "EV charging startup",
    "electrician marketplace",
  ],
  openGraph: {
    title: "About AmpReady | AmpReady",
    description:
      "Built for the electrification wave. Learn why we started AmpReady and where we're headed.",
    url: "https://ampready.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
