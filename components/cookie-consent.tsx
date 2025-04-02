"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookie-consent")
    if (!hasAccepted) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 animate-fade-up">
      <div className="bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-premium p-4 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium">Cookie Consent</h3>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => setIsVisible(false)}
            aria-label="Close cookie banner"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking
          "Accept", you consent to our use of cookies.
        </p>
        <div className="flex gap-2 justify-end">
          <Link href="/privacy">
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </Link>
          <Button size="sm" onClick={acceptCookies} className="bg-gradient-senselive hover:shadow-premium-hover">
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}

