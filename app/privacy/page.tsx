import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Prysm',
  description: 'How Prysm collects and protects your data.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-bg-primary min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-bg-secondary mb-4">
          Privacy Policy
        </h1>
        <p className="text-text-secondary mb-12 border-b border-text-secondary/20 pb-8">
          Last Updated: January 1, 2026
        </p>

        <div className="space-y-12 text-text-primary leading-relaxed">
          <section>
            <p className="mb-4">
              We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains the information we collect, how we use it, and your rights under U.S. law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">1. Information We Collect</h2>
            <p className="mb-2">We may collect:</p>
            <ul className="list-disc pl-5 space-y-1 text-text-secondary">
              <li>Contact information (name, email, mailing address)</li>
              <li>Billing and payment information</li>
              <li>Device and usage information (IP address, cookies, browser information)</li>
              <li>Order history, preferences, and interactions with our website or services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">2. How We Use Your Information</h2>
            <p className="mb-2">We use your information to:</p>
            <ul className="list-disc pl-5 space-y-1 text-text-secondary">
              <li>Process orders and payments</li>
              <li>Communicate regarding your orders or account</li>
              <li>Improve products, services, and website experience</li>
              <li>Send promotional offers if you have opted in</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">3. Sharing Personal Information</h2>
            <p>
              We do not sell your personal information for profit. We may share information with trusted service providers who assist us in operating the website or fulfilling orders.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">4. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to improve functionality, personalize your experience, and analyze site traffic. You may disable cookies via your browser settings, but some features may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">5. Data Security</h2>
            <p>
              We implement reasonable technical, administrative, and physical safeguards to protect your data. However, no online system is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">6. Your Rights</h2>
            <p className="mb-4">
              Depending on your state, you may have rights to access, correct, or request deletion of your personal information. To exercise these rights, contact us at: <a href="mailto:support@prysm.com" className="text-accent-gold hover:underline">support@prysm.com</a>.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">7. Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically. Continued use of the Services signifies your acceptance of the updated policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}