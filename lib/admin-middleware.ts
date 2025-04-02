import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function adminMiddleware() {
  // Check for admin cookies
  const cookieStore = cookies()
  const adminCookie = cookieStore.get("admin")
  const adminLoggedInCookie = cookieStore.get("adminLoggedIn")

  // If no admin cookie, redirect to login
  if (!adminCookie && !adminLoggedInCookie) {
    redirect("/admin/login")
  }

  // If we have a cookie, we're authenticated
  return true
}

