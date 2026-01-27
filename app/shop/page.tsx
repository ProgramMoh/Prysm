import { PRODUCTS } from '@/lib/constants'
import ProductCard from '@/components/shop/ProductCard'

export default function ShopPage() {
  const allProducts = Object.values(PRODUCTS)

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-heading tracking-luxury mb-4">
            Shop All
          </h1>
          <p className="text-text-secondary text-lg">
            Premium energy and sleep solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
