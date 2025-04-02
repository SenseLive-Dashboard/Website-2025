"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import type { BlogPost, BlogCategory, BlogTag } from "@/lib/blog-types"
import { createPost, updatePost, generateSlug } from "@/lib/blog-service"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Save, X, Calendar, Upload, ImageIcon } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RichTextEditor } from "@/components/rich-text-editor"
import { MediaLibrary } from "@/components/media-library"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"

interface PostFormProps {
  postId?: string
  initialData: Partial<BlogPost>
  categories: BlogCategory[]
  tags: BlogTag[]
  isEditing?: boolean
}

export default function PostForm({ postId, initialData, categories, tags, isEditing = false }: PostFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState<Partial<BlogPost>>(initialData)
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialData.categories || [])
  const [selectedTags, setSelectedTags] = useState<string[]>(initialData.tags || [])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [showMediaLibrary, setShowMediaLibrary] = useState(false)
  const [publishDate, setPublishDate] = useState<Date | undefined>(
    initialData.publishedAt ? new Date(initialData.publishedAt) : new Date(),
  )
  const [isDragging, setIsDragging] = useState(false)

  // Auto-generate slug from title
  useEffect(() => {
    if (formData.title && (!formData.slug || formData.slug === "")) {
      setFormData((prev) => ({
        ...prev,
        slug: generateSlug(formData.title || ""),
      }))
    }
  }, [formData.title])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleContentChange = (content: string) => {
    setFormData((prev) => ({ ...prev, content }))
  }

  const handleStatusChange = (value: string) => {
    setFormData((prev) => ({ ...prev, status: value as "draft" | "published" }))
  }

  const handleCategorySelect = (categoryName: string) => {
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories((prev) => prev.filter((c) => c !== categoryName))
    } else {
      setSelectedCategories((prev) => [...prev, categoryName])
    }
  }

  const handleTagSelect = (tagName: string) => {
    if (selectedTags.includes(tagName)) {
      setSelectedTags((prev) => prev.filter((t) => t !== tagName))
    } else {
      setSelectedTags((prev) => [...prev, tagName])
    }
  }

  const handleMediaSelect = (media: any) => {
    setFormData((prev) => ({ ...prev, featuredImage: media.url }))
    setShowMediaLibrary(false)
  }

  const handlePublishDateChange = (date: Date | undefined) => {
    setPublishDate(date)
    if (date) {
      setFormData((prev) => ({ ...prev, publishedAt: date.toISOString() }))
    }
  }

  // Handle drag and drop for featured image
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0]
      if (file.type.startsWith("image/")) {
        // In a real implementation, you would upload the file to your server
        // For now, we'll just create a local URL
        const imageUrl = URL.createObjectURL(file)
        setFormData((prev) => ({ ...prev, featuredImage: imageUrl }))
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const postData = {
        ...formData,
        categories: selectedCategories,
        tags: selectedTags,
        updatedAt: new Date().toISOString(),
      } as BlogPost

      if (postId) {
        // Update existing post
        await updatePost(postId, postData)
      } else {
        // Create new post
        await createPost(postData as Omit<BlogPost, "id">)
      }

      router.push("/admin/posts")
    } catch (err) {
      console.error("Error saving post:", err)
      setError("An error occurred while saving the post. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Post Content</CardTitle>
              <CardDescription>Enter the main content for your blog post</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title || ""}
                  onChange={handleChange}
                  placeholder="Enter post title"
                  className="text-lg"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  name="slug"
                  value={formData.slug || ""}
                  onChange={handleChange}
                  placeholder="enter-post-slug"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt || ""}
                  onChange={handleChange}
                  placeholder="Brief summary of the post"
                  required
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Content</Label>
                <RichTextEditor
                  initialContent={formData.content}
                  onChange={handleContentChange}
                  placeholder="Write your post content here..."
                  minHeight="400px"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Featured Image</CardTitle>
              <CardDescription>Add a featured image for your post</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div
                  className={`border-2 ${isDragging ? "border-primary" : "border-dashed border-muted-foreground/20"} rounded-lg p-4 transition-colors`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {formData.featuredImage ? (
                    <div className="relative aspect-video w-full overflow-hidden rounded-md">
                      <Image
                        src={formData.featuredImage || "/placeholder.svg"}
                        alt="Featured image preview"
                        fill
                        className="object-cover"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, featuredImage: "" }))}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove image</span>
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12">
                      <ImageIcon className="h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground text-center mb-4">
                        Drag & drop an image here, or click to select from media library
                      </p>
                      <Button type="button" onClick={() => setShowMediaLibrary(true)}>
                        <Upload className="h-4 w-4 mr-2" />
                        Choose Image
                      </Button>
                    </div>
                  )}
                </div>

                {formData.featuredImage && (
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                      Image URL: {formData.featuredImage.substring(0, 40)}...
                    </p>
                    <Button type="button" variant="outline" size="sm" onClick={() => setShowMediaLibrary(true)}>
                      Change Image
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Publish Settings</CardTitle>
              <CardDescription>Configure post publication settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status || "draft"} onValueChange={handleStatusChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Publish Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <Calendar className="mr-2 h-4 w-4" />
                      {publishDate ? format(publishDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent
                      mode="single"
                      selected={publishDate}
                      onSelect={handlePublishDateChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  name="author"
                  value={formData.author || ""}
                  onChange={handleChange}
                  placeholder="Author name"
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="button" variant="outline" onClick={() => router.push("/admin/posts")}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting} className="gap-2">
                <Save className="h-4 w-4" />
                {isSubmitting ? "Saving..." : "Save Post"}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
              <CardDescription>Assign categories to your post</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`category-${category.id}`}
                      checked={selectedCategories.includes(category.name)}
                      onChange={() => handleCategorySelect(category.name)}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
              <CardDescription>Add tags to help readers find your post</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedTags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="gap-1">
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleTagSelect(tag)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove {tag}</span>
                    </button>
                  </Badge>
                ))}
              </div>

              <div className="space-y-2">
                <Label>Available Tags</Label>
                <div className="flex flex-wrap gap-2">
                  {tags
                    .filter((tag) => !selectedTags.includes(tag.name))
                    .map((tag) => (
                      <Badge
                        key={tag.id}
                        variant="outline"
                        className="cursor-pointer hover:bg-muted"
                        onClick={() => handleTagSelect(tag.name)}
                      >
                        {tag.name}
                      </Badge>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>

      {/* Media Library Dialog */}
      <MediaLibrary open={showMediaLibrary} onClose={() => setShowMediaLibrary(false)} onSelect={handleMediaSelect} />
    </form>
  )
}

