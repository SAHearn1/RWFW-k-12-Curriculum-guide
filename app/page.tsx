import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e9f3eb] via-[#fffaf3] to-[#f2e5d5]" />
        <div className="absolute top-[-8%] left-[-8%] h-80 w-80 rounded-full bg-[#2f7c5f]/15 blur-3xl" />
        <div className="absolute bottom-[-12%] right-[-10%] h-96 w-96 rounded-full bg-[#c87a2e]/12 blur-3xl" />
        <div className="absolute top-1/3 left-[20%] h-64 w-64 rounded-full bg-[#0d3b2c]/8 blur-3xl" />
      </div>

      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#e6d5b8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#0d3b2c] to-[#2f7c5f] flex items-center justify-center text-white shadow-lg shadow-[#0d3b2c]/20">
                <span className="text-xl font-semibold">RW</span>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#2f7c5f] font-semibold">RootWork</p>
                <p className="font-bold text-lg text-[#102018]">Healing-Centered Curriculum</p>
              </div>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href={session ? "/dashboard" : "/auth/signin"}
                className="px-4 py-2 text-[#0d3b2c] font-semibold rounded-full border border-[#d7c3a4] bg-white hover:border-[#c87a2e] transition-colors"
              >
                {session ? "Dashboard" : "Sign In"}
              </Link>
              {!session && (
                <Link
                  href="/auth/signup"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-[#0d3b2c] via-[#2f7c5f] to-[#c87a2e] text-white font-semibold shadow-md shadow-[#0d3b2c]/15 hover:shadow-lg hover:shadow-[#0d3b2c]/20 transition"
                >
                  Join the Network
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <header className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="pill shadow-sm shadow-[#2f7c5f]/10">
                <span className="h-2 w-2 rounded-full bg-[#2f7c5f]" aria-hidden />
                RootWork Framework • 2025 Edition
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#102018]">
                From Garden to Growth: Healing-centered academics rooted in nature.
              </h1>
              <p className="text-lg sm:text-xl text-[#244131] max-w-2xl">
                A refreshed visual language inspired by living learning labs—pairing therapeutic horticulture, rigorous STEAM alignment, and the 5 Rs of trauma-informed practice to guide every classroom moment.
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                <Link
                  href={session ? "/dashboard" : "/auth/signup"}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0d3b2c] text-white font-semibold shadow-md shadow-[#0d3b2c]/20 hover:bg-[#0f4c38] transition"
                >
                  {session ? "Access the Curriculum" : "Start your healing pathway"}
                </Link>
                <a
                  href="https://rwfw-lessonplan-generator.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#2f7c5f]/20 text-[#0d3b2c] font-semibold bg-white hover:border-[#c87a2e]/70 transition"
                >
                  AI Lesson Generator
                  <span aria-hidden>↗</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                {["K-12 Coverage", "SAMHSA Aligned", "Living Learning Labs", "UDL Ready"].map((label) => (
                  <span key={label} className="px-4 py-2 rounded-full bg-white/70 border border-[#d7c3a4] text-sm font-semibold text-[#0d3b2c] shadow-sm">
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#c87a2e] to-[#2f7c5f] flex items-center justify-center text-white font-bold text-xl shadow-md shadow-[#c87a2e]/25">
                  5R
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-[#2f7c5f] font-semibold">Trauma-Informed</p>
                  <p className="font-bold text-lg text-[#102018]">Rooting • Regulating • Reflecting • Restoring • Reconnecting</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[{
                  title: "Healing-centered design",
                  copy: "Calming palettes, organic shapes, and grounded typography mirror nature-based regulation practices.",
                }, {
                  title: "Nature-rich STEAM",
                  copy: "Living Learning Labs link NGSS, Common Core, and horticulture through purposeful inquiry.",
                }, {
                  title: "Inclusive by default",
                  copy: "UDL-aligned scaffolds and multiple pathways support SPED, 504, ELL, and gifted learners.",
                }, {
                  title: "Credible + actionable",
                  copy: "Built with award-winning curriculum criteria and AI-powered planning tools.",
                }].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl border border-[#d7c3a4] bg-white/80 shadow-sm shadow-[#0d3b2c]/5">
                    <p className="text-sm uppercase tracking-wide text-[#2f7c5f] font-semibold">{item.title}</p>
                    <p className="mt-2 text-[#3d5546] text-sm leading-relaxed">{item.copy}</p>
                  </div>
                ))}
              </div>
              <div className="divider" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[{
                  stat: "K-12",
                  desc: "Comprehensive grade bands",
                }, {
                  stat: "200+",
                  desc: "Pages of scoped content",
                }, {
                  stat: "NGSS + UDL",
                  desc: "Standards-aligned pathways",
                }, {
                  stat: "AI-ready",
                  desc: "Connected lesson generator",
                }].map((item) => (
                  <div key={item.stat} className="p-3 rounded-lg bg-gradient-to-br from-white to-[#f6f0e4] border border-[#e6d5b8] text-center">
                    <p className="text-2xl font-extrabold text-[#0d3b2c]">{item.stat}</p>
                    <p className="text-sm text-[#3d5546]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[{
                title: "Rooted in belonging",
                description: "Warm neutrals, deep greens, and tactile gradients mirror the safety of garden spaces while honoring cultural responsiveness.",
              }, {
                title: "Guided journeys",
                description: "Clear calls to action, framed navigation, and pill badges make each pathway obvious for educators and students alike.",
              }, {
                title: "Evidence-informed visuals",
                description: "Reduced visual noise, generous breathing room, and serif display headings reflect the grounded authority of the framework.",
              }].map((item) => (
                <div key={item.title} className="glass-panel p-6">
                  <p className="text-sm uppercase tracking-wide text-[#2f7c5f] font-semibold">Brand Principle</p>
                  <h3 className="text-2xl font-bold text-[#102018] mt-3">{item.title}</h3>
                  <p className="text-[#3d5546] mt-2 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/80 border-y border-[#e6d5b8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.2em] text-[#2f7c5f] font-semibold">Living Learning Labs</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102018]">Place-based STEAM with healing at the center.</h2>
                <p className="text-lg text-[#3d5546] max-w-3xl">
                  Experience-forward modules pair sensory grounding with academic rigor—every lab, prompt, and reflection intentionally mirrors the rhythms of a thriving garden.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Garden Ecosystems", "Design Thinking", "Mindfulness + Movement", "Community Partnerships"].map((item) => (
                  <span key={item} className="px-4 py-2 rounded-full bg-[#f6f0e4] text-[#0d3b2c] border border-[#e6d5b8] font-semibold text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[{
                title: "Sensory-safe layout",
                copy: "Rounded corners, soft shadows, and layered glass panels reduce cognitive load and model co-regulation.",
              }, {
                title: "Actionable sequencing",
                copy: "Hero > credibility > pathways > CTA—mirroring the 5 Rs cycle to keep educators oriented.",
              }, {
                title: "Trust-forward footer",
                copy: "Direct contact, quick links, and ownership statements reinforce credibility for districts and caregivers.",
              }].map((item) => (
                <div key={item.title} className="p-5 rounded-xl bg-gradient-to-br from-[#0d3b2c] via-[#1c4f3a] to-[#2f7c5f] text-white shadow-lg shadow-[#0d3b2c]/25">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/90 leading-relaxed">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-[#2f7c5f] font-semibold">Community-centered CTA</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102018]">Ready to ground your learning community in the newest RootWork experience?</h2>
              <p className="text-lg text-[#3d5546]">
                Whether you are co-designing healing-centered classrooms, leading a district pilot, or building family workshops, the refreshed RootWork interface keeps the focus on safety, connection, and joyful rigor.
              </p>
              <div className="flex flex-wrap gap-3">
                {session ? (
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c87a2e] text-white font-semibold shadow-md shadow-[#c87a2e]/25 hover:bg-[#b66c27] transition"
                  >
                    Continue to dashboard
                  </Link>
                ) : (
                  <Link
                    href="/auth/signup"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0d3b2c] text-white font-semibold shadow-md shadow-[#0d3b2c]/20 hover:bg-[#0f4c38] transition"
                  >
                    Create an account
                  </Link>
                )}
                <a
                  href="mailto:hearn.sa@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#d7c3a4] bg-white text-[#0d3b2c] font-semibold hover:border-[#c87a2e] transition"
                >
                  Contact Dr. Hearn
                </a>
              </div>
            </div>
            <div className="glass-panel p-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#2f7c5f]/20 flex items-center justify-center text-[#0d3b2c] font-bold">1</div>
                <div>
                  <p className="font-semibold text-[#102018]">Root</p>
                  <p className="text-sm text-[#3d5546]">Establish psychological safety and culturally affirming spaces.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#2f7c5f]/20 flex items-center justify-center text-[#0d3b2c] font-bold">2</div>
                <div>
                  <p className="font-semibold text-[#102018]">Regulate</p>
                  <p className="text-sm text-[#3d5546]">Use rhythm, nature cues, and visual calm to support co-regulation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#2f7c5f]/20 flex items-center justify-center text-[#0d3b2c] font-bold">3</div>
                <div>
                  <p className="font-semibold text-[#102018]">Reflect & Restore</p>
                  <p className="text-sm text-[#3d5546]">Embed journaling, feedback, and restorative practices in each module.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#2f7c5f]/20 flex items-center justify-center text-[#0d3b2c] font-bold">4</div>
                <div>
                  <p className="font-semibold text-[#102018]">Reconnect</p>
                  <p className="text-sm text-[#3d5546]">Strengthen community ties with gardens, families, and local partners.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0d3b2c] text-white py-12 mt-6 border-t border-[#1a4a39]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-[#9fd8c2] font-semibold">RootWork Framework</p>
              <h3 className="text-2xl font-bold">From Garden to Growth</h3>
              <p className="text-white/80 leading-relaxed">
                A healing-centered, nature-rich K-12 curriculum pairing therapeutic horticulture, trauma-informed practice, and rigorous STEAM outcomes.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="https://rwfw-lessonplan-generator.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white">AI Lesson Generator</a>
                </li>
                {session ? (
                  <li>
                    <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link href="/auth/signin" className="hover:text-white">Sign In</Link>
                    </li>
                    <li>
                      <Link href="/auth/signup" className="hover:text-white">Sign Up</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3">Contact</h4>
              <p className="text-white/80 leading-relaxed">
                Dr. Shawn Hearn, Ed.D., J.D.<br />
                Community Exceptional Children’s Services<br />
                hearn.sa@gmail.com<br />
                Savannah, Georgia
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/70 text-sm">
            &copy; 2025 Dr. Shawn Hearn / Community Exceptional Children’s Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
