export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-heading tracking-luxury mb-6">
              About Prysm
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Prysm is dedicated to creating premium natural energy booster and sleep aid drinks
              for those who demand the best. Our formulations are science-forward, designed with
              your performance and wellness in mind.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-heading tracking-luxury text-accent-gold">
              Made in USA
            </h2>
            <p className="text-text-secondary leading-relaxed">
              All our products are formulated in Los Angeles, CA and manufactured in the USA.
              We maintain the highest standards of quality and transparency in everything we create.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-heading tracking-luxury text-accent-gold">
              The Science
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Our products are backed by research and formulated with natural ingredients.
              We believe in transparency and providing you with the information you need to
              make informed decisions about your wellness.
            </p>
            <p className="text-text-secondary leading-relaxed">
              {/* Placeholder for science content - to be filled by client */}
              Detailed ingredient information and scientific backing will be provided here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
