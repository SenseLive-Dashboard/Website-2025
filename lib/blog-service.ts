"use server"

import type { BlogPost, BlogCategory, BlogTag } from "./blog-types"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

// In a real application, this would be stored in a database
// For this demo, we'll use in-memory storage with some sample data
let posts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of IoT in Industrial Automation",
    slug: "future-of-iot-industrial-automation",
    excerpt: "Explore how IoT technologies are transforming industrial automation and creating smarter factories.",
    content: `
# The Future of IoT in Industrial Automation

Industrial Internet of Things (IIoT) is revolutionizing manufacturing and industrial processes. By connecting machines, devices, and systems, companies can gather real-time data, improve efficiency, and reduce downtime.

## Key Benefits of IIoT

- **Real-time monitoring**: Track equipment performance and production metrics in real-time
- **Predictive maintenance**: Identify potential failures before they occur
- **Process optimization**: Use data analytics to optimize manufacturing processes
- **Energy management**: Monitor and reduce energy consumption
- **Quality control**: Ensure consistent product quality through automated monitoring

## Implementation Challenges

While the benefits are clear, implementing IIoT solutions comes with challenges:

1. **Security concerns**: Connected systems increase potential attack surfaces
2. **Integration with legacy systems**: Many factories still use older equipment
3. **Data management**: Handling the massive amounts of data generated
4. **ROI justification**: Demonstrating clear return on investment

## SenseLive Solutions

At SenseLive, we address these challenges with our comprehensive IIoT platform that integrates seamlessly with both new and legacy systems. Our solutions provide:

- End-to-end security
- Scalable data management
- Clear analytics and reporting
- Proven ROI metrics

Contact us today to learn how we can help transform your industrial operations with IoT technology.
  `,
    featuredImage: "/placeholder.svg?height=600&width=800",
    author: "SenseLive Team",
    publishedAt: "2023-11-15T10:00:00Z",
    updatedAt: "2023-11-15T10:00:00Z",
    status: "published",
    categories: ["Industrial IoT", "Automation"],
    tags: ["IoT", "Industry 4.0", "Smart Factory"],
  },
  {
    id: "2",
    title: "Energy Management Systems: Reducing Costs and Environmental Impact",
    slug: "energy-management-systems-reducing-costs-environmental-impact",
    excerpt:
      "Learn how modern energy management systems can help reduce operational costs while minimizing environmental impact.",
    content: `
# Energy Management Systems: Reducing Costs and Environmental Impact

Energy management systems (EMS) are becoming essential tools for businesses looking to reduce operational costs and minimize their environmental footprint. These systems provide comprehensive monitoring, analysis, and control of energy consumption across facilities.

## The Business Case for Energy Management

- **Cost reduction**: Typically 10-30% savings on energy bills
- **Regulatory compliance**: Meet increasingly strict environmental regulations
- **Corporate sustainability**: Support ESG goals and initiatives
- **Brand reputation**: Demonstrate environmental responsibility to customers

## Key Features of Modern EMS

1. **Real-time monitoring**: Track energy usage across multiple locations and systems
2. **Demand response**: Automatically adjust consumption during peak pricing periods
3. **Anomaly detection**: Identify unusual patterns that may indicate equipment issues
4. **Reporting and analytics**: Generate insights for continuous improvement
5. **Integration capabilities**: Connect with building management systems and IoT devices

## Implementation Strategy

Implementing an effective energy management system requires a strategic approach:

1. **Assessment**: Evaluate current energy usage and identify opportunities
2. **Goal setting**: Establish clear, measurable objectives
3. **Technology selection**: Choose the right solution for your specific needs
4. **Deployment**: Install hardware and software components
5. **Training**: Ensure staff can effectively use the system
6. **Continuous improvement**: Regularly review and optimize

## SenseLive EMS Solutions

SenseLive offers comprehensive energy management solutions that provide real-time visibility into energy consumption, automated controls, and actionable insights. Our systems are designed to be user-friendly while delivering powerful capabilities for businesses of all sizes.

Contact our team to learn how SenseLive can help you achieve your energy management goals.
  `,
    featuredImage: "/placeholder.svg?height=600&width=800",
    author: "SenseLive Team",
    publishedAt: "2023-10-22T14:30:00Z",
    updatedAt: "2023-10-25T09:15:00Z",
    status: "published",
    categories: ["Energy Management", "Sustainability"],
    tags: ["Energy Efficiency", "Cost Reduction", "ESG"],
  },
  {
    id: "3",
    title: "Water Management Solutions for Smart Cities",
    slug: "water-management-solutions-smart-cities",
    excerpt:
      "Discover how IoT-based water management solutions are helping cities conserve resources and prevent infrastructure issues.",
    content: `
# Water Management Solutions for Smart Cities

Water is one of our most precious resources, and managing it effectively is becoming increasingly important for municipalities worldwide. Smart water management systems leverage IoT technology to monitor, analyze, and optimize water distribution networks.

## The Water Challenge

Cities face numerous water-related challenges:

- **Water scarcity**: Growing populations and climate change are straining water supplies
- **Infrastructure aging**: Many cities have aging water infrastructure prone to leaks and failures
- **Quality concerns**: Ensuring safe drinking water requires constant monitoring
- **Operational costs**: Water treatment and distribution are energy-intensive processes

## Smart Water Management Benefits

Implementing IoT-based water management solutions provides numerous benefits:

1. **Leak detection**: Identify and address leaks quickly, reducing water loss
2. **Quality monitoring**: Real-time monitoring of water quality parameters
3. **Consumption insights**: Understand usage patterns to optimize distribution
4. **Predictive maintenance**: Address infrastructure issues before they cause failures
5. **Resource optimization**: Reduce energy consumption in water processing and distribution

## Key Technologies

Several technologies are driving the smart water management revolution:

- **IoT sensors**: Monitor flow rates, pressure, quality parameters, and more
- **SCADA systems**: Provide centralized control and monitoring
- **Analytics platforms**: Turn data into actionable insights
- **Mobile applications**: Enable field workers to access information and respond to issues

## SenseLive Water Management Solutions

SenseLive offers comprehensive water management solutions that help municipalities and utilities monitor their water infrastructure, detect issues early, and optimize operations. Our systems integrate seamlessly with existing infrastructure while providing modern capabilities for effective water resource management.

Contact us to learn how SenseLive can help your city implement smart water management solutions.
  `,
    featuredImage: "/placeholder.svg?height=600&width=800",
    author: "SenseLive Team",
    publishedAt: "2023-09-18T08:45:00Z",
    updatedAt: "2023-09-20T11:30:00Z",
    status: "published",
    categories: ["Water Management", "Smart Cities"],
    tags: ["Water Conservation", "Infrastructure", "Sustainability"],
  },
]

