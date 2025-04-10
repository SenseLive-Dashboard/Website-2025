"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProductCard3DEnhancedProps {
  id: string
  name: string
  description: string
  specs: string[]
  image: string
  category: string
}

export function ProductCard3DEnhanced({ id, name, description, specs, image, category }: ProductCard3DEnhancedProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateXValue = ((y - centerY) / centerY) * -10
    const rotateYValue = ((x - centerX) / centerX) * 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  // Ensure high-quality product images are prioritized
  const isPriorityProduct = id === "e7000" || id === "x9000" || id === "x5050"

  return (
    <Link href={`/products/${category}/${id}`} className="group block">
      <div
        ref={cardRef}
        className="card-3d h-full"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
        }}
      >
        <div
          className="h-full rounded-xl overflow-hidden border border-border bg-card shadow-subtle dark:shadow-subtle-dark transition-all duration-300 group-hover:shadow-card-hover dark:group-hover:shadow-card-hover-dark"
          style={{
            transformStyle: "preserve-3d",
            transform: isMobile ? "none" : `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: "transform 0.2s ease-out, box-shadow 0.3s ease-out",
          }}
        >
          <div className="aspect-square overflow-hidden bg-muted/50 p-6 flex items-center justify-center">
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                transformStyle: "preserve-3d",
                transform: isMobile ? "none" : "translateZ(20px)",
              }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={name}
                width={200}
                height={200}
                className={`h-auto w-auto object-contain transition-all duration-500 ${isHovered ? "scale-110" : ""}`}
                priority={isPriorityProduct}
              />
            </div>
          </div>
          <div
            style={{
              transformStyle: "preserve-3d",
              transform: isMobile ? "none" : "translateZ(10px)",
            }}
          >
            <CardHeader className="p-4 pb-0">
              <CardTitle className="line-clamp-1 text-xl group-hover:text-primary transition-colors">{name}</CardTitle>
              <CardDescription className="line-clamp-1 font-medium text-primary">{description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-2 flex-grow">
              <ul className="text-sm space-y-1">
                {specs.slice(0, 3).map((spec, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{spec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                variant="ghost"
                size="sm"
                className="gap-1 text-primary group-hover:bg-primary/10 transition-colors w-full justify-center"
              >
                View details
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </div>

          {/* Hover glow effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, rgba(94, 194, 190, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
            }}
          />
        </div>
      </div>
    </Link>
  )
}

