"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SolutionCardModernProps {
  id: string
  name: string
  description: string
  image: string
  badge?: string
  icon?: React.ReactNode
}

export function SolutionCardModern({ id, name, description, image, badge, icon }: SolutionCardModernProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={`/solutions/${id}`}
      className="group block h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden h-full flex flex-col border-border bg-card shadow-subtle dark:shadow-subtle-dark transition-all duration-300 group-hover:shadow-card-hover dark:group-hover:shadow-card-hover-dark">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : ""}`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          ></div>

          {badge && (
            <Badge className="absolute top-4 left-4 px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md font-medium">
              {badge}
            </Badge>
          )}

          {icon && (
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-black/80 flex items-center justify-center shadow-lg">
              {icon}
            </div>
          )}

          <div
            className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <p className="text-sm text-white/80 line-clamp-2">{description}</p>
          </div>
        </div>
        <CardHeader className="p-4 pb-0">
          <CardTitle className="line-clamp-1 text-xl group-hover:text-primary transition-colors">{name}</CardTitle>
          <CardDescription className="line-clamp-2 text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-2 flex-grow"></CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="gap-1 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
            Learn more
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

