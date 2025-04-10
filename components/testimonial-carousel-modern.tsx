"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TestimonialCardModern } from "@/components/testimonial-card-modern"
import { Button } from "@/components/ui/button"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  logo?: string
  caseStudyLink?: string
  avatar?: string
}

interface TestimonialCarouselModernProps {
  testimonials: Testimonial[]
  itemsPerPage?: number
  autoplay?: boolean
  autoplayInterval?: number
}

export function TestimonialCarouselModern({
  testimonials,
  itemsPerPage = 3,
  autoplay = true,
  autoplayInterval = 5000,
}: TestimonialCarouselModernProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  // Responsive items per page
  const [currentItemsPerPage, setCurrentItemsPerPage] = useState(itemsPerPage)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCurrentItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setCurrentItemsPerPage(2)
      } else {
        setCurrentItemsPerPage(itemsPerPage)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [itemsPerPage])

  const handleNext = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentPage((prev) => (prev + 1) % totalPages)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const handlePrev = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  // Autoplay functionality
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages)
      }, autoplayInterval)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, autoplayInterval, totalPages])

  // Pause autoplay on hover
  const pauseAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }
  }

  const resumeAutoplay = () => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages)
      }, autoplayInterval)
    }
  }

  const startIndex = currentPage * currentItemsPerPage
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + currentItemsPerPage)

  return (
    <div className="w-full" onMouseEnter={pauseAutoplay} onMouseLeave={resumeAutoplay}>
      <div className="relative">
        <div
          key={currentPage}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${currentItemsPerPage} gap-8 transition-opacity duration-500 ${isAnimating ? "opacity-50" : "opacity-100"}`}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={startIndex + index}
              className="transition-all duration-500 transform translate-y-0 opacity-100 animate-fade-up"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <TestimonialCardModern
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                logo={testimonial.logo}
                caseStudyLink={testimonial.caseStudyLink}
                avatar={testimonial.avatar}
              />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={isAnimating}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-1 items-center">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (!isAnimating && i !== currentPage) {
                      setIsAnimating(true)
                      setCurrentPage(i)
                      setTimeout(() => setIsAnimating(false), 500)
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentPage ? "bg-primary w-6" : "bg-muted hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial page ${i + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={isAnimating}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

