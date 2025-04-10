"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { calculateFileSize } from "@/lib/download-service"
import { UploadIcon as FileUpload, Upload, X, Plus, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function DownloadForm({ initialData }: { initialData?: any }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [fileSize, setFileSize] = useState<string>(initialData?.fileSize || "")
  const [relatedProducts, setRelatedProducts] = useState<string[]>(initialData?.relatedProducts || [])
  const [newProduct, setNewProduct] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)
      setFileSize(calculateFileSize(file.size))
    }
  }

  const handleAddProduct = () => {
    if (newProduct && !relatedProducts.includes(newProduct)) {
      setRelatedProducts([...relatedProducts, newProduct])
      setNewProduct("")
    }
  }

  const handleRemoveProduct = (product: string) => {
    setRelatedProducts(relatedProducts.filter((p) => p !== product))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, this would upload the file and save the data
      // For now, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      router.push("/admin/downloads")
      router.refresh()
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Document Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter document title"
                defaultValue={initialData?.title || ""}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Enter document description"
                defaultValue={initialData?.description || ""}
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="type">Document Type</Label>
                <Select defaultValue={initialData?.type || "datasheet"}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select document type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="datasheet">Datasheet</SelectItem>
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="firmware">Firmware</SelectItem>
                    <SelectItem value="software">Software</SelectItem>
                    <SelectItem value="whitepaper">Whitepaper</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="version">Version (Optional)</Label>
                <Input
                  id="version"
                  name="version"
                  placeholder="e.g., v1.2.3"
                  defaultValue={initialData?.version || ""}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>File Upload</Label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                {selectedFile ? (
                  <div className="flex flex-col items-center">
                    <FileText className="h-10 w-10 text-primary mb-2" />
                    <p className="font-medium">{selectedFile.name}</p>
                    <p className="text-sm text-muted-foreground">{fileSize}</p>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="mt-2"
                      onClick={() => setSelectedFile(null)}
                    >
                      <X className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <FileUpload className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="font-medium">Drag and drop or click to upload</p>
                    <p className="text-sm text-muted-foreground">PDF, DOCX, ZIP, EXE (max 100MB)</p>
                    <Button type="button" variant="secondary" size="sm" className="mt-4">
                      <Upload className="h-4 w-4 mr-1" />
                      Select File
                    </Button>
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.docx,.zip,.exe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Related Products</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {relatedProducts.map((product) => (
                  <Badge key={product} variant="secondary" className="flex items-center gap-1">
                    {product}
                    <button
                      type="button"
                      onClick={() => handleRemoveProduct(product)}
                      className="ml-1 rounded-full hover:bg-muted p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {relatedProducts.length === 0 && <p className="text-sm text-muted-foreground">No related products</p>}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Add related product"
                  value={newProduct}
                  onChange={(e) => setNewProduct(e.target.value)}
                />
                <Button type="button" variant="outline" onClick={handleAddProduct} disabled={!newProduct}>
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/admin/downloads")}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting || !selectedFile}>
              {isSubmitting ? "Saving..." : initialData ? "Update Document" : "Add Document"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}

