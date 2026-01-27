'use client'

import { useState, useRef, useEffect } from 'react'
import { useUser, useClerk } from '@clerk/nextjs'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function AccountMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { user } = useUser()
  const { signOut } = useClerk()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSignOut = async () => {
    await signOut()
    setIsOpen(false)
  }

  if (!user) return null

  const initials = user.firstName?.[0] || user.emailAddresses[0]?.emailAddress[0] || 'U'

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-prysm-best-500 to-prysm-best-900 text-bg-primary font-heading font-semibold hover:scale-110 transition-transform duration-200"
        aria-label="Account menu"
      >
        {initials.toUpperCase()}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-56 bg-bg-primary border border-text-secondary/20 rounded-lg shadow-xl z-50 overflow-hidden"
            >
              <div className="p-4 border-b border-text-secondary/10">
                <p className="text-sm font-heading text-text-primary">{user.firstName || 'User'}</p>
                <p className="text-xs text-text-secondary mt-1 truncate">
                  {user.emailAddresses[0]?.emailAddress}
                </p>
              </div>
              <div className="py-2">
                <Link
                  href="/account"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-text-primary hover:bg-text-secondary/10 transition-colors"
                >
                  My Account
                </Link>
                <Link
                  href="/account?tab=subscriptions"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-text-primary hover:bg-text-secondary/10 transition-colors"
                >
                  Subscriptions
                </Link>
                <Link
                  href="/account?tab=orders"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-text-primary hover:bg-text-secondary/10 transition-colors"
                >
                  Order History
                </Link>
              </div>
              <div className="border-t border-text-secondary/10 py-2">
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-sm text-text-secondary hover:bg-text-secondary/10 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
