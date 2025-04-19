"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils" // Assuming you have a utility for classnames

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

  // --- State and Refs (mostly unchanged, removed boatRef as it was commented out) ---
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<NodeJS.Timeout | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 }) // Start at center
  const [autoplay, setAutoplay] = useState(true)
  const [slideDirection, setSlideDirection] = useState<"right-to-left" | "left-to-right">("right-to-left")
  const [progress, setProgress] = useState(0)
  const [isInView, setIsInView] = useState(true)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isKeyboardUser, setIsKeyboardUser] = useState(false)
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view


  const transitionDuration = 500
  const autoplayInterval = 6000

  // --- Handlers (nextSlide, goToPrevSlide, goToSlide - mostly unchanged) ---
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

  // --- Effects (Autoplay, Parallax, IntersectionObserver, Scroll, Keyboard - mostly unchanged) ---

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  // Handle autoplay and progress
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
  }, [autoplay, currentSlide, isAnimating, isInView, isScrolling, nextSlide]) // Added nextSlide dependency


  // Parallax effect (only run if not mobile for performance)
  useEffect(() => {
    if (isMobile) return; // Don't track mouse on mobile

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isMobile]) // Depend on isMobile


  // Intersection Observer
  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      (entries) => setIsInView(entries[0].isIntersecting),
      { threshold: 0.3 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Scroll handling (simplified slightly, consider threshold)
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout | null = null
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      if (!isInView || isAnimating || isScrolling) return; // Only act if in view and not busy

      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Check if scroll delta is significant enough to trigger slide change
      const scrollThreshold = 50; // Pixels to scroll before changing slide

      if (Math.abs(scrollDelta) > scrollThreshold) {
          setIsScrolling(true)
          if (scrollDelta > 0 && currentSlide < slides.length - 1) {
              nextSlide()
          } else if (scrollDelta < 0 && currentSlide > 0) {
              goToPrevSlide()
          }

          if (scrollTimeout) clearTimeout(scrollTimeout)
          scrollTimeout = setTimeout(() => {
              setIsScrolling(false)
          }, 1000) // Cooldown period after scroll-triggered slide change
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
    // Added goToPrevSlide and nextSlide dependencies
  }, [currentSlide, isAnimating, isScrolling, isInView, slides.length, goToPrevSlide, nextSlide])


  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ensure focus is somewhat within the component or body to avoid global capture issues
      if (!sectionRef.current?.contains(document.activeElement) && document.activeElement !== document.body) {
        // return; // Might be too restrictive, adjust if needed
      }

      if (e.key === "Tab") {
        setIsKeyboardUser(true)
      } else if (e.key === "ArrowLeft") {
        e.preventDefault(); // Prevent page scroll
        goToPrevSlide()
      } else if (e.key === "ArrowRight") {
        e.preventDefault(); // Prevent page scroll
        nextSlide()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
    // Added goToPrevSlide and nextSlide dependencies
  }, [goToPrevSlide, nextSlide])


  // --- Render ---
  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100vh] flex items-center overflow-hidden scroll-snap-align-start isolate" // Use isolate for stacking context
      onMouseEnter={() => !isMobile && setAutoplay(true)} // Disable autoplay pause on mobile hover
      onMouseLeave={() => setAutoplay(true)}
      aria-roledescription="carousel"
      aria-label="SenseLive featured products and solutions"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30 z-[-1]"></div>

      {/* Wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 opacity-10 z-[-1]" aria-hidden="true">
        <svg viewBox="0 0 1440 320" className="w-full h-full block" preserveAspectRatio="none">
          <path
            fill="currentColor" // Use currentColor to adapt to theme
            className="text-primary"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Hero content */}
      <div className="container px-4 md:px-6 relative z-10 py-16 md:py-24"> {/* Added padding */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Content - Adjusted alignment and animation trigger */}
          <div className={cn(
              "flex flex-col justify-center space-y-4 text-center lg:text-left",
              // Apply transition classes directly here for entering animation
              "transition-all duration-500 ease-out",
              isAnimating ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'
             )}
             // Use currentSlide in key to force re-render on slide change, triggering animation
             key={`text-content-${currentSlide}`}
             aria-live="polite" // Announce changes to screen readers
          >
            <div className="animate-fade-up animate-delay-200 mx-auto lg:mx-0 w-fit"> {/* Center badge on mobile */}
              <Badge className="px-3 py-1 text-sm bg-gradient-senselive text-white rounded-md font-medium">
                {slides[currentSlide].badge}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl/none animate-fade-up animate-delay-300">
              <span className="gradient-text-animate">{slides[currentSlide].title}</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0 animate-fade-up animate-delay-400">
              {slides[currentSlide].description}
            </p>
             <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start pt-2 animate-fade-up animate-delay-500">
               <Link href={slides[currentSlide].link} className="w-full min-[400px]:w-auto">
                 <Button
                   size="lg"
                   className="w-full font-medium bg-gradient-senselive text-white shadow-premium hover:shadow-premium-hover transition-all"
                 >
                   Learn More
                   <ArrowRight className="ml-2 h-4 w-4" />
                 </Button>
               </Link>
               <Link href="/contact" className="w-full min-[400px]:w-auto">
                 <Button
                   size="lg"
                   variant="outline"
                   className="w-full font-medium border-primary/50 hover:border-primary hover:bg-primary/10 transition-all"
                 >
                   Contact Sales
                 </Button>
               </Link>
             </div>
          </div>

          {/* Image Content - Responsive sizing and conditional 3D effect */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
             {/* Wrapper for animation and sizing */}
             <div
                 key={`image-wrapper-${currentSlide}`}
                 className={cn(
                     "relative w-full max-w-md lg:max-w-none mx-auto lg:mx-0", // Responsive width
                     "transition-all duration-500 ease-out", // Animation classes
                     isAnimating ? 'opacity-0 translate-x-[20px]' : 'opacity-100 translate-x-0'
                 )}
                 style={!isMobile ? { // Apply perspective only on non-mobile
                   perspective: "1000px",
                 } : {}}
             >
                 {/* 3D effect container (conditionally applied transform) */}
                 <div
                    className="relative card-3d-content-wrapper" // Added a wrapper class if needed for more styling
                    style={!isMobile ? { // Apply 3D rotation only on non-mobile
                      transform: `rotateX(${mousePosition.y * 8 - 4}deg) rotateY(${mousePosition.x * 8 - 4}deg)`,
                      transition: "transform 0.1s linear", // Smooth parallax
                    } : {}}
                 >
                    {/* Subtle border glow */}
                    <div className="absolute -inset-1 bg-gradient-senselive rounded-lg opacity-30 animate-pulse-slow z-[-1]"></div>

                    {/* Image container with aspect ratio */}
                    <div className={cn(
                        "relative rounded-lg overflow-hidden shadow-premium w-full",
                        "aspect-video lg:aspect-auto lg:w-[600px] lg:h-[400px]" // Responsive aspect ratio, fixed on desktop
                    )}>
                        <Image
                            src={slides[currentSlide].image || "/placeholder.svg"}
                            alt={slides[currentSlide].title}
                            fill // Use fill for aspect ratio container
                            className="object-contain rounded-lg" // Changed to object-contain
                            sizes="(max-width: 1023px) 90vw, 600px" // Responsive image sizes
                            priority={currentSlide === 0} // Prioritize only the first image
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent"></div>
                    </div>
                 </div>
            </div>
          </div>
        </div>

        {/* Controls - Added margin top for spacing */}
        <div className="mt-16 lg:mt-12 flex flex-col gap-4">
          {/* Progress bar */}
          <div className="w-full bg-muted/50 h-1 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-width duration-150 ease-linear" // Use transition-width
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Slide ${currentSlide + 1} of ${slides.length} progress`}
            ></div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between items-center">
            <Button
              variant="ghost" // Use ghost for less visual weight
              size="icon"
              onClick={goToPrevSlide}
              className="rounded-full hover:bg-primary/10 text-primary transition-colors micro-bounce disabled:opacity-50"
              aria-label="Previous slide"
              disabled={isAnimating}
              tabIndex={isKeyboardUser || !isMobile ? 0 : -1} // Allow tab focus on desktop always
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2 items-center" role="tablist" aria-label="Slides Navigation">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                      "h-2 rounded-full transition-all duration-300 ease-out",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background", // Focus styles
                      index === currentSlide ? "bg-primary w-6" : "bg-muted hover:bg-primary/50 w-2"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-selected={index === currentSlide}
                  role="tab"
                  disabled={isAnimating}
                  tabIndex={isKeyboardUser || !isMobile ? 0 : -1} // Allow tab focus on desktop always
                />
              ))}
            </div>

            <Button
              variant="ghost" // Use ghost for less visual weight
              size="icon"
              onClick={nextSlide}
              className="rounded-full hover:bg-primary/10 text-primary transition-colors micro-bounce disabled:opacity-50"
              aria-label="Next slide"
              disabled={isAnimating}
              tabIndex={isKeyboardUser || !isMobile ? 0 : -1} // Allow tab focus on desktop always
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator (optional: hide on lg screens?) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-fade-up animate-delay-[1500ms] lg:hidden"> {/* Hide on large screens */}
        <div className="flex flex-col items-center gap-1">
          {/* <span className="text-xs text-muted-foreground">Scroll</span> */}
          <div className="w-5 h-8 border-2 border-foreground/30 rounded-full flex justify-center items-start p-1">
            <div className="w-0.5 h-1.5 bg-foreground/50 rounded-full animate-bounce-scroll" /> {/* Custom bounce */}
          </div>
        </div>
         {/* Add custom bounce animation in your global CSS if needed:
          @keyframes bounce-scroll {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(6px); opacity: 0.5; }
          }
          .animate-bounce-scroll { animation: bounce-scroll 1.5s infinite; }
         */}
      </div>
    </section>
  )
} 