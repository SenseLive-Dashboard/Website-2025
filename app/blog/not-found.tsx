import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogNotFound() {
  return (
    <div className="container px-4 md:px-6 py-24 md:py-32 lg:py-40 max-w-5xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold">Post Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          The blog post you are looking for doesn't exist or has been moved.
        </p>
        <div className="pt-4">
          <Link href="/blog">
            <Button>Return to Blog</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

