"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { layoutSpring } from "@/lib/animations";

interface TimelineStepProps {
  number: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  index?: number;
  isLast?: boolean;
  className?: string;
}

export function TimelineStep({
  number,
  title,
  description,
  icon,
  index = 0,
  isLast = false,
  className,
}: TimelineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...layoutSpring, delay: index * 0.12 }}
      className={cn("relative flex gap-6", className)}
    >
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-5 top-14 bottom-0 w-px bg-primary/20" />
      )}

      {/* Number circle */}
      <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        {icon ? (
          <span className="text-primary">{icon}</span>
        ) : (
          <span className="font-heading text-sm font-bold text-primary">
            {number}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <h3 className="font-heading text-xl font-medium text-text-primary">
          {title}
        </h3>
        <p className="mt-2 font-body text-base text-text-secondary leading-relaxed max-w-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
