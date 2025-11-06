import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { randomBytes } from "crypto"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      // Don't reveal if email exists for security
      return NextResponse.json({
        message: "If an account with that email exists and is not verified, a verification email has been sent."
      })
    }

    // Check if already verified
    if (user.emailVerified) {
      return NextResponse.json({
        message: "This account is already verified. You can sign in."
      })
    }

    // Generate new verification token
    const verificationToken = randomBytes(32).toString("hex")

    // Update user with new token
    await prisma.user.update({
      where: { id: user.id },
      data: { verificationToken }
    })

    // Generate verification URL
    const verificationUrl = `${process.env.NEXTAUTH_URL}/api/verify?token=${verificationToken}`

    console.log("New Verification URL:", verificationUrl)

    return NextResponse.json({
      message: "If an account with that email exists and is not verified, a verification email has been sent.",
      verificationUrl: process.env.NODE_ENV === "development" ? verificationUrl : undefined,
    })
  } catch (error) {
    console.error("Resend verification error:", error)
    return NextResponse.json(
      { error: "Failed to resend verification email" },
      { status: 500 }
    )
  }
}
