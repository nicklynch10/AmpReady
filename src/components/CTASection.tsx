"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { pageSpring, staggerContainer, staggerItem, buttonHover } from "@/lib/animations";

interface CTASectionProps {
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
  secondaryAction?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
  className?: string;
}

export function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden",
        className
      )}
    >
      {/* Warm organic background */}
      <div className="absolute inset-0 bg-background-alt/60" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/3 pointer-events-none"
        style={{
          borderRadius: "55% 45% 40% 60% / 50% 55% 45% 50%",
        }}
      />

      <div className="relative z-10 max-w-container-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={pageSpring}
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            {title}
          </h2>
          <p className="mt-6 font-body text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.a
            href={primaryAction.href}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-text-inverse font-body font-medium rounded-lg shadow-lg hover:shadow-glow transition-shadow"
            variants={staggerItem}
            {...buttonHover}
          >
            {primaryAction.icon}
            {primaryAction.label}
          </motion.a>
          {secondaryAction && (
            <motion.a
              href={secondaryAction.href}
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-text-primary text-text-primary font-body font-medium rounded-lg hover:bg-text-primary hover:text-text-inverse transition-colors"
              variants={staggerItem}
              {...buttonHover}
            >
              {secondaryAction.label}
              {secondaryAction.icon}
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
