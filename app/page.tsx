import Hero from '@/components/home/Hero'
import ProductShowcase from '@/components/home/ProductShowcase'
import ScienceSection from '@/components/home/ScienceSection'
import SystemSection from '@/components/home/SystemSection'
import TrustSection from '@/components/home/TrustSection'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProductShowcase />
      <ScienceSection />
      <SystemSection />
      <TrustSection />
    </div>
  )
}
