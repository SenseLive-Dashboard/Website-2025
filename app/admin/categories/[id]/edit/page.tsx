import { adminMiddleware } from "@/lib/blog-service"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import AdminHeader from "@/components/admin-header"
import { CategoryForm } from "@/components/category-form"
import { getCategoryById } from "@/lib/product-service"

interface EditCategoryPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: EditCategoryPageProps): Metadata {
  const category = await getCategoryById(params.id)

  if (!category) {
    return {
      title: "Category Not Found | SenseLive Admin",
    }
  }

  return {
    title: `Edit ${category.name} | SenseLive Admin`,
    description: `Edit category details for ${category.name}`,
  }
}

export default async function EditCategoryPage({ params }: EditCategoryPageProps) {
  // Check if admin is logged in
  await adminMiddleware()

  // Get category data
  const category = await getCategoryById(params.id)

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />

      <main className="container px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Edit Category: {category.name}</h1>

        <CategoryForm category={category} />
      </main>
    </div>
  )
}

