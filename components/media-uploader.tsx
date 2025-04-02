"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { uploadMedia } from "@/lib/product-service"
import { toast } from "@/hooks/use-toast"
import { Upload, Check, AlertCircle, ImageIcon, FileText } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface MediaUploaderProps {
  children: React.ReactNode
  onUploadComplete?: (media: any) => void
  acceptedFileTypes?: string[]
  maxFileSize?: number
  multiple?: boolean
}

export function MediaUploader({
  children,
  onUploadComplete,
  acceptedFileTypes = ["image/*", "application/pdf", ".doc", ".docx", ".xls", ".xlsx"],
  maxFileSize = 10485760, // 10MB
  multiple = true,
}: MediaUploaderProps) {
  const [open, setOpen] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setUploading(true)
      setProgress(0)
      setError(null)
      setUploadedFiles([])

      try {
        const uploadedMedia = []

        for (let i = 0; i < acceptedFiles.length; i++) {
          const file = acceptedFiles[i]

          // Calculate progress based on current file and total files
          const fileProgress = (i / acceptedFiles.length) * 100
          setProgress(fileProgress)

          // Upload the file
          const media = await uploadMedia(file, (progressEvent) => {
            // Calculate progress for current file
            const currentFileProgress = (progressEvent.loaded / progressEvent.total) * (100 / acceptedFiles.length)
            const totalProgress = fileProgress + currentFileProgress
            setProgress(totalProgress)
          })

          uploadedMedia.push(media)
        }

        setProgress(100)
        setUploadedFiles(uploadedMedia)

        if (onUploadComplete) {
          onUploadComplete(uploadedMedia.length === 1 ? uploadedMedia[0] : uploadedMedia)
        }

        toast({
          title: "Upload complete",
          description: `Successfully uploaded ${uploadedMedia.length} file(s)`,
        })

        // Close the dialog after a delay
        setTimeout(() => {
          setOpen(false)
          setUploading(false)
          setProgress(0)
        }, 2000)
      } catch (err) {
        console.error("Upload error:", err)
        setError("An error occurred during upload. Please try again.")
        setUploading(false)
      }
    },
    [onUploadComplete],
  )

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    accept: acceptedFileTypes.reduce(
      (acc, type) => {
        if (type.startsWith("image/")) {
          acc["image/*"] = []
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
    disabled: uploading,
    maxSize: maxFileSize,
    multiple,
  })

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B"
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB"
    else return (bytes / 1048576).toFixed(1) + " MB"
  }

  return (
    <>
      <div onClick={() => setOpen(true)}>{children}</div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Upload Media</DialogTitle>
            <DialogDescription>Upload images or documents to your media library</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {fileRejections.length > 0 && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Invalid Files</AlertTitle>
                <AlertDescription>
                  {fileRejections.map(({ file, errors }) => (
                    <div key={file.name} className="text-sm">
                      <strong>{file.name}</strong>: {errors.map((e) => e.message).join(", ")}
                    </div>
                  ))}
                </AlertDescription>
              </Alert>
            )}

            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-12 transition-colors ${
                isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/20"
              } ${uploading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center justify-center text-center">
                {uploading ? (
                  <div className="space-y-4 w-full">
                    <div className="flex flex-col items-center">
                      <Upload className="h-10 w-10 text-muted-foreground mb-2 animate-pulse" />
                      <p className="text-sm text-muted-foreground">Uploading...</p>
                    </div>
                    <Progress value={progress} className="w-full" />
                    <p className="text-xs text-muted-foreground">{Math.round(progress)}%</p>
                  </div>
                ) : uploadedFiles.length > 0 ? (
                  <div className="flex flex-col items-center">
                    <Check className="h-10 w-10 text-green-500 mb-2" />
                    <p className="font-medium">Upload Complete!</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Successfully uploaded {uploadedFiles.length} file(s)
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-2 w-full max-w-xs">
                      {uploadedFiles.slice(0, 4).map((file, index) => (
                        <div key={index} className="text-center">
                          {file.type.startsWith("image/") ? (
                            <div className="relative w-16 h-16 mx-auto">
                              <img
                                src={file.url || "/placeholder.svg"}
                                alt={file.name}
                                className="w-full h-full object-cover rounded"
                              />
                            </div>
                          ) : (
                            <FileText className="h-16 w-16 mx-auto text-muted-foreground" />
                          )}
                          <p className="text-xs truncate mt-1">{file.name}</p>
                        </div>
                      ))}
                      {uploadedFiles.length > 4 && (
                        <div className="text-center col-span-2">
                          <p className="text-xs text-muted-foreground">
                            +{uploadedFiles.length - 4} more files uploaded
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex gap-4 mb-4">
                      <ImageIcon className="h-10 w-10 text-muted-foreground" />
                      <FileText className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <p className="font-medium">Drag & drop files here</p>
                    <p className="text-sm text-muted-foreground mt-1">or click to browse</p>
                    <p className="text-xs text-muted-foreground mt-4">
                      Supports: Images, PDFs, DOC, DOCX, XLS, XLSX (max {formatFileSize(maxFileSize)})
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="flex justify-end">
              <Button variant="outline" onClick={() => setOpen(false)} disabled={uploading}>
                {uploadedFiles.length > 0 ? "Close" : "Cancel"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

