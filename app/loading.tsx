export default function Loading() {
  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-8 h-8 border-2 border-accent-gold border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-text-secondary">Loading...</p>
      </div>
    </div>
  )
}
