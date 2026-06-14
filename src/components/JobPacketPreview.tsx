"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ClipboardList, MapPin, Zap } from "lucide-react";
import { layoutSpring, cardHover } from "@/lib/animations";

interface JobPacketPreviewProps {
  packetId?: string;
  status?: "draft" | "ready" | "submitted" | "quoted";
  className?: string;
}

export function JobPacketPreview({
  packetId = "AR-2847",
  status = "ready",
  className,
}: JobPacketPreviewProps) {
  const statusConfig = {
    draft: {
      label: "Draft",
      color: "bg-warning/20 text-warning",
      dotColor: "bg-warning",
    },
    ready: {
      label: "Ready for quote",
      color: "bg-success/20 text-success",
      dotColor: "bg-success",
    },
    submitted: {
      label: "Submitted",
      color: "bg-primary/20 text-primary",
      dotColor: "bg-primary",
    },
    quoted: {
      label: "Quotes received",
      color: "bg-accent/20 text-accent",
      dotColor: "bg-accent",
    },
  };

  const currentStatus = statusConfig[status];

  const sections = [
    {
      number: "01",
      title: "Panel Information",
      detail: "200A service, 3 spare breaker slots, photo verified",
      icon: Zap,
    },
    {
      number: "02",
      title: "Charger Details",
      detail: "ChargePoint Home Flex, 48A, NEMA 14-50 plug",
      icon: Zap,
    },
    {
      number: "03",
      title: "Wire Run Estimate",
      detail: "35 ft from panel to garage, interior walls, unfinished basement",
      icon: MapPin,
    },
    {
      number: "04",
      title: "Parking & Mounting",
      detail: "Attached garage, wall-mounted near driver side, photo provided",
      icon: MapPin,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={layoutSpring}
      className={cn("relative", className)}
      style={{ transform: "rotate(0.5deg)" }}
    >
      <motion.div
        className="bg-surface rounded-2xl shadow-xl border border-text-muted/10 p-6 sm:p-8 relative overflow-hidden"
        {...cardHover}
      >
        {/* Document header */}
        <div className="flex items-center gap-3 pb-4 border-b border-text-muted/10">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <ClipboardList className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="font-heading text-lg font-medium text-text-primary">
              Job Packet #{packetId}
            </div>
            <div className="font-body text-xs text-text-muted">
              Residential EV Charger Installation
            </div>
          </div>
        </div>

        {/* Document sections */}
        <div className="mt-5 space-y-4">
          {sections.map((section) => (
            <div key={section.number} className="flex items-start gap-3">
              <div className="w-8 h-8 bg-accent/10 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                <span className="font-mono text-xs text-accent">{section.number}</span>
              </div>
              <div>
                <div className="font-body text-sm font-medium text-text-primary">
                  {section.title}
                </div>
                <div className="font-body text-xs text-text-muted mt-1">
                  {section.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status bar */}
        <div className="mt-6 pt-4 border-t border-text-muted/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={cn("w-2 h-2 rounded-full", currentStatus.dotColor)} />
            <span className={cn("font-body text-xs px-2 py-1 rounded", currentStatus.color)}>
              {currentStatus.label}
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
      </motion.div>
    </motion.div>
  );
}
