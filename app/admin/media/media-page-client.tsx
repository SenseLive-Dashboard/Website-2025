"use client"

import { adminMiddleware } from "@/lib/blog-service"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle, Search, Filter, Trash2, ChevronLeft, ChevronRight, Copy, Download } from "lucide-react"
import AdminHeader from "@/components/admin-header"
import { getAllMedia } from "@/lib/product-service"
import { DeleteMediaButton } from "@/components/delete-media-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MediaUploader } from "@/components/media-uploader"
import { useState } from "react"

export default async function MediaPageClient({
  searchParams,
}: {
  searchParams: {
    page?: string
    search?: string
    type?: string
  }
}) {
  // Check if admin is logged in
  await adminMiddleware()

  // Get query parameters
  const page = Number(searchParams.page) || 1
  const search = searchParams.search || ""
  const typeFilter = searchParams.type || ""

  // Get media with filters
  const { media, totalPages } = await getAllMedia({
    page,
    search,
    type: typeFilter,
  })

  const [activeFilter, setActiveFilter] = useState<string>("all")

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />

      <main className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Media Library</h1>
            <p className="text-muted-foreground">Manage your images and files</p>
          </div>

          <MediaUploader>
            <Button className="gap-2">
              <PlusCircle className="h-4 w-4" />
              Upload Media
            </Button>
          </MediaUploader>
        </div>

        <div className="mb-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
              <TabsList>
                <TabsTrigger value="all">All Media</TabsTrigger>
                <TabsTrigger value="images">Images</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search media..." className="pl-10 w-full sm:w-[250px]" defaultValue={search} />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={activeFilter === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter("all")}
                >
                  All Media
                </Button>
                <Button
                  variant={activeFilter === "products" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter("products")}
                >
                  Product Images
                </Button>
                <Button
                  variant={activeFilter === "blog" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter("blog")}
                >
                  Blog Images
                </Button>
                <Button
                  variant={activeFilter === "solutions" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter("solutions")}
                >
                  Solution Images
                </Button>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {media.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="aspect-square relative bg-muted">
                      {item.type.startsWith("image/") ? (
                        <Image src={item.url || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <div className="text-4xl text-muted-foreground">
                            {item.type.includes("pdf")
                              ? "PDF"
                              : item.type.includes("word")
                                ? "DOC"
                                : item.type.includes("excel")
                                  ? "XLS"
                                  : "FILE"}
                          </div>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-3">
                      <div className="text-sm font-medium truncate">{item.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{(item.size / 1024).toFixed(1)} KB</div>
                      <div className="flex justify-between mt-2">
                        <Button variant="ghost" size="icon" title="Copy URL">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Download">
                          <Download className="h-4 w-4" />
                        </Button>
                        <DeleteMediaButton id={item.id}>
                          <Button variant="ghost" size="icon" title="Delete">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </DeleteMediaButton>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-6">
                <div className="text-sm text-muted-foreground">
                  Showing page {page} of {totalPages}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled={page <= 1} asChild>
                    <Link href={`/admin/media?page=${page - 1}&search=${search}&type=${typeFilter}`}>
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" disabled={page >= totalPages} asChild>
                    <Link href={`/admin/media?page=${page + 1}&search=${search}&type=${typeFilter}`}>
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="images" className="mt-0">
              {/* Similar grid but filtered for images */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {media
                  .filter((item) => item.type.startsWith("image/"))
                  .map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="aspect-square relative bg-muted">
                        <Image src={item.url || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <CardContent className="p-3">
                        <div className="text-sm font-medium truncate">{item.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{(item.size / 1024).toFixed(1)} KB</div>
                        <div className="flex justify-between mt-2">
                          <Button variant="ghost" size="icon" title="Copy URL">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Download">
                            <Download className="h-4 w-4" />
                          </Button>
                          <DeleteMediaButton id={item.id}>
                            <Button variant="ghost" size="icon" title="Delete">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </DeleteMediaButton>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="documents" className="mt-0">
              {/* Similar grid but filtered for documents */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {media
                  .filter((item) => !item.type.startsWith("image/"))
                  .map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="aspect-square relative bg-muted flex items-center justify-center">
                        <div className="text-4xl text-muted-foreground">
                          {item.type.includes("pdf")
                            ? "PDF"
                            : item.type.includes("word")
                              ? "DOC"
                              : item.type.includes("excel")
                                ? "XLS"
                                : "FILE"}
                        </div>
                      </div>
                      <CardContent className="p-3">
                        <div className="text-sm font-medium truncate">{item.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{(item.size / 1024).toFixed(1)} KB</div>
                        <div className="flex justify-between mt-2">
                          <Button variant="ghost" size="icon" title="Copy URL">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Download">
                            <Download className="h-4 w-4" />
                          </Button>
                          <DeleteMediaButton id={item.id}>
                            <Button variant="ghost" size="icon" title="Delete">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </DeleteMediaButton>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

