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
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false)
  // New state for Shop dropdown
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false)
  
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
            <div className="hidden md:flex items-center space-x-10">
              
              {/* Shop Dropdown */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
              >
                <span
                  className="text-text-primary hover:text-prysm-best-500 transition-colors duration-200 font-medium py-2"
                >
                  Shop
                </span>

                <AnimatePresence>
                  {isShopDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 pt-2"
                    >
                      <div className="bg-bg-primary border border-text-secondary/10 shadow-xl rounded-md overflow-hidden py-1">
                        <Link 
                          href="/shop/prysm" 
                          className="block px-4 py-2 text-sm text-text-primary hover:bg-prysm-best-500/10 hover:text-prysm-best-500 transition-colors"
                        >
                          The Prysm Line
                        </Link>
                        <Link 
                          href="/shop/nightnite" 
                          className="block px-4 py-2 text-sm text-text-primary hover:bg-nightnite-500/10 hover:text-nightnite-100 transition-colors"
                        >
                          NightNite
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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

              {/* Account Section */}
              {isSignedIn ? (
                <div 
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setIsAccountDropdownOpen(true)}
                  onMouseLeave={() => setIsAccountDropdownOpen(false)}
                >
                  <span
                    className="text-text-primary hover:text-prysm-best-500 transition-colors duration-200 font-medium py-2"
                  >
                    Account
                  </span>

                  <AnimatePresence>
                    {isAccountDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-0 w-56 pt-2"
                      >
                        <div className="bg-bg-primary border border-text-secondary/10 shadow-xl rounded-md overflow-hidden p-2">
                          <AccountMenu />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
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
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
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
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-4">
                  {/* Mobile Shop Submenu */}
                  <div className="space-y-2">
                    <p className="text-text-secondary text-sm font-medium px-1 uppercase tracking-wider">Shop</p>
                    <Link
                      href="/shop/prysm"
                      className="block pl-4 text-text-primary hover:text-prysm-best-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      The Prysm Line
                    </Link>
                    <Link
                      href="/shop/nightnite"
                      className="block pl-4 text-text-primary hover:text-nightnite-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      NightNite
                    </Link>
                  </div>
                  
                  <Link
                    href="/about"
                    className="block text-text-primary hover:text-prysm-best-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <button
                    onClick={() => { setIsCartOpen(true); setIsMenuOpen(false); }}
                    className="block text-text-primary hover:text-accent-gold"
                  >
                    Cart
                  </button>
                  
                  {isSignedIn ? (
                    <div className="pt-2 border-t border-text-secondary/10">
                       <p className="text-text-secondary text-sm font-medium px-1 uppercase tracking-wider mb-2">Account</p>
                       <div className="pl-2"><AccountMenu /></div>
                    </div>
                  ) : (
                    <SignInButton mode="modal">
                      <button className="block w-full text-left px-4 py-2 border border-prysm-best-500 text-prysm-best-500 hover:bg-prysm-best-500/10 font-heading">Sign In</button>
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