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

  // Clone the logos array to create a seamless loop
  const allLogos = [...logos, ...logos]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Set the animation duration based on the number of logos
    const animationDuration = logos.length * 3 // 3 seconds per logo
    scrollContainer.style.animationDuration = `${animationDuration}s`

    // Pause animation on hover
    const handleMouseEnter = () => {
      scrollContainer.style.animationPlayState = "paused"
    }

    const handleMouseLeave = () => {
      scrollContainer.style.animationPlayState = "running"
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [logos.length])

  return (
    <div className="w-full overflow-hidden bg-muted/30 py-10 dark:bg-gray-800/30">
      <div className="container px-4 md:px-6 mb-6">
        <h2 className="text-2xl font-bold text-center mb-2 dark:text-white">Trusted by Industry Leaders</h2>
        <p className="text-muted-foreground text-center dark:text-gray-300">
          Join the growing list of companies transforming their operations with SenseLive
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div ref={scrollRef} className="flex items-center logo-scroll">
          {allLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.image || "/placeholder.svg"}
                alt={logo.alt}
                width={120}
                height={60}
                className="h-12 w-auto object-contain dark:brightness-125"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

