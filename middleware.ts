import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
)

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/grade-k-2/:path*",
    "/grade-3-5/:path*",
    "/grade-6-8/:path*",
    "/grade-9-12/:path*",
  ]
}
