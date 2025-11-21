import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "RootWork Framework K-12 Curriculum | From Garden to Growth",
  description: "A comprehensive K-12 curriculum integrating trauma-informed care, therapeutic horticulture, and rigorous STEAM education for healing and academic excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable} antialiased font-sans bg-ice`}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
