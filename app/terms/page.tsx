import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Prysm',
  description: 'Terms and conditions for using Prysm services.',
}

export default function TermsPage() {
  return (
    <div className="bg-bg-primary min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-bg-secondary mb-4">
          Terms & Conditions
        </h1>
        <p className="text-text-secondary mb-12 border-b border-text-secondary/20 pb-8">
          Effective Date: January 1, 2026
        </p>

        <div className="space-y-12 text-text-primary leading-relaxed">
          <section>
            <p className="mb-4">
              Welcome to PRYSM® ("we," "us," "our"). By accessing or using this website, products, or services (collectively, the "Services"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree, please do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">1. Eligibility</h2>
            <p>
              You must be at least 18 years old to use this website. By placing an order, you represent that you are 18 or older and legally able to enter into binding contracts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">2. Orders and Payment</h2>
            <p>
              All orders are subject to acceptance and product availability. We reserve the right to refuse or cancel any order for any reason. Prices and availability are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">3. Intellectual Property</h2>
            <p>
              All content, logos, trademarks, and materials on this site are our property. You may not use, reproduce, or distribute any content without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">4. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">5. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the United States and the State of California, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the Services will be resolved exclusively in the state or federal courts located in California.
            </p>
          </section>

          {/* NEW SECTION: SMS Terms */}
          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">6. SMS/Mobile Messaging</h2>
            <p>
              By consenting to PRYSM® SMS marketing, you agree to receive recurring automated marketing messages (e.g., cart reminders) at the phone number provided. Consent is not a condition of purchase. Message and data rates may apply. Message frequency varies. You can unsubscribe at any time by replying STOP to any message.
            </p>
          </section>

          {/* NEW SECTION: Shipping */}
          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">7. Shipping & Risk of Loss</h2>
            <p>
              All items purchased from PRYSM® are made pursuant to a shipment contract with third-party carriers. While we strive to ensure every package arrives safely, we understand issues may occur.
            </p>
            <p className="mt-4">
              If your shipment is lost, stolen, or damaged in transit, please open a support ticket by emailing <a href="mailto:support@prysm.com" className="text-accent-gold hover:underline">support@prysm.com</a>. We review these claims on a case-by-case basis and will work with you to find a satisfactory resolution, which may include a replacement or refund at our discretion.
            </p>
          </section>

        {/* NEW SECTION: Subscriptions */}
          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">8. Subscription Services & Auto-Renewal</h2>
            <div className="space-y-4">
              <p>
                If you enroll in our subscription program, you agree that your payment method will be charged automatically at the frequency you selected (e.g., monthly).
              </p>
              <ul className="list-disc pl-5 space-y-1 text-text-secondary">
                <li><strong>Auto-Renewal:</strong> Your subscription will automatically renew until you cancel.</li>
                <li><strong>Cancellation:</strong> You may cancel your subscription at any time through your account portal or by contacting customer support. Cancellations must be made at least 24 hours before your next scheduled billing date to avoid being charged for that cycle.</li>
                <li><strong>Pricing:</strong> We reserve the right to change subscription pricing with notice. Continued use after a price change constitutes acceptance.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">9. Amendments</h2>
            <p>
              We may update these Terms at any time. Your continued use of the Services constitutes acceptance of the updated Terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}