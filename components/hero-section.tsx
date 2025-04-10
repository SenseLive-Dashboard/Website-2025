"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Slide {
  id: number
  title: string
  description: string
  image: string
  badge: string
  link: string
}

export function HeroSection() {
  const slides: Slide[] = [
    {
      id: 1,
      title: "Advanced IoT Solutions for Industry Leaders",
      description:
        "Reliable hardware and scalable solutions for industrial automation, energy management, and smart infrastructure.",
      image: "/placeholder.svg?height=600&width=800",
      badge: "Industry Leader",
      link: "/products",
    },
    {
      id: 2,
      title: "Energy Management System",
      description:
        "Comprehensive energy monitoring and management solution that helps businesses reduce energy consumption and meet sustainability goals.",
      image: "/placeholder.svg?height=600&width=800",
      badge: "Energy Management",
      link: "/solutions/ems",
    },
    {
      id: 3,
      title: "Water Management System",
      description:
        "Intelligent water monitoring and management solution that helps organizations optimize water usage, detect leaks, and ensure water quality.",
      image: "/placeholder.svg?height=600&width=800",
      badge: "Water Management",
      link: "/solutions/water-management",
    },
    {
      id: 4,
      title: "Digital Transformation Solutions",
      description:
        "Paperless inspection and quality control solutions that streamline processes, ensure compliance, and improve operational efficiency.",
      image: "/placeholder.svg?height=600&width=800",
      badge: "Digital Transformation",
      link: "/solutions/digital-checksheet",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const boatRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Autoplay functionality
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [currentSlide])

  // Boat animation with parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!boatRef.current) return

      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      // Subtle movement based on mouse position
      boatRef.current.style.transform = `translate(${x * 20 - 10}px, ${y * 20 - 10}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30 z-0"></div>

      {/* Animated boat in background */}
      <div ref={boatRef} className="absolute bottom-[10%] right-[5%] w-32 h-32 opacity-20 dark:opacity-10 z-0 boat">
        <Image
          src="/placeholder.svg?height=128&width=128"
          alt="Boat"
          width={128}
          height={128}
          className="object-contain"
        />
      </div>

      {/* Wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10 z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path
            fill="#5ec2be"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Hero content */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div key={`text-${currentSlide}`} className="flex flex-col justify-center space-y-4 animate-fade-up">
            <div className="space-y-2">
              <div className="animate-fade-up animate-delay-200">
                <Badge className="px-3 py-1 text-sm bg-gradient-senselive text-white rounded-md font-medium mb-2">
                  {slides[currentSlide].badge}
                </Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none animate-fade-up animate-delay-300">
                <span className="gradient-text-animate">{slides[currentSlide].title}</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-up animate-delay-400">
                {slides[currentSlide].description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-up animate-delay-500">
              <Link href={slides[currentSlide].link}>
                <Button
                  size="lg"
                  className="w-full min-[400px]:w-auto font-medium gradient-btn shadow-premium hover:shadow-premium-hover transition-all"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full min-[400px]:w-auto font-medium border-primary hover:bg-primary/10 transition-all"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>

          <div
            key={`image-${currentSlide}`}
            className="flex justify-center lg:justify-end animate-fade-up animate-delay-300"
          >
            <div className="relative card-3d-effect">
              <div className="absolute -inset-1 bg-gradient-senselive rounded-lg blur-xl opacity-30 animate-pulse-slow"></div>
              <div className="relative rounded-lg overflow-hidden shadow-premium card-3d-content">
                <Image
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt={slides[currentSlide].title}
                  width={600}
                  height={400}
                  className="relative rounded-lg object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide controls */}
        <div className="flex justify-center mt-8 gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors micro-bounce"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex gap-2 items-center">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== currentSlide) {
                    setIsAnimating(true)
                    setCurrentSlide(index)
                    setTimeout(() => setIsAnimating(false), 500)
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-primary w-6" : "bg-muted hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors micro-bounce"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-up animate-delay-1000">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

