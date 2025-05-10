// app/admin/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Keep useRouter for navigation links

import AdminHeader from "@/components/admin-header"; // Import your admin header component
import { useSession } from "next-auth/react"; // Import useSession
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
  Loader2, // Import Loader2 for loading state
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Removed: import { useAdminAuth } (replaced by useSession)

export default function AdminDashboardPage() {
  const router = useRouter();
  const { data: session, status } = useSession(); // Use the session hook

  const [stats, setStats] = useState({
    productCount: 0,
    featuredProductCount: 0,
    categoryCount: 0,
    postCount: 0,
    draftPostCount: 0,
    publishedPostCount: 0,
  });
  const [isLoadingStats, setIsLoadingStats] = useState(true); // State for loading stats

  // Effect to handle authentication status changes
  useEffect(() => {
    // If session loading is finished and user is not authenticated, redirect to login
    if (status === "unauthenticated") {
      router.push("/admin/login"); // Redirect to your login page
    }
  }, [status, router]);

  // Effect to fetch stats only when authenticated
  useEffect(() => {
    const fetchStats = async () => {
      setIsLoadingStats(true);
      try {
        // TODO: Replace with actual API call to fetch stats
        // Example API call (replace with your actual endpoint)
        // const response = await fetch('/api/admin/stats', { headers: { Authorization: `Bearer ${session?.accessToken}` } }); // If using JWT access token
        // if (!response.ok) throw new Error('Failed to fetch stats');
        // const data = await response.json();
        // setStats(data);

        // Using placeholder data for now
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
        setStats({
          productCount: 12,
          featuredProductCount: 4,
          categoryCount: 5,
          postCount: 24,
          draftPostCount: 3,
          publishedPostCount: 21,
        });

      } catch (error) {
        console.error("Error fetching stats:", error);
        // Handle error state, maybe show a notification
      } finally {
        setIsLoadingStats(false);
      }
    };

    // Fetch stats only if authenticated
    if (status === "authenticated") {
      fetchStats();
    }
  }, [status]); // Rerun when authentication status changes

  // Show loading state while checking session
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="ml-2 text-foreground">Loading Session...</p>
      </div>
    );
  }

  // Important: Render null or a simple message if unauthenticated,
  // as the useEffect will trigger the redirect. Avoids rendering the full page.
  if (status === "unauthenticated") {
    return (
       <div className="min-h-screen flex items-center justify-center bg-background">
         <p className="text-foreground">Redirecting to login...</p>
       </div>
    )
  }

  // Render the dashboard content only if authenticated
  // Ensure session object exists just in case, although status check is primary
  if (status === "authenticated" && session) {
    return (

      // Use theme-aware background if admin layout doesn't provide one
      <div className="min-h-screen bg-muted/30">
        {/* Ensure container respects theme */}
        <main className="container px-4 md:px-6 py-8 text-foreground">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                 {/* Personalize welcome message */}
                 Welcome back, {session.user?.name || 'Admin'}!
              </p>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Clock className="h-4 w-4" />
                {new Date().toLocaleDateString()}
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <BarChart3 className="h-4 w-4" />
                View Analytics
              </Button>
              {/* Optional: Add a Sign Out Button */}
              {/* <Button variant="destructive" size="sm" onClick={() => signOut()}>Sign Out</Button> */}
            </div>
          </div>

          {/* Stats Cards - Show loader while fetching */}
          {isLoadingStats ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[...Array(4)].map((_, i) => (
                    <Card key={i} className="h-[100px] flex items-center justify-center bg-card">
                        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                    </Card>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.productCount}</div>
                </CardContent>
              </Card>
              {/* ... other stat cards ... */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Featured Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.featuredProductCount}</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.categoryCount}</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Blog Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.postCount}</div>
                </CardContent>
              </Card>
            </div>
          )}


          {/* Management Cards - Show skeleton or hide while stats loading */}
          {!isLoadingStats && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Blog Management */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Blog Management
                  </CardTitle>
                  <CardDescription>Manage blog posts and content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                   {/* Display fetched stats */}
                   <div className="flex justify-between items-center"><span className="text-sm">Total Posts</span><span className="font-medium">{stats.postCount}</span></div>
                   <div className="flex justify-between items-center"><span className="text-sm">Draft Posts</span><span className="font-medium">{stats.draftPostCount}</span></div>
                   <div className="flex justify-between items-center"><span className="text-sm">Published Posts</span><span className="font-medium">{stats.publishedPostCount}</span></div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                   {/* Links remain the same */}
                  <div className="grid grid-cols-2 gap-2 w-full">
                    <Button variant="outline" size="sm" asChild><Link href="/admin/dashboard/posts"><ListFilter className="h-4 w-4 mr-1" />View All Posts</Link></Button>
                    <Button size="sm" asChild><Link href="/admin/posts/new/"><PlusCircle className="h-4 w-4 mr-1" />New Post</Link></Button>
                  </div>
                </CardFooter>
              </Card>

              {/* Product Management */}
              <Card className="bg-card border-border">
                  <CardHeader><CardTitle className="flex items-center gap-2"><Package className="h-5 w-5 text-primary" />Product Management</CardTitle><CardDescription>Manage products and specifications</CardDescription></CardHeader>
                  <CardContent className="space-y-2">
                      <div className="flex justify-between items-center"><span className="text-sm">Total Products</span><span className="font-medium">{stats.productCount}</span></div>
                      <div className="flex justify-between items-center"><span className="text-sm">Featured Products</span><span className="font-medium">{stats.featuredProductCount}</span></div>
                      <div className="flex justify-between items-center"><span className="text-sm">Categories</span><span className="font-medium">{stats.categoryCount}</span></div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2"><div className="grid grid-cols-2 gap-2 w-full"><Button variant="outline" size="sm" asChild><Link href="/admin/products"><ListFilter className="h-4 w-4 mr-1" />View Products</Link></Button><Button size="sm" asChild><Link href="/admin/products/new"><PlusCircle className="h-4 w-4 mr-1" />New Product</Link></Button></div></CardFooter>
              </Card>

              {/* Category Management */}
              <Card className="bg-card border-border">
                  <CardHeader><CardTitle className="flex items-center gap-2"><FolderTree className="h-5 w-5 text-primary" />Category Management</CardTitle><CardDescription>Manage product categories</CardDescription></CardHeader>
                  <CardContent className="space-y-2">
                      <div className="flex justify-between items-center"><span className="text-sm">Total Categories</span><span className="font-medium">{stats.categoryCount}</span></div>
                      <div className="flex justify-between items-center"><span className="text-sm">Active Categories</span><span className="font-medium">{stats.categoryCount}</span></div>
                      <div className="flex justify-between items-center"><span className="text-sm">Navigation Categories</span><span className="font-medium">{stats.categoryCount}</span></div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2"><div className="grid grid-cols-2 gap-2 w-full"><Button variant="outline" size="sm" asChild><Link href="/admin/categories"><ListFilter className="h-4 w-4 mr-1" />View Categories</Link></Button><Button size="sm" asChild><Link href="/admin/categories/new"><PlusCircle className="h-4 w-4 mr-1" />New Category</Link></Button></div></CardFooter>
              </Card>

              {/* Media Library (using placeholder numbers for now) */}
              <Card className="bg-card border-border">
                  <CardHeader><CardTitle className="flex items-center gap-2"><ImageIcon className="h-5 w-5 text-primary" />Media Library</CardTitle><CardDescription>Manage images and media files</CardDescription></CardHeader>
                  <CardContent className="space-y-2">
                      <div className="flex justify-between items-center"><span className="text-sm">Total Files</span><span className="font-medium">48</span></div>
                      <div className="flex justify-between items-center"><span className="text-sm">Images</span><span className="font-medium">36</span></div>
                      <div className="flex justify-between items-center"><span className="text-sm">Documents</span><span className="font-medium">12</span></div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2"><div className="grid grid-cols-2 gap-2 w-full"><Button variant="outline" size="sm" asChild><Link href="/admin/media"><ListFilter className="h-4 w-4 mr-1" />View Media</Link></Button><Button size="sm" asChild><Link href="/admin/media?upload=true"><PlusCircle className="h-4 w-4 mr-1" />Upload Files</Link></Button></div></CardFooter>
              </Card>

               {/* Download Center (using placeholder numbers for now) */}
              <Card className="bg-card border-border">
                  <CardHeader><CardTitle className="flex items-center gap-2"><Download className="h-5 w-5 text-primary" />Download Center</CardTitle><CardDescription>Manage downloadable files and documents</CardDescription></CardHeader>
                  <CardContent className="space-y-2">
                      <div className="flex justify-between items-center"><span className="text-sm">Total Downloads</span><span className="font-medium">32</span></div>
                      <div className="flex justify-between items-center"><span className="text-sm">Datasheets</span><span className="font-medium">18</span></div>
                      <div className="flex justify-between items-center"><span className="text-sm">Manuals</span><span className="font-medium">14</span></div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2"><div className="grid grid-cols-2 gap-2 w-full"><Button variant="outline" size="sm" asChild><Link href="/admin/downloads"><ListFilter className="h-4 w-4 mr-1" />View Downloads</Link></Button><Button size="sm" asChild><Link href="/admin/downloads/new"><PlusCircle className="h-4 w-4 mr-1" />Add Document</Link></Button></div></CardFooter>
              </Card>

              {/* Featured Items */}
              <Card className="bg-card border-border">
                  <CardHeader><CardTitle className="flex items-center gap-2"><Star className="h-5 w-5 text-primary" />Featured Items</CardTitle><CardDescription>Manage featured products and content</CardDescription></CardHeader>
                  <CardContent className="space-y-2">
                      <div className="flex justify-between items-center"><span className="text-sm">Featured Products</span><span className="font-medium">{stats.featuredProductCount}</span></div>
                      <div className="flex justify-between items-center"><span className="text-sm">Homepage Highlights</span><span className="font-medium">4</span></div>
                      <div className="flex justify-between items-center"><span className="text-sm">Banner Items</span><span className="font-medium">2</span></div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2"><div className="grid grid-cols-2 gap-2 w-full"><Button variant="outline" size="sm" asChild><Link href="/admin/featured"><ListFilter className="h-4 w-4 mr-1" />View Featured</Link></Button><Button size="sm" asChild><Link href="/admin/featured/manage"><Star className="h-4 w-4 mr-1" />Manage Featured</Link></Button></div></CardFooter>
              </Card>
            </div>
          )}
        </main>
      </div>
    );
  }

  // Fallback if status is neither loading, unauthenticated, nor authenticated (shouldn't happen ideally)
  return (
     <div className="min-h-screen flex items-center justify-center bg-background">
         <p className="text-foreground">Something went wrong with authentication status.</p>
     </div>
  );
}