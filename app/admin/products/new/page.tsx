import { adminMiddleware } from "@/lib/blog-service"
import type { Metadata } from "next"
import AdminHeader from "@/components/admin-header"
import { ProductForm } from "@/components/product-form"

export const metadata: Metadata = {
  title: "Add New Product | SenseLive Admin",
  description: "Add a new product to the SenseLive catalog",
}

export default async function NewProductPage() {
  // Check if admin is logged in
  await adminMiddleware()

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />

      <main className="container px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Add New Product</h1>

        <ProductForm />
      </main>
    </div>
  )
}

