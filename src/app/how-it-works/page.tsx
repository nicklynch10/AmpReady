import type { Metadata } from "next";
import HowItWorksClient from "./HowItWorksClient";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how AmpReady connects homeowners with electricians for EV charger installation. From photos to quote — see the process for both homeowners and electricians.",
  keywords: [
    "EV charger installation process",
    "how to install EV charger",
    "electrician quote process",
    "EV charger job packet",
    "homeowner electrician matching",
  ],
  openGraph: {
    title: "How AmpReady Works | AmpReady",
    description:
      "From photos to quote — see how AmpReady simplifies EV charger installation for homeowners and electricians.",
    url: "https://ampready.com/how-it-works",
  },
};

export default function HowItWorksPage() {
  return <HowItWorksClient />;
}
