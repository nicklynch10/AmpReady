"use client";

import Link from "next/link";
import {
  User,
  Phone,
  MapPin,
  Car,
  Camera,
  Ruler,
  AlertTriangle,
  HelpCircle,
  CheckCircle,
  FileText,
  Users,
  Star,
  Clock,
  Globe,
  CreditCard,
  ChevronRight,
  ArrowDown,
  Shield,
  BadgeCheck,
  HeadphonesIcon,
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

const painPoints = [
  {
    icon: User,
    title: "Leads with just a name and phone number",
    description:
      "No project details, no photos, no context. You spend the first call just figuring out what the job actually is.",
  },
  {
    icon: MapPin,
    title: "Driving to site visits for jobs that aren't a fit",
    description:
      "Wasted time, wasted fuel, and a schedule full of dead-end appointments that could have been filtered out upfront.",
  },
  {
    icon: Users,
    title: "Competing with 5+ other contractors on shared lead platforms",
    description:
      "Race-to-the-bottom pricing. Homeowners shopping on cost alone. Your expertise gets buried under a pile of lowball bids.",
  },
];

const benefits = [
  {
    icon: FileText,
    title: "Organized Project Info",
    description: "Photos, details, and context upfront so you know what you're walking into.",
  },
  {
    icon: Users,
    title: "Qualified Leads",
    description: "Homeowners who have already done their homework and are ready to move forward.",
  },
  {
    icon: Star,
    title: "Exclusive Opportunities",
    description: "Not shared with 10 other contractors. You get a real shot at winning the job.",
  },
  {
    icon: Clock,
    title: "Faster Quoting",
    description: "Quote from the packet, not from a site visit. Save hours on every lead.",
  },
  {
    icon: Globe,
    title: "Service Area Matching",
    description: "Only see jobs in your coverage area. No more leads from three counties over.",
  },
  {
    icon: CreditCard,
    title: "No Monthly Fees",
    description: "Pay only for the leads you want to quote. No subscriptions, no lock-in contracts.",
  },
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Service area, project types, credentials — set your preferences once.",
  },
  {
    number: "02",
    title: "Review Job Packets",
    description: "Browse organized projects in your area with full details and photos.",
  },
  {
    number: "03",
    title: "Quote With Confidence",
    description: "All the info you need is in the packet. No guesswork, no site visit required.",
  },
  {
    number: "04",
    title: "Win the Job",
    description: "Direct connection to the homeowner. Close the deal and schedule the work.",
  },
];

const pricingTiers = [
  {
    label: "Per Lead",
    price: "$35",
    unit: "/lead",
    description: "Review the packet, decide if you want to quote. Full flexibility.",
    highlight: false,
  },
  {
    label: "Volume Discount",
    price: "$25",
    unit: "/lead",
    description: "For electricians quoting 10+ leads per month. Same quality, better rate.",
    highlight: true,
  },
  {
    label: "Enterprise",
    price: "Custom",
    unit: "",
    description: "Multi-crew operations with dedicated support and custom terms.",
    highlight: false,
  },
];

