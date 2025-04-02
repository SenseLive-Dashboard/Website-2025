import { adminMiddleware } from "@/lib/blog-service"
import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Search, Edit, Trash2, ChevronLeft, ChevronRight, Eye, FolderTree } from "lucide-react"
import AdminHeader from "@/components/admin-header"
import { getAllCategories } from "@/lib/product-service"
import { DeleteCategoryButton } from "@/components/delete-category-button"

export const metadata: Metadata = {
  title: "Manage Categories | SenseLive Admin",
  description: "Manage your product categories in the SenseLive admin dashboard",
}

export default async function CategoriesPage({
  searchParams,
}: {
  searchParams: {
    page?: string
    search?: string
  }
}) {
  // Check if admin is logged in
  await adminMiddleware()

  // Get query parameters
  const page = Number(searchParams.page) || 1
  const search = searchParams.search || ""

  // Get categories with filters
  const { categories, totalPages } = await getAllCategories({
    page,
    search,
  })

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />

      <main className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
            <p className="text-muted-foreground">Manage your product categories</p>
          </div>

          <Link href="/admin/categories/new">
            <Button className="gap-2">
              <PlusCircle className="h-4 w-4" />
              New Category
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <div className="flex justify-between gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search categories..." className="pl-10 w-full sm:w-[250px]" defaultValue={search} />
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-muted">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Slug
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Products
                      </th>
                      <th scope="col" className="px-6 py-3">
                        In Navigation
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Last Updated
                      </th>
                      <th scope="col" className="px-6 py-3 text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category) => (
                      <tr key={category.id} className="bg-card border-b hover:bg-muted/50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <FolderTree className="h-5 w-5 text-primary" />
                            <div className="font-medium">{category.name}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{category.slug}</td>
                        <td className="px-6 py-4">
                          <Badge>{category.productCount}</Badge>
                        </td>
                        <td className="px-6 py-4">
                          <Badge variant={category.showInNavigation ? "default" : "secondary"}>
                            {category.showInNavigation ? "Yes" : "No"}
                          </Badge>
                        </td>
                        <td className="px-6 py-4">{new Date(category.updatedAt).toLocaleDateString()}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <Link href={`/products/${category.slug}`} target="_blank">
                              <Button variant="ghost" size="icon" title="View">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </Link>
                            <Link href={`/admin/categories/${category.id}/edit`}>
                              <Button variant="ghost" size="icon" title="Edit">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </Link>
                            <DeleteCategoryButton id={category.id}>
                              <Button variant="ghost" size="icon" title="Delete">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </DeleteCategoryButton>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-muted-foreground">
              Showing page {page} of {totalPages}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled={page <= 1} asChild>
                <Link href={`/admin/categories?page=${page - 1}&search=${search}`}>
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Link>
              </Button>
              <Button variant="outline" size="sm" disabled={page >= totalPages} asChild>
                <Link href={`/admin/categories?page=${page + 1}&search=${search}`}>
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

