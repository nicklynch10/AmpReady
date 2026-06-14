"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Camera,
  FileText,
  Users,
  DollarSign,
  Settings,
  ClipboardList,
  Handshake,
  Phone,
  CheckCircle2,
  XCircle,
  ArrowRight,
  User,
  Image,
  MapPin,
  Zap,
  Route,
  Gauge,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  pageSpring,
  microSpring,
  layoutSpring,
  heroSpring,
  staggerContainer,
  staggerItem,
  cardHover,
} from "@/lib/animations";
import { ScrollSection } from "@/components/sections/ScrollSection";

// ============================================
// Step Data
// ============================================

const homeownerSteps = [
  {
    number: "01",
    title: "Share Your Setup",
    description:
      "Upload panel photos, parking location, charger type. We guide you through each step with plain language. No electrical degree required.",
    icon: Camera,
  },
  {
    number: "02",
    title: "We Build Your Packet",
    description:
      "Our system organizes your photos, answers, and notes into a structured job packet that electricians can review at a glance.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Get Matched",
    description:
      "We connect you with qualified local electricians who have experience with your type of installation.",
    icon: Users,
  },
  {
    number: "04",
    title: "Receive Quotes",
    description:
      "Electricians review your packet and respond with informed, accurate quotes — not guesses.",
    icon: DollarSign,
  },
];

const electricianSteps = [
  {
    number: "01",
    title: "Set Your Preferences",
    description:
      "Define your service area, project types, and credentials.",
    icon: Settings,
  },
  {
    number: "02",
    title: "Browse Job Packets",
    description:
      "Review organized projects with photos, details, and complexity indicators.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Choose to Quote",
    description:
      "Pick the jobs that fit your schedule and expertise. No obligation.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Connect Directly",
    description:
      "Reach out to the homeowner with a confident, informed quote.",
    icon: Phone,
  },
];

const packetSections = [
  {
    title: "Homeowner & Project Overview",
    description: "Name, service area, timing, project type",
    icon: User,
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Electrical Panel Photos",
    description: "Panel label, breaker layout, main disconnect, surrounding space",
    icon: Image,
    color: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    title: "Parking & Installation Location",
    description: "Garage, driveway, detached structure, distance from panel",
    icon: MapPin,
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Charger & Vehicle Details",
    description: "Charger model, vehicle type, amperage needs",
    icon: Zap,
    color: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    title: "Wire Run Estimate",
    description: "Estimated distance, path description, obstacles",
    icon: Route,
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Complexity Assessment",
    description: "Simple / Standard / Complex / Likely Upgrade Needed",
    icon: Gauge,
    color: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    title: "Homeowner Notes",
    description: "Special requests, timing constraints, concerns",
    icon: MessageSquare,
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
];

const comparisonData = {
  traditional: [
    "Call 5 electricians",
    "Repeat info 5 times",
    "Wait for callbacks",
    "Schedule site visits",
    "Get vague estimates",
    "Surprise costs",
  ],
  ampready: [
    "Submit once",
    "Organized packet",
    "Matched electricians",
    "Informed quotes",
    "Clear expectations",
    "Confident installation",
  ],
};

// ============================================
// Timeline Step Component
// ============================================

interface TimelineStepProps {
  step: (typeof homeownerSteps)[0];
  index: number;
  total: number;
  side: "left" | "right";
}

function TimelineStep({ step, index, total, side }: TimelineStepProps) {
  const Icon = step.icon;
  const isLeft = side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...pageSpring, delay: index * 0.12 }}
      className={cn(
        "relative flex items-start gap-6 md:gap-8",
        "md:w-[calc(50%-2rem)]",
        isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
      )}
    >
      {/* Number Badge */}
      <div className="relative shrink-0">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={microSpring}
          className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center",
            "bg-primary text-text-inverse font-heading text-lg font-bold shadow-lg"
          )}
        >
          {step.number}
        </motion.div>
        {/* Connecting dot for mobile */}
        {index < total - 1 && (
          <div className="absolute left-1/2 top-14 w-px h-16 -translate-x-1/2 bg-primary/30 md:hidden" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12 md:pb-16">
        <div className="flex items-center gap-3 mb-2">
          <Icon className="w-5 h-5 text-primary" />
          <h3 className="font-heading text-xl font-medium text-text-primary">
            {step.title}
          </h3>
        </div>
        <p className="font-body text-base text-text-secondary leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

// ============================================
// Timeline Connector
// ============================================

function TimelineConnector() {
  return (
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ ...pageSpring, duration: 1.2 }}
        className="w-full h-full bg-primary/25 origin-top"
        style={{ transformOrigin: "top" }}
      />
    </div>
  );
}

// ============================================
// Main Client Component
// ============================================

