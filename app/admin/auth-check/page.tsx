"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function AuthCheck() {
  const router = useRouter()

  useEffect(() => {
    // Check for admin session in localStorage
    const adminSession = localStorage.getItem("adminSession")

    if (!adminSession) {
      // No session found, redirect to login
      router.push("/admin/login")
      return
    }

    try {
      const session = JSON.parse(adminSession)
      const now = Date.now()

      // Check if session is expired (1 hour)
      if (session.timestamp + session.expiresIn < now) {
        // Session expired, clear and redirect to login
        localStorage.removeItem("adminSession")
        router.push("/admin/login")
        return
      }

      // Valid session, redirect to dashboard
      router.push("/admin/dashboard")
    } catch (error) {
      // Invalid session format, redirect to login
      localStorage.removeItem("adminSession")
      router.push("/admin/login")
    }
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-muted-foreground">Verifying your session...</p>
      </div>
    </div>
  )
}

