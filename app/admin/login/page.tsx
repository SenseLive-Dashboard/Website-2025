"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { adminLogin } from "@/lib/blog-service"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Lock, Shield } from "lucide-react"

export default function AdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  // Check if already logged in
  useEffect(() => {
    const checkExistingLogin = async () => {
      try {
        // Check for cookie-based session (original blog admin)
        const response = await fetch("/api/admin/check-session", {
          method: "GET",
          credentials: "include",
        })

        if (response.ok) {
          router.push("/admin/dashboard")
          return
        }

        // Check for localStorage session (new admin)
        const adminSession = localStorage.getItem("adminSession")
        if (adminSession) {
          const session = JSON.parse(adminSession)
          if (session && session.timestamp + session.expiresIn > Date.now()) {
            router.push("/admin/dashboard")
            return
          } else {
            // Clear expired session
            localStorage.removeItem("adminSession")
          }
        }
      } catch (error) {
        console.error("Error checking login status:", error)
      }
    }

    checkExistingLogin()
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setStatusMessage("")
    setIsLoading(true)

    try {
      // First check for the hardcoded admin credentials
      if (username === "senseadmin" && password === "SenseLive#admin2025") {
        setStatusMessage("Login successful! Redirecting...")

        // Store admin session in localStorage
        localStorage.setItem(
          "adminSession",
          JSON.stringify({
            username: "senseadmin",
            role: "superadmin",
            timestamp: Date.now(),
            expiresIn: 3600000, // 1 hour
          }),
        )

        // Set a cookie as well for server-side checks
        document.cookie = `adminLoggedIn=true; path=/; max-age=3600; SameSite=Strict`

        // Redirect after a short delay
        setTimeout(() => {
          router.push("/admin/dashboard")
        }, 500)

        return
      }

      // Fall back to the original blog admin login
      setStatusMessage("Checking credentials...")
      const success = await adminLogin(username, password)

      if (success) {
        setStatusMessage("Login successful! Redirecting...")
        setTimeout(() => {
          router.push("/admin/dashboard")
        }, 500)
      } else {
        setError("Invalid username or password")
      }
    } catch (err) {
      console.error("Login error:", err)
      setError("An error occurred during login. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20ICON-pWeUYdnNZxYhdOSdEF6Cg6JU2Ak7uX.png"
              alt="SenseLive Logo"
              width={60}
              height={60}
              className="h-[60px] w-[60px]"
            />
          </div>
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>Enter your credentials to access the admin dashboard</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {statusMessage && (
            <Alert variant="default" className="bg-primary/10 text-primary border-primary/20">
              <AlertDescription>{statusMessage}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            <Lock className="h-3 w-3" />
            Secure login for authorized personnel only
          </div>
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <Shield className="h-3 w-3" />
            This connection is protected with SSL encryption
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

