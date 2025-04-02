"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TestimonialCard } from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  logo?: string
  caseStudyLink?: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  itemsPerPage?: number
}

export function TestimonialCarousel({ testimonials, itemsPerPage = 3 }: TestimonialCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  // Responsive items per page
  const [currentItemsPerPage, setCurrentItemsPerPage] = useState(itemsPerPage)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
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

  const startIndex = currentPage * currentItemsPerPage
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + currentItemsPerPage)

  return (
    <div className="w-full">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${currentItemsPerPage} gap-8 transition-all duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <div key={startIndex + index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                  logo={testimonial.logo}
                  caseStudyLink={testimonial.caseStudyLink}
                />
              </div>
            ))}
          </div>
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
                    i === currentPage ? "bg-primary w-4" : "bg-muted hover:bg-primary/50"
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

