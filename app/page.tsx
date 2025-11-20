import Link from "next/link"
import { auth } from "@/lib/auth"

export default async function Home() {
  const session = await auth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-emerald-600 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">RootWork Framework</span>
            </div>
            <div className="flex items-center space-x-4">
              {session ? (
                <>
                  <Link
                    href="/dashboard"
                    className="px-4 py-2 text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/signin"
                    className="px-4 py-2 text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              From Garden to Growth
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A comprehensive K-12 curriculum integrating trauma-informed care, therapeutic horticulture, 
              and rigorous STEAM education for healing and academic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {session ? (
                <Link
                  href="/dashboard"
                  className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium text-lg"
                >
                  Access Curriculum
                </Link>
              ) : (
                <>
                  <Link
                    href="/auth/signup"
                    className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium text-lg"
                  >
                    Get Started
                  </Link>
                  <a
                    href="https://rwfw-lessonplan-generator.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 font-medium text-lg"
                  >
                    Generate a Lesson Plan
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-emerald-600">K-12</h3>
              <p className="text-gray-600 mt-2">Complete Grade Coverage</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-emerald-600">200+</h3>
              <p className="text-gray-600 mt-2">Pages of Content</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-emerald-600">5 Rs</h3>
              <p className="text-gray-600 mt-2">Trauma-Informed Framework</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-emerald-600">NGSS</h3>
              <p className="text-gray-600 mt-2">Standards Aligned</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-emerald-600">AI</h3>
              <p className="text-gray-600 mt-2">Powered Lesson Generator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Award-Winning Curriculum Design
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evaluated against the standards of the top 0.01% of curriculum developers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trauma-Informed Care</h3>
              <p className="text-gray-600">
                Grounded in SAMHSA principles with explicit integration of the 5 Rs: 
                Rooting, Regulating, Reflecting, Restoring, and Reconnecting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">STEAM Integration</h3>
              <p className="text-gray-600">
                Comprehensive coverage of NGSS, Common Core Math/ELA, and authentic 
                interdisciplinary learning through Living Learning Labs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Universal Design for Learning</h3>
              <p className="text-gray-600">
                Multiple pathways to engagement with explicit support for 504, SPED, 
                Gifted/Talented, and ELL learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Classroom?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            {session 
              ? "Access the complete curriculum and start your journey."
              : "Create an account to access the complete K-12 curriculum and start your journey."
            }
          </p>
          {session ? (
            <Link
              href="/dashboard"
              className="inline-block px-8 py-3 bg-white text-emerald-600 rounded-lg hover:bg-gray-100 font-medium text-lg"
            >
              Go to Dashboard
            </Link>
          ) : (
            <Link
              href="/auth/signup"
              className="inline-block px-8 py-3 bg-white text-emerald-600 rounded-lg hover:bg-gray-100 font-medium text-lg"
            >
              Sign Up Now
            </Link>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">RootWork Framework</h4>
              <p className="text-gray-400">
                A comprehensive K-12 curriculum integrating trauma-informed care, 
                therapeutic horticulture, and rigorous STEAM education.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://rwfw-lessonplan-generator.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    AI Lesson Generator
                  </a>
                </li>
                {session ? (
                  <li>
                    <Link href="/dashboard" className="text-gray-400 hover:text-white">
                      Dashboard
                    </Link>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link href="/auth/signin" className="text-gray-400 hover:text-white">
                        Sign In
                      </Link>
                    </li>
                    <li>
                      <Link href="/auth/signup" className="text-gray-400 hover:text-white">
                        Sign Up
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <p className="text-gray-400">
                Dr. Shawn Hearn, Ed.D., J.D.<br />
                Community Exceptional Children’s Services<br />
                hearn.sa@gmail.com<br />
                Savannah, Georgia
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Dr. Shawn Hearn / Community Exceptional Children’s Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
