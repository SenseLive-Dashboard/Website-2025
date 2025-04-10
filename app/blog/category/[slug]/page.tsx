import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getPostsByCategory, getCategories } from "@/lib/blog-service"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { BlogSearch } from "@/components/blog-search"
import { CategoryFilter } from "@/components/category-filter"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const categories = await getCategories()
  const category = categories.find((cat) => cat.slug === params.slug)

  return {
    title: category ? `${category.name} | SenseLive Blog` : "Category | SenseLive Blog",
    description: category
      ? `Explore articles about ${category.name} on the SenseLive blog`
      : "Explore articles by category on the SenseLive blog",
  }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const categorySlug = params.slug
  const posts = await getPostsByCategory(categorySlug)
  const categories = await getCategories()
  const category = categories.find((cat) => cat.slug === categorySlug)

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 md:px-6 py-16 mx-auto">
        <div className="mb-8">
          <Link href="/blog" className="flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{category ? category.name : "Category"}</h1>
          <p className="text-muted-foreground">
            {posts.length} {posts.length === 1 ? "article" : "articles"} in this category
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="w-full md:w-auto">
            <BlogSearch />
          </div>
        </div>

        <CategoryFilter categories={categories} />

        <div className="mt-12">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                  <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.featuredImage || "/placeholder.svg?height=600&width=800"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex gap-2 mb-3">
                        {post.categories.slice(0, 1).map((category, index) => (
                          <Badge key={index} variant="secondary" className="font-normal">
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read more <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-2">No articles found</h2>
              <p className="text-muted-foreground mb-8">
                We couldn't find any posts in this category. Try browsing a different category.
              </p>
              <Button asChild>
                <Link href="/blog">View All Posts</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

