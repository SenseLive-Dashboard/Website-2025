import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  id: string
  name: string
  description: string
  specs: string[]
  image: string
  category: string
}

export function ProductCard({ id, name, description, specs, image, category }: ProductCardProps) {
  return (
    <Link href={`/products/${category}/${id}`} className="group">
      <Card className="overflow-hidden transition-all hover:shadow-lg border-muted hover:border-primary/50 h-full flex flex-col hover-lift">
        <div className="aspect-square overflow-hidden bg-muted/50 p-6 flex items-center justify-center">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={200}
            height={200}
            className="h-auto w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            priority={id === "e7000" || id === "x9000" || id === "x5050" || id === "x7900"}
          />
        </div>
        <CardHeader className="p-4 pb-0">
          <CardTitle className="line-clamp-1 text-xl group-hover:text-primary transition-colors">{name}</CardTitle>
          <CardDescription className="line-clamp-1 font-medium text-primary">{description}</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-2 flex-grow">
          <ul className="text-sm space-y-1">
            {specs.slice(0, 4).map((spec, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{spec}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button
            variant="ghost"
            size="sm"
            className="gap-1 text-primary group-hover:bg-primary/10 transition-colors w-full justify-center"
          >
            View details
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

