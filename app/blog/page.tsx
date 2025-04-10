import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getPublishedPosts, getCategories, getTags } from "@/lib/blog-service"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, Tag, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { BlogSearch } from "@/components/blog-search"
import { CategoryFilter } from "@/components/category-filter"

export const metadata: Metadata = {
  title: "Blog | SenseLive IoT Solutions",
  description:
    "Stay updated with the latest news, insights, and trends in IoT, industrial automation, energy management, and smart infrastructure.",
}

export default async function BlogPage() {
  const posts = await getPublishedPosts()
  const categories = await getCategories()
  const tags = await getTags()

  // Get the featured post (first post)
  const featuredPost = posts.length > 0 ? posts[0] : null
  // Get the remaining posts
  const remainingPosts = posts.length > 1 ? posts.slice(1) : []

  return (
    <div className="min-h-screen bg-background">
      {/* Featured Post Section */}
      {featuredPost && (
        <section className="relative w-full h-[70vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image
            src={featuredPost.featuredImage || "/placeholder.svg?height=1200&width=2000"}
            alt={featuredPost.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="max-w-3xl">
                <div className="flex gap-2 mb-4">
                  {featuredPost.categories.slice(0, 2).map((category, index) => (
                    <Badge key={index} className="bg-primary hover:bg-primary/90">
                      {category}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  {featuredPost.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-white/80 mb-8">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>
                      {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                </div>
                <Button asChild size="lg" className="group">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Content Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Latest Articles</h2>
              <p className="text-muted-foreground">Explore our latest insights and industry trends</p>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <BlogSearch />
            </div>
          </div>

          {/* Category Pills */}
          <CategoryFilter categories={categories} />

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {remainingPosts.map((post) => (
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

          {/* Newsletter Subscription */}
          <div className="mt-24 bg-muted rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our newsletter to receive the latest updates, industry insights, and exclusive content.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tags Section */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <h3 className="text-xl font-semibold mb-6">Popular Topics</h3>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Badge
                key={tag.id}
                variant="outline"
                className="py-2 px-4 hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
              >
                <Tag className="h-3 w-3 mr-2" />
                {tag.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

