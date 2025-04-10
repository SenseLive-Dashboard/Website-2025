import { ProductCard } from "@/components/product-card"

interface RelatedProduct {
  id: string
  name: string
  description: string
  specs: string[]
  image: string
  category: string
}

interface RelatedProductsProps {
  products: RelatedProduct[]
  title?: string
}

export function RelatedProducts({ products, title = "Related Products" }: RelatedProductsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            specs={product.specs}
            image={product.image}
            category={product.category}
          />
        ))}
      </div>
    </div>
  )
}

