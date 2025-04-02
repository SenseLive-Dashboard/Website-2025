"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface TestimonialCardModernProps {
  quote: string
  author: string
  role: string
  company: string
  logo?: string
  caseStudyLink?: string
  avatar?: string
}

export function TestimonialCardModern({
  quote,
  author,
  role,
  company,
  logo,
  caseStudyLink,
  avatar,
}: TestimonialCardModernProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="text-left bg-card border-border shadow-subtle dark:shadow-subtle-dark h-full flex flex-col transition-all duration-300 hover:shadow-card-hover dark:hover:shadow-card-hover-dark relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-4 left-4 text-primary/20 dark:text-primary/10">
        <Quote className="h-12 w-12" />
      </div>

      <CardContent className="flex-grow pt-12 px-6">
        <p className="italic text-muted-foreground mb-6 relative z-10">"{quote}"</p>
        <div className="flex items-center gap-3 mt-6">
          {avatar && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
              <Image src={avatar || "/placeholder.svg"} alt={author} fill className="object-cover" />
            </div>
          )}
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">
              {role}, {company}
            </p>
          </div>
        </div>
      </CardContent>

      {(logo || caseStudyLink) && (
        <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center">
          {logo && (
            <div className="h-8 relative">
              <Image
                src={logo || "/placeholder.svg"}
                alt={company}
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          )}

          {caseStudyLink && (
            <Link href={caseStudyLink}>
              <Button
                variant="ghost"
                size="sm"
                className="gap-1 text-primary hover:bg-primary/10 transition-colors group"
              >
                <span
                  className={`overflow-hidden whitespace-nowrap transition-all duration-200 ${isHovered ? "w-auto opacity-100" : "w-0 opacity-0"}`}
                >
                  Read case study
                </span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          )}
        </CardFooter>
      )}
    </Card>
  )
}

