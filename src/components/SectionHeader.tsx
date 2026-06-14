"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { pageSpring } from "@/lib/animations";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(
        align === "center" && "text-center mx-auto",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={pageSpring}
    >
      {eyebrow && (
        <span className="inline-block font-mono text-sm text-primary tracking-wide uppercase mb-4">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 sm:mt-6 font-body text-lg text-text-secondary leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