// Get all categories
const categories: BlogCategory[] = [
  { id: "1", name: "Industrial IoT", slug: "industrial-iot" },
  { id: "2", name: "Automation", slug: "automation" },
  { id: "3", name: "Energy Management", slug: "energy-management" },
  { id: "4", name: "Sustainability", slug: "sustainability" },
  { id: "5", name: "Water Management", slug: "water-management" },
  { id: "6", name: "Smart Cities", slug: "smart-cities" },
]

// Get all tags
const tags: BlogTag[] = [
  { id: "1", name: "IoT", slug: "iot" },
  { id: "2", name: "Industry 4.0", slug: "industry-4-0" },
  { id: "3", name: "Smart Factory", slug: "smart-factory" },
  { id: "4", name: "Energy Efficiency", slug: "energy-efficiency" },
  { id: "5", name: "Cost Reduction", slug: "cost-reduction" },
  { id: "6", name: "ESG", slug: "esg" },
  { id: "7", name: "Water Conservation", slug: "water-conservation" },
  { id: "8", name: "Infrastructure", slug: "infrastructure" },
  { id: "9", name: "Sustainability", slug: "sustainability" },
]

// Admin credentials
const ADMIN_USERNAME = "senselive"
const ADMIN_PASSWORD = "SenseLive#2030"

// Get all published posts
export async function getPublishedPosts(): Promise<BlogPost[]> {
  return posts
    .filter((post) => post.status === "published")
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

// Get posts by category
export async function getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  const category = categories.find((cat) => cat.slug === categorySlug)
  if (!category) return []

  return posts
    .filter((post) => post.status === "published" && post.categories.includes(category.name))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

// Get posts by tag
export async function getPostsByTag(tagSlug: string): Promise<BlogPost[]> {
  const tag = tags.find((t) => t.slug === tagSlug)
  if (!tag) return []

  return posts
    .filter((post) => post.status === "published" && post.tags.includes(tag.name))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

// Search posts
export async function searchPosts(query: string): Promise<BlogPost[]> {
  const searchTerm = query.toLowerCase()

  return posts
    .filter(
      (post) =>
        post.status === "published" &&
        (post.title.toLowerCase().includes(searchTerm) ||
          post.excerpt.toLowerCase().includes(searchTerm) ||
          post.content.toLowerCase().includes(searchTerm) ||
          post.categories.some((cat) => cat.toLowerCase().includes(searchTerm)) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm))),
    )
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

// Get all posts (for admin)
export async function getAllPosts(): Promise<BlogPost[]> {
  return [...posts].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
}

// Get post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return posts.find((post) => post.slug === slug) || null
}

// Get post by ID
export async function getPostById(id: string): Promise<BlogPost | null> {
  return posts.find((post) => post.id === id) || null
}

