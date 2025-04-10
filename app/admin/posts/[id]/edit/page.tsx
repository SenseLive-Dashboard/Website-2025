import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { adminMiddleware, getPostById, getCategories, getTags } from "@/lib/blog-service"
import AdminHeader from "@/components/admin-header"
import PostForm from "@/components/post-form"

interface EditPostPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: EditPostPageProps): Promise<Metadata> {
  const post = await getPostById(params.id)

  if (!post) {
    return {
      title: "Post Not Found | SenseLive Admin",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `Edit: ${post.title} | SenseLive Admin`,
    description: "Edit blog post in the SenseLive admin dashboard",
  }
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  // Check if admin is logged in
  await adminMiddleware()

  const post = await getPostById(params.id)

  if (!post) {
    notFound()
  }

  const categories = await getCategories()
  const tags = await getTags()

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />

      <main className="container px-4 md:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Edit Post</h1>
          <p className="text-muted-foreground">Edit an existing blog post</p>
        </div>

        <PostForm postId={params.id} categories={categories} tags={tags} initialData={post} />
      </main>
    </div>
  )
}