const electricianFAQs = [
  {
    question: "What information is included in a job packet?",
    answer:
      "Every job packet includes: homeowner contact info and project timing, charger type and vehicle model, photos of the electrical panel and parking area, estimated wire run distance and path description, a preliminary complexity assessment, and any notes or special considerations the homeowner has shared.",
  },
  {
    question: "How is this different from other lead platforms?",
    answer:
      "Most lead platforms sell the same contact to multiple contractors and provide almost no project detail. AmpReady gives you a complete, organized job packet with photos and context. Leads are exclusive — not shared with a dozen competitors — and you only pay for leads you actively choose to pursue.",
  },
  {
    question: "Do I need to be licensed?",
    answer:
      "Yes. AmpReady only works with licensed and insured electricians. We verify your license and insurance during onboarding. This protects homeowners and maintains the quality of our network.",
  },
  {
    question: "What if the job isn't a fit after I review the packet?",
    answer:
      "You only pay for leads you choose to quote. If a job packet doesn't match your expertise, service area, or schedule, simply pass on it — no charge. We want you to win jobs, not waste money on bad fits.",
  },
  {
    question: "How do I get paid?",
    answer:
      "You handle payment directly with the homeowner, just like any other job. AmpReady is not involved in the transaction. We simply connect you with qualified, prepared homeowners who are ready to hire.",
  },
  {
    question: "Can I set my service area and project preferences?",
    answer:
      "Absolutely. Your profile lets you define your service radius, preferred project types (residential, commercial, specific charger brands), and availability. You'll only see job packets that match your criteria.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "EV Charger Lead Generation for Electricians",
  provider: {
    "@type": "Organization",
    name: "AmpReady",
    url: "https://ampready.com",
  },
  description:
    "AmpReady connects licensed electricians with quote-ready EV charger installation leads from pre-qualified homeowners.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: "Lead Generation for EV Charger Installation",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "25",
    highPrice: "35",
    offerCount: "3",
    offers: [
      {
        "@type": "Offer",
        name: "Per Lead",
        price: "35",
        priceCurrency: "USD",
        description: "Pay per lead you choose to quote",
      },
      {
        "@type": "Offer",
        name: "Volume Discount",
        price: "25",
        priceCurrency: "USD",
        description: "For 10+ leads per month",
      },
    ],
  },
};

