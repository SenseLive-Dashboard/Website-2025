"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductImageGalleryProps {
  mainImage: string
  galleryImages: string[]
  productName: string
}

export function ProductImageGallery({ mainImage, galleryImages, productName }: ProductImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(mainImage)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomedImage, setZoomedImage] = useState("")

  const handleImageClick = (image: string) => {
    setZoomedImage(image)
    setIsZoomed(true)
    // Prevent scrolling when zoomed
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden"
    }
  }

  const closeZoom = () => {
    setIsZoomed(false)
    // Restore scrolling
    if (typeof document !== "undefined") {
      document.body.style.overflow = ""
    }
  }

  // Close zoom on escape key press
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isZoomed) {
        closeZoom()
      }
    })
  }

  return (
    <>
      <div className="flex flex-col gap-6">
        <div
          className="bg-background rounded-lg border flex items-center justify-center cursor-pointer hover:border-primary transition-all"
          onClick={() => handleImageClick(currentImage)}
        >
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src={currentImage || "/placeholder.svg?height=500&width=500"} 
              alt={productName}
              fill
              className="object-contain transition-opacity duration-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[mainImage, ...galleryImages].slice(0, 4).map((image, index) => (
            <div
              key={index}
              className={`bg-background rounded-lg p-2 border cursor-pointer hover:border-primary transition-all duration-200 ${
                currentImage === image ? "border-primary ring-1 ring-primary" : ""
              }`}
              onClick={() => setCurrentImage(image)}
            >
              <div className="relative aspect-square">
                <Image
                  src={image || "/placeholder.svg?height=100&width=100"}
                  alt={`${productName} view ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Zoom Modal */}
      {isZoomed && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8" onClick={closeZoom}>
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/20 hover:bg-black/40 text-white rounded-full"
              onClick={closeZoom}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <div className="relative max-w-5xl max-h-[80vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={zoomedImage || "/placeholder.svg"}
              alt={productName}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority
              quality={90}
            />
          </div>
        </div>
      )}
    </>
  )
}

