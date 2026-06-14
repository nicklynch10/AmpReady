"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Lightbulb,
  Wrench,
  Link2,
  ArrowRight,
  Quote,
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
// Data
// ============================================

const missionPillars = [
  {
    title: "Homeowner Clarity",
    description:
      "Help homeowners understand their project before they call anyone. No jargon, no guesswork — just clear expectations.",
    icon: Lightbulb,
    rotation: "rotate-[0.5deg]",
  },
  {
    title: "Contractor Efficiency",
    description:
      "Give electricians the information they need to quote fast and win jobs. Structured data beats phone calls every time.",
    icon: Wrench,
    rotation: "-rotate-[0.3deg]",
  },
  {
    title: "Market Connection",
    description:
      "Build the connective layer between intent and execution. When homeowners are ready, electricians should be too.",
    icon: Link2,
    rotation: "rotate-[0.4deg]",
  },
];

const beliefs = [
  "Homeowners shouldn't need to learn electrical engineering to get a quote.",
  "Electricians deserve better than name-and-number leads.",
  "Transparency builds trust — on both sides.",
  "The electrification transition needs better infrastructure, starting with information.",
];

const team = [
  {
    initials: "FC",
    name: "Founder & CEO",
    description:
      "Former contractor and EV enthusiast. Saw the problem from both sides.",
    color: "bg-primary",
    rotation: "rotate-[0.6deg]",
  },
  {
    initials: "HP",
    name: "Head of Product",
    description:
      "Obsessed with making complex processes feel simple.",
    color: "bg-accent",
    rotation: "-rotate-[0.4deg]",
  },
  {
    initials: "LE",
    name: "Lead Engineer",
    description:
      "Building the systems that turn chaos into clarity.",
    color: "bg-secondary",
    rotation: "rotate-[0.3deg]",
  },
  {
    initials: "CL",
    name: "Community Lead",
    description:
      "Connecting homeowners and electricians across the country.",
    color: "bg-primary-dark",
    rotation: "-rotate-[0.5deg]",
  },
];

// ============================================
// Main Client Component
// ============================================

