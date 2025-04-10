"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function AdminAuthCheck({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null)

  useEffect(() => {
    // Skip check for login page
    if (pathname === "/admin/login") {
      setIsAuthorized(true)
      return
    }

    try {
      const session = localStorage.getItem("adminSession")

      if (!session) {
        // No session found, redirect to login
        router.push("/admin/login")
        return
      }

      const parsedSession = JSON.parse(session)
      const now = Date.now()

      // Check if session is expired
      if (parsedSession.timestamp + parsedSession.expiresIn < now) {
        // Session expired, clear and redirect to login
        localStorage.removeItem("adminSession")
        router.push("/admin/login")
        return
      }

      // Valid session
      setIsAuthorized(true)
    } catch (error) {
      console.error("Auth check error:", error)
      // Error checking session, redirect to login
      localStorage.removeItem("adminSession")
      router.push("/admin/login")
    }
  }, [pathname, router])

  // Show loading state while checking
  if (isAuthorized === null && pathname !== "/admin/login") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Verifying your session...</p>
        </div>
      </div>
    )
  }

  return children
}

