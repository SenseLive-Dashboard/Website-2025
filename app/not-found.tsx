import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-muted-foreground max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      <div className="mt-8 space-y-4">
        <Link href="/">
          <Button className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <div className="text-sm text-muted-foreground mt-4">
          <p>Looking for something specific? Try these links:</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-2">
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
            <Link href="/solutions" className="hover:text-primary">
              Solutions
            </Link>
            <Link href="/downloads" className="hover:text-primary">
              Downloads
            </Link>
            <Link href="/support" className="hover:text-primary">
              Support
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

