import { adminMiddleware } from "@/lib/blog-service"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Search, Filter, Star, StarOff, Edit, Trash2, ChevronLeft, ChevronRight, Eye } from "lucide-react"
import AdminHeader from "@/components/admin-header"
import { getAllProducts } from "@/lib/product-service"
import { DeleteProductButton } from "@/components/delete-product-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Manage Products | SenseLive Admin",
  description: "Manage your product catalog in the SenseLive admin dashboard",
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: {
    page?: string
    search?: string
    category?: string
    status?: string
  }
}) {
  // Check if admin is logged in
  await adminMiddleware()

  // Get query parameters
  const page = Number(searchParams.page) || 1
  const search = searchParams.search || ""
  const categoryFilter = searchParams.category || ""
  const statusFilter = searchParams.status || ""

  // Get products with filters
  const { products, totalPages } = await getAllProducts({
    page,
    search,
    category: categoryFilter,
    status: statusFilter,
  })

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />

      <main className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Products</h1>
            <p className="text-muted-foreground">Manage your product catalog</p>
          </div>

          <Link href="/admin/products/new">
            <Button className="gap-2">
              <PlusCircle className="h-4 w-4" />
              New Product
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
              <TabsList>
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="published">Published</TabsTrigger>
                <TabsTrigger value="draft">Drafts</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
              </TabsList>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search products..." className="pl-10 w-full sm:w-[250px]" defaultValue={search} />
                </div>
                <div className="flex gap-2">
                  <Select defaultValue={categoryFilter}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="gateways">Modbus Gateways</SelectItem>
                      <SelectItem value="controllers">Remote IO Controllers</SelectItem>
                      <SelectItem value="wireless">LoRa/ZigBee Devices</SelectItem>
                      <SelectItem value="connectivity">4G/5G Solutions</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <Card>
                <CardContent className="p-0">
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs uppercase bg-muted">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Product
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Category
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Featured
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
                        {products.map((product) => (
                          <tr key={product.id} className="bg-card border-b hover:bg-muted/50">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 relative rounded overflow-hidden flex-shrink-0">
                                  <Image
                                    src={product.image || "/placeholder.svg?height=40&width=40"}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <div className="font-medium">{product.name}</div>
                                  <div className="text-xs text-muted-foreground">{product.id}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              {product.categories.map((category) => (
                                <Badge key={category} variant="outline" className="mr-1">
                                  {category}
                                </Badge>
                              ))}
                            </td>
                            <td className="px-6 py-4">
                              <Badge variant={product.status === "published" ? "default" : "secondary"}>
                                {product.status === "published" ? "Published" : "Draft"}
                              </Badge>
                            </td>
                            <td className="px-6 py-4">
                              {product.featured ? (
                                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                              ) : (
                                <StarOff className="h-5 w-5 text-muted-foreground" />
                              )}
                            </td>
                            <td className="px-6 py-4">{new Date(product.updatedAt).toLocaleDateString()}</td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex justify-end gap-2">
                                <Link href={`/products/${product.category}/${product.id}`} target="_blank">
                                  <Button variant="ghost" size="icon" title="View">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </Link>
                                <Link href={`/admin/products/${product.id}/edit`}>
                                  <Button variant="ghost" size="icon" title="Edit">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                </Link>
                                <DeleteProductButton id={product.id}>
                                  <Button variant="ghost" size="icon" title="Delete">
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </DeleteProductButton>
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
                    <Link
                      href={`/admin/products?page=${page - 1}&search=${search}&category=${categoryFilter}&status=${statusFilter}`}
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" disabled={page >= totalPages} asChild>
                    <Link
                      href={`/admin/products?page=${page + 1}&search=${search}&category=${categoryFilter}&status=${statusFilter}`}
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="published" className="mt-0">
              {/* Similar table but filtered for published products */}
            </TabsContent>

            <TabsContent value="draft" className="mt-0">
              {/* Similar table but filtered for draft products */}
            </TabsContent>

            <TabsContent value="featured" className="mt-0">
              {/* Similar table but filtered for featured products */}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

