import type { Metadata } from "next";
import ElectriciansPageClient from "./ElectriciansPageClient";

export const metadata: Metadata = {
  title: "For Electricians — Better EV Charger Leads",
  description:
    "AmpReady organizes homeowner EV charger projects into quote-ready job packets. Get panel photos, wire run estimates, charger details, and project timing before the first call.",
  keywords: [
    "EV charger leads for electricians",
    "electrician lead generation",
    "EV charger installation leads",
    "qualified electrical leads",
    "electrician job packets",
    "EV charger contractor leads",
    "electrical contractor marketing",
    "EV charger installation jobs",
  ],
  openGraph: {
    title: "For Electricians — Better EV Charger Leads",
    description:
      "Quote-ready job packets with photos, details, and context. No shared leads. No monthly fees.",
    url: "https://ampready.com/electricians",
  },
  alternates: {
    canonical: "https://ampready.com/electricians",
  },
};

export default function ElectriciansPage() {
  return <ElectriciansPageClient />;
}
