import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  const cookieStore = cookies()
  const adminCookie = cookieStore.get("admin")
  const adminLoggedInCookie = cookieStore.get("adminLoggedIn")

  // Check if either cookie exists
  if (adminCookie || adminLoggedInCookie) {
    return NextResponse.json({ authenticated: true })
  }

  return NextResponse.json({ authenticated: false }, { status: 401 })
}

