"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"

type AdminAuthContextType = {
  isAuthenticated: boolean
  username: string | null
  role: string | null
  logout: () => void
}

const AdminAuthContext = createContext<AdminAuthContextType>({
  isAuthenticated: false,
  username: null,
  role: null,
  logout: () => {},
})

export const useAdminAuth = () => useContext(AdminAuthContext)

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState<string | null>(null)
  const [role, setRole] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      // Skip auth check for login page
      if (pathname === "/admin/login") {
        setIsLoading(false)
        return
      }

      try {
        // First check server-side session
        const response = await fetch("/api/admin/check-session", {
          credentials: "include",
        })

        if (response.ok) {
          setIsAuthenticated(true)
          setUsername("Admin")
          setRole("admin")
          setIsLoading(false)
          return
        }

        // If server-side check fails, check localStorage
        const adminSession = localStorage.getItem("adminSession")
        if (adminSession) {
          const session = JSON.parse(adminSession)
          if (session && session.timestamp + session.expiresIn > Date.now()) {
            setIsAuthenticated(true)
            setUsername(session.username)
            setRole(session.role)
            setIsLoading(false)
            return
          } else {
            // Clear expired session
            localStorage.removeItem("adminSession")
          }
        }

        // Not authenticated, redirect to login
        if (pathname !== "/admin/login") {
          router.push("/admin/login")
        }
      } catch (error) {
        console.error("Auth check error:", error)
        // On error, redirect to login
        if (pathname !== "/admin/login") {
          router.push("/admin/login")
        }
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [pathname, router])

  const logout = () => {
    // Clear localStorage session
    localStorage.removeItem("adminSession")

    // Clear cookies
    document.cookie = "admin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    document.cookie = "adminLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"

    // Redirect to login
    router.push("/admin/login")
  }

  // Show loading state
  if (isLoading && pathname !== "/admin/login") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-muted-foreground">Verifying your session...</p>
        </div>
      </div>
    )
  }

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, username, role, logout }}>
      {children}
    </AdminAuthContext.Provider>
  )
}

