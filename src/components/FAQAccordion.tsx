"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { microSpring, layoutSpring } from "@/lib/animations";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
  defaultOpenIndex?: number | null;
}

export function FAQAccordion({ items, className, defaultOpenIndex = null }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => (
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
