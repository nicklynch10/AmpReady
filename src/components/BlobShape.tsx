"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { floatSpring } from "@/lib/animations";

interface BlobShapeProps {
  className?: string;
  color?: "primary" | "accent" | "secondary" | "background";
  opacity?: number;
  blur?: "none" | "sm" | "md" | "lg" | "xl" | "3xl";
  animate?: boolean;
  size?: number;
}

export function BlobShape({
  className,
  color = "primary",
  opacity = 0.06,
  blur = "3xl",
  animate = false,
  size,
}: BlobShapeProps) {
  const colorMap = {
    primary: "#D4A017",
    accent: "#5F8D7E",
    secondary: "#2D2D2D",
    background: "#F5F0E8",
  };

  const blurMap = {
    none: "",
    sm: "blur-sm",
    md: "blur-md",
    lg: "blur-lg",
    xl: "blur-xl",
    "3xl": "blur-3xl",
  };

  const style: React.CSSProperties = {
    backgroundColor: colorMap[color],
    opacity,
    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    width: size ? `${size}px` : undefined,
    height: size ? `${size}px` : undefined,
  };

  if (animate) {
    return (
      <motion.div
        className={cn(blurMap[blur], className)}
        style={style}
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 50% 50% / 50% 40% 60% 50%",
            "50% 50% 40% 60% / 60% 50% 40% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          ...floatSpring,
          duration: 8,
          repeat: Infinity,
        }}
      />
    );
  }

  return <div className={cn(blurMap[blur], className)} style={style} />;
}
