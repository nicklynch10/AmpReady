"use client";

import Link from "next/link";
import {
  Camera,
  Gauge,
  Users,
  Zap,
  Clock,
  FileText,
  MapPin,
  Car,
  Ruler,
  Calendar,
  Shield,
  Lock,
  PhoneOff,
  ChevronRight,
} from "lucide-react";
import { motion } from "motion/react";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ScrollSection, ScrollFadeIn } from "@/components/sections/ScrollSection";
import {
  microSpring,
  pageSpring,
  heroSpring,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

const whatYouGetCards = [
  {
    icon: FileText,
    title: "Clear Project Summary",
    description:
      "Your photos, setup, and timing organized into one view that electricians can understand at a glance.",
    rotate: "-0.5deg",
  },
  {
    icon: Gauge,
    title: "Panel Assessment Preview",
    description:
      "Understand if your project looks simple or needs more work before you talk to anyone.",
    rotate: "0.7deg",
  },
  {
    icon: Users,
    title: "Matched Electricians",
    description:
      "Qualified local pros who actually install EV chargers, not general handymen.",
    rotate: "-0.3deg",
  },
  {
    icon: Zap,
    title: "Faster Quotes",
    description:
      "Electricians have what they need upfront, so quotes come quicker and are more accurate.",
    rotate: "0.5deg",
  },
];

const intakeSteps = [
  {
    number: "01",
    icon: Camera,
    text: "Photo of your electrical panel (including the label)",
  },
  {
    number: "02",
    icon: MapPin,
    text: "Where you park and where the panel is located",
  },
  {
    number: "03",
    icon: Car,
    text: "Your EV charger type or vehicle model",
  },
  {
    number: "04",
    icon: Ruler,
    text: "Estimated distance from panel to charger location",
  },
  {
    number: "05",
    icon: Calendar,
    text: "Your timing and any special notes",
  },
];

const pricingTiers = [
  {
    label: "Simple Install",
    range: "$500 – $1,200",
    description: "Panel nearby, plenty of space, straightforward run",
    accent: "bg-success/10 border-success/20",
  },
  {
    label: "Standard Install",
    range: "$1,200 – $2,500",
    description: "Moderate wire run, some complexity, may need permit",
    accent: "bg-warning/10 border-warning/20",
  },
  {
    label: "Complex Install",
    range: "$2,500 – $5,000+",
    description: "Long wire run, panel upgrade likely, additional work",
    accent: "bg-error/10 border-error/20",
  },
];

const homeownerFAQs = [
  {
    question: "Do I need to know about breakers or load calculations?",
    answer:
      "Not at all. We guide you through each step with plain language. Just take a clear photo of your electrical panel and we handle the technical assessment. Our system flags potential issues so electricians know what to expect before they arrive.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most EV charger installations take 2–6 hours for a simple job. Standard installs with moderate complexity may take a full day. Complex jobs requiring panel upgrades can take 1–2 days. Your matched electrician will give you a precise timeline in their quote.",
  },
  {
    question: "Will I need a permit?",
    answer:
      "In most jurisdictions, yes — EV charger installation requires an electrical permit. The good news is that licensed electricians typically handle permitting as part of their service. We note permit requirements in your job packet so electricians factor this into their quote.",
  },
  {
    question: "Can I use any EV charger?",
    answer:
      "Most Level 2 chargers work with standard 240V installation, but some vehicles have specific requirements (Tesla Wall Connector, for example). We ask about your vehicle or charger model during intake so electricians know exactly what equipment will be installed.",
  },
  {
    question: "What if my panel is full?",
    answer:
      "A full panel is common and not a dealbreaker. It may mean a subpanel or main panel upgrade is needed, which increases the project cost. We flag this possibility in your job packet so electricians come prepared with the right approach and pricing.",
  },
  {
    question: "Is there a cost to submit my project?",
    answer:
      "No. Submitting your project and receiving job packets is completely free for homeowners. You only pay the electrician you choose to hire. There are no hidden fees or subscription costs on our platform.",
  },
];

// Structured data for Service schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "EV Charger Installation Quote Service for Homeowners",
  provider: {
    "@type": "Organization",
    name: "AmpReady",
    url: "https://ampready.com",
  },
  description:
    "AmpReady organizes homeowner EV charger projects into quote-ready job packets, connecting homeowners with qualified local electricians.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: "EV Charger Installation Matching",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free project submission for homeowners",
  },
};

