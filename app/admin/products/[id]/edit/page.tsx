import { adminMiddleware } from "@/lib/blog-service"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import AdminHeader from "@/components/admin-header"
import { ProductForm } from "@/components/product-form"
import { getProductById } from "@/lib/product-service"

interface EditProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: EditProductPageProps): Metadata {
  const product = await getProductById(params.id)

  if (!product) {
    return {
      title: "Product Not Found | SenseLive Admin",
    }
  }

  return {
    title: `Edit ${product.name} | SenseLive Admin`,
    description: `Edit product details for ${product.name}`,
  }
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  // Check if admin is logged in
  await adminMiddleware()

  // Get product data
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />

      <main className="container px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Edit Product: {product.name}</h1>

        <ProductForm product={product} />
      </main>
    </div>
  )
}

