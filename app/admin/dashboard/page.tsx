"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  FileText,
  Package,
  FolderTree,
  ImageIcon,
  Download,
  PlusCircle,
  ListFilter,
  Star,
  Clock,
  BarChart3,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAdminAuth } from "@/components/admin-auth-provider"

export default function AdminDashboardPage() {
  const router = useRouter()
  const { isAuthenticated } = useAdminAuth()
  const [stats, setStats] = useState({
    productCount: 0,
    featuredProductCount: 0,
    categoryCount: 0,
    postCount: 0,
    draftPostCount: 0,
    publishedPostCount: 0,
  })

  useEffect(() => {
    // Fetch stats data
    const fetchStats = async () => {
      try {
        // In a real app, you would fetch this data from an API
        // For now, we'll use placeholder data
        setStats({
          productCount: 12,
          featuredProductCount: 4,
          categoryCount: 5,
          postCount: 24,
          draftPostCount: 3,
          publishedPostCount: 21,
        })
      } catch (error) {
        console.error("Error fetching stats:", error)
      }
    }

    if (isAuthenticated) {
      fetchStats()
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return null // The auth provider will handle redirection
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <main className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome to the SenseLive admin dashboard</p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Clock className="h-4 w-4" />
              Last updated: {new Date().toLocaleDateString()}
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <BarChart3 className="h-4 w-4" />
              View Analytics
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.productCount}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Featured Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.featuredProductCount}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.categoryCount}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Blog Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.postCount}</div>
            </CardContent>
          </Card>
        </div>

        {/* Management Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Blog Management
              </CardTitle>
              <CardDescription>Manage blog posts and content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Posts</span>
                <span className="font-medium">{stats.postCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Draft Posts</span>
                <span className="font-medium">{stats.draftPostCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Published Posts</span>
                <span className="font-medium">{stats.publishedPostCount}</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2 w-full">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/admin/posts">
                    <ListFilter className="h-4 w-4 mr-1" />
                    View All Posts
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/admin/posts/new">
                    <PlusCircle className="h-4 w-4 mr-1" />
                    New Post
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Product Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Product Management
              </CardTitle>
              <CardDescription>Manage products and specifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Products</span>
                <span className="font-medium">{stats.productCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Featured Products</span>
                <span className="font-medium">{stats.featuredProductCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Categories</span>
                <span className="font-medium">{stats.categoryCount}</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2 w-full">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/admin/products">
                    <ListFilter className="h-4 w-4 mr-1" />
                    View Products
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/admin/products/new">
                    <PlusCircle className="h-4 w-4 mr-1" />
                    New Product
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Category Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderTree className="h-5 w-5 text-primary" />
                Category Management
              </CardTitle>
              <CardDescription>Manage product categories</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Categories</span>
                <span className="font-medium">{stats.categoryCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Active Categories</span>
                <span className="font-medium">{stats.categoryCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Navigation Categories</span>
                <span className="font-medium">{stats.categoryCount}</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2 w-full">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/admin/categories">
                    <ListFilter className="h-4 w-4 mr-1" />
                    View Categories
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/admin/categories/new">
                    <PlusCircle className="h-4 w-4 mr-1" />
                    New Category
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Media Library */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-primary" />
                Media Library
              </CardTitle>
              <CardDescription>Manage images and media files</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Files</span>
                <span className="font-medium">48</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Images</span>
                <span className="font-medium">36</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Documents</span>
                <span className="font-medium">12</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2 w-full">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/admin/media">
                    <ListFilter className="h-4 w-4 mr-1" />
                    View Media
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/admin/media?upload=true">
                    <PlusCircle className="h-4 w-4 mr-1" />
                    Upload Files
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Download Center */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                Download Center
              </CardTitle>
              <CardDescription>Manage downloadable files and documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Downloads</span>
                <span className="font-medium">32</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Datasheets</span>
                <span className="font-medium">18</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Manuals</span>
                <span className="font-medium">14</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2 w-full">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/admin/downloads">
                    <ListFilter className="h-4 w-4 mr-1" />
                    View Downloads
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/admin/downloads/new">
                    <PlusCircle className="h-4 w-4 mr-1" />
                    Add Document
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Featured Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Featured Items
              </CardTitle>
              <CardDescription>Manage featured products and content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Featured Products</span>
                <span className="font-medium">{stats.featuredProductCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Homepage Highlights</span>
                <span className="font-medium">4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Banner Items</span>
                <span className="font-medium">2</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2 w-full">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/admin/featured">
                    <ListFilter className="h-4 w-4 mr-1" />
                    View Featured
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/admin/featured/manage">
                    <Star className="h-4 w-4 mr-1" />
                    Manage Featured
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

