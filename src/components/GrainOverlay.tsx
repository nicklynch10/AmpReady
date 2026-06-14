"use client";

import * as React from "react";

/**
 * GrainOverlay — Ambient texture overlay component
 *
 * Uses the global .grain-overlay class from globals.css.
 * This is a thin wrapper for use in page-level layouts where
 * the layout.tsx grain overlay may not be sufficient.
 */

interface GrainOverlayProps {
  opacity?: number;
  className?: string;
}

export function GrainOverlay({ opacity, className }: GrainOverlayProps) {
  return (
    <div
      className={className}
      aria-hidden="true"
      style={
        opacity !== undefined
          ? { opacity, pointerEvents: "none", position: "fixed", inset: 0, zIndex: 9999 }
          : undefined
      }
    />
  );
}
