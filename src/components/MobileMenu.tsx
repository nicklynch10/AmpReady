"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useMobileMenu } from "@/lib/hooks";
import { pageSpring } from "@/lib/animations";

const navLinks = [
  { href: "/homeowners", label: "For Homeowners" },
  { href: "/electricians", label: "For Electricians" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function MobileMenu() {
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={toggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="p-2 rounded-lg text-text-primary hover:bg-background-alt transition-colors"
      >
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </motion.div>
      </button>

      {/* Slide-out menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 z-40"
              onClick={close}
              aria-hidden="true"
            />

            {/* Menu panel */}
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-background shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-text-muted/10">
                <span className="font-heading text-lg font-medium text-text-primary">
                  Menu
                </span>
                <button
                  onClick={close}
                  aria-label="Close menu"
                  className="p-2 rounded-lg text-text-primary hover:bg-background-alt transition-colors"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 py-4" aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ ...pageSpring, delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={close}
                        className="block px-6 py-3 font-body text-base text-text-primary hover:bg-background-alt hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA */}
              <div className="p-4 border-t border-text-muted/10">
                <Link
                  href="/get-started"
                  onClick={close}
                  className="block w-full text-center px-6 py-3 bg-primary text-text-inverse font-body font-medium rounded-lg shadow-md hover:bg-primary-light transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
