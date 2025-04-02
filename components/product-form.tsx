"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MediaLibrary } from "@/components/media-library"
import { RichTextEditor } from "@/components/rich-text-editor"
import { createProduct, updateProduct } from "@/lib/product-service"
import { AutoSaveIndicator } from "@/components/auto-save-indicator"
import { X, Plus, ImagePlus, AlertCircle, Save, Eye } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"

// Define the form schema
const productSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  id: z.string().min(2, "ID must be at least 2 characters"),
  shortDescription: z.string().min(10, "Short description must be at least 10 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  category: z.string().min(1, "Please select a primary category"),
  categories: z.array(z.string()).min(1, "Please select at least one category"),
  status: z.enum(["draft", "published"]),
  featured: z.boolean().default(false),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  metaKeywords: z.string().optional(),
  keyFeatures: z.array(z.string()).min(1, "Add at least one key feature"),
  specifications: z.record(z.record(z.string())).optional(),
  datasheetUrl: z.string().optional(),
})

type ProductFormValues = z.infer<typeof productSchema>

interface ProductFormProps {
  product?: any // Replace with proper type
}

export function ProductForm({ product }: ProductFormProps = {}) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [autoSaveStatus, setAutoSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")
  const [mediaLibraryOpen, setMediaLibraryOpen] = useState(false)
  const [currentMediaField, setCurrentMediaField] = useState<string | null>(null)
  const [featuredImage, setFeaturedImage] = useState<string>(product?.image || "")
  const [galleryImages, setGalleryImages] = useState<string[]>(product?.galleryImages || [])
  const [keyFeature, setKeyFeature] = useState("")
  const [specCategory, setSpecCategory] = useState("")
  const [specKey, setSpecKey] = useState("")
  const [specValue, setSpecValue] = useState("")
  const [availableCategories, setAvailableCategories] = useState([
    { id: "gateways", name: "Modbus Gateways" },
    { id: "controllers", name: "Remote IO Controllers" },
    { id: "connectivity", name: "4G/5G Solutions" },
    { id: "wireless", name: "LoRa/ZigBee Devices" },
    { id: "fiber", name: "Optical Fiber" },
    { id: "wifi", name: "WiFi Solutions" },
  ])

  // Initialize form with default values or product data
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: product?.name || "",
      id: product?.id || "",
      shortDescription: product?.shortDescription || "",
      content: product?.content || "",
      category: product?.category || "",
      categories: product?.categories || [],
      status: product?.status || "draft",
      featured: product?.featured || false,
      metaTitle: product?.metaTitle || "",
      metaDescription: product?.metaDescription || "",
      metaKeywords: product?.metaKeywords || "",
      keyFeatures: product?.keyFeatures || [],
      specifications: product?.specifications || {},
      datasheetUrl: product?.datasheetUrl || "",
    },
  })

  // Auto-save functionality
  useEffect(() => {
    const subscription = form.watch((value) => {
      setAutoSaveStatus("saving")

      // Simulate auto-save with a delay
      const timer = setTimeout(() => {
        console.log("Auto-saving:", value)
        setAutoSaveStatus("saved")
      }, 1000)

      return () => clearTimeout(timer)
    })

    return () => subscription.unsubscribe()
  }, [form.watch])

  // Handle form submission
  async function onSubmit(values: ProductFormValues) {
    setIsSubmitting(true)

    try {
      // Add image data to the form values
      const productData = {
        ...values,
        image: featuredImage,
        galleryImages,
      }

      if (product) {
        // Update existing product
        await updateProduct(product.id, productData)
        toast({
          title: "Product updated",
          description: "Your product has been updated successfully.",
        })
      } else {
        // Create new product
        await createProduct(productData)
        toast({
          title: "Product created",
          description: "Your product has been created successfully.",
        })
        router.push("/admin/products")
      }
    } catch (error) {
      console.error("Error saving product:", error)
      toast({
        title: "Error",
        description: "There was an error saving your product. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle media selection
  const handleMediaSelect = (media: any) => {
    if (currentMediaField === "featuredImage") {
      setFeaturedImage(media.url)
    } else if (currentMediaField === "gallery") {
      setGalleryImages([...galleryImages, media.url])
    } else if (currentMediaField === "datasheet") {
      form.setValue("datasheetUrl", media.url)
    }

    setMediaLibraryOpen(false)
  }

  // Handle adding a key feature
  const handleAddKeyFeature = () => {
    if (keyFeature.trim()) {
      const currentFeatures = form.getValues("keyFeatures") || []
      form.setValue("keyFeatures", [...currentFeatures, keyFeature])
      setKeyFeature("")
    }
  }

  // Handle removing a key feature
  const handleRemoveKeyFeature = (index: number) => {
    const currentFeatures = form.getValues("keyFeatures") || []
    form.setValue(
      "keyFeatures",
      currentFeatures.filter((_, i) => i !== index),
    )
  }

  // Handle adding a specification
  const handleAddSpecification = () => {
    if (specCategory.trim() && specKey.trim() && specValue.trim()) {
      const currentSpecs = form.getValues("specifications") || {}

      const updatedSpecs = {
        ...currentSpecs,
        [specCategory]: {
          ...(currentSpecs[specCategory] || {}),
          [specKey]: specValue,
        },
      }

      form.setValue("specifications", updatedSpecs)
      setSpecKey("")
      setSpecValue("")
    }
  }

  // Handle removing a specification
  const handleRemoveSpecification = (category: string, key: string) => {
    const currentSpecs = form.getValues("specifications") || {}

    if (currentSpecs[category]) {
      const { [key]: removed, ...rest } = currentSpecs[category]

      const updatedSpecs = {
        ...currentSpecs,
        [category]: rest,
      }

      // If the category is now empty, remove it
      if (Object.keys(rest).length === 0) {
        const { [category]: removed, ...remainingCategories } = updatedSpecs
        form.setValue("specifications", remainingCategories)
      } else {
        form.setValue("specifications", updatedSpecs)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <AutoSaveIndicator status={autoSaveStatus} />

        <div className="flex gap-2">
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => router.push(`/products/${form.getValues("category")}/${form.getValues("id")}`)}
            disabled={!form.getValues("id") || !form.getValues("category")}
          >
            <Eye className="h-4 w-4" />
            Preview
          </Button>

          <Button type="button" className="gap-2" onClick={form.handleSubmit(onSubmit)} disabled={isSubmitting}>
            <Save className="h-4 w-4" />
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid grid-cols-5 mb-6">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="features">Features & Specs</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
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
                          <FormLabel>Product Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter product name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product ID</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., x7700" {...field} />
                          </FormControl>
                          <FormDescription>Used in URLs and as a unique identifier</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="mt-6">
                    <FormField
                      control={form.control}
                      name="shortDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Short Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Brief description of the product"
                              className="resize-none"
                              rows={3}
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>This appears on product cards and in search results</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Category</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {availableCategories.map((category) => (
                                <SelectItem key={category.id} value={category.id}>
                                  {category.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>The main category for this product</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="draft">Draft</SelectItem>
                              <SelectItem value="published">Published</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>Draft products are not visible on the site</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="mt-6">
                    <FormField
                      control={form.control}
                      name="featured"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">Featured Product</FormLabel>
                            <FormDescription>
                              Featured products appear on the homepage and at the top of category pages
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="mt-6">
                    <FormField
                      control={form.control}
                      name="categories"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel className="text-base">Additional Categories</FormLabel>
                            <FormDescription>
                              Select additional categories where this product should appear
                            </FormDescription>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {availableCategories.map((category) => (
                              <FormField
                                key={category.id}
                                control={form.control}
                                name="categories"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={category.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(category.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, category.id])
                                              : field.onChange(field.value?.filter((value) => value !== category.id))
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">{category.name}</FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Media Tab */}
            <TabsContent value="media">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Featured Image</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        This image appears on product cards and as the main product image
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="border rounded-md overflow-hidden w-40 h-40 relative bg-muted flex items-center justify-center">
                          {featuredImage ? (
                            <Image
                              src={featuredImage || "/placeholder.svg"}
                              alt="Featured image"
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <ImagePlus className="h-8 w-8 text-muted-foreground" />
                          )}
                        </div>

                        <div className="space-y-2">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setCurrentMediaField("featuredImage")
                              setMediaLibraryOpen(true)
                            }}
                          >
                            Select Image
                          </Button>

                          {featuredImage && (
                            <Button type="button" variant="outline" onClick={() => setFeaturedImage("")}>
                              Remove
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium mb-2">Gallery Images</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Additional images shown in the product gallery
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
                        {galleryImages.map((image, index) => (
                          <div key={index} className="relative group">
                            <div className="border rounded-md overflow-hidden aspect-square relative bg-muted">
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              className="absolute -top-2 -right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => {
                                setGalleryImages(galleryImages.filter((_, i) => i !== index))
                              }}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}

                        <Button
                          type="button"
                          variant="outline"
                          className="border-dashed aspect-square flex flex-col items-center justify-center gap-2"
                          onClick={() => {
                            setCurrentMediaField("gallery")
                            setMediaLibraryOpen(true)
                          }}
                        >
                          <Plus className="h-6 w-6" />
                          <span className="text-sm">Add Image</span>
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium mb-2">Datasheet</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        PDF document with detailed product specifications
                      </p>

                      <div className="flex items-center gap-4">
                        <FormField
                          control={form.control}
                          name="datasheetUrl"
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormControl>
                                <Input placeholder="Datasheet URL" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setCurrentMediaField("datasheet")
                            setMediaLibraryOpen(true)
                          }}
                        >
                          Select File
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Features & Specs Tab */}
            <TabsContent value="features">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Key Features</h3>
                      <p className="text-sm text-muted-foreground mb-4">Highlight the main features of your product</p>

                      <div className="space-y-4">
                        <div className="flex gap-2">
                          <Input
                            placeholder="Add a key feature"
                            value={keyFeature}
                            onChange={(e) => setKeyFeature(e.target.value)}
                            className="flex-1"
                          />
                          <Button type="button" onClick={handleAddKeyFeature} disabled={!keyFeature.trim()}>
                            Add
                          </Button>
                        </div>

                        <div className="space-y-2">
                          {form.getValues("keyFeatures")?.map((feature, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-md">
                              <span>{feature}</span>
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => handleRemoveKeyFeature(index)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}

                          {(!form.getValues("keyFeatures") || form.getValues("keyFeatures").length === 0) && (
                            <div className="p-4 text-center text-muted-foreground bg-muted/50 rounded-md">
                              No key features added yet. Add some key features to highlight your product.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium mb-2">Technical Specifications</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Add detailed specifications organized by category
                      </p>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="md:col-span-1">
                            <label className="text-sm font-medium">Category</label>
                            <Select value={specCategory} onValueChange={setSpecCategory}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select or type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Communication">Communication</SelectItem>
                                <SelectItem value="Hardware">Hardware</SelectItem>
                                <SelectItem value="Physical">Physical</SelectItem>
                                <SelectItem value="Software">Software</SelectItem>
                                <SelectItem value="Electrical">Electrical</SelectItem>
                                <SelectItem value="Environmental">Environmental</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="md:col-span-1">
                            <label className="text-sm font-medium">Specification</label>
                            <Input
                              placeholder="e.g., Weight, Dimensions"
                              value={specKey}
                              onChange={(e) => setSpecKey(e.target.value)}
                            />
                          </div>

                          <div className="md:col-span-1">
                            <label className="text-sm font-medium">Value</label>
                            <Input
                              placeholder="e.g., 350g, 120x85x35mm"
                              value={specValue}
                              onChange={(e) => setSpecValue(e.target.value)}
                            />
                          </div>

                          <div className="md:col-span-1 flex items-end">
                            <Button
                              type="button"
                              onClick={handleAddSpecification}
                              disabled={!specCategory.trim() || !specKey.trim() || !specValue.trim()}
                              className="w-full"
                            >
                              Add Specification
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {Object.entries(form.getValues("specifications") || {}).map(([category, specs]) => (
                            <div key={category} className="border rounded-md overflow-hidden">
                              <div className="bg-muted px-4 py-2 font-medium">{category}</div>
                              <div className="p-4">
                                <table className="w-full text-sm">
                                  <tbody>
                                    {Object.entries(specs).map(([key, value]) => (
                                      <tr key={key} className="border-b last:border-0">
                                        <td className="py-2 font-medium">{key}</td>
                                        <td className="py-2">{value}</td>
                                        <td className="py-2 w-10 text-right">
                                          <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => handleRemoveSpecification(category, key)}
                                          >
                                            <X className="h-4 w-4" />
                                          </Button>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          ))}

                          {(!form.getValues("specifications") ||
                            Object.keys(form.getValues("specifications") || {}).length === 0) && (
                            <div className="p-4 text-center text-muted-foreground bg-muted/50 rounded-md">
                              No specifications added yet. Add some specifications to provide detailed information about
                              your product.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Content Tab */}
            <TabsContent value="content">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Product Description</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Detailed description of the product with formatting
                      </p>

                      <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <RichTextEditor value={field.value} onChange={field.onChange} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
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
                        These fields help improve your product's visibility in search engines. If left empty, they will
                        be automatically generated from the product name and description.
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
                          <FormDescription>{field.value.length} / 60 characters</FormDescription>
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
                          <FormDescription>{field.value.length} / 160 characters</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="metaKeywords"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Meta Keywords</FormLabel>
                          <FormControl>
                            <Input placeholder="Comma-separated keywords" {...field} />
                          </FormControl>
                          <FormDescription>
                            Less important for SEO now, but still used by some search engines
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </form>
      </Form>

      {/* Media Library Modal */}
      <MediaLibrary
        open={mediaLibraryOpen}
        onClose={() => setMediaLibraryOpen(false)}
        onSelect={handleMediaSelect}
        multiple={currentMediaField === "gallery"}
      />
    </div>
  )
}

