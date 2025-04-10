import type { Metadata } from "next"
import Link from "next/link"
import { adminMiddleware, getAllPosts } from "@/lib/blog-service"
import AdminHeader from "@/components/admin-header"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Edit, Eye } from "lucide-react"
import DeletePostButton from "@/components/delete-post-button"

export const metadata: Metadata = {
  title: "Manage Posts | SenseLive Admin",
  description: "Manage blog posts in the SenseLive admin dashboard",
}

export default async function PostsPage() {
  // Check if admin is logged in
  await adminMiddleware()

  // Fetch all posts
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />

      <main className="container px-4 md:px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
            <p className="text-muted-foreground">Manage blog posts for the SenseLive website</p>
          </div>
          <Button asChild>
            <Link href="/admin/posts/new" className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              New Post
            </Link>
          </Button>
        </div>

        <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
          {posts.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Categories</TableHead>
                    <TableHead>Published</TableHead>
                    <TableHead>Updated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {posts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>
                        <Badge variant={post.status === "published" ? "default" : "secondary"}>
                          {post.status === "published" ? "Published" : "Draft"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {post.categories.slice(0, 2).map((category, index) => (
                            <Badge key={index} variant="outline">
                              {category}
                            </Badge>
                          ))}
                          {post.categories.length > 2 && <Badge variant="outline">+{post.categories.length - 2}</Badge>}
                        </div>
                      </TableCell>
                      <TableCell>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </TableCell>
                      <TableCell>
                        {new Date(post.updatedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="icon" asChild>
                            <Link href={`/blog/${post.slug}`} target="_blank">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">View</span>
                            </Link>
                          </Button>
                          <Button variant="outline" size="icon" asChild>
                            <Link href={`/admin/posts/${post.id}/edit`}>
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Link>
                          </Button>
                          <DeletePostButton postId={post.id} postTitle={post.title} />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-muted-foreground mb-4">No posts found. Create your first post to get started.</p>
              <Button asChild>
                <Link href="/admin/posts/new">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create New Post
                </Link>
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

