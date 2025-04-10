"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { BlogCategory } from "@/lib/blog-types"

interface CategoryFilterProps {
  categories: BlogCategory[]
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Check if we're on a category page
  useEffect(() => {
    if (pathname.startsWith("/blog/category/")) {
      const categorySlug = pathname.split("/").pop() || null
      setActiveCategory(categorySlug)
    } else {
      setActiveCategory(null)
    }
  }, [pathname])

  const handleCategoryClick = (categorySlug: string | null) => {
    if (categorySlug === null) {
      // "All" category - go to main blog page
      router.push("/blog")
    } else {
      router.push(`/blog/category/${categorySlug}`)
    }
  }

  return (
    <div className="relative">
      <ScrollArea className="max-w-full pb-4">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeCategory === null ? "default" : "outline"}
            className="rounded-full"
            onClick={() => handleCategoryClick(null)}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.slug ? "default" : "outline"}
              className="rounded-full"
              onClick={() => handleCategoryClick(category.slug)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </ScrollArea>
      <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  )
}

