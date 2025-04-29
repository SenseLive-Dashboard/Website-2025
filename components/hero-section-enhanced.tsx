"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Slide {
  id: number
  title: string
  description: string
  image: string
  badge: string
  link: string
}

export function HeroSectionEnhanced() {
  const slides: Slide[] = [
    {
      id: 1,
      title: "Future-Ready IIoT, for Industrial Transformation",
      description:
        "Reliable hardware and scalable solutions for industrial automation, energy management, and smart infrastructure.",
      image: "/home/IIOT.png",
      badge: "Industry Leader",
      link: "/products",
    },
    {
      id: 2,
      title: "Energy Management System",
      description:
        "Comprehensive energy monitoring and management solution that helps businesses reduce energy consumption and meet sustainability goals.",
      image: "/solutions/ems/ems3.png",
      badge: "Featured Solution",
      link: "/solutions/ems",
    },
    {
      id: 3,
      title: "SenseLive Edge8000",
      description:
        "Next-generation wireless bus bar and surface temperature monitoring system with integrated energy metering and dual relays.",
      image: "/products/wireless-bus-bar/edge8000/front-right2.png",
      badge: "Premium Product",
      link: "/products/wireless-bus-bar/edge8000",
    },
    {
      id: 4,
      title: "SenseLive X9000",
      description:
        "Advanced 4G IoT Gateway with edge intelligence, multiple I/O channels, and comprehensive protocol support for industrial applications.",
      image: "/products/connectivity/x9000/thumbnail2.png",
      badge: "Featured Product",
      link: "/products/connectivity/x9000",
    },
  ]

  // State and Refs (unchanged)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<NodeJS.Timeout | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const [autoplay, setAutoplay] = useState(true)
  const [slideDirection, setSlideDirection] = useState<"right-to-left" | "left-to-right">("right-to-left")
  const [progress, setProgress] = useState(0)
  const [isInView, setIsInView] = useState(true)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isKeyboardUser, setIsKeyboardUser] = useState(false)

  const transitionDuration = 500
  const autoplayInterval = 6000

  // Handlers (unchanged)
  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection("right-to-left")
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setProgress(0)
    setTimeout(() => setIsAnimating(false), transitionDuration)
  }

  const goToPrevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection("left-to-right")
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
    setTimeout(() => setIsAnimating(false), transitionDuration)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setSlideDirection(index > currentSlide ? "right-to-left" : "left-to-right")
    setCurrentSlide(index)
    setProgress(0)
    setTimeout(() => setIsAnimating(false), transitionDuration)
  }

  // Effects (unchanged)
  useEffect(() => {
    if (autoplay && isInView && !isScrolling) {
      if (autoplayRef.current) clearTimeout(autoplayRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
      progressRef.current = setInterval(() => {
        setProgress((prev) => Math.min(100, prev + (70 / autoplayInterval) * 100))
      }, 70)
      autoplayRef.current = setTimeout(nextSlide, autoplayInterval)
    } else {
      if (autoplayRef.current) clearTimeout(autoplayRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
    }
    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [autoplay, currentSlide, isAnimating, isInView, isScrolling])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 0 && window.innerHeight > 0) {
        setMousePosition({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        setIsInView(entries[0]?.isIntersecting ?? false)
      },
      { threshold: 0.3 }
    )
    const currentRef = sectionRef.current
    observer.observe(currentRef)
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout | null = null
    let lastScrollY = window.scrollY
    let scrollDirection = 0
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (isInView && !isAnimating && !isScrolling) {
        const deltaY = currentScrollY - lastScrollY
        scrollDirection = deltaY > 0 ? 1 : deltaY < 0 ? -1 : 0
        const scrollThreshold = 30
        if (Math.abs(deltaY) > scrollThreshold) {
          setIsScrolling(true)
          if (scrollDirection > 0 && currentSlide < slides.length - 1) {
            nextSlide()
          } else if (scrollDirection < 0 && currentSlide > 0) {
            goToPrevSlide()
          }
          if (scrollTimeout) clearTimeout(scrollTimeout)
          scrollTimeout = setTimeout(() => {
            setIsScrolling(false)
          }, 1000)
        }
      }
      lastScrollY = currentScrollY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [currentSlide, isAnimating, isScrolling, slides.length, isInView])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setIsKeyboardUser(true)
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        goToPrevSlide()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        nextSlide()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Render
  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-start overflow-hidden scroll-snap-align-start"
      onMouseEnter={() => setAutoplay(true)}
      onMouseLeave={() => setAutoplay(true)}
      aria-roledescription="carousel"
      aria-label="SenseLive featured products and solutions"
    >
      {/* Backgrounds/Waves (unchanged) */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30 z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10 z-0" aria-hidden="true">
        <svg viewBox="0 0 1440 320" className="w-full h-full block" preserveAspectRatio="none">
          <path
            fill="#5ec2be"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Hero content */}
      <div className="container px-4 md:px-6 py-8 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Content Column */}
          <div className="flex flex-col justify-start space-y-4 max-w-[500px] lg:max-w-[600px]">
            {/* Text animation container */}
            <div
              key={`text-${currentSlide}`}
              className="space-y-1"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating
                  ? `translateX(${slideDirection === "right-to-left" ? "-10%" : "10%"})`
                  : "translateX(0)",
                transition: `opacity ${transitionDuration}ms ease-in-out, transform ${transitionDuration}ms ease-in-out`,
              }}
              aria-hidden={isAnimating ? "true" : "false"}
            >
              <div className="animate-fade-up animate-delay-200">
                <Badge className="px-3 py-1 text-sm bg-gradient-senselive text-white rounded-md font-medium mb-1">
                  {slides[currentSlide].badge}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl/none animate-fade-up animate-delay-300">
                <span className="gradient-text-animate">{slides[currentSlide].title}</span>
              </h1>
              <p className="max-w-[500px] text-muted-foreground text-base sm:text-lg lg:text-xl animate-fade-up animate-delay-400">
                {slides[currentSlide].description}
              </p>
            </div>
            {/* Button animation container */}
            <div
              className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-up animate-delay-500"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating
                  ? `translateX(${slideDirection === "right-to-left" ? "-10%" : "10%"})`
                  : "translateX(0)",
                transition: `opacity ${transitionDuration}ms ease-in-out, transform ${transitionDuration}ms ease-in-out`,
              }}
            >
              <Link href={slides[currentSlide].link}>
                <Button
                  size="lg"
                  className="w-full min-[400px]:w-auto font-medium bg-gradient-senselive text-white shadow-premium hover:shadow-premium-hover transition-all"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
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

          {/* Image Content Column */}
          <div className="flex justify-center lg:justify-end">
            {/* Outer container: Controls size and 3D effect */}
            <div
              key={`image-${currentSlide}`}
              className="relative card-3d-effect w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto lg:mx-0 aspect-[7/5]"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating
                  ? `perspective(1000px) translateX(${slideDirection === "right-to-left" ? "10%" : "-10%"}) rotateX(${
                      mousePosition.y * 5
                    }deg) rotateY(${mousePosition.x * 5 - 2.5}deg)`
                  : `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5 - 2.5}deg)`,
                transition: `opacity ${transitionDuration}ms ease-in-out, transform ${transitionDuration}ms ease-in-out`,
              }}
              aria-hidden={isAnimating ? "true" : "false"}
            >
              {/* Inner container: Holds the image */}
              <div className="relative w-full h-full overflow-hidden rounded-lg shadow-premium">
                <Image
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt={slides[currentSlide].title}
                  width={700}
                  height={500}
                  className="relative block w-full h-full rounded-lg object-contain"
                  sizes="(max-width: 767px) 400px, (max-width: 1023px) 500px, 600px"
                  priority={currentSlide === 0}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar and slide controls - moved up and added more spacing */}
        <div className="mt-8 mb-16 flex flex-col gap-4">
          <div className="w-full bg-muted/50 h-1 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Slide ${currentSlide + 1} of ${slides.length}, ${Math.round(
                ((100 - progress) / 100) * (autoplayInterval / 1000)
              )} seconds remaining`}
            ></div>
          </div>
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevSlide}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors micro-bounce"
              aria-label="Previous slide"
              tabIndex={isKeyboardUser ? 0 : -1}
              disabled={isAnimating}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2 items-center" role="tablist">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-primary w-6" : "bg-muted hover:bg-primary/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-selected={index === currentSlide}
                  role="tab"
                  tabIndex={isKeyboardUser ? 0 : -1}
                  disabled={isAnimating}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors micro-bounce"
              aria-label="Next slide"
              tabIndex={isKeyboardUser ? 0 : -1}
              disabled={isAnimating}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioning adjusted and z-index added */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-fade-up animate-delay-1000 z-20">
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