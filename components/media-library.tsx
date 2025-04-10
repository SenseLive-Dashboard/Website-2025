"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Upload, ImageIcon, Check, FileText, File } from "lucide-react"
import { uploadMedia, getAllMedia } from "@/lib/product-service"

interface MediaItem {
  id: string
  url: string
  name: string
  alt?: string
  size: number
  type: string
  createdAt: string
}

interface MediaLibraryProps {
  open: boolean
  onClose: () => void
  onSelect: (media: MediaItem | MediaItem[]) => void
  multiple?: boolean
  fileTypes?: string[]
}

export function MediaLibrary({
  open,
  onClose,
  onSelect,
  multiple = false,
  fileTypes = ["image/*"],
}: MediaLibraryProps) {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("library")
  const [uploadProgress, setUploadProgress] = useState<number | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  // Fetch media items
  const fetchMediaItems = useCallback(async () => {
    setIsLoading(true)
    try {
      const typeFilter = fileTypes.includes("image/*") ? "image" : ""
      const { media, totalPages: pages } = await getAllMedia({
        page,
        search: searchQuery,
        type: typeFilter,
      })
      setMediaItems(media)
      setTotalPages(pages)
    } catch (error) {
      console.error("Error fetching media:", error)
    } finally {
      setIsLoading(false)
    }
  }, [page, searchQuery, fileTypes])

  // Load media items when the component mounts or when dependencies change
  useEffect(() => {
    if (open) {
      fetchMediaItems()
    }
  }, [open, fetchMediaItems])

  // Filter media items based on search query and file types
  const filteredItems = mediaItems.filter((item) => {
    // Filter by search query
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.alt && item.alt.toLowerCase().includes(searchQuery.toLowerCase()))

    // Filter by file type
    const matchesFileType = fileTypes.some((type) => {
      if (type === "image/*") return item.type.startsWith("image/")
      if (type === "application/pdf") return item.type === "application/pdf"
      if (type.includes("doc")) return item.type.includes("word") || item.type.includes("doc")
      if (type.includes("xls")) return item.type.includes("excel") || item.type.includes("xls")
      return item.type.includes(type)
    })

    return matchesSearch && matchesFileType
  })

  // Handle file drop
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setIsUploading(true)

      try {
        const uploadedMedia = []

        for (let i = 0; i < acceptedFiles.length; i++) {
          const file = acceptedFiles[i]
          const fileProgress = (i / acceptedFiles.length) * 100
          setUploadProgress(fileProgress)

          // Upload the file
          const media = await uploadMedia(file, (progressEvent) => {
            const currentFileProgress = (progressEvent.loaded / progressEvent.total) * (100 / acceptedFiles.length)
            const totalProgress = fileProgress + currentFileProgress
            setUploadProgress(totalProgress)
          })

          uploadedMedia.push(media)
        }

        setUploadProgress(100)
        setMediaItems((prev) => [...uploadedMedia, ...prev])
        setIsUploading(false)
        setUploadProgress(null)
        setActiveTab("library")

        // Select the newly uploaded items if desired
        if (multiple) {
          setSelectedItems(uploadedMedia.map((item) => item.id))
        } else if (uploadedMedia.length > 0) {
          setSelectedItems([uploadedMedia[0].id])
        }
      } catch (error) {
        console.error("Error uploading files:", error)
        setIsUploading(false)
        setUploadProgress(null)
      }
    },
    [multiple],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: fileTypes.reduce(
      (acc, type) => {
        if (type === "image/*") {
          acc["image/*"] = [".jpeg", ".jpg", ".png", ".gif", ".webp"]
        } else if (type === "application/pdf") {
          acc["application/pdf"] = [".pdf"]
        } else if (type.includes("doc")) {
          acc["application/msword"] = [".doc"]
          acc["application/vnd.openxmlformats-officedocument.wordprocessingml.document"] = [".docx"]
        } else if (type.includes("xls")) {
          acc["application/vnd.ms-excel"] = [".xls"]
          acc["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"] = [".xlsx"]
        }
        return acc
      },
      {} as Record<string, string[]>,
    ),
  })

  // Handle item selection
  const toggleItemSelection = (id: string) => {
    if (multiple) {
      setSelectedItems((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]))
    } else {
      setSelectedItems([id])
    }
  }

  // Handle confirm selection
  const handleConfirmSelection = () => {
    const selected = mediaItems.filter((item) => selectedItems.includes(item.id))
    if (multiple) {
      onSelect(selected)
    } else if (selected.length > 0) {
      onSelect(selected[0])
    }
    onClose()
  }

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B"
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB"
    else return (bytes / 1048576).toFixed(1) + " MB"
  }

  // Get file icon based on type
  const getFileIcon = (type: string) => {
    if (type.includes("pdf")) return <File className="h-12 w-12 text-red-500" />
    if (type.includes("word") || type.includes("doc")) return <File className="h-12 w-12 text-blue-500" />
    if (type.includes("excel") || type.includes("xls")) return <File className="h-12 w-12 text-green-500" />
    return <FileText className="h-12 w-12 text-muted-foreground" />
  }

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-full h-[80vh] max-h-[800px] flex flex-col p-0 gap-0">
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle>Media Library</DialogTitle>
          <DialogDescription>Select media from your library or upload new files</DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
          <div className="flex items-center justify-between px-6 py-2 border-b">
            <TabsList>
              <TabsTrigger value="library">Media Library</TabsTrigger>
              <TabsTrigger value="upload">Upload</TabsTrigger>
            </TabsList>

            {activeTab === "library" && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search media..."
                  className="pl-10 w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            )}
          </div>

          <TabsContent value="library" className="flex-1 p-0 m-0">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : filteredItems.length > 0 ? (
              <ScrollArea className="h-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6">
                  {filteredItems.map((item) => (
                    <Card
                      key={item.id}
                      className={`overflow-hidden cursor-pointer transition-all ${
                        selectedItems.includes(item.id) ? "ring-2 ring-primary ring-offset-2" : "hover:shadow-md"
                      }`}
                      onClick={() => toggleItemSelection(item.id)}
                    >
                      <div className="relative aspect-square">
                        {item.type.startsWith("image/") ? (
                          <Image
                            src={item.url || "/placeholder.svg"}
                            alt={item.alt || item.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full bg-muted">
                            {getFileIcon(item.type)}
                          </div>
                        )}
                        {selectedItems.includes(item.id) && (
                          <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                            <Check className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                      <CardContent className="p-3">
                        <p className="text-sm font-medium truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{formatFileSize(item.size)}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center p-4 border-t">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                      >
                        Previous
                      </Button>
                      <span className="flex items-center px-3 text-sm">
                        Page {page} of {totalPages}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}
              </ScrollArea>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-6">
                <ImageIcon className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-lg font-medium mb-2">No media found</p>
                <p className="text-muted-foreground text-center mb-4">
                  No media items match your search criteria. Try a different search or upload new media.
                </p>
                <Button onClick={() => setActiveTab("upload")}>Upload Media</Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="upload" className="flex-1 p-0 m-0">
            <div className="h-full flex flex-col p-6">
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-12 flex-1 transition-colors ${
                  isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/20"
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Drag & drop files here</h3>
                <p className="text-muted-foreground text-center mb-4">or click to browse your files</p>
                <p className="text-xs text-muted-foreground">
                  Supports: {fileTypes.includes("image/*") ? "Images, " : ""}
                  {fileTypes.includes("application/pdf") ? "PDFs, " : ""}
                  {fileTypes.some((t) => t.includes("doc")) ? "DOC/DOCX, " : ""}
                  {fileTypes.some((t) => t.includes("xls")) ? "XLS/XLSX, " : ""}
                  (max 10MB)
                </p>

                {isUploading && uploadProgress !== null && (
                  <div className="w-full max-w-xs mt-6">
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${uploadProgress}%` }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">Uploading... {uploadProgress}%</p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="px-6 py-4 border-t flex justify-between">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleConfirmSelection} disabled={selectedItems.length === 0}>
            {multiple ? `Select ${selectedItems.length} item${selectedItems.length !== 1 ? "s" : ""}` : "Select"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

