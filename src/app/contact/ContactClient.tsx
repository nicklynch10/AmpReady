"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  Link,
  Globe,
  Send,
  ChevronDown,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Loader2,
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
  feedbackSpring,
} from "@/lib/animations";
import { ScrollSection } from "@/components/sections/ScrollSection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// ============================================
// FAQ Data
// ============================================

const faqItems = [
  {
    question: "How quickly do you respond?",
    answer: "Usually within 24 hours. For urgent electrician applications, we aim to respond same-day.",
  },
  {
    question: "Can I call instead of emailing?",
    answer: "Yes, though email helps us track your request and ensures nothing falls through the cracks.",
  },
  {
    question: "I'm an electrician — how do I join?",
    answer: "Fill out the form above and select 'Electrician Application' as the subject. We'll follow up with next steps.",
  },
  {
    question: "Do you offer partnerships?",
    answer: "We're open to partnerships with EV manufacturers, utilities, and industry organizations. Select 'Partnership' in the subject dropdown.",
  },
];

const contactMethods = [
  {
    title: "Email",
    value: "hello@ampready.com",
    icon: Mail,
    href: "mailto:hello@ampready.com",
  },
  {
    title: "Phone",
    value: "(555) 123-4567",
    icon: Phone,
    href: "tel:+15551234567",
  },
  {
    title: "Social",
    value: "LinkedIn, Twitter/X",
    icon: Globe,
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/company/ampready" },
      { label: "Twitter/X", href: "https://twitter.com/ampready" },
    ],
  },
];

const userTypes = [
  { value: "homeowner", label: "Homeowner" },
  { value: "electrician", label: "Electrician" },
  { value: "partner", label: "Partner" },
  { value: "other", label: "Other" },
];

const subjects = [
  { value: "general", label: "General Question" },
  { value: "homeowner-support", label: "Homeowner Support" },
  { value: "electrician-application", label: "Electrician Application" },
  { value: "partnership", label: "Partnership" },
  { value: "press", label: "Press" },
  { value: "other", label: "Other" },
];

// ============================================
// FAQ Accordion (local, contact-specific styling)
// ============================================

function ContactFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ ...microSpring, delay: index * 0.06 }}
          className={cn(
            "border border-text-primary/10 rounded-xl overflow-hidden bg-surface",
            openIndex === index && "border-primary/30"
          )}
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-heading text-lg font-medium text-text-primary">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={microSpring}
              className="shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-primary" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                id={`faq-answer-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={layoutSpring}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 font-body text-base text-text-secondary leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

// ============================================
// Contact Form
// ============================================

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    userType: "homeowner",
    subject: "general",
    message: "",
  });
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Mock submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={layoutSpring}
        className="p-8 md:p-12 rounded-2xl border border-success/20 bg-success-muted text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ...feedbackSpring, delay: 0.1 }}
        >
          <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-6" />
        </motion.div>
        <h3 className="font-heading text-2xl font-medium text-text-primary mb-3">
          Message Sent!
        </h3>
        <p className="font-body text-base text-text-secondary mb-8 max-w-md mx-auto">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <Button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              userType: "homeowner",
              subject: "general",
              message: "",
            });
          }}
          className="bg-primary text-text-inverse hover:bg-primary-dark"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...microSpring, delay: 0 }}
        >
          <label htmlFor="name" className="block font-body text-sm font-medium text-text-primary mb-2">
            Name <span className="text-error">*</span>
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(
              "h-12 rounded-xl border-text-primary/15 bg-surface",
              errors.name && "border-error focus-visible:ring-error/30"
            )}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 flex items-center gap-1.5 font-body text-sm text-error">
              <AlertCircle className="w-4 h-4" />
              {errors.name}
            </p>
          )}
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...microSpring, delay: 0.05 }}
        >
          <label htmlFor="email" className="block font-body text-sm font-medium text-text-primary mb-2">
            Email <span className="text-error">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(
              "h-12 rounded-xl border-text-primary/15 bg-surface",
              errors.email && "border-error focus-visible:ring-error/30"
            )}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 flex items-center gap-1.5 font-body text-sm text-error">
              <AlertCircle className="w-4 h-4" />
              {errors.email}
            </p>
          )}
        </motion.div>
      </div>

      {/* Phone */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...microSpring, delay: 0.1 }}
      >
        <label htmlFor="phone" className="block font-body text-sm font-medium text-text-primary mb-2">
          Phone <span className="text-text-muted">(optional)</span>
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 123-4567"
          className="h-12 rounded-xl border-text-primary/15 bg-surface"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Type */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...microSpring, delay: 0.15 }}
        >
          <label className="block font-body text-sm font-medium text-text-primary mb-3">
            I am a...
          </label>
          <div className="flex flex-wrap gap-3">
            {userTypes.map((type) => (
              <label
                key={type.value}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border cursor-pointer transition-colors",
                  "font-body text-sm",
                  formData.userType === type.value
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-text-primary/15 bg-surface text-text-secondary hover:border-primary/30"
                )}
              >
                <input
                  type="radio"
                  name="userType"
                  value={type.value}
                  checked={formData.userType === type.value}
                  onChange={handleChange}
                  className="sr-only"
                />
                {type.label}
              </label>
            ))}
          </div>
        </motion.div>

        {/* Subject */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...microSpring, delay: 0.2 }}
        >
          <label htmlFor="subject" className="block font-body text-sm font-medium text-text-primary mb-2">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-text-primary/15 bg-surface px-3 py-1 font-body text-sm text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/50"
          >
            {subjects.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </motion.div>
      </div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...microSpring, delay: 0.25 }}
      >
        <label htmlFor="message" className="block font-body text-sm font-medium text-text-primary mb-2">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="How can we help you?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            "w-full rounded-xl border border-text-primary/15 bg-surface px-3 py-3 font-body text-sm text-text-primary",
            "placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/50",
            "resize-y min-h-[120px]",
            errors.message && "border-error focus-visible:ring-error/30"
          )}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 flex items-center gap-1.5 font-body text-sm text-error">
            <AlertCircle className="w-4 h-4" />
            {errors.message}
          </p>
        )}
      </motion.div>

      {/* Submit */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...microSpring, delay: 0.3 }}
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 px-8 bg-primary text-text-inverse font-body font-medium rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </motion.div>
    </form>
  );
}

// ============================================
// Main Client Component
// ============================================

export default function ContactClient() {
  return (
    <>
      {/* ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact AmpReady",
            description:
              "Get in touch with AmpReady. Whether you're a homeowner, electrician, or partner, we'd love to hear from you.",
            url: "https://ampready.com/contact",
            mainEntity: {
              "@type": "Organization",
              name: "AmpReady",
              email: "hello@ampready.com",
              telephone: "+1-555-123-4567",
              url: "https://ampready.com",
            },
          }),
        }}
      />

      <div className="relative overflow-hidden">
        {/* Organic blob accents */}
        <div
          className="absolute top-20 right-0 w-[450px] h-[450px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-primary/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-96 left-0 w-[350px] h-[350px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-accent/5 blur-3xl pointer-events-none"
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
                Get In <span className="text-primary">Touch</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
                Whether you&apos;re a homeowner with questions, an electrician
                interested in joining, or a partner looking to collaborate, we&apos;d
                love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ScrollSection className="relative py-20 md:py-28 bg-background-alt">
          <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={pageSpring}
                className="lg:col-span-3"
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-8">
                  Send Us a Message
                </h2>
                <ContactForm />
              </motion.div>

              {/* Sidebar info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...pageSpring, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="sticky top-8 space-y-8">
                  <div className="p-6 rounded-2xl border border-text-primary/8 bg-surface shadow-sm">
                    <h3 className="font-heading text-lg font-medium text-text-primary mb-4">
                      Response Times
                    </h3>
                    <ul className="space-y-3 font-body text-sm text-text-secondary">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-success" />
                        General inquiries: ~24 hours
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-success" />
                        Electrician applications: same day
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-warning" />
                        Partnership requests: 1-2 business days
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl border border-text-primary/8 bg-surface shadow-sm">
                    <h3 className="font-heading text-lg font-medium text-text-primary mb-4">
                      What to Include
                    </h3>
                    <ul className="space-y-3 font-body text-sm text-text-secondary">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        Your location or service area
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        Project type or interest
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        Preferred contact method
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        Any timing constraints
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollSection>

        {/* Alternative Contact Methods */}
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
                Other Ways to Reach Us
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
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={method.title}
                    variants={staggerItem}
                    {...cardHover}
                    className={cn(
                      "relative p-8 rounded-2xl border border-text-primary/8 bg-surface shadow-sm",
                      "hover:shadow-md transition-shadow",
                      index % 2 === 0 ? "rotate-[0.4deg]" : "-rotate-[0.3deg]"
                    )}
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-medium text-text-primary mb-2">
                      {method.title}
                    </h3>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="font-body text-base text-text-secondary hover:text-primary transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : method.links ? (
                      <div className="flex flex-wrap gap-3">
                        {method.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-body text-sm text-text-secondary hover:text-primary transition-colors"
                          >
                            {link.label === "Twitter/X" ? (
                              <Link className="w-4 h-4" />
                            ) : (
                              <Globe className="w-4 h-4" />
                            )}
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="font-body text-base text-text-secondary">
                        {method.value}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </ScrollSection>

        {/* FAQ Section */}
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
                Quick Questions
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full" />
            </motion.div>

            <div className="max-w-3xl">
              <ContactFAQ />
            </div>
          </div>
        </ScrollSection>

        {/* Map / Location Placeholder */}
        <ScrollSection className="relative py-20 md:py-28">
          <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={pageSpring}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  Where We Are
                </h2>
                <p className="font-body text-lg text-text-secondary leading-relaxed mb-6">
                  Based in{" "}
                  <span className="font-medium text-text-primary">
                    Austin, Texas
                  </span>{" "}
                  — serving homeowners and electricians nationwide.
                </p>
                <p className="font-body text-base text-text-secondary leading-relaxed">
                  Our team is distributed across the country, but our mission is
                  the same everywhere: make residential electrification easier to
                  quote, route, and complete.
                </p>
              </motion.div>

              {/* Stylized map placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...pageSpring, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-2xl border border-text-primary/8 bg-surface shadow-sm overflow-hidden">
                  <div className="absolute inset-0 p-8">
                    <div className="absolute top-4 left-4 right-4 bottom-4">
                      <svg
                        viewBox="0 0 400 300"
                        className="w-full h-full"
                        aria-hidden="true"
                      >
                        {/* Simplified US outline - abstract */}
                        <path
                          d="M60,80 Q80,60 120,70 Q160,50 200,65 Q240,55 280,70 Q320,60 340,80 L340,180 Q320,200 280,190 Q240,210 200,195 Q160,205 120,190 Q80,200 60,180 Z"
                          fill="hsla(43, 20%, 85%, 0.5)"
                          stroke="hsla(43, 40%, 40%, 0.15)"
                          strokeWidth="1"
                        />
                        {/* Texas highlight */}
                        <path
                          d="M140,160 Q160,150 180,155 Q200,145 220,160 L215,200 Q195,210 175,205 Q155,215 135,200 Z"
                          fill="hsla(43, 78%, 47%, 0.15)"
                          stroke="hsla(43, 78%, 47%, 0.3)"
                          strokeWidth="1.5"
                        />
                        {/* Connection lines */}
                        <line
                          x1="180"
                          y1="175"
                          x2="280"
                          y2="120"
                          stroke="hsla(157, 19%, 46%, 0.3)"
                          strokeWidth="1"
                          strokeDasharray="4,4"
                        />
                        <line
                          x1="180"
                          y1="175"
                          x2="100"
                          y2="100"
                          stroke="hsla(157, 19%, 46%, 0.3)"
                          strokeWidth="1"
                          strokeDasharray="4,4"
                        />
                        <line
                          x1="180"
                          y1="175"
                          x2="300"
                          y2="180"
                          stroke="hsla(157, 19%, 46%, 0.3)"
                          strokeWidth="1"
                          strokeDasharray="4,4"
                        />
                        {/* Location dot */}
                        <circle
                          cx="180"
                          cy="175"
                          r="6"
                          fill="hsla(43, 78%, 47%, 0.8)"
                        />
                        <circle
                          cx="180"
                          cy="175"
                          r="12"
                          fill="none"
                          stroke="hsla(43, 78%, 47%, 0.4)"
                          strokeWidth="2"
                        >
                          <animate
                            attributeName="r"
                            values="12;18;12"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0.6;0;0.6"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                        </circle>
                        {/* Other dots */}
                        <circle cx="280" cy="120" r="4" fill="hsla(157, 19%, 46%, 0.5)" />
                        <circle cx="100" cy="100" r="4" fill="hsla(157, 19%, 46%, 0.5)" />
                        <circle cx="300" cy="180" r="4" fill="hsla(157, 19%, 46%, 0.5)" />
                      </svg>
                    </div>
                  </div>
                  {/* Label */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-surface/90 border border-text-primary/8 shadow-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-body text-sm font-medium text-text-primary">
                      Austin, TX
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollSection>
      </div>
    </>
  );
}
