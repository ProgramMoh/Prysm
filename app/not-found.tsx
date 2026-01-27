import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl md:text-8xl font-heading tracking-luxury mb-4">
          404
        </h1>
        <p className="text-text-secondary text-xl mb-8">
          Page not found
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-accent-gold text-bg-primary font-heading tracking-luxury hover:bg-accent-gold/90 transition-all duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