export default function HomeownersPageClient() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="relative overflow-hidden">
        {/* ============================================ */}
        {/* HERO SECTION */}
        {/* ============================================ */}
        <section className="relative min-h-[85vh] flex items-center py-20 lg:py-28">
          {/* Organic blob shapes background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div
              className="absolute -top-20 -right-40 w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl"
              style={{ transform: "rotate(12deg)" }}
            />
            <div
              className="absolute top-1/3 -left-60 w-[500px] h-[500px] rounded-full bg-accent/8 blur-3xl"
              style={{ transform: "rotate(-8deg)" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary-light/6 blur-3xl"
              style={{ transform: "rotate(20deg)" }}
            />
          </div>

          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={heroSpring}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight"
              >
                Get a Real EV Charger Quote{" "}
                <span className="text-primary">— Without the Back-and-Forth</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...heroSpring, delay: 0.15 }}
                className="mt-6 font-body text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl"
              >
                Upload photos of your electrical panel and parking area. Answer a few practical
                questions. We&apos;ll organize everything into a job packet that qualified local
                electricians can review and quote.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...heroSpring, delay: 0.3 }}
                className="mt-10"
              >
                <Link
                  href="/get-started"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-text-inverse font-body font-medium text-lg rounded-xl shadow-lg hover:bg-primary-dark transition-colors"
                >
                  Start Your Job Packet
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* WHAT YOU GET SECTION */}
        {/* ============================================ */}
        <ScrollSection className="py-20 lg:py-28">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-12">
            <ScrollFadeIn className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
                What Happens When You Submit
              </h2>
            </ScrollFadeIn>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {whatYouGetCards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={staggerItem}
                  whileHover={{ y: -6, rotate: 0.5, transition: microSpring }}
                  className="group relative p-6 bg-surface rounded-xl border border-text-primary/8 shadow-md hover:shadow-lg transition-shadow"
                  style={{ transform: `rotate(${card.rotate})` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
                    {card.title}
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollSection>

        {/* ============================================ */}
        {/* THE INTAKE PROCESS */}
        {/* ============================================ */}
        <ScrollSection className="py-20 lg:py-28 bg-background-alt">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: Steps */}
              <div>
                <ScrollFadeIn>
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                    What You&apos;ll Share
                  </h2>
                  <p className="font-body text-base text-text-secondary mb-10">
                    Don&apos;t worry about electrical terminology — we guide you through each step.
                  </p>
                </ScrollFadeIn>

                <div className="space-y-4">
                  {intakeSteps.map((step, index) => (
                    <ScrollFadeIn key={step.number} delay={index * 0.08}>
                      <div className="flex items-start gap-4 p-4 bg-surface rounded-xl border border-text-primary/8 shadow-sm">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
                          <step.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                            Step {step.number}
                          </span>
                          <p className="font-body text-base text-text-primary mt-1">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </ScrollFadeIn>
                  ))}
                </div>
              </div>

              {/* Right: Document Preview */}
              <ScrollFadeIn delay={0.2} direction="left">
                <div className="relative">
                  {/* Document mockup */}
                  <div className="bg-surface rounded-xl border border-text-primary/10 shadow-xl p-6 sm:p-8 rotate-1">
                    {/* Document header */}
                    <div className="flex items-center justify-between border-b border-text-primary/10 pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-heading text-sm font-semibold text-text-primary">
                          AmpReady
                        </span>
                      </div>
                      <span className="font-mono text-xs text-text-muted">JOB PACKET</span>
                    </div>

                    {/* Document content */}
                    <div className="space-y-4">
                      <div className="h-3 bg-text-primary/8 rounded w-3/4" />
                      <div className="h-3 bg-text-primary/6 rounded w-full" />
                      <div className="h-3 bg-text-primary/6 rounded w-5/6" />

                      <div className="grid grid-cols-2 gap-3 mt-6">
                        <div className="h-20 bg-background-alt rounded border border-text-primary/5 flex items-center justify-center">
                          <Camera className="w-6 h-6 text-text-muted/40" />
                        </div>
                        <div className="h-20 bg-background-alt rounded border border-text-primary/5 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-text-muted/40" />
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-success" />
                          <div className="h-2.5 bg-text-primary/8 rounded w-1/2" />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-warning" />
                          <div className="h-2.5 bg-text-primary/8 rounded w-2/3" />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-success" />
                          <div className="h-2.5 bg-text-primary/8 rounded w-1/3" />
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-text-primary/10 flex items-center justify-between">
                        <span className="font-mono text-xs text-text-muted">
                          Status: Ready for Quote
                        </span>
                        <span className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                          Quote-Ready
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative shadow document */}
                  <div
                    className="absolute -bottom-3 -right-3 bg-surface rounded-xl border border-text-primary/5 shadow-lg p-6 w-full h-full -z-10"
                    style={{ transform: "rotate(-2deg)" }}
                  />
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </ScrollSection>

        {/* ============================================ */}
        {/* PRICING TRANSPARENCY */}
        {/* ============================================ */}
        <ScrollSection className="py-20 lg:py-28">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-12">
            <ScrollFadeIn className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
                What Does EV Charger Installation Cost?
              </h2>
              <p className="mt-4 font-body text-base text-text-secondary max-w-2xl mx-auto">
                These are typical ranges. Your actual quote depends on your specific setup.
              </p>
            </ScrollFadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <ScrollFadeIn key={tier.label} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, transition: microSpring }}
                    className={`p-6 rounded-xl border ${tier.accent} bg-surface`}
                    style={{ transform: `rotate(${index === 1 ? "0.5deg" : index === 2 ? "-0.3deg" : "0deg"})` }}
                  >
                    <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                      {tier.label}
                    </span>
                    <p className="font-heading text-2xl sm:text-3xl font-bold text-text-primary mt-2">
                      {tier.range}
                    </p>
                    <p className="font-body text-sm text-text-secondary mt-3 leading-relaxed">
                      {tier.description}
                    </p>
                  </motion.div>
                </ScrollFadeIn>
              ))}
            </div>

            <ScrollFadeIn delay={0.4} className="text-center mt-12">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-text-inverse font-body font-medium rounded-xl shadow-lg hover:bg-primary-dark transition-colors"
              >
                Get Your Personalized Quote
                <ChevronRight className="w-5 h-5" />
              </Link>
            </ScrollFadeIn>
          </div>
        </ScrollSection>

        {/* ============================================ */}
        {/* FAQ SECTION */}
        {/* ============================================ */}
        <ScrollSection className="py-20 lg:py-28 bg-background-alt">
          <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-12">
            <ScrollFadeIn className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
                Common Questions
              </h2>
            </ScrollFadeIn>

            <FAQAccordion items={homeownerFAQs} />
          </div>
        </ScrollSection>

        {/* ============================================ */}
        {/* TRUST SECTION */}
        {/* ============================================ */}
        <ScrollSection className="py-20 lg:py-28">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <ScrollFadeIn className="text-center mb-12">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary">
                  Your Trust Matters
                </h2>
              </ScrollFadeIn>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <ScrollFadeIn delay={0}>
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Shield className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                      Licensed electricians only
                    </h3>
                    <p className="font-body text-sm text-text-secondary">
                      Every electrician in our network is verified licensed and insured.
                    </p>
                  </div>
                </ScrollFadeIn>

                <ScrollFadeIn delay={0.1}>
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Lock className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                      Your information is shared only with matched contractors
                    </h3>
                    <p className="font-body text-sm text-text-secondary">
                      We only share your details with electricians who are actively quoting your project.
                    </p>
                  </div>
                </ScrollFadeIn>

                <ScrollFadeIn delay={0.2}>
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <PhoneOff className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                      No spam, no sales calls from random companies
                    </h3>
                    <p className="font-body text-sm text-text-secondary">
                      You control who sees your project. No lead lists, no cold calls.
                    </p>
                  </div>
                </ScrollFadeIn>
              </div>

              <ScrollFadeIn delay={0.3} className="text-center mt-12">
                <Link
                  href="/get-started"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-text-inverse font-body font-medium rounded-xl shadow-lg hover:bg-primary-dark transition-colors"
                >
                  Get Started
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </ScrollFadeIn>
            </div>
          </div>
        </ScrollSection>
      </div>
    </>
  );
}
