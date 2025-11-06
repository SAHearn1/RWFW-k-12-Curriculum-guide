import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { randomBytes } from "crypto"

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Generate verification token
    const verificationToken = randomBytes(32).toString("hex")

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || null,
        verificationToken,
        emailVerified: false,
      }
    })

    // In production, send verification email
    // For now, we'll return the verification URL
    const verificationUrl = `${process.env.NEXTAUTH_URL}/api/verify?token=${verificationToken}`

    console.log("Verification URL:", verificationUrl)

    return NextResponse.json({
      message: "User created successfully. Please check your email for verification link.",
      verificationUrl: process.env.NODE_ENV === "development" ? verificationUrl : undefined,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      }
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    )
  }
}
