'use client'

import { useUser, useClerk } from '@clerk/nextjs'
import Link from 'next/link'

export default function AccountMenu() {
  const { user } = useUser()
  const { signOut } = useClerk()

  if (!user) return null

  return (
    <div className="flex flex-col w-full">
      {/* User Details Header */}
      <div className="px-4 py-3 border-b border-text-secondary/10 mb-1">
        <p className="text-sm font-heading font-medium text-text-primary">
          {user.firstName || 'User'}
        </p>
        <p className="text-xs text-text-secondary mt-0.5 truncate max-w-[180px]">
          {user.emailAddresses[0]?.emailAddress}
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col space-y-1 py-1">
        <Link
          href="/account"
          className="block px-4 py-2 text-sm text-text-primary hover:bg-prysm-best-500/10 hover:text-prysm-best-500 rounded-md transition-colors"
        >
          My Account
        </Link>
        <Link
          href="/account?tab=subscriptions"
          className="block px-4 py-2 text-sm text-text-primary hover:bg-prysm-best-500/10 hover:text-prysm-best-500 rounded-md transition-colors"
        >
          Subscriptions
        </Link>
        <Link
          href="/account?tab=orders"
          className="block px-4 py-2 text-sm text-text-primary hover:bg-prysm-best-500/10 hover:text-prysm-best-500 rounded-md transition-colors"
        >
          Order History
        </Link>
      </div>

      {/* Sign Out Section */}
      <div className="border-t border-text-secondary/10 mt-1 pt-1">
        <button
          onClick={() => signOut()}
          className="w-full text-left px-4 py-2 text-sm text-text-secondary hover:bg-red-50 hover:text-red-500 rounded-md transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}