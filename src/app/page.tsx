"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Zap,
  PhoneOff,
  Clock,
  FileQuestion,
  Upload,
  ClipboardList,
  Users,
  CheckCircle2,
  ChevronDown,
  Shield,
  MapPin,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
const MotionLink = motion(Link);
import {
  microSpring,
  pageSpring,
  layoutSpring,
  heroSpring,
  bounceSpring,
  staggerContainer,
  staggerItem,
  scrollFadeUp,
  scrollScaleIn,
  buttonHover,
  cardHover,
} from "@/lib/animations";

// ============================================
// FAQ Structured Data Component
// ============================================
function FaqStructuredData() {
  const faqs = [
    {
      question: "Do I need to know electrical terminology?",
      answer:
        "Not at all. AmpReady asks practical questions in plain language — like where you park, what charger you bought, and what your electrical panel looks like. We translate your answers into the technical details electricians need.",
    },
    {
      question: "How much does EV charger installation cost?",
      answer:
        "Most standard installations range from $500 to $2,000 depending on your panel capacity, wire run distance, and local labor rates. Complex jobs requiring panel upgrades can run $3,000 to $5,000+. AmpReady helps you understand where your project falls before you get quotes.",
    },
    {
      question: "Will I need a panel upgrade?",
      answer:
        "It depends on your existing panel capacity and the charger you want. If your panel has at least 100 amps of service and some spare capacity, you may be fine. AmpReady helps you assess this during the intake so electricians know what to expect.",
    },
    {
      question: "How long does the process take?",
      answer:
        "Submitting your job packet takes about 10 minutes. Most homeowners receive their first quotes within 24-48 hours. Actual installation typically takes 2-6 hours for a standard job, with permits adding a few days to a week depending on your municipality.",
    },
    {
      question: "Is AmpReady free for homeowners?",
      answer:
        "Yes. Homeowners use AmpReady at no cost. We charge electricians a small fee for qualified job leads, which means they are motivated to quote fairly and win your business.",
    },
    {
      question: "What types of EV chargers do you support?",
      answer:
        "AmpReady supports all Level 2 chargers (240V) including popular brands like ChargePoint, Tesla Wall Connector, JuiceBox, Enel X, and ClipperCreek. We also handle NEMA 14-50 outlet installations if you prefer a portable charger setup.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// ============================================
// Organic Blob Shape Component
// ============================================
function BlobShape({
  className,
  color = "primary",
  opacity = 0.06,
}: {
  className?: string;
  color?: "primary" | "accent" | "secondary";
  opacity?: number;
}) {
  const colorMap = {
    primary: "#D4A017",
    accent: "#5F8D7E",
    secondary: "#2D2D2D",
  };

  return (
    <div
      className={className}
      style={{
        backgroundColor: colorMap[color],
        opacity,
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
      }}
    />
  );
}

// ============================================
// Section Wrapper with Scroll Animation
// ============================================
function SectionWrapper({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-50px" }}
      variants={scrollFadeUp}
    >
      {children}
    </motion.section>
  );
}

// ============================================
// 1. Hero Section
// ============================================
function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 80]);
  const y2 = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section className="relative min-h-[90vh] flex items-center py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Organic blob backgrounds */}
      <motion.div
        className="absolute -top-20 -right-32 w-[500px] h-[500px] pointer-events-none"
        style={{ y: y1 }}
      >
        <BlobShape
          className="w-full h-full blur-3xl"
          color="primary"
          opacity={0.07}
        />
      </motion.div>
      <motion.div
        className="absolute top-40 -left-24 w-[400px] h-[400px] pointer-events-none"
        style={{ y: y2 }}
      >
        <BlobShape
          className="w-full h-full blur-3xl"
          color="accent"
          opacity={0.06}
        />
      </motion.div>
      <div className="absolute bottom-10 right-20 w-[300px] h-[300px] pointer-events-none opacity-[0.05]">
        <BlobShape className="w-full h-full blur-2xl" color="primary" />
      </div>

      <div className="max-w-container-2xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Text area — 60% */}
          <motion.div
            className="lg:w-[55%] xl:w-[58%]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={heroSpring}
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight">
              Get Your EV Charger Installed{" "}
              <span className="text-primary">— Without the Runaround</span>
            </h1>
            <p className="mt-6 sm:mt-8 font-body text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl">
              AmpReady turns your home setup into a contractor-ready job packet.
              Upload photos, answer a few questions, and get matched with a
              qualified local electrician who actually knows what they&apos;re
              quoting.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <MotionLink
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-text-inverse font-body font-medium rounded-lg shadow-lg hover:shadow-glow transition-shadow"
                {...buttonHover}
              >
                <Zap className="w-5 h-5" aria-hidden="true" />
                I&apos;m a Homeowner
              </MotionLink>
              <MotionLink
                href="/electricians"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-text-primary text-text-primary font-body font-medium rounded-lg hover:bg-text-primary hover:text-text-inverse transition-colors"
                {...buttonHover}
              >
                I&apos;m an Electrician
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </MotionLink>
            </div>
          </motion.div>

          {/* Image/shape area — 40% */}
          <motion.div
            className="lg:w-[45%] xl:w-[42%] relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...heroSpring, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              {/* Organic shape container */}
              <div
                className="absolute inset-0 bg-background-alt"
                style={{
                  borderRadius: "55% 45% 40% 60% / 50% 55% 45% 50%",
                }}
              />
              {/* Inner content — stylized EV charger illustration */}
              <div className="absolute inset-8 flex flex-col items-center justify-center">
                <div className="w-32 h-48 bg-secondary rounded-t-2xl rounded-b-lg relative">
                  {/* Charger body */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-20 bg-primary/20 rounded-full" />
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  {/* Cable */}
                  <div className="absolute -right-8 top-24 w-16 h-3 bg-text-muted/30 rounded-full rotate-12" />
                  <div className="absolute -right-12 top-28 w-12 h-3 bg-text-muted/20 rounded-full rotate-45" />
                </div>
                {/* Plug */}
                <div className="mt-2 w-16 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <div className="w-8 h-5 bg-primary-dark rounded" />
                </div>
                {/* Ground line */}
                <div className="mt-4 w-48 h-1 bg-text-muted/20 rounded-full" />
              </div>
              {/* Floating accent shapes */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 bg-accent/15"
                style={{ borderRadius: "45% 55% 60% 40% / 55% 45% 55% 45%" }}
              />
              <div
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10"
                style={{ borderRadius: "40% 60% 50% 50% / 60% 40% 60% 40%" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// 2. Trust Bar / Social Proof
// ============================================
function TrustBar() {
  const stats = [
    { value: "50+", label: "Cities Served" },
    { value: "2,400+", label: "Installations Quoted" },
    { value: "100%", label: "Licensed Electricians" },
  ];

  const partners = [
    "Licensed & Insured",
    "BBB Accredited",
    "NECA Member",
    "EVITP Certified",
  ];

  return (
    <SectionWrapper className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-background-alt/50">
      <div className="max-w-container-2xl mx-auto">
        {/* Partner badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner}
              className="flex items-center gap-2 text-text-muted font-body text-sm"
              variants={staggerItem}
            >
              <Shield className="w-4 h-4 text-accent" aria-hidden="true" />
              {partner}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <div className="font-heading text-3xl sm:text-4xl font-bold text-text-primary">
                {stat.value}
              </div>
              <div className="mt-1 font-body text-sm text-text-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-center font-body text-xs text-text-muted tracking-wide">
          Licensed electricians only. Real quotes. No spam.
        </p>
      </div>
    </SectionWrapper>
  );
}

// ============================================
// 3. The Problem (For Homeowners)
// ============================================
function ProblemSection() {
  const painPoints = [
    {
      icon: PhoneOff,
      title: "Calling 5 electricians, repeating the same info every time",
      description:
        "Your panel size, parking location, charger type — you end up explaining it over and over, and half of them still ask for photos later.",
    },
    {
      icon: Clock,
      title: "Waiting days for basic follow-up questions about your panel",
      description:
        "You thought you were done after the first call. Then come the emails: What breaker slots do you have? How far is your garage? Can you send a photo of the panel label?",
    },
    {
      icon: FileQuestion,
      title: "Getting vague estimates that change once they see your setup",
      description:
        "The $800 quote becomes $2,400 after the site visit. You budgeted for one thing and now you are back to square one, out a week and still no charger.",
    },
  ];

  return (
    <SectionWrapper
      id="problem"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-container-2xl mx-auto">
        <motion.div className="max-w-2xl" variants={scrollFadeUp}>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            Getting an EV Charger Quote Shouldn&apos;t Be This Hard
          </h2>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              variants={staggerItem}
              className="relative"
              style={{
                transform: `rotate(${index === 1 ? 0.5 : index === 2 ? -0.5 : 0}deg)`,
              }}
            >
              <motion.div
                className="bg-surface rounded-2xl p-8 shadow-md border border-text-muted/10 relative overflow-hidden"
                {...cardHover}
              >
                {/* Grain texture overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.03]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-error-muted rounded-xl flex items-center justify-center mb-5">
                    <point.icon
                      className="w-6 h-6 text-error"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-text-primary leading-snug">
                    {point.title}
                  </h3>
                  <p className="mt-3 font-body text-base text-text-secondary leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

// ============================================
// 4. The Solution (How AmpReady Works)
// ============================================
function SolutionSection() {
  const steps = [
    {
      number: "01",
      title: "Share Your Setup",
      description:
        "Upload panel photos, describe your parking location, and tell us which charger you bought. Takes about 10 minutes.",
      icon: Upload,
    },
    {
      number: "02",
      title: "We Build Your Packet",
      description:
        "We organize everything into a clear job packet — panel details, wire run estimates, charger specs — the info electricians actually need.",
      icon: ClipboardList,
    },
    {
      number: "03",
      title: "Get Matched & Quoted",
      description:
        "Qualified local electricians in your area review your packet and send real quotes. No drive-bys, no surprises.",
      icon: Users,
    },
  ];

  return (
    <SectionWrapper
      id="how-it-works"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-background-alt/40"
    >
      <div className="max-w-container-2xl mx-auto">
        <motion.div className="text-center max-w-2xl mx-auto" variants={scrollFadeUp}>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            One Submission. One Clear Packet. Better Quotes.
          </h2>
        </motion.div>

        <motion.div
          className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="relative"
              style={{
                marginTop: index === 1 ? "2rem" : index === 2 ? "1rem" : "0",
              }}
            >
              <motion.div
                className="bg-surface rounded-2xl p-8 lg:p-10 shadow-md border border-text-muted/10 relative overflow-hidden"
                {...cardHover}
              >
                {/* Organic blob accent */}
                <div
                  className="absolute -top-8 -right-8 w-32 h-32 bg-primary/5"
                  style={{
                    borderRadius: "60% 40% 50% 50% / 50% 60% 40% 60%",
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-heading text-4xl font-bold text-primary/30">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <step.icon
                        className="w-5 h-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl font-medium text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-body text-base text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

// ============================================
// 5. For Homeowners Section
// ============================================
function HomeownersSection() {
  const benefits = [
    "Understand if your project is simple, complex, or needs a panel upgrade",
    "No electrical jargon — just practical questions",
    "Photos and details organized so electricians can quote faster",
    "Compare qualified local electricians, not random leads",
  ];

  return (
    <SectionWrapper
      id="homeowners"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-container-2xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div className="lg:w-1/2" variants={scrollFadeUp}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Homeowners: Know What You&apos;re Getting Into
            </h2>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 font-body text-base text-text-secondary"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-accent mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
            <MotionLink
              href="/get-started"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-primary text-text-inverse font-body font-medium rounded-lg shadow-lg hover:shadow-glow transition-shadow"
              {...buttonHover}
            >
              Start Your Job Packet
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </MotionLink>
          </motion.div>

          {/* Job packet mockup */}
          <motion.div
            className="lg:w-1/2 relative"
            variants={scrollScaleIn}
            style={{ transform: "rotate(0.5deg)" }}
          >
            <div className="bg-surface rounded-2xl shadow-xl border border-text-muted/10 p-6 sm:p-8 relative overflow-hidden">
              {/* Document header */}
              <div className="flex items-center gap-3 pb-4 border-b border-text-muted/10">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-heading text-lg font-medium text-text-primary">
                    Job Packet #AR-2847
                  </div>
                  <div className="font-body text-xs text-text-muted">
                    Residential EV Charger Installation
                  </div>
                </div>
              </div>

              {/* Document sections */}
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-xs text-accent">01</span>
                  </div>
                  <div>
                    <div className="font-body text-sm font-medium text-text-primary">
                      Panel Information
                    </div>
                    <div className="font-body text-xs text-text-muted mt-1">
                      200A service, 3 spare breaker slots, photo verified
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-xs text-accent">02</span>
                  </div>
                  <div>
                    <div className="font-body text-sm font-medium text-text-primary">
                      Charger Details
                    </div>
                    <div className="font-body text-xs text-text-muted mt-1">
                      ChargePoint Home Flex, 48A, NEMA 14-50 plug
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-xs text-accent">03</span>
                  </div>
                  <div>
                    <div className="font-body text-sm font-medium text-text-primary">
                      Wire Run Estimate
                    </div>
                    <div className="font-body text-xs text-text-muted mt-1">
                      35 ft from panel to garage, interior walls, unfinished basement
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-xs text-accent">04</span>
                  </div>
                  <div>
                    <div className="font-body text-sm font-medium text-text-primary">
                      Parking &amp; Mounting
                    </div>
                    <div className="font-body text-xs text-text-muted mt-1">
                      Attached garage, wall-mounted near driver side, photo provided
                    </div>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-6 pt-4 border-t border-text-muted/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span className="font-body text-xs text-text-muted">
                    Ready for quote
                  </span>
                </div>
                <span className="font-mono text-xs text-text-muted">
                  Submitted Jun 12, 2026
                </span>
              </div>

              {/* Decorative blob */}
              <div
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5"
                style={{
                  borderRadius: "50% 50% 40% 60% / 60% 40% 60% 40%",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

// ============================================
// 6. For Electricians Section
// ============================================
function ElectriciansSection() {
  const benefits = [
    "Receive organized job packets with panel photos, wire run estimates, and charger details",
    "Fewer wasted calls — homeowners have already answered the basics",
    "Exclusive opportunities in your service area",
    "Quote faster, win more jobs",
  ];

  return (
    <SectionWrapper
      id="electricians"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-secondary text-text-inverse"
    >
      <div className="max-w-container-2xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div className="lg:w-1/2" variants={scrollFadeUp}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-inverse leading-tight">
              Electricians: Stop Chasing Bad Leads
            </h2>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 font-body text-base text-text-inverse-muted"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-primary-light mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
            <MotionLink
              href="/electricians"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-primary text-text-inverse font-body font-medium rounded-lg shadow-glow hover:bg-primary-light transition-colors"
              {...buttonHover}
            >
              Join as a Pro
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </MotionLink>
          </motion.div>

          {/* Data visualization mockup */}
          <motion.div
            className="lg:w-1/2 relative"
            variants={scrollScaleIn}
            style={{ transform: "rotate(-0.5deg)" }}
          >
            <div className="bg-surface-dark rounded-2xl shadow-xl border border-secondary-light p-6 sm:p-8 relative overflow-hidden">
              {/* Dashboard header */}
              <div className="flex items-center justify-between pb-4 border-b border-secondary-light">
                <div className="font-heading text-lg font-medium text-text-inverse">
                  Lead Dashboard
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span className="font-body text-xs text-text-inverse-muted">
                    Live
                  </span>
                </div>
              </div>

              {/* Stats row */}
              <div className="mt-5 grid grid-cols-3 gap-4">
                <div className="bg-secondary/50 rounded-lg p-3">
                  <div className="font-heading text-2xl font-bold text-primary-light">
                    12
                  </div>
                  <div className="font-body text-xs text-text-inverse-muted mt-1">
                    New Packets
                  </div>
                </div>
                <div className="bg-secondary/50 rounded-lg p-3">
                  <div className="font-heading text-2xl font-bold text-accent-light">
                    8
                  </div>
                  <div className="font-body text-xs text-text-inverse-muted mt-1">
                    Quoted
                  </div>
                </div>
                <div className="bg-secondary/50 rounded-lg p-3">
                  <div className="font-heading text-2xl font-bold text-success-light">
                    4
                  </div>
                  <div className="font-body text-xs text-text-inverse-muted mt-1">
                    Won
                  </div>
                </div>
              </div>

              {/* Lead list */}
              <div className="mt-5 space-y-3">
                {[
                  {
                    location: "Austin, TX",
                    type: "Panel + Charger",
                    status: "New",
                    statusColor: "bg-primary/20 text-primary-light",
                  },
                  {
                    location: "Portland, OR",
                    type: "Simple Install",
                    status: "Quoted",
                    statusColor: "bg-accent/20 text-accent-light",
                  },
                  {
                    location: "Seattle, WA",
                    type: "Panel Upgrade",
                    status: "New",
                    statusColor: "bg-primary/20 text-primary-light",
                  },
                ].map((lead) => (
                  <div
                    key={lead.location}
                    className="flex items-center justify-between bg-secondary/30 rounded-lg p-3"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-text-inverse-muted" />
                      <div>
                        <div className="font-body text-sm text-text-inverse">
                          {lead.location}
                        </div>
                        <div className="font-body text-xs text-text-inverse-muted">
                          {lead.type}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`font-body text-xs px-2 py-1 rounded ${lead.statusColor}`}
                    >
                      {lead.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative accent */}
              <div
                className="absolute -top-8 -left-8 w-32 h-32 bg-primary/5"
                style={{
                  borderRadius: "40% 60% 50% 50% / 50% 40% 60% 50%",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

// ============================================
// 7. Testimonials / Social Proof
// ============================================
function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I uploaded photos of my panel and garage, and within a day I had three actual quotes. No games.",
      name: "Sarah K.",
      location: "Portland",
      role: "Homeowner",
      initials: "SK",
      color: "bg-primary/20 text-primary",
      rotation: -0.5,
    },
    {
      quote:
        "The job packet had everything I needed. I quoted it in 10 minutes instead of driving out for a site visit.",
      name: "Mike R.",
      location: "Austin",
      role: "Electrician",
      initials: "MR",
      color: "bg-accent/20 text-accent",
      rotation: 0.5,
    },
    {
      quote:
        "I thought I'd need a panel upgrade but AmpReady helped me understand my options before calling anyone.",
      name: "James T.",
      location: "Seattle",
      role: "Homeowner",
      initials: "JT",
      color: "bg-primary/20 text-primary",
      rotation: -0.3,
    },
  ];

  return (
    <SectionWrapper
      id="testimonials"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-background-alt/40"
    >
      <div className="max-w-container-2xl mx-auto">
        <motion.div className="text-center max-w-2xl mx-auto" variants={scrollFadeUp}>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            What People Are Saying
          </h2>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              className="relative"
              style={{
                transform: `rotate(${t.rotation}deg)`,
                marginTop:
                  index === 1 ? "1.5rem" : index === 2 ? "0.5rem" : "0",
              }}
            >
              <motion.div
                className="bg-surface rounded-2xl p-8 shadow-md border border-text-muted/10 relative overflow-hidden h-full"
                {...cardHover}
              >
                {/* Organic shape background */}
                <div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5"
                  style={{
                    borderRadius: "60% 40% 50% 50% / 50% 60% 40% 60%",
                  }}
                />

                <div className="relative z-10">
                  {/* Quote */}
                  <p className="font-body text-base text-text-secondary leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-6 flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-heading text-sm font-medium ${t.color}`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-body text-sm font-medium text-text-primary">
                        {t.name}
                      </div>
                      <div className="font-body text-xs text-text-muted">
                        {t.location} · {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

// ============================================
// 8. FAQ Section
// ============================================
function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need to know electrical terminology?",
      answer:
        "Not at all. AmpReady asks practical questions in plain language — like where you park, what charger you bought, and what your electrical panel looks like. We translate your answers into the technical details electricians need.",
    },
    {
      question: "How much does EV charger installation cost?",
      answer:
        "Most standard installations range from $500 to $2,000 depending on your panel capacity, wire run distance, and local labor rates. Complex jobs requiring panel upgrades can run $3,000 to $5,000+. AmpReady helps you understand where your project falls before you get quotes.",
    },
    {
      question: "Will I need a panel upgrade?",
      answer:
        "It depends on your existing panel capacity and the charger you want. If your panel has at least 100 amps of service and some spare capacity, you may be fine. AmpReady helps you assess this during the intake so electricians know what to expect.",
    },
    {
      question: "How long does the process take?",
      answer:
        "Submitting your job packet takes about 10 minutes. Most homeowners receive their first quotes within 24-48 hours. Actual installation typically takes 2-6 hours for a standard job, with permits adding a few days to a week depending on your municipality.",
    },
    {
      question: "Is AmpReady free for homeowners?",
      answer:
        "Yes. Homeowners use AmpReady at no cost. We charge electricians a small fee for qualified job leads, which means they are motivated to quote fairly and win your business.",
    },
    {
      question: "What types of EV chargers do you support?",
      answer:
        "AmpReady supports all Level 2 chargers (240V) including popular brands like ChargePoint, Tesla Wall Connector, JuiceBox, Enel X, and ClipperCreek. We also handle NEMA 14-50 outlet installations if you prefer a portable charger setup.",
    },
  ];

  return (
    <SectionWrapper id="faq" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-container-lg mx-auto">
        <motion.div className="text-center max-w-2xl mx-auto" variants={scrollFadeUp}>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            Questions? We&apos;ve Got Answers.
          </h2>
        </motion.div>

        <motion.div
          className="mt-16 space-y-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={staggerItem}
              className="bg-surface rounded-xl border border-text-muted/10 shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left hover:bg-background-alt/50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-heading text-lg font-medium text-text-primary pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={microSpring}
                >
                  <ChevronDown
                    className="w-5 h-5 text-text-muted shrink-0"
                    aria-hidden="true"
                  />
                </motion.div>
              </button>
              <motion.div
                id={`faq-answer-${index}`}
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={layoutSpring}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 font-body text-base text-text-secondary leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

// ============================================
// 9. Final CTA Section
// ============================================
function FinalCtaSection() {
  return (
    <SectionWrapper className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Warm organic background */}
      <div className="absolute inset-0 bg-background-alt/60" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] pointer-events-none">
        <BlobShape
          className="w-full h-full blur-3xl"
          color="primary"
          opacity={0.06}
        />
      </div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] pointer-events-none">
        <BlobShape
          className="w-full h-full blur-3xl"
          color="accent"
          opacity={0.05}
        />
      </div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/3 pointer-events-none"
        style={{
          borderRadius: "55% 45% 40% 60% / 50% 55% 45% 50%",
        }}
      />

      <div className="relative z-10 max-w-container-lg mx-auto text-center">
        <motion.div variants={scrollFadeUp}>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            Stop Guessing. Start Installing.
          </h2>
          <p className="mt-6 font-body text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a homeowner ready to charge or an electrician
            looking for better leads, AmpReady is built for you.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <MotionLink
            href="/get-started"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-text-inverse font-body font-medium rounded-lg shadow-lg hover:shadow-glow transition-shadow"
            variants={staggerItem}
            {...buttonHover}
          >
            <Zap className="w-5 h-5" aria-hidden="true" />
            Get Started as Homeowner
          </MotionLink>
          <MotionLink
            href="/electricians"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-text-primary text-text-primary font-body font-medium rounded-lg hover:bg-text-primary hover:text-text-inverse transition-colors"
            variants={staggerItem}
            {...buttonHover}
          >
            Join as Electrician
            <TrendingUp className="w-4 h-4" aria-hidden="true" />
          </MotionLink>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

// ============================================
// Main Page Component
// ============================================
export default function Home() {
  return (
    <>
      <FaqStructuredData />
      <div className="flex flex-col">
        <HeroSection />
        <TrustBar />
        <ProblemSection />
        <SolutionSection />
        <HomeownersSection />
        <ElectriciansSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </div>
    </>
  );
}
