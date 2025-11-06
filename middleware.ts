import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isProtectedRoute = req.nextUrl.pathname.startsWith('/dashboard') ||
                          req.nextUrl.pathname.startsWith('/grade-k-2') ||
                          req.nextUrl.pathname.startsWith('/grade-3-5') ||
                          req.nextUrl.pathname.startsWith('/grade-6-8') ||
                          req.nextUrl.pathname.startsWith('/grade-9-12')

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/auth/signin', req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/grade-k-2/:path*",
    "/grade-3-5/:path*",
    "/grade-6-8/:path*",
    "/grade-9-12/:path*",
  ]
}
