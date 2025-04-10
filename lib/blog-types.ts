export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  author: string
  publishedAt: string
  updatedAt: string
  status: "draft" | "published"
  categories: string[]
  tags: string[]
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
}

export interface BlogTag {
  id: string
  name: string
  slug: string
}

