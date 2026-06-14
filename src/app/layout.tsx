import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ampready.com"),
  title: {
    default: "AmpReady — EV Charger Installation Made Simple",
    template: "%s | AmpReady",
  },
  description:
    "AmpReady connects homeowners with licensed electricians for EV charger installation. Get accurate quotes, professional installation, and peace of mind.",
  keywords: [
    "EV charger installation",
    "home EV charger",
    "Level 2 charger",
    "electrician EV charger",
    "EV charger quote",
    "residential EV charging",
    "panel upgrade",
    "EV charger installer",
  ],
  authors: [{ name: "AmpReady" }],
  creator: "AmpReady",
  publisher: "AmpReady",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ampready.com",
    siteName: "AmpReady",
    title: "AmpReady — EV Charger Installation Made Simple",
    description:
      "AmpReady connects homeowners with licensed electricians for EV charger installation. Get accurate quotes, professional installation, and peace of mind.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AmpReady — EV Charger Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AmpReady — EV Charger Installation Made Simple",
    description:
      "AmpReady connects homeowners with licensed electricians for EV charger installation. Get accurate quotes, professional installation, and peace of mind.",
    images: ["/og-image.jpg"],
    creator: "@ampready",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://ampready.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Fontshare CDN for Zodiak and Sentient */}
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text-primary font-body">
        {/* Skip link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Grain texture overlay */}
        <div className="grain-overlay" aria-hidden="true" />

        {/* Navigation */}
        <header role="banner" className="relative z-50">
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-12 py-6 flex items-center justify-between"
          >
            <Link
              href="/"
              className="font-heading text-2xl font-bold text-text-primary hover:text-primary transition-colors"
            >
              AmpReady
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/homeowners"
                className="font-body text-base text-text-primary hover:text-primary transition-colors"
              >
                For Homeowners
              </Link>
              <Link
                href="/electricians"
                className="font-body text-base text-text-primary hover:text-primary transition-colors"
              >
                For Electricians
              </Link>
              <Link
                href="/how-it-works"
                className="font-body text-base text-text-primary hover:text-primary transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/about"
                className="font-body text-base text-text-primary hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="font-body text-base text-text-primary hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
            <Link
              href="/get-started"
              className="hidden md:inline-flex items-center px-6 py-3 bg-primary text-text-inverse font-body font-medium rounded-lg shadow-md hover:bg-primary-light transition-colors"
            >
              Get Started
            </Link>
          </nav>
        </header>

        {/* Main content */}
        <main id="main-content" className="flex-1 relative z-10">
          {children}
        </main>

        {/* Footer placeholder */}
        <footer
          role="contentinfo"
          className="relative z-10 bg-secondary text-text-inverse"
        >
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Brand column */}
              <div className="md:col-span-1">
                <Link
                  href="/"
                  className="font-heading text-2xl font-bold text-text-inverse hover:text-primary-light transition-colors"
                >
                  AmpReady
                </Link>
                <p className="mt-4 font-body text-sm text-text-inverse-muted leading-relaxed">
                  Connecting homeowners with licensed electricians for EV
                  charger installation. Simple, transparent, professional.
                </p>
              </div>

              {/* Homeowners column */}
              <div>
                <h3 className="font-heading text-lg font-medium text-text-inverse mb-4">
                  For Homeowners
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/homeowners"
                      className="font-body text-sm text-text-inverse-muted hover:text-primary-light transition-colors"
                    >
                      Get a Quote
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/how-it-works"
                      className="font-body text-sm text-text-inverse-muted hover:text-primary-light transition-colors"
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="font-body text-sm text-text-inverse-muted hover:text-primary-light transition-colors"
                    >
                      EV Charging Guides
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Electricians column */}
              <div>
                <h3 className="font-heading text-lg font-medium text-text-inverse mb-4">
                  For Electricians
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/electricians"
                      className="font-body text-sm text-text-inverse-muted hover:text-primary-light transition-colors"
                    >
                      Join as a Pro
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/electricians#pricing"
                      className="font-body text-sm text-text-inverse-muted hover:text-primary-light transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/electricians#faq"
                      className="font-body text-sm text-text-inverse-muted hover:text-primary-light transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company column */}
              <div>
                <h3 className="font-heading text-lg font-medium text-text-inverse mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/about"
                      className="font-body text-sm text-text-inverse-muted hover:text-primary-light transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="font-body text-sm text-text-inverse-muted hover:text-primary-light transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="font-body text-sm text-text-inverse-muted hover:text-primary-light transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-16 pt-8 border-t border-secondary-light flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-body text-sm text-text-inverse-muted">
                &copy; {new Date().getFullYear()} AmpReady. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/privacy"
                  className="font-body text-sm text-text-inverse-muted hover:text-primary-light transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="font-body text-sm text-text-inverse-muted hover:text-primary-light transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
