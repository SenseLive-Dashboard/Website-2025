"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { MediaLibrary } from "@/components/media-library"
import { RichTextEditor } from "@/components/rich-text-editor"
import { createCategory, updateCategory } from "@/lib/product-service"
import { AlertCircle, ImagePlus, Save } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "@/hooks/use-toast"
import Image from "next/image"

// Define the form schema
const categorySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  slug: z.string().min(2, "Slug must be at least 2 characters"),
  description: z.string().optional(),
  showInNavigation: z.boolean().default(true),
  showInFooter: z.boolean().default(true),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  sortOrder: z.number().int().default(0),
})

type CategoryFormValues = z.infer<typeof categorySchema>

interface CategoryFormProps {
  category?: any // Replace with proper type
}

export function CategoryForm({ category }: CategoryFormProps = {}) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mediaLibraryOpen, setMediaLibraryOpen] = useState(false)
  const [categoryImage, setCategoryImage] = useState<string>(category?.image || "")

  // Initialize form with default values or category data
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: category?.name || "",
      slug: category?.slug || "",
      description: category?.description || "",
      showInNavigation: category?.showInNavigation ?? true,
      showInFooter: category?.showInFooter ?? true,
      metaTitle: category?.metaTitle || "",
      metaDescription: category?.metaDescription || "",
      sortOrder: category?.sortOrder || 0,
    },
  })

  // Auto-generate slug from name
  const handleNameChange = (value: string) => {
    if (!category && !form.getValues("slug")) {
      const slug = value
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim()

      form.setValue("slug", slug)
    }
  }

  // Handle form submission
  async function onSubmit(values: CategoryFormValues) {
    setIsSubmitting(true)

    try {
      // Add image data to the form values
      const categoryData = {
        ...values,
        image: categoryImage,
      }

      if (category) {
        // Update existing category
        await updateCategory(category.id, categoryData)
        toast({
          title: "Category updated",
          description: "Your category has been updated successfully.",
        })
      } else {
        // Create new category
        await createCategory(categoryData)
        toast({
          title: "Category created",
          description: "Your category has been created successfully.",
        })
        router.push("/admin/categories")
      }
    } catch (error) {
      console.error("Error saving category:", error)
      toast({
        title: "Error",
        description: "There was an error saving your category. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle media selection
  const handleMediaSelect = (media: any) => {
    setCategoryImage(media.url)
    setMediaLibraryOpen(false)
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="display">Display</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
            </TabsList>

            {/* General Tab */}
            <TabsContent value="general">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter category name"
                              {...field}
                              onChange={(e) => {
                                field.onChange(e)
                                handleNameChange(e.target.value)
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="slug"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Slug</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., wireless-devices" {...field} />
                          </FormControl>
                          <FormDescription>Used in URLs: /products/{field.value}</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="mt-6">
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <RichTextEditor value={field.value || ""} onChange={field.onChange} />
                          </FormControl>
                          <FormDescription>This appears on the category page</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-2">Category Image</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      This image appears on the category page and in navigation
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="border rounded-md overflow-hidden w-40 h-40 relative bg-muted flex items-center justify-center">
                        {categoryImage ? (
                          <Image
                            src={categoryImage || "/placeholder.svg"}
                            alt="Category image"
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <ImagePlus className="h-8 w-8 text-muted-foreground" />
                        )}
                      </div>

                      <div className="space-y-2">
                        <Button type="button" variant="outline" onClick={() => setMediaLibraryOpen(true)}>
                          Select Image
                        </Button>

                        {categoryImage && (
                          <Button type="button" variant="outline" onClick={() => setCategoryImage("")}>
                            Remove
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Display Tab */}
            <TabsContent value="display">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="showInNavigation"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">Show in Navigation</FormLabel>
                            <FormDescription>Display this category in the main navigation menu</FormDescription>
                          </div>
                          <FormControl>
                            <Switch checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="showInFooter"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">Show in Footer</FormLabel>
                            <FormDescription>Display this category in the footer menu</FormDescription>
                          </div>
                          <FormControl>
                            <Switch checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="sortOrder"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sort Order</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseInt(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormDescription>Categories with lower numbers appear first</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* SEO Tab */}
            <TabsContent value="seo">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>SEO Information</AlertTitle>
                      <AlertDescription>
                        These fields help improve your category's visibility in search engines. If left empty, they will
                        be automatically generated from the category name and description.
                      </AlertDescription>
                    </Alert>

                    <FormField
                      control={form.control}
                      name="metaTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Meta Title</FormLabel>
                          <FormControl>
                            <Input placeholder="SEO title (recommended: 50-60 characters)" {...field} />
                          </FormControl>
                          <FormDescription>{field.value?.length || 0} / 60 characters</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="metaDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Meta Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="SEO description (recommended: 150-160 characters)"
                              className="resize-none"
                              rows={3}
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>{field.value?.length || 0} / 160 characters</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end">
            <Button type="submit" className="gap-2" disabled={isSubmitting}>
              <Save className="h-4 w-4" />
              {isSubmitting ? "Saving..." : "Save Category"}
            </Button>
          </div>
        </form>
      </Form>

      {/* Media Library Modal */}
      <MediaLibrary
        open={mediaLibraryOpen}
        onClose={() => setMediaLibraryOpen(false)}
        onSelect={handleMediaSelect}
        multiple={false}
      />
    </div>
  )
}