// Get related posts
export async function getRelatedPosts(postId: string, limit = 3): Promise<BlogPost[]> {
  const currentPost = posts.find((post) => post.id === postId)
  if (!currentPost) return []

  // Find posts with similar categories or tags
  const relatedPosts = posts
    .filter(
      (post) =>
        post.id !== postId &&
        post.status === "published" &&
        (post.categories.some((cat) => currentPost.categories.includes(cat)) ||
          post.tags.some((tag) => currentPost.tags.includes(tag))),
    )
    .sort((a, b) => {
      // Count matching categories and tags
      const aMatches =
        a.categories.filter((cat) => currentPost.categories.includes(cat)).length +
        a.tags.filter((tag) => currentPost.tags.includes(tag)).length

      const bMatches =
        b.categories.filter((cat) => currentPost.categories.includes(cat)).length +
        b.tags.filter((tag) => currentPost.tags.includes(tag)).length

      return bMatches - aMatches
    })
    .slice(0, limit)

  // If not enough related posts, add recent posts
  if (relatedPosts.length < limit) {
    const recentPosts = posts
      .filter(
        (post) => post.id !== postId && post.status === "published" && !relatedPosts.some((rp) => rp.id === post.id),
      )
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, limit - relatedPosts.length)

    return [...relatedPosts, ...recentPosts]
  }

  return relatedPosts
}

// Create a new post
export async function createPost(postData: Omit<BlogPost, "id">): Promise<BlogPost> {
  // In a real app, this would be an API call
  // For now, we'll simulate creating a post
  const newPost = {
    ...postData,
    id: Math.random().toString(36).substring(2, 9),
    updatedAt: new Date().toISOString(),
  }

  // In a real app, you would save this to a database
  console.log("Creating post:", newPost)

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  posts.unshift(newPost)
  revalidatePath("/blog")
  revalidatePath("/admin/posts")
  return newPost
}

// Update an existing post
export async function updatePost(id: string, postData: Partial<BlogPost>): Promise<BlogPost | null> {
  // In a real app, this would be an API call
  // For now, we'll simulate updating a post
  const updatedPost = {
    ...postData,
    id,
    updatedAt: new Date().toISOString(),
  }

  // In a real app, you would update this in a database
  console.log("Updating post:", updatedPost)

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const postIndex = posts.findIndex((post) => post.id === id)

  if (postIndex === -1) {
    return null
  }

  const updatedPost2: BlogPost = {
    ...posts[postIndex],
    ...postData,
    updatedAt: new Date().toISOString(),
  }

  posts[postIndex] = updatedPost2
  revalidatePath("/blog")
  revalidatePath(`/blog/${updatedPost2.slug}`)
  revalidatePath("/admin/posts")
  revalidatePath(`/admin/posts/${id}/edit`)

  return updatedPost2
}

// Delete a post
export async function deletePost(id: string): Promise<boolean> {
  const initialLength = posts.length
  posts = posts.filter((post) => post.id !== id)

  if (posts.length < initialLength) {
    revalidatePath("/blog")
    revalidatePath("/admin/posts")
    return true
  }

  return false
}

// Get all categories
export async function getCategories(): Promise<BlogCategory[]> {
  return categories
}

// Get all tags
export async function getTags(): Promise<BlogTag[]> {
  return tags
}

// Admin authentication
export async function adminLogin(username: string, password: string): Promise<boolean> {
  // Check for hardcoded admin credentials first
  if (username === "senseadmin" && password === "SenseLive#admin2025") {
    // Set admin cookie
    cookies().set("adminLoggedIn", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60, // 1 hour
      path: "/",
    })

    return true
  }

  // Original blog admin login logic
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Set a cookie to indicate the user is logged in
    cookies().set("admin_authenticated", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    })

    return true
  }

  return false // Replace with your actual login logic
}

// Check if admin is logged in
export async function isAdminLoggedIn(): Promise<boolean> {
  const cookie = cookies().get("admin_authenticated")
  return cookie?.value === "true"
}

// Admin logout
export async function adminLogout(): Promise<void> {
  // Clear admin cookies
  cookies().delete("admin")
  cookies().delete("adminLoggedIn")
}

// Admin middleware
export async function adminMiddleware(): Promise<void> {
  // Check for admin cookies
  const adminCookie = cookies().get("admin")
  const adminLoggedInCookie = cookies().get("adminLoggedIn")

  // If no admin cookie, redirect to login
  if (!adminCookie && !adminLoggedInCookie) {
    redirect("/admin/login")
  }
}

// Generate a slug from a title
export async function generateSlug(title: string): Promise<string> {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

// Auto-save draft (would be implemented with a database in a real app)
export async function autoSaveDraft(postData: Partial<BlogPost>): Promise<BlogPost | null> {
  // This is a placeholder for a real auto-save function
  console.log("Auto-saving draft:", postData)

  // In a real implementation, this would save to a database
  // For now, we'll just return the data
  return {
    id: postData.id || "draft-" + Math.random().toString(36).substring(2, 9),
    title: postData.title || "Untitled Draft",
    slug: postData.slug || (await generateSlug(postData.title || "untitled-draft")),
    excerpt: postData.excerpt || "",
    content: postData.content || "",
    featuredImage: postData.featuredImage || "",
    author: postData.author || "SenseLive Team",
    publishedAt: postData.publishedAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: "draft",
    categories: postData.categories || [],
    tags: postData.tags || [],
  } as BlogPost
}

