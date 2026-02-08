import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Return & Refund Policy | Prysm',
  description: 'Prysm return and refund guidelines.',
}

export default function RefundPolicyPage() {
  return (
    <div className="bg-bg-primary min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-bg-secondary mb-4">
          Return & Refund Policy
        </h1>
        <p className="text-text-secondary mb-12 border-b border-text-secondary/20 pb-8">
          Effective Date: January 1, 2026
        </p>

        <div className="space-y-12 text-text-primary leading-relaxed">
          <section>
            <p>
              At PRYSM®, customer satisfaction is our priority. If you are not completely satisfied with your purchase, here's how returns and refunds work:
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">1. Eligibility for Returns</h2>
            <ul className="list-disc pl-5 space-y-1 text-text-secondary">
              <li>Returns are accepted within 30 days of purchase.</li>
              <li>Items must be unused, unopened, and in their original packaging.</li>
              <li>Proof of purchase (order number or receipt) is required.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">2. How to Request a Return</h2>
            <p className="mb-2">To request a return:</p>
            <ol className="list-decimal pl-5 space-y-1 text-text-secondary">
              <li>Email us at: <a href="mailto:support@prysm.com" className="text-accent-gold hover:underline">support@prysm.com</a></li>
              <li>Provide your order number and reason for return.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">3. Refunds</h2>
            <ul className="list-disc pl-5 space-y-1 text-text-secondary">
              <li>Approved returns will be refunded to the original payment method.</li>
              <li>Refunds typically take 5-10 business days to process.</li>
              <li>Shipping fees are non-refundable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">4. Exchanges</h2>
            <p>
              We do not offer direct product exchanges. Please return the original item for a refund and place a new order.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-bg-secondary">5. Damaged or Defective Items</h2>
            <p>
              If you receive a damaged or defective item, contact us within 7 days of delivery for a replacement or refund.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}