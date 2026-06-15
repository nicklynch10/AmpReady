"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { pageSpring } from "@/lib/animations";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollSection({ children, className, delay = 0 }: ScrollSectionProps) {
  return (
    <motion.section
      data-animate
      initial={{ opacity: 0.01, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ ...pageSpring, delay }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function ScrollFadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollFadeInProps) {
  const directionMap = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
  };

  const offset = directionMap[direction];

  return (
    <motion.div
      data-animate
      initial={{ opacity: 0.01, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ ...pageSpring, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
