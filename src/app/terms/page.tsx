import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "AmpReady's terms of service outline the rules and guidelines for using our platform.",
  alternates: {
    canonical: "https://ampready.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-background-alt/40" />
        <div className="relative z-10 max-w-container-lg mx-auto">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary leading-[1.1]">
            Terms of Service
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
              Acceptance of Terms
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              By accessing or using AmpReady, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform. We may update these terms from time to time, and your continued use of the service constitutes acceptance of any changes.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Description of Service
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              AmpReady is a platform that connects homeowners seeking EV charger installation with licensed electricians. We do not perform electrical work ourselves. Our role is to collect project details from homeowners, organize them into a job packet, and share that packet with qualified electricians in the homeowner's area who may then provide quotes and perform the work.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              User Responsibilities
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              As a homeowner using AmpReady, you agree to:
            </p>
            <ul className="mt-4 space-y-3 list-disc list-inside font-body text-base text-text-secondary">
              <li>Provide accurate and truthful information about your project, property, and contact details</li>
              <li>Only upload photos that you own or have permission to share</li>
              <li>Communicate respectfully with electricians matched through our platform</li>
              <li>Not use the platform for any illegal or fraudulent purpose</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Contractor Responsibilities
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              Electricians using AmpReady agree to:
            </p>
            <ul className="mt-4 space-y-3 list-disc list-inside font-body text-base text-text-secondary">
              <li>Maintain valid licensing and insurance as required by their jurisdiction</li>
              <li>Provide accurate, good-faith quotes based on the job packet information</li>
              <li>Honor quoted prices barring unforeseen circumstances discovered on-site</li>
              <li>Perform all work in compliance with local codes and safety standards</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Limitations of Liability
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              AmpReady is a connection platform, not an electrical contractor. We do not perform, supervise, or guarantee any electrical work. We are not liable for the quality, timeliness, or outcome of any installation performed by electricians you meet through our platform. Any disputes regarding work quality, pricing, or scheduling should be resolved directly between the homeowner and the electrician. We make reasonable efforts to verify electrician credentials but cannot guarantee the accuracy of all contractor-provided information.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Dispute Resolution
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              Any disputes arising from your use of AmpReady shall first be addressed through informal negotiation. If a dispute cannot be resolved informally, it will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, held in the state where AmpReady is headquartered.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Changes to Terms
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              We may modify these Terms of Service at any time. We will notify users of significant changes by posting the updated terms on our website and updating the "Last updated" date. Your continued use of AmpReady after such changes constitutes your acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Contact Us
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a
                href="mailto:legal@ampready.com"
                className="text-primary hover:underline"
              >
                legal@ampready.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
