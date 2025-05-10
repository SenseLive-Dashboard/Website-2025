// app/admin/login/page.tsx
"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
// Import NextAuth functions
import { signIn, useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Lock, Shield, Loader2 } from "lucide-react" // Added Loader2

export default function AdminLoginPage() {
  const router = useRouter()
  const { data: session, status } = useSession() // Get session status ('loading', 'authenticated', 'unauthenticated')

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null) // Use null for no error
  const [isLoading, setIsLoading] = useState(false)

  // Redirect if already logged in and session is confirmed
  useEffect(() => {
    // Only redirect if status is 'authenticated'
    if (status === "authenticated") {
      // Redirect to the intended page or dashboard
      // Check for callbackUrl if using NextAuth's default behavior, otherwise push directly
      const callbackUrl = new URLSearchParams(window.location.search).get('callbackUrl');
      router.push(callbackUrl || "/admin/dashboard");
    }
  }, [status, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null) // Clear previous errors
    setIsLoading(true)

    try {
      // Use NextAuth's signIn function with the 'credentials' provider
      const result = await signIn("credentials", {
        redirect: false, // We handle redirect manually based on the result
        username: username,
        password: password,
      })

      setIsLoading(false); // Stop loading indicator regardless of outcome

      if (result?.error) {
        // Handle errors returned from the authorize function or NextAuth itself
        console.error("SignIn Error:", result.error)
        // Provide user-friendly error messages
        // Common errors: 'CredentialsSignin', 'Callback', 'OAuthAccountNotLinked', etc.
        if (result.error === "CredentialsSignin") {
            setError("Invalid username or password.")
        } else if (result.error === "Configuration") { // Example if authorize throws specific errors
            setError("Server configuration issue. Please contact support.")
        }
         else {
            setError("An unexpected error occurred during login.")
        }

      } else if (result?.ok && !result?.error) {
        // Sign in successful, router should catch the 'authenticated' status in useEffect
        // Or you can push directly here if preferred, though useEffect is generally safer for status changes
        // router.push("/admin/dashboard"); // useEffect handles this now
        console.log("Sign in successful");
      } else {
         // Handle other unexpected cases where result is ok:false but no specific error
         setError("Login failed. Please try again.")
      }
    } catch (err) {
      console.error("Login submission error:", err)
      setError("An error occurred submitting the login form.")
      setIsLoading(false)
    }
  }

  // Show loading indicator while session status is being determined
  if (status === "loading") {
    return (
       // Adjusted for dark theme as requested
       <div className="min-h-screen flex items-center justify-center bg-background">
         <Loader2 className="h-8 w-8 animate-spin text-primary" />
         <p className="ml-2 text-foreground">Loading...</p>
       </div>
    )
  }

  // Don't render the login form if already authenticated (useEffect handles redirect)
  // This prevents a brief flash of the login form before redirection
   if (status === "authenticated") {
     return (
        // Optionally show a "Redirecting..." message or just the loader again
        <div className="min-h-screen flex items-center justify-center bg-background">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-2 text-foreground">Redirecting...</p>
        </div>
     );
   }

  // Render the login form only if unauthenticated
  return (
    // Note: If your admin layout adds a background, you might not need bg-background here.
    // Adjust based on whether this page uses app/admin/layout.tsx or not.
    // Assuming it DOESN'T use the admin layout for the login page itself, keep a background.
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      {/* Use the Card component from your UI library */}
      <Card className="w-full max-w-md border-border bg-card text-card-foreground"> {/* Ensure card respects theme */}
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
             {/* Using the logo from your initial code */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20ICON-pWeUYdnNZxYhdOSdEF6Cg6JU2Ak7uX.png"
              alt="SenseLive Logo"
              width={60}
              height={60}
              className="h-[60px] w-[60px]"
              priority
            />
          </div>
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>Enter your credentials to access the admin dashboard</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Display errors using Alert component */}
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text" // Explicitly set type
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                disabled={isLoading} // Disable input while loading
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
                disabled={isLoading} // Disable input while loading
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {/* Show spinner inside button when loading */}
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 text-center"> {/* Added text-center */}
          <div className="text-sm text-muted-foreground flex items-center justify-center gap-1"> {/* Added justify-center */}
            <Lock className="h-3 w-3" />
            Secure login for authorized personnel only
          </div>
           {/* Removed the SSL encryption line as it was slightly redundant if using HTTPS */}
           {/* You can add it back if desired */}
          {/* <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Shield className="h-3 w-3" />
            This connection is protected with SSL encryption
          </div> */}
        </CardFooter>
      </Card>
    </div>
  )
}