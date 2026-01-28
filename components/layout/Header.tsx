'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SignInButton, useUser } from '@clerk/nextjs'
import CartDrawer from '@/components/cart/CartDrawer'
import AccountMenu from './AccountMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  // New state to track hovering over the desktop Account link
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false)
  
  const { isSignedIn } = useUser()

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 backdrop-blur-sm border-b border-text-secondary/10">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl font-heading font-semibold tracking-tight bg-gradient-to-r from-prysm-best-100 to-prysm-best-900 bg-clip-text text-transparent group-hover:from-prysm-best-400 group-hover:to-prysm-thinq-400 transition-all duration-300">
                PRYSM
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/shop"
                className="text-text-primary hover:text-prysm-best-500 transition-colors duration-200 font-medium"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-text-primary hover:text-prysm-best-500 transition-colors duration-200 font-medium"
              >
                About
              </Link>

              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-text-primary hover:text-prysm-best-500 transition-colors duration-200 font-medium"
                aria-label="Open cart"
              >
                Cart
              </button>

              {/* Dynamic Account Section */}
              {isSignedIn ? (
                // Wrapper for the Dropdown Interaction
                <div 
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setIsAccountDropdownOpen(true)}
                  onMouseLeave={() => setIsAccountDropdownOpen(false)}
                >
                  <Link
                    href="/account"
                    className="text-text-primary hover:text-prysm-best-500 transition-colors duration-200 font-medium py-2"
                  >
                    Account
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isAccountDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-0 w-56 pt-2" // pt-2 acts as a bridge so mouse doesn't lose focus
                      >
                        <div className="bg-bg-primary border border-text-secondary/10 shadow-xl rounded-md overflow-hidden p-2">
                          <AccountMenu />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                // Sign In Button (Only visible if NOT signed in)
                <SignInButton mode="modal">
                  <button className="px-4 py-2 border border-prysm-best-500 text-prysm-best-500 hover:bg-prysm-best-500/10 transition-colors duration-200 font-heading">
                    Sign In
                  </button>
                </SignInButton>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-text-primary"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-4">
                  <Link
                    href="/shop"
                    className="block text-text-primary hover:text-prysm-best-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Shop
                  </Link>
                  <Link
                    href="/about"
                    className="block text-text-primary hover:text-prysm-best-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <button
                    onClick={() => {
                      setIsCartOpen(true)
                      setIsMenuOpen(false)
                    }}
                    className="block text-text-primary hover:text-accent-gold transition-colors"
                  >
                    Cart
                  </button>
                  
                  {/* Mobile Account Handling */}
                  {isSignedIn ? (
                    <div className="pt-2 border-t border-text-secondary/10">
                      <div className="mb-2">
                        <Link
                          href="/account"
                          className="block text-text-primary font-medium hover:text-prysm-best-500"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          My Account
                        </Link>
                      </div>
                      <div className="pl-2">
                        {/* Render menu items inline for mobile */}
                        <AccountMenu />
                      </div>
                    </div>
                  ) : (
                    <SignInButton mode="modal">
                      <button className="block w-full text-left px-4 py-2 border border-prysm-best-500 text-prysm-best-500 hover:bg-prysm-best-500/10 transition-colors font-heading">
                        Sign In
                      </button>
                    </SignInButton>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}