export default function AboutClient() {
  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AmpReady",
            description:
              "AmpReady connects homeowners with licensed electricians for EV charger installation through structured job packets.",
            url: "https://ampready.com",
            logo: "https://ampready.com/logo.png",
            sameAs: [
              "https://linkedin.com/company/ampready",
              "https://twitter.com/ampready",
            ],
          }),
        }}
      />

      <div className="relative overflow-hidden">
        {/* Organic blob accents */}
        <div
          className="absolute top-10 left-0 w-[500px] h-[500px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-primary/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-80 right-0 w-[400px] h-[400px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-accent/5 blur-3xl pointer-events-none"
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
                Built for the{" "}
                <span className="text-primary">Electrification Wave</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
                AmpReady was created to solve a simple problem: homeowners and
                electricians both waste too much time before a single EV charger
                gets installed. We&apos;re fixing that.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <ScrollSection className="relative py-20 md:py-28 bg-background-alt">
          <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Narrative */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={pageSpring}
                className="lg:col-span-3"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-8">
                  Why We Started
                </h2>
                <div className="space-y-6 font-body text-base md:text-lg text-text-secondary leading-relaxed">
                  <p>
                    EV adoption is accelerating, but the installation process is
                    stuck in the past. Homeowners don&apos;t know what electricians
                    need. Electricians get low-quality leads. Both sides waste
                    time — and the planet can&apos;t afford to wait.
                  </p>
                  <p>
                    The bottleneck isn&apos;t finding electricians. It&apos;s organizing
                    the project information so electricians can quote accurately
                    without multiple site visits. Every callback, every
                    rescheduled appointment, every vague estimate is friction
                    that slows the transition to clean transportation.
                  </p>
                  <p>
                    AmpReady collects the right details upfront, structures them
                    into job packets, and connects the right homeowners with the
                    right electricians. One submission. One packet. Better quotes.
                    Faster installs.
                  </p>
                </div>
              </motion.div>

              {/* Quote Block */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...pageSpring, delay: 0.2 }}
                className="lg:col-span-2 relative"
              >
                <div className="relative p-8 md:p-10 rounded-2xl bg-surface border border-text-primary/8 shadow-sm">
                  {/* Organic blob behind quote */}
                  <div
                    className="absolute -top-6 -right-6 w-32 h-32 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-primary/10 blur-xl pointer-events-none"
                    aria-hidden="true"
                  />
                  <Quote className="w-10 h-10 text-primary/40 mb-4" />
                  <blockquote className="font-heading text-2xl md:text-3xl font-medium text-text-primary leading-snug mb-6">
                    The best quote is an informed quote.
                  </blockquote>
                  <div className="w-16 h-1 bg-primary rounded-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollSection>

        {/* Our Mission */}
        <ScrollSection className="relative py-20 md:py-28">
          <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={pageSpring}
              className="mb-16 md:mb-20 max-w-2xl"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Making Residential Electrification Easier to Quote, Route, and
                Complete
              </h2>
              <div className="w-24 h-1 bg-accent rounded-full" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {missionPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    variants={staggerItem}
                    {...cardHover}
                    className={cn(
                      "relative p-8 rounded-2xl border border-text-primary/8 bg-surface shadow-sm",
                      "hover:shadow-md transition-shadow",
                      pillar.rotation
                    )}
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-heading text-xl font-medium text-text-primary mb-3">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-base text-text-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </ScrollSection>

        {/* What We Believe */}
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
                What We Believe
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {beliefs.map((belief, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...pageSpring, delay: index * 0.1 }}
                  className={cn(
                    "relative p-8 rounded-2xl border border-text-primary/8 bg-surface shadow-sm",
                    index % 2 === 0 ? "md:rotate-[0.3deg]" : "md:-rotate-[0.2deg]"
                  )}
                >
                  <span className="font-heading text-5xl text-primary/15 absolute top-4 left-4 leading-none select-none">
                    &ldquo;
                  </span>
                  <p className="font-heading text-xl md:text-2xl font-medium text-text-primary leading-relaxed relative z-10 pl-4">
                    {belief}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* The Team (Placeholder) */}
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
                The People Behind AmpReady
              </h2>
              <div className="w-24 h-1 bg-accent rounded-full" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {team.map((member) => (
                <motion.div
                  key={member.initials}
                  variants={staggerItem}
                  {...cardHover}
                  className={cn(
                    "relative p-6 rounded-2xl border border-text-primary/8 bg-surface shadow-sm text-center",
                    "hover:shadow-md transition-shadow",
                    member.rotation
                  )}
                >
                  {/* Organic shape avatar */}
                  <div
                    className={cn(
                      "w-20 h-20 mx-auto mb-4 rounded-[60%_40%_50%_50%/50%_60%_40%_50%]",
                      "flex items-center justify-center text-text-inverse font-heading text-xl font-bold",
                      member.color
                    )}
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-heading text-lg font-medium text-text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollSection>

        {/* Future Vision */}
        <ScrollSection className="relative py-20 md:py-28 bg-background-alt">
          <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={pageSpring}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  Where We&apos;re Headed
                </h2>
                <div className="space-y-4 font-body text-base md:text-lg text-text-secondary leading-relaxed">
                  <p>
                    EV chargers are just the beginning. We&apos;re building the
                    infrastructure for residential electrification — the connective
                    tissue that makes it possible to upgrade panels, install heat
                    pumps, add battery storage, and wire solar without the
                    friction that slows everything down today.
                  </p>
                  <p>
                    Every home that goes electric needs a skilled electrician. Our
                    job is to make sure those electricians have the information
                    they need, when they need it, in a format they can actually
                    use.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...pageSpring, delay: 0.2 }}
                className="relative"
              >
                {/* Stylized future illustration with organic shapes */}
                <div className="relative p-8 rounded-2xl bg-surface border border-text-primary/8 shadow-sm">
                  <div className="flex flex-wrap gap-3">
                    {[
                      "EV Chargers",
                      "Panel Upgrades",
                      "Heat Pump Ready",
                      "Battery Storage",
                      "Solar Integration",
                      "Smart Load Management",
                    ].map((item, index) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ ...microSpring, delay: 0.3 + index * 0.08 }}
                        className={cn(
                          "inline-flex items-center px-4 py-2 rounded-full font-body text-sm font-medium",
                          index % 2 === 0
                            ? "bg-primary/10 text-primary"
                            : "bg-accent/10 text-accent"
                        )}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
                {/* Blob accent */}
                <div
                  className="absolute -bottom-8 -left-8 w-40 h-40 rounded-[50%_50%_40%_60%/40%_60%_50%_50%] bg-accent/10 blur-2xl pointer-events-none"
                  aria-hidden="true"
                />
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...pageSpring, delay: 0.3 }}
              className="mt-16 text-center"
            >
              <motion.a
                href="/contact"
                {...cardHover}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-text-inverse font-body font-medium rounded-xl shadow-lg hover:bg-primary-dark transition-colors"
              >
                Join Us on the Journey
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </ScrollSection>
      </div>
    </>
  );
}
