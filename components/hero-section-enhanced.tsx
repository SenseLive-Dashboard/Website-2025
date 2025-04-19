"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils" // Assuming you have this utility

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

  // --- State and Refs (exactly as in your original code) ---
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<NodeJS.Timeout | null>(null)
  // const boatRef = useRef<HTMLDivElement | null>(null); // Keep commented if it was
  const sectionRef = useRef<HTMLElement | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 }) // Default to center
  const [autoplay, setAutoplay] = useState(true)
  const [slideDirection, setSlideDirection] = useState<"right-to-left" | "left-to-right">("right-to-left")
  // const [prevSlide, setPrevSlide] = useState(0); // Keep commented if it was
  const [progress, setProgress] = useState(0)
  const [isInView, setIsInView] = useState(true)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isKeyboardUser, setIsKeyboardUser] = useState(false)

  const transitionDuration = 500
  const autoplayInterval = 6000

  // --- Handlers (exactly as in your original code) ---
   const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection("right-to-left")
    // setPrevSlide(currentSlide) // Keep commented if it was
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setProgress(0)
    setTimeout(() => setIsAnimating(false), transitionDuration)
  }

  const goToPrevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection("left-to-right")
    // setPrevSlide(currentSlide) // Keep commented if it was
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
    setTimeout(() => setIsAnimating(false), transitionDuration)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setSlideDirection(index > currentSlide ? "right-to-left" : "left-to-right")
    // setPrevSlide(currentSlide) // Keep commented if it was
    setCurrentSlide(index)
    setProgress(0)
    setTimeout(() => setIsAnimating(false), transitionDuration)
  }


  // --- Effects (exactly as in your original code, including dependencies) ---

  // Handle autoplay and progress
  useEffect(() => {
    if (autoplay && isInView && !isScrolling) {
      if (autoplayRef.current) clearTimeout(autoplayRef.current); // Use clearTimeout for consistency
      if (progressRef.current) clearInterval(progressRef.current)

      progressRef.current = setInterval(() => {
        setProgress((prev) => Math.min(100, prev + (70 / autoplayInterval) * 100))
      }, 70)

      // Use setTimeout for the main slide change interval
      autoplayRef.current = setTimeout(nextSlide, autoplayInterval)

    } else {
      // Clear intervals/timeouts if autoplay conditions are not met
       if (autoplayRef.current) clearTimeout(autoplayRef.current)
       if (progressRef.current) clearInterval(progressRef.current)
    }

    // Cleanup function
    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
    }
    // Original dependencies:
  }, [autoplay, currentSlide, isAnimating, isInView, isScrolling])


  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Avoid jerky movement on initial load if window dimensions aren't ready
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

  // Boat animation with parallax effect (Keep commented if it was)
  /* useEffect(() => {
    if (!boatRef.current) return
    const { x, y } = mousePosition
    boatRef.current.style.transform = `translate(${x * 30 - 15}px, ${y * 30 - 15}px)`
  }, [mousePosition]) */


  // Intersection Observer to detect when hero section is in view
  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Check entry.isIntersecting directly
        setIsInView(entries[0]?.isIntersecting ?? false)
      },
      { threshold: 0.3 },
    )

    const currentRef = sectionRef.current; // Capture ref value
    observer.observe(currentRef)

    return () => {
        if (currentRef) {
            observer.unobserve(currentRef)
        }
        observer.disconnect() // Also disconnect
    }
  }, []) // Empty dependency array means this runs once on mount


  // Enhanced scroll handling with debounce (Keep original logic)
   useEffect(() => {
    let scrollTimeout: NodeJS.Timeout | null = null
    let lastScrollY = window.scrollY
    let scrollDirection = 0 // Keep track outside handleScroll

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Check if scroll occurred within the component's bounds might be complex/unreliable.
        // Relying on isInView check might be sufficient.

        if (isInView && !isAnimating && !isScrolling) {
            const deltaY = currentScrollY - lastScrollY;
            scrollDirection = deltaY > 0 ? 1 : (deltaY < 0 ? -1 : 0);

            // Add a threshold to avoid triggering on tiny scrolls
            const scrollThreshold = 30; // Adjust as needed

            if (Math.abs(deltaY) > scrollThreshold) {
                 setIsScrolling(true);

                 if (scrollDirection > 0 && currentSlide < slides.length - 1) {
                    nextSlide();
                 } else if (scrollDirection < 0 && currentSlide > 0) {
                    goToPrevSlide();
                 }

                 // Reset scrolling flag after a cooldown
                 if (scrollTimeout) clearTimeout(scrollTimeout);
                 scrollTimeout = setTimeout(() => {
                    setIsScrolling(false);
                 }, 1000); // Cooldown duration
            }
        }
        // Update lastScrollY regardless of other conditions
        lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
    // Original dependencies:
  }, [currentSlide, isAnimating, isScrolling, slides.length, isInView]) // Added isInView


  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        // Check if focus is generally within the body or section to avoid unintended global capture
        if (!document.body.contains(e.target as Node) || (sectionRef.current && !sectionRef.current.contains(e.target as Node))) {
           // Optionally return if focus is completely outside relevant areas
        }

        if (e.key === "Tab") {
            setIsKeyboardUser(true); // Mark as keyboard user on Tab press
        } else if (e.key === "ArrowLeft") {
            e.preventDefault(); // Prevent default browser scroll
            goToPrevSlide();
        } else if (e.key === "ArrowRight") {
            e.preventDefault(); // Prevent default browser scroll
            nextSlide();
        }
    };

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
    // Original dependencies:
  }, []) // Dependencies should include goToPrevSlide, nextSlide if used inside


  // --- Render ---
  return (
    <section
      ref={sectionRef}
      // Keep original classes
      className="relative w-full min-h-[100vh] flex items-center overflow-hidden scroll-snap-align-start"
      onMouseEnter={() => setAutoplay(true)}
      onMouseLeave={() => setAutoplay(true)}
      aria-roledescription="carousel"
      aria-label="SenseLive featured products and solutions"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30 z-0"></div>

      {/* Animated boat in background (Keep commented if it was) */}
      {/* <div ref={boatRef} className="absolute bottom-[10%] right-[5%] w-32 h-32 opacity-20 dark:opacity-10 z-0 boat"> ... </div> */}

      {/* Wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10 z-0" aria-hidden="true">
        <svg viewBox="0 0 1440 320" className="w-full h-full block" preserveAspectRatio="none">
          <path
            // Use a specific color or inherit via className if preferred
             fill="#5ec2be" // Or use className="fill-primary" etc.
             fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Hero content */}
      <div className="container px-4 md:px-6 relative z-10"> {/* Ensure container padding */}
        {/* Keep original grid structure */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">

          {/* Text Content Column (Keep original structure) */}
          <div className="flex flex-col justify-center space-y-4">
             {/* Text animation container */}
             <div
              key={`text-${currentSlide}`} // Re-renders on slide change for animation trigger
              className="space-y-2" // Keep original classes
              style={{ // Keep original style logic
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating
                  ? `translateX(${slideDirection === "right-to-left" ? "-10%" : "10%"})`
                  : "translateX(0)",
                transition: `opacity ${transitionDuration}ms ease-in-out, transform ${transitionDuration}ms ease-in-out`,
              }}
              aria-hidden={isAnimating ? "true" : "false"}
             >
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
              {/* Button animation container */}
              <div
                  className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-up animate-delay-500" // Keep original classes
                  style={{ // Keep original style logic
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

          {/* Image Content Column (MODIFIED FOR RESPONSIVENESS) */}
          <div className="flex justify-center lg:justify-end">
             {/* Outer container: Controls overall size and responsiveness */}
             <div
               key={`image-${currentSlide}`}
               // MODIFICATION: Use classes for responsive width instead of fixed inline style.
               // w-full: takes full width of its column.
               // max-w-md: limits width on small screens to prevent excessive size.
               // lg:max-w-none: removes max-width limit on large screens.
               // mx-auto: centers the block when max-width is active (mobile/tablet).
               // lg:mx-0: removes auto margin on large screens (aligns with justify-end).
               className="relative card-3d-effect w-full max-w-md lg:max-w-none mx-auto lg:mx-0"
               style={{
                 // REMOVED fixed width/height styles.
                 opacity: isAnimating ? 0 : 1,
                 // Keep original transform for 3D effect
                 transform: isAnimating
                    ? `perspective(1000px) translateX(${slideDirection === "right-to-left" ? "10%" : "-10%"}) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5 - 2.5}deg)`
                    : `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5 - 2.5}deg)`,
                 transition: `opacity ${transitionDuration}ms ease-in-out, transform ${transitionDuration}ms ease-in-out`, // Keep transition
               }}
               aria-hidden={isAnimating ? "true" : "false"}
             >
                 {/* Subtle border glow */}
                 <div className="absolute -inset-1 bg-gradient-senselive rounded-lg opacity-30 animate-pulse-slow z-[-1]"></div>

                 {/* Inner container: Manages image aspect ratio */}
                 <div className="relative rounded-lg overflow-hidden shadow-premium card-3d-content w-full aspect-video"> {/* Use aspect-video for consistent shape */}
                     <Image
                        src={slides[currentSlide].image || "/placeholder.svg"}
                        alt={slides[currentSlide].title}
                        // MODIFICATION: Use fill and sizes for responsive images within the aspect-ratio container
                        fill
                        className="relative rounded-lg object-contain" // Use object-contain to see the whole image
                        sizes="(max-width: 768px) 90vw, (max-width: 1023px) 60vw, 50vw" // Adjust sizes as needed
                        priority={currentSlide === 0} // Prioritize only first image
                     />
                     <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div> {/* Keep overlay */}
                 </div>
             </div>
          </div>
        </div>

        {/* Progress bar and slide controls (Keep original structure) */}
        <div className="mt-12 flex flex-col gap-4">
          {/* Progress bar */}
          <div className="w-full bg-muted/50 h-1 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-100 ease-linear" // Original transition
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              // Keep original aria-label for remaining time (approximate)
              aria-label={`Slide ${currentSlide + 1} of ${slides.length}, ${Math.round(((100 - progress) / 100) * (autoplayInterval/1000))} seconds remaining`}
            ></div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline" // Original variant
              size="icon"
              onClick={goToPrevSlide}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors micro-bounce" // Original classes
              aria-label="Previous slide"
              tabIndex={isKeyboardUser ? 0 : -1} // Original tabIndex logic
              disabled={isAnimating} // Disable during animation
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2 items-center" role="tablist">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${ // Original classes
                    index === currentSlide ? "bg-primary w-6" : "bg-muted hover:bg-primary/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-selected={index === currentSlide}
                  role="tab"
                  tabIndex={isKeyboardUser ? 0 : -1} // Original tabIndex logic
                  disabled={isAnimating} // Disable during animation
                />
              ))}
            </div>

            <Button
              variant="outline" // Original variant
              size="icon"
              onClick={nextSlide}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors micro-bounce" // Original classes
              aria-label="Next slide"
              tabIndex={isKeyboardUser ? 0 : -1} // Original tabIndex logic
              disabled={isAnimating} // Disable during animation
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator (Keep original structure) */}
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