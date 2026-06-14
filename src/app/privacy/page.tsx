import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "AmpReady's privacy policy explains how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://ampready.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-background-alt/40" />
        <div className="relative z-10 max-w-container-lg mx-auto">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="mt-4 font-body text-lg text-text-secondary">
            Last updated: June 14, 2026
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-container-lg mx-auto space-y-12">
          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              What Information We Collect
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              When you use AmpReady to request EV charger installation quotes, we collect:
            </p>
            <ul className="mt-4 space-y-3 list-disc list-inside font-body text-base text-text-secondary">
              <li>
                <strong className="text-text-primary">Homeowner project details:</strong>{" "}
                Your address, parking location, electrical panel capacity, charger type, and project timeline.
              </li>
              <li>
                <strong className="text-text-primary">Contact information:</strong>{" "}
                Your name, email address, and phone number so electricians can reach you with quotes.
              </li>
              <li>
                <strong className="text-text-primary">Photos:</strong>{" "}
                Images of your electrical panel, parking location, and any relevant installation details you choose to upload.
              </li>
              <li>
                <strong className="text-text-primary">Usage data:</strong>{" "}
                Anonymous analytics about how you interact with our site to help us improve the experience.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              How We Use Your Information
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              We use the information you provide to:
            </p>
            <ul className="mt-4 space-y-3 list-disc list-inside font-body text-base text-text-secondary">
              <li>Build and organize your job packet for electricians</li>
              <li>Match you with qualified, licensed electricians in your service area</li>
              <li>Enable electricians to provide accurate, informed quotes</li>
              <li>Communicate with you about your project status and quotes</li>
              <li>Improve our service, features, and user experience</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Information Sharing
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              We share your information only with the electricians you are matched with so they can review your job packet and provide a quote. We do not sell your personal information to third parties. We may share anonymized, aggregated data for analytics and service improvement purposes.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Data Security
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              We take reasonable measures to protect your information, including encryption in transit (SSL/TLS), secure cloud storage, and access controls. While no online service is 100% secure, we follow industry best practices to safeguard your data.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Your Rights
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              You have the right to access, update, or delete your personal information at any time. To exercise these rights, or if you have questions about how we handle your data, please contact us at{" "}
              <a
                href="mailto:privacy@ampready.com"
                className="text-primary hover:underline"
              >
                privacy@ampready.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Contact Us
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at{" "}
              <a
                href="mailto:privacy@ampready.com"
                className="text-primary hover:underline"
              >
                privacy@ampready.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
