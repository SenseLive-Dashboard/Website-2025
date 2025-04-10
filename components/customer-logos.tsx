"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface CustomerLogosProps {
  logos: {
    name: string
    image: string
    alt: string
  }[]
}

export function CustomerLogos({ logos }: CustomerLogosProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const visibleLogos = logos

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const animationDuration = visibleLogos.length * 3 // 3 seconds per logo
    scrollContainer.style.animationDuration = `${animationDuration}s`

    const handleMouseEnter = () => {
      scrollContainer.style.animationPlayState = "running"
    }

    const handleMouseLeave = () => {
      scrollContainer.style.animationPlayState = "running"
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    scrollContainer.style.animationPlayState = "running"

    return () => {
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [visibleLogos.length])

  return (
    <div className="w-full overflow-hidden bg-muted/30 py-16 dark:bg-gray-800/30">
      <div className="container px-4 md:px-6 mb-6">
        <h2 className="text-2xl font-bold text-center mb-2 dark:text-white">Trusted by Industry Leaders</h2>
        <p className="text-muted-foreground text-center dark:text-gray-300">
          Join the growing list of companies transforming their operations with SenseLive
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex items-center logo-scroll"
          style={{ display: "flex", width: "200%" }}
        >
          {visibleLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0  mx-2 transition-all duration-300" // Reduced from mx-4 to mx-2
              style={{ minWidth: `${90 / visibleLogos.length}%` }} // Adjusts dynamically
            >
              <Image
                src={logo.image || "/placeholder.svg"}
                alt={logo.alt}
                width={120}
                height={60}
                style={{ height: "128px", width: "auto" }}
                className="object-contain dark:brightness-125"
              />
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}