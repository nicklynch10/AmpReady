"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { layoutSpring, cardHover } from "@/lib/animations";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  index = 0,
}: FeatureCardProps) {
  // Alternating slight rotations for anti-AI feel
  const rotate = index % 2 === 0 ? -0.5 : 0.5;

  return (
    <motion.div
      data-animate
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...layoutSpring, delay: index * 0.08 }}
      style={{ transform: `rotate(${rotate}deg)` }}
      className={cn("relative group", className)}
    >
      <motion.div
        className="bg-surface rounded-2xl p-8 shadow-md border border-text-muted/10 relative overflow-hidden h-full transition-transform duration-300 group-hover:rotate-0"
        style={{ transform: "rotate(0deg)" }}
        {...cardHover}
      >
        {/* Organic blob accent */}
        <div
          className="absolute -top-8 -right-8 w-28 h-28 bg-primary/5"
          style={{
            borderRadius: "60% 40% 50% 50% / 50% 60% 40% 60%",
          }}
        />

        <div className="relative z-10">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
            {icon}
          </div>
          <h3 className="font-heading text-xl font-medium text-text-primary leading-snug">
            {title}
          </h3>
          <p className="mt-3 font-body text-base text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
