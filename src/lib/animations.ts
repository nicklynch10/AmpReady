/**
 * AmpReady — Animation Utilities
 *
 * Spring physics configurations and animation variants
 * using Motion.dev (Framer Motion v12).
 *
 * All animations use spring physics, not linear easing.
 */

import { type Transition, type Variants } from "motion/react";

// ============================================
// Spring Configurations
// ============================================

export const microSpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 1,
};

export const feedbackSpring: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 35,
  mass: 1,
};

export const layoutSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 25,
  mass: 1,
};

export const pageSpring: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
  mass: 1,
};

export const heroSpring: Transition = {
  type: "spring",
  stiffness: 150,
  damping: 15,
  mass: 1.2,
};

export const bounceSpring: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 10,
  mass: 1,
};

export const floatSpring: Transition = {
  type: "spring",
  stiffness: 50,
  damping: 15,
  mass: 2,
};

// ============================================
// Page Transition Variants
// ============================================

export const pageEnter: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: pageSpring,
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

// ============================================
// Staggered Children
// ============================================

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: microSpring,
  },
};

// ============================================
// Scroll-Triggered Animations
// ============================================

export const scrollFadeUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: pageSpring,
  },
};

export const scrollScaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: layoutSpring,
  },
};

// ============================================
// Hover States (Physics-Based)
// ============================================

export const buttonHover = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: microSpring,
};

export const cardHover = {
  whileHover: { y: -4, rotate: 0.5 },
  whileTap: { scale: 0.98 },
  transition: layoutSpring,
};

// ============================================
// Loading States
// ============================================

export const skeletonPulse: Variants = {
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const spinnerRotate: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// ============================================
// List / Grid Stagger Patterns
// ============================================

export const listStaggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const listStaggerItem: Variants = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: microSpring,
  },
};

export const gridStaggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const gridStaggerItem: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: layoutSpring,
  },
};
