'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-primary border-t border-text-secondary/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Changed to 4 columns to fit Legal section cleanly */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* 1. Brand Section */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-heading tracking-luxury text-accent-gold mb-6 block">
              PRYSM
            </Link>
            <p className="text-text-secondary text-sm mb-6 leading-relaxed">
              Premium natural energy booster and sleep aid drinks.
              Formulated in Los Angeles, CA. Manufactured in the USA.
            </p>
          </div>

          {/* 2. Shop Section */}
          <div>
            <h4 className="font-heading text-white font-semibold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/shop/prysm" className="text-text-secondary hover:text-accent-gold transition-colors">
                  The Prysm Line
                </Link>
              </li>
              <li>
                <Link href="/shop/nightnite" className="text-text-secondary hover:text-accent-gold transition-colors">
                  NightNite
                </Link>
              </li>
              <li>
                <Link href="/shop/bundle" className="text-text-secondary hover:text-accent-gold transition-colors">
                  The System Bundle
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Company Section */}
          <div>
            <h4 className="font-heading text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="text-text-secondary hover:text-accent-gold transition-colors">
                  Our Science
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-accent-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Legal Section (New - Per Client Request) */}
          <div>
            <h4 className="font-heading text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/terms" className="text-text-secondary hover:text-accent-gold transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-text-secondary hover:text-accent-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-text-secondary hover:text-accent-gold transition-colors">
                  Return & Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-text-secondary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
          <p>&copy; {currentYear} Prysm Wellness. All rights reserved.</p>
          <div className="flex gap-6">
            {/* Social Media Icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  )
}