export default function HowItWorksClient() {
  return (
    <>
      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How AmpReady Works",
            description:
              "AmpReady connects homeowners with electricians for EV charger installation through structured job packets.",
            step: [
              {
                "@type": "HowToStep",
                name: "Share Your Setup",
                text: "Upload panel photos, parking location, charger type. We guide you through each step with plain language.",
              },
              {
                "@type": "HowToStep",
                name: "We Build Your Packet",
                text: "Our system organizes your photos, answers, and notes into a structured job packet.",
              },
              {
                "@type": "HowToStep",
                name: "Get Matched",
                text: "We connect you with qualified local electricians who have experience with your type of installation.",
              },
              {
                "@type": "HowToStep",
                name: "Receive Quotes",
                text: "Electricians review your packet and respond with informed, accurate quotes.",
              },
            ],
          }),
        }}
      />

      <div className="relative overflow-hidden">
        {/* Organic blob accent */}
        <div
          className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-60 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero Section */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-32">
          <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={heroSpring}
              className="max-w-3xl"
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
                From Photos to Quote —{" "}
                <span className="text-primary">Here&apos;s How It Works</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
                AmpReady bridges the gap between homeowners who want EV chargers
                and electricians who need better project information. Simple on
                the surface, smart underneath.
              </p>
            </motion.div>
          </div>
        </section>

        {/* For Homeowners — The Process */}
        <ScrollSection className="relative py-20 md:py-28">
          <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={pageSpring}
              className="mb-16 md:mb-20"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
                For Homeowners: Submit Once, Get Matched
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full" />
            </motion.div>

            <div className="relative">
              <TimelineConnector />
              <div className="space-y-0 md:space-y-0">
                {homeownerSteps.map((step, index) => (
                  <TimelineStep
                    key={step.number}
                    step={step}
                    index={index}
                    total={homeownerSteps.length}
                    side={index % 2 === 0 ? "left" : "right"}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollSection>

        {/* For Electricians — The Process */}
        <ScrollSection className="relative py-20 md:py-28 bg-background-alt">
          <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={pageSpring}
              className="mb-16 md:mb-20"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
                For Electricians: Review, Quote, Win
              </h2>
              <div className="w-24 h-1 bg-accent rounded-full" />
            </motion.div>

            <div className="relative">
              <TimelineConnector />
              <div className="space-y-0 md:space-y-0">
                {electricianSteps.map((step, index) => (
                  <TimelineStep
                    key={step.number}
                    step={step}
                    index={index}
                    total={electricianSteps.length}
                    side={index % 2 === 0 ? "left" : "right"}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollSection>

        {/* What Makes a Job Packet */}
        <ScrollSection className="relative py-20 md:py-28">
          <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={pageSpring}
              className="mb-16 md:mb-20 flex flex-wrap items-center gap-4"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary">
                What&apos;s Inside a Job Packet?
              </h2>
              <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-body text-sm font-medium rounded-full">
                Sample Packet
              </span>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {packetSections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={section.title}
                    variants={staggerItem}
                    {...cardHover}
                    className={cn(
                      "relative p-6 rounded-2xl border border-text-primary/8 bg-surface shadow-sm",
                      "hover:shadow-md transition-shadow",
                      index % 3 === 1 && "md:rotate-[0.5deg]",
                      index % 3 === 2 && "md:-rotate-[0.3deg]"
                    )}
                  >
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                        section.color
                      )}
                    >
                      <Icon className={cn("w-6 h-6", section.iconColor)} />
                    </div>
                    <h3 className="font-heading text-lg font-medium text-text-primary mb-2">
                      {section.title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {section.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </ScrollSection>

        {/* The AmpReady Difference */}
        <ScrollSection className="relative py-20 md:py-28 bg-background-alt">
          <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={pageSpring}
              className="mb-16 md:mb-20"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Why This Beats the Old Way
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Traditional Way */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...pageSpring, delay: 0.1 }}
                className="p-8 rounded-2xl border border-error/20 bg-surface shadow-sm"
              >
                <h3 className="font-heading text-xl font-medium text-error mb-6">
                  The Traditional Way
                </h3>
                <ul className="space-y-4">
                  {comparisonData.traditional.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ ...microSpring, delay: 0.2 + index * 0.06 }}
                      className="flex items-center gap-3"
                    >
                      <XCircle className="w-5 h-5 text-error shrink-0" />
                      <span className="font-body text-base text-text-secondary">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* AmpReady Way */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...pageSpring, delay: 0.2 }}
                className="p-8 rounded-2xl border border-success/20 bg-surface shadow-sm"
              >
                <h3 className="font-heading text-xl font-medium text-success mb-6">
                  The AmpReady Way
                </h3>
                <ul className="space-y-4">
                  {comparisonData.ampready.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ ...microSpring, delay: 0.3 + index * 0.06 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                      <span className="font-body text-base text-text-secondary">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </ScrollSection>

        {/* CTA Section */}
        <ScrollSection className="relative py-20 md:py-28">
          <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={heroSpring}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Ready to See It In Action?
              </h2>
              <p className="font-body text-lg text-text-secondary mb-10">
                Join thousands of homeowners and electricians who are already
                using AmpReady to make EV charger installation simpler.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/homeowners"
                  {...cardHover}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-text-inverse font-body font-medium rounded-xl shadow-lg hover:bg-primary-dark transition-colors"
                >
                  Start as Homeowner
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="/electricians"
                  {...cardHover}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-text-inverse font-body font-medium rounded-xl shadow-lg hover:bg-secondary-light transition-colors"
                >
                  Join as Electrician
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </ScrollSection>
      </div>
    </>
  );
}
