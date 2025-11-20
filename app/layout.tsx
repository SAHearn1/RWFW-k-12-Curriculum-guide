import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";

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
      <body className="antialiased font-sans">
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
