"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

interface ProductCategory {
  id: string
  name: string
  slug: string
}

interface ProductFilterProps {
  categories: ProductCategory[]
  activeCategory?: string | null
}

export function ProductFilter({ categories, activeCategory = null }: ProductFilterProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(activeCategory)

  useEffect(() => {
    // Update selected category when activeCategory prop changes
    setSelectedCategory(activeCategory)
  }, [activeCategory])

  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-muted-foreground mb-3">Filter by Category:</h3>
      <div className="flex flex-wrap gap-2">
        <Link href="/products">
          <Badge
            variant={selectedCategory === null ? "default" : "outline"}
            className="px-4 py-2 text-sm cursor-pointer"
          >
            All Products
          </Badge>
        </Link>
        {categories.map((category) => (
          <Link key={category.id} href={`/products/${category.slug}`}>
            <Badge
              variant={selectedCategory === category.id ? "default" : "outline"}
              className="px-4 py-2 text-sm cursor-pointer"
            >
              {category.name}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  )
}

