import type { Metadata } from "next"
import { adminMiddleware, getCategories, getTags } from "@/lib/blog-service"
import AdminHeader from "@/components/admin-header"
import PostForm from "@/components/post-form"

export const metadata: Metadata = {
  title: "Create New Post | SenseLive Admin",
  description: "Create a new blog post in the SenseLive admin dashboard",
}

export default async function NewPostPage() {
  // Check if admin is logged in
  await adminMiddleware()

  // Fetch categories and tags
  const categories = await getCategories()
  const tags = await getTags()

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />

      <main className="container px-4 md:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Create New Post</h1>
          <p className="text-muted-foreground">Create a new blog post for the SenseLive website</p>
        </div>

        <PostForm
          categories={categories}
          tags={tags}
          initialData={{
            title: "",
            slug: "",
            excerpt: "",
            content: "",
            featuredImage: "",
            author: "SenseLive Team",
            publishedAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            status: "draft",
            categories: [],
            tags: [],
          }}
        />
      </main>
    </div>
  )
}

