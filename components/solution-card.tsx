import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SolutionCardProps {
  id: string
  name: string
  description: string
  image: string
  badge?: string
}

export function SolutionCard({ id, name, description, image, badge }: SolutionCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-muted hover:border-primary/50 h-full flex flex-col hover-lift">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <CardTitle className="line-clamp-1 text-xl">{name}</CardTitle>
        <CardDescription className="line-clamp-2 text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow"></CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/solutions/${id}`}>
          <Button className="gap-1 transition-all hover:shadow-md group">
            Learn more
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