export default function ElectriciansPageClient() {
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
          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Accent blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-accent/6 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={heroSpring}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight"
              >
                Better EV Charger Leads.{" "}
                <span className="text-accent">Less Wasted Time.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...heroSpring, delay: 0.15 }}
                className="mt-6 font-body text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl"
              >
                AmpReady organizes homeowner projects into quote-ready job packets. You get panel
                photos, wire run estimates, charger details, and project timing — all before the
                first call.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...heroSpring, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-text-inverse font-body font-medium text-lg rounded-xl shadow-lg hover:bg-accent-dark transition-colors"
                >
                  Join the Network
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <a
                  href="#sample-packet"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-text-primary/20 text-text-primary font-body font-medium text-lg rounded-xl hover:border-accent hover:text-accent transition-colors"
                >
                  See a Sample Packet
                  <ArrowDown className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* THE PROBLEM SECTION */}
        {/* ============================================ */}
        <ScrollSection className="py-20 lg:py-28 bg-background-alt">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-12">
            <ScrollFadeIn className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
                The Current Lead Problem
              </h2>
            </ScrollFadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {painPoints.map((point, index) => (
                <ScrollFadeIn key={point.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, transition: microSpring }}
                    className="p-6 bg-surface rounded-xl border border-text-primary/8 shadow-md h-full"
                    style={{ transform: `rotate(${index === 1 ? "0.5deg" : index === 2 ? "-0.4deg" : "0deg"})` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-error/10 flex items-center justify-center mb-4">
                      <point.icon className="w-6 h-6 text-error" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
                      {point.title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {point.description}
                    </p>
                  </motion.div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* ============================================ */}
        {/* JOB PACKET SAMPLE */}
        {/* ============================================ */}
        <ScrollSection className="py-20 lg:py-28">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-12">
            <ScrollFadeIn className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
                What a Job Packet Looks Like
              </h2>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.15}>
              <div className="max-w-3xl mx-auto">
                {/* Job Packet Document */}
                <div className="bg-surface rounded-xl border border-text-primary/10 shadow-2xl overflow-hidden">
                  {/* Packet Header */}
                  <div className="bg-secondary px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-heading text-sm font-semibold text-text-inverse">
                        EV Charger Installation
                      </span>
                    </div>
                    <span className="font-mono text-xs text-text-inverse-muted">
                      Job Packet #AR-2847
                    </span>
                  </div>

                  {/* Packet Body */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Homeowner Info */}
                    <div>
                      <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-3">
                        Homeowner Info
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                          <User className="w-4 h-4 text-text-muted" />
                          <span>Sarah M. — Austin, TX</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                          <Phone className="w-4 h-4 text-text-muted" />
                          <span>Contact after quote</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                          <MapPin className="w-4 h-4 text-text-muted" />
                          <span>78704 — South Austin</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                          <Clock className="w-4 h-4 text-text-muted" />
                          <span>Flexible — within 2 weeks</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-text-primary/8" />

                    {/* Project Details */}
                    <div>
                      <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-3">
                        Project Details
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                          <Car className="w-4 h-4 text-text-muted" />
                          <span>Tesla Model 3 — Wall Connector</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                          <MapPin className="w-4 h-4 text-text-muted" />
                          <span>Garage — attached</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-text-primary/8" />

                    {/* Panel Photos */}
                    <div>
                      <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-3">
                        Panel Photos
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="aspect-video bg-background-alt rounded border border-text-primary/5 flex flex-col items-center justify-center gap-2">
                          <Camera className="w-6 h-6 text-text-muted/40" />
                          <span className="font-mono text-xs text-text-muted">Panel — Full View</span>
                        </div>
                        <div className="aspect-video bg-background-alt rounded border border-text-primary/5 flex flex-col items-center justify-center gap-2">
                          <Camera className="w-6 h-6 text-text-muted/40" />
                          <span className="font-mono text-xs text-text-muted">Panel — Label Close-up</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-text-primary/8" />

                    {/* Parking & Wire Run */}
                    <div>
                      <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-3">
                        Parking & Wire Run
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-text-secondary mb-2">
                        <Ruler className="w-4 h-4 text-text-muted" />
                        <span>Estimated distance: ~25 feet from panel to garage</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <MapPin className="w-4 h-4 text-text-muted" />
                        <span>Path: Through unfinished basement ceiling</span>
                      </div>
                    </div>

                    <div className="border-t border-text-primary/8" />

                    {/* Assessment Notes */}
                    <div>
                      <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-3">
                        Assessment Notes
                      </h4>
                      <div className="flex items-start gap-3 p-3 bg-warning/5 rounded-lg border border-warning/10">
                        <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-text-secondary">
                            <span className="font-medium text-text-primary">Complexity: Moderate</span>
                            <br />
                            Panel has 2 open slots. May need a subpanel if future expansion is desired. No immediate upgrade required.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-text-primary/8" />

                    {/* Missing Info */}
                    <div>
                      <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-3">
                        Missing Info
                      </h4>
                      <div className="flex items-start gap-2 text-sm text-text-secondary">
                        <HelpCircle className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                        <span>Homeowner unsure about main panel amperage — verify on site.</span>
                      </div>
                    </div>
                  </div>

                  {/* Packet Footer */}
                  <div className="bg-background-alt px-6 py-4 flex items-center justify-between border-t border-text-primary/8">
                    <span className="font-mono text-xs text-text-muted">
                      Submitted: Jun 12, 2026
                    </span>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-success/10 rounded-full">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="font-mono text-xs font-medium text-success">
                        Quote-Ready
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </ScrollSection>

        {/* ============================================ */}
        {/* BENEFITS SECTION */}
        {/* ============================================ */}
        <ScrollSection className="py-20 lg:py-28 bg-background-alt">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-12">
            <ScrollFadeIn className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
                Why Electricians Choose AmpReady
              </h2>
            </ScrollFadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <ScrollFadeIn
                  key={benefit.title}
                  delay={index * 0.08}
                  className={index % 3 === 1 ? "lg:mt-8" : index % 3 === 2 ? "lg:mt-4" : ""}
                >
                  <motion.div
                    whileHover={{ y: -6, rotate: 0.5, transition: microSpring }}
                    className="p-6 bg-surface rounded-xl border border-text-primary/8 shadow-md hover:shadow-lg transition-shadow h-full"
                    style={{ transform: `rotate(${index % 2 === 0 ? "-0.4deg" : "0.5deg"})` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* ============================================ */}
        {/* HOW IT WORKS */}
        {/* ============================================ */}
        <ScrollSection className="py-20 lg:py-28">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-12">
            <ScrollFadeIn className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
                How It Works for Pros
              </h2>
            </ScrollFadeIn>

            <div className="relative max-w-4xl mx-auto">
              {/* Connecting line (desktop) */}
              <div
                className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-primary/20"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {howItWorksSteps.map((step, index) => (
                  <ScrollFadeIn key={step.number} delay={index * 0.12}>
                    <div className="relative flex flex-col items-center text-center">
                      {/* Step number circle */}
                      <div className="relative z-10 w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
                        <span className="font-mono text-lg font-bold text-text-inverse">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="font-body text-sm text-text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </ScrollFadeIn>
                ))}
              </div>
            </div>
          </div>
        </ScrollSection>

        {/* ============================================ */}
        {/* PRICING SECTION */}
        {/* ============================================ */}
        <ScrollSection className="py-20 lg:py-28 bg-background-alt">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-12">
            <ScrollFadeIn className="text-center mb-6">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
                Simple, Transparent Pricing
              </h2>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.1} className="text-center mb-16">
              <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
                No monthly fees. No subscription. Pay per lead you choose to quote.
              </p>
              <p className="mt-2 font-body text-sm text-text-muted">
                You only pay for leads you actively choose to pursue. No surprise charges.
              </p>
            </ScrollFadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <ScrollFadeIn key={tier.label} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, transition: microSpring }}
                    className={`relative p-6 rounded-xl border bg-surface h-full flex flex-col ${
                      tier.highlight
                        ? "border-accent/30 shadow-lg"
                        : "border-text-primary/10 shadow-md"
                    }`}
                    style={{
                      transform: `rotate(${index === 1 ? "0.5deg" : index === 2 ? "-0.3deg" : "0deg"})`,
                    }}
                  >
                    {tier.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-text-inverse text-xs font-medium rounded-full font-body">
                        Most Popular
                      </div>
                    )}
                    <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                      {tier.label}
                    </span>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="font-heading text-3xl sm:text-4xl font-bold text-text-primary">
                        {tier.price}
                      </span>
                      {tier.unit && (
                        <span className="font-body text-base text-text-muted">{tier.unit}</span>
                      )}
                    </div>
                    <p className="mt-3 font-body text-sm text-text-secondary leading-relaxed flex-1">
                      {tier.description}
                    </p>
                  </motion.div>
                </ScrollFadeIn>
              ))}
            </div>

            <ScrollFadeIn delay={0.4} className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-text-inverse font-body font-medium rounded-xl shadow-lg hover:bg-accent-dark transition-colors"
              >
                Apply to Join
                <ChevronRight className="w-5 h-5" />
              </Link>
            </ScrollFadeIn>
          </div>
        </ScrollSection>

        {/* ============================================ */}
        {/* FAQ SECTION */}
        {/* ============================================ */}
        <ScrollSection className="py-20 lg:py-28">
          <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-12">
            <ScrollFadeIn className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
                Electrician FAQ
              </h2>
            </ScrollFadeIn>

            <FAQAccordion items={electricianFAQs} />
          </div>
        </ScrollSection>

        {/* ============================================ */}
        {/* TRUST / SOCIAL PROOF */}
        {/* ============================================ */}
        <ScrollSection className="py-20 lg:py-28 bg-background-alt">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <ScrollFadeIn className="text-center mb-12">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary">
                  Built for Professionals
                </h2>
              </ScrollFadeIn>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <ScrollFadeIn delay={0}>
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Shield className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                      Licensed and insured electricians only
                    </h3>
                    <p className="font-body text-sm text-text-secondary">
                      We verify every contractor before they join the network.
                    </p>
                  </div>
                </ScrollFadeIn>

                <ScrollFadeIn delay={0.1}>
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <BadgeCheck className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                      Background-checked professionals
                    </h3>
                    <p className="font-body text-sm text-text-secondary">
                      Homeowners trust our network because we do the vetting.
                    </p>
                  </div>
                </ScrollFadeIn>

                <ScrollFadeIn delay={0.2}>
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <HeadphonesIcon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                      Dedicated support for contractors
                    </h3>
                    <p className="font-body text-sm text-text-secondary">
                      Questions about a packet? Need help with your profile? We&apos;re here.
                    </p>
                  </div>
                </ScrollFadeIn>
              </div>

              <ScrollFadeIn delay={0.3} className="text-center mt-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-text-inverse font-body font-medium rounded-xl shadow-lg hover:bg-accent-dark transition-colors"
                >
                  Apply to Join the Network
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
