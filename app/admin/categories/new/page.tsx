import { adminMiddleware } from "@/lib/blog-service"
import type { Metadata } from "next"
import AdminHeader from "@/components/admin-header"
import { CategoryForm } from "@/components/category-form"

export const metadata: Metadata = {
  title: "Add New Category | SenseLive Admin",
  description: "Add a new product category to the SenseLive catalog",
}

export default async function NewCategoryPage() {
  // Check if admin is logged in
  await adminMiddleware()

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />

      <main className="container px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Add New Category</h1>

        <CategoryForm />
      </main>
    </div>
  )
}

