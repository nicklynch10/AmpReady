"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { layoutSpring, cardHover } from "@/lib/animations";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  initials: string;
  color?: "primary" | "accent";
  rotate?: number;
  index?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  initials,
  color = "primary",
  rotate = 0,
  index = 0,
  className,
}: TestimonialCardProps) {
  const colorMap = {
    primary: "bg-primary/20 text-primary",
    accent: "bg-accent/20 text-accent",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...layoutSpring, delay: index * 0.1 }}
      style={{ transform: `rotate(${rotate}deg)` }}
      className={cn("relative", className)}
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
            &ldquo;{quote}&rdquo;
          </p>

          {/* Author */}
          <div className="mt-6 flex items-center gap-3">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-heading text-sm font-medium",
                colorMap[color]
              )}
            >
              {initials}
            </div>
            <div>
              <div className="font-body text-sm font-medium text-text-primary">
                {author}
              </div>
              <div className="font-body text-xs text-text-muted">
                {role}
                {company && ` · ${company}`}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
