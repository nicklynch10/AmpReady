import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AmpReady. Whether you're a homeowner with questions, an electrician interested in joining, or a partner looking to collaborate, we'd love to hear from you.",
  keywords: [
    "contact AmpReady",
    "EV charger support",
    "electrician application",
    "AmpReady partnership",
    "EV charging help",
  ],
  openGraph: {
    title: "Contact AmpReady | AmpReady",
    description:
      "Get in touch with us. Homeowners, electricians, and partners welcome.",
    url: "https://ampready.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
