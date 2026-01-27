import { PRODUCTS } from '@/lib/constants'
import { notFound } from 'next/navigation'
import ProductDetail from '@/components/shop/ProductDetail'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = Object.values(PRODUCTS).find(p => p.slug === slug)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}
