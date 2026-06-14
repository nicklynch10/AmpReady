/**
 * AmpReady — Custom Hooks
 *
 * Reusable React hooks for common UI patterns.
 */

import { useState, useEffect, useCallback } from "react";

// ============================================
// Reduced Motion Preference
// ============================================

export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return reducedMotion;
}

// ============================================
// Scroll Position
// ============================================

export function useScrollPosition(): number {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}

// ============================================
// Mobile Menu Toggle
// ============================================

export function useMobileMenu(): {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
} {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback(() => setIsOpen(true), []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return { isOpen, toggle, close, open };
}

// ============================================
// Intersection Observer (for scroll animations)
// ============================================

export function useInView(
  options?: IntersectionObserverInit
): {
  ref: React.RefCallback<HTMLElement>;
  isInView: boolean;
} {
  const [isInView, setIsInView] = useState(false);
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [element, options]);

  const ref = useCallback((node: HTMLElement | null) => {
    setElement(node);
  }, []);

  return { ref, isInView };
}
