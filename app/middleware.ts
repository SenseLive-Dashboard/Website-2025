// middleware.ts (at the project root)
export { default } from "next-auth/middleware";

export const config = {
  matcher: [

    '/admin/dashboard/:path*',
    /*
     * Match all routes starting with /admin/, EXCEPT:
     * - /admin/login (the sign-in page)
     * - /api/auth/... (NextAuth's own API routes)
     * - Internal Next.js assets (_next/static, _next/image)
     * - Favicon files
     */
    '/admin/((?!login|api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
};