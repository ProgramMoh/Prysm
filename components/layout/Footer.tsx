import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-text-secondary/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading tracking-luxury text-accent-gold mb-4">
              PRYSM
            </h3>
            <p className="text-text-secondary text-sm mb-4 max-w-md">
              Premium natural energy booster and sleep aid drinks.
              Formulated in Los Angeles, CA. Manufactured in the USA.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-text-secondary">
              <span>Formulated in Los Angeles, CA</span>
              <span>Manufactured in the USA</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-text-primary mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-text-secondary hover:text-accent-gold transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop/energy" className="text-text-secondary hover:text-accent-gold transition-colors">
                  Energy Drinks
                </Link>
              </li>
              <li>
                <Link href="/shop/sleep" className="text-text-secondary hover:text-accent-gold transition-colors">
                  Sleep Aids
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-text-primary mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-text-secondary hover:text-accent-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-text-secondary hover:text-accent-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-text-secondary hover:text-accent-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-text-secondary/10 text-center text-sm text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Prysm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
