import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  logo?: string
  caseStudyLink?: string
}

export function TestimonialCard({ quote, author, role, company, logo, caseStudyLink }: TestimonialCardProps) {
  return (
    <Card className="text-left bg-background border-muted hover:border-primary/50 transition-colors h-full flex flex-col hover-lift">
      <CardHeader className="pb-2">
        {logo && (
          <Image
            src={logo || "/placeholder.svg"}
            alt={company}
            width={120}
            height={40}
            className="h-8 w-auto object-contain mb-4"
          />
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="italic text-muted-foreground mb-6">"{quote}"</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </CardContent>
      {caseStudyLink && (
        <CardFooter className="pt-0">
          <Link href={caseStudyLink}>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-primary hover:bg-primary/10 transition-colors group"
            >
              Read case study
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  )
}

