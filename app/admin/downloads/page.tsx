import { adminMiddleware } from "@/lib/blog-service"
import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  PlusCircle,
  Search,
  Filter,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  BookOpen,
  Cpu,
} from "lucide-react"
import AdminHeader from "@/components/admin-header"
import { getAllDownloads } from "@/lib/download-service"
import { DeleteDownloadButton } from "@/components/delete-download-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Download Center | SenseLive Admin",
  description: "Manage downloadable files in the SenseLive admin dashboard",
}

export default async function DownloadsPage({
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

  // Get downloads with filters
  const { downloads, totalPages } = await getAllDownloads({
    page,
    search,
    type: typeFilter,
  })

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />

      <main className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Download Center</h1>
            <p className="text-muted-foreground">Manage downloadable files and documents</p>
          </div>

          <Link href="/admin/downloads/new">
            <Button className="gap-2">
              <PlusCircle className="h-4 w-4" />
              Add Document
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
              <TabsList>
                <TabsTrigger value="all">All Documents</TabsTrigger>
                <TabsTrigger value="datasheets">Datasheets</TabsTrigger>
                <TabsTrigger value="manuals">Manuals</TabsTrigger>
                <TabsTrigger value="firmware">Firmware</TabsTrigger>
              </TabsList>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search documents..."
                    className="pl-10 w-full sm:w-[250px]"
                    defaultValue={search}
                  />
                </div>
                <div className="flex gap-2">
                  <Select defaultValue={typeFilter}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="datasheet">Datasheets</SelectItem>
                      <SelectItem value="manual">Manuals</SelectItem>
                      <SelectItem value="firmware">Firmware</SelectItem>
                      <SelectItem value="software">Software</SelectItem>
                      <SelectItem value="whitepaper">Whitepapers</SelectItem>
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
                            Document
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Type
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Size
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Related Products
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Date Added
                          </th>
                          <th scope="col" className="px-6 py-3 text-right">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {downloads.map((download) => (
                          <tr key={download.id} className="bg-card border-b hover:bg-muted/50">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="flex-shrink-0">
                                  {download.type === "datasheet" && <FileText className="h-5 w-5 text-blue-500" />}
                                  {download.type === "manual" && <BookOpen className="h-5 w-5 text-green-500" />}
                                  {download.type === "firmware" && <Cpu className="h-5 w-5 text-purple-500" />}
                                  {download.type === "software" && <Download className="h-5 w-5 text-orange-500" />}
                                  {download.type === "whitepaper" && <FileText className="h-5 w-5 text-gray-500" />}
                                </div>
                                <div>
                                  <div className="font-medium">{download.title}</div>
                                  <div className="text-xs text-muted-foreground">{download.description}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <Badge variant="outline">
                                {download.type.charAt(0).toUpperCase() + download.type.slice(1)}
                              </Badge>
                            </td>
                            <td className="px-6 py-4">{download.fileSize}</td>
                            <td className="px-6 py-4">
                              <div className="flex flex-wrap gap-1">
                                {download.relatedProducts?.map((product) => (
                                  <Badge key={product} variant="secondary" className="text-xs">
                                    {product}
                                  </Badge>
                                ))}
                                {(!download.relatedProducts || download.relatedProducts.length === 0) && (
                                  <span className="text-xs text-muted-foreground">None</span>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4">{new Date(download.date).toLocaleDateString()}</td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex justify-end gap-2">
                                <Link href={download.downloadUrl} target="_blank">
                                  <Button variant="ghost" size="icon" title="Download">
                                    <Download className="h-4 w-4" />
                                  </Button>
                                </Link>
                                <Link href={`/admin/downloads/${download.id}/edit`}>
                                  <Button variant="ghost" size="icon" title="Edit">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                </Link>
                                <DeleteDownloadButton id={download.id}>
                                  <Button variant="ghost" size="icon" title="Delete">
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </DeleteDownloadButton>
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
                    <Link href={`/admin/downloads?page=${page - 1}&search=${search}&type=${typeFilter}`}>
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" disabled={page >= totalPages} asChild>
                    <Link href={`/admin/downloads?page=${page + 1}&search=${search}&type=${typeFilter}`}>
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="datasheets" className="mt-0">
              {/* Similar table but filtered for datasheets */}
            </TabsContent>

            <TabsContent value="manuals" className="mt-0">
              {/* Similar table but filtered for manuals */}
            </TabsContent>

            <TabsContent value="firmware" className="mt-0">
              {/* Similar table but filtered for firmware */}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

