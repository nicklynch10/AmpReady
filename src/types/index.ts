/**
 * AmpReady — Global TypeScript Types
 *
 * Shared interfaces and type definitions used across the application.
 */

// ============================================
// Navigation
// ============================================

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// ============================================
// SEO / Metadata
// ============================================

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
}

// ============================================
// UI Components
// ============================================

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  asChild?: boolean;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}

// ============================================
// Animation
// ============================================

export interface SpringConfig {
  stiffness: number;
  damping: number;
  mass: number;
}

export interface AnimationVariant {
  initial?: Record<string, number | string>;
  animate?: Record<string, number | string>;
  exit?: Record<string, number | string>;
  transition?: Record<string, unknown>;
}

// ============================================
// Content / CMS
// ============================================

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  coverImage?: string;
  readingTime?: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  align?: "left" | "right";
}

export interface FAQItem {
  question: string;
  answer: string;
}

// ============================================
// Forms
// ============================================

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "checkbox" | "radio";
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
  helperText?: string;
}

export interface FormError {
  field: string;
  message: string;
}

// ============================================
// API / Data
// ============================================

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

// ============================================
// Electrician / Pro Profile
// ============================================

export interface ElectricianProfile {
  id: string;
  name: string;
  company: string;
  licenseNumber: string;
  insuranceVerified: boolean;
  specialties: string[];
  serviceArea: string[];
  rating: number;
  reviewCount: number;
  completedJobs: number;
  bio?: string;
  photo?: string;
}

// ============================================
// Quote / Job
// ============================================

export interface QuoteRequest {
  id: string;
  homeownerName: string;
  email: string;
  phone?: string;
  address: string;
  chargerType: "level1" | "level2" | "level3";
  panelUpgradeNeeded?: boolean;
  parkingLocation: "garage" | "carport" | "driveway" | "other";
  notes?: string;
  submittedAt: string;
  status: "pending" | "reviewed" | "quoted" | "accepted" | "completed";
}

export interface JobQuote {
  id: string;
  requestId: string;
  electricianId: string;
  price: number;
  timeline: string;
  description: string;
  includesPermit: boolean;
  includesInspection: boolean;
  warrantyMonths: number;
  submittedAt: string;
  status: "pending" | "accepted" | "declined" | "expired";
}
