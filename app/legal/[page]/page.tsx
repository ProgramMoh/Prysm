interface PageProps {
  params: Promise<{
    page: string
  }>
}

export default async function LegalPage({ params }: PageProps) {
  const { page } = await params
  const isPrivacy = page === 'privacy'
  const isTerms = page === 'terms'

  if (!isPrivacy && !isTerms) {
    return <div>Page not found</div>
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading tracking-luxury mb-12">
            {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary">
              {/* Placeholder - legal content to be provided by client */}
              Legal content will be provided here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
