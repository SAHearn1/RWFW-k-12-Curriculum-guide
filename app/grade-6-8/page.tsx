import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import SignOutButton from "@/components/SignOutButton"

export default async function Grade68() {
  const session = await auth()

  if (!session) {
    redirect("/auth/signin")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-emerald-600 hover:text-emerald-700">
                ← Back to Dashboard
              </Link>
              <div className="border-l border-gray-300 pl-4">
                <h1 className="text-2xl font-bold text-gray-900">Grades 6-8: Systems & Leadership</h1>
              </div>
            </div>
            <SignOutButton />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-emerald-600 mb-4">Overview</h2>
          <p className="text-lg text-gray-700 mb-6">
            The 6-8 curriculum engages students in complex systems thinking, environmental justice, and 
            leadership development. Students conduct advanced scientific investigations, address real-world 
            environmental challenges, and lead initiatives that impact their schools and communities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-2">🔄 Systems Thinking</h3>
              <p className="text-sm text-gray-700">Analyzing complex interactions and feedback loops</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-2">⚖️ Environmental Justice</h3>
              <p className="text-sm text-gray-700">Addressing equity in food and environmental access</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-2">🔬 Advanced Research</h3>
              <p className="text-sm text-gray-700">Multi-variable experiments and statistical analysis</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-2">👥 Student Leadership</h3>
              <p className="text-sm text-gray-700">Leading school and community initiatives</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-emerald-600 mb-4">Standards Alignment</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">NGSS Science Standards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-mono text-sm text-emerald-600 font-bold">MS-LS1-6</p>
                  <p className="text-gray-700">Construct scientific explanations of photosynthesis and cellular respiration.</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-mono text-sm text-emerald-600 font-bold">MS-LS2-3</p>
                  <p className="text-gray-700">Develop models describing cycling of matter and flow of energy among organisms.</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-mono text-sm text-emerald-600 font-bold">MS-ESS3-3</p>
                  <p className="text-gray-700">Apply scientific principles to design methods for monitoring and minimizing human impact on the environment.</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-mono text-sm text-emerald-600 font-bold">MS-ETS1-4</p>
                  <p className="text-gray-700">Develop models to generate data for iterative testing and modification of solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-emerald-600 mb-4">Core Learning Themes</h2>
          
          <div className="space-y-6">
            <div className="border-b pb-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">Theme 1: Complex Systems Analysis</h3>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">9 weeks</span>
              </div>
              <p className="text-gray-700 mb-3">
                Students analyze agricultural and ecological systems as complex, interconnected networks. 
                Study feedback loops, tipping points, and system resilience through garden ecosystems.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Map system diagrams showing garden inputs, outputs, and feedback loops</li>
                  <li>Conduct multi-variable experiments testing system changes</li>
                  <li>Model climate impacts on food production systems</li>
                  <li>Analyze case studies of agricultural system failures and successes</li>
                </ul>
              </div>
            </div>

            <div className="border-b pb-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">Theme 2: Environmental Justice</h3>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">9 weeks</span>
              </div>
              <p className="text-gray-700 mb-3">
                Investigate food deserts, environmental racism, and inequitable access to healthy food and 
                green spaces. Design solutions to address local environmental justice issues.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Map food access in local community</li>
                  <li>Research historical redlining and environmental impacts</li>
                  <li>Partner with community organizations on food justice projects</li>
                  <li>Present proposals to school board or city council</li>
                </ul>
              </div>
            </div>

            <div className="border-b pb-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">Theme 3: Advanced Experimental Design</h3>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">9 weeks</span>
              </div>
              <p className="text-gray-700 mb-3">
                Design and execute long-term research projects using scientific method, statistical analysis, 
                and peer review processes.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Design multi-month research projects with multiple variables</li>
                  <li>Use statistical software for data analysis</li>
                  <li>Write formal research papers with literature reviews</li>
                  <li>Present at science fairs or symposia</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">Theme 4: Student-Led Initiatives</h3>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">9 weeks</span>
              </div>
              <p className="text-gray-700 mb-3">
                Students develop, implement, and assess their own garden-based projects that address 
                real needs in their school or community.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Identify community needs through surveys and interviews</li>
                  <li>Develop project proposals with budgets and timelines</li>
                  <li>Lead implementation teams of peers and community members</li>
                  <li>Evaluate project impact and present results</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-emerald-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">Implementation Resources</h2>
          <div className="mt-8 bg-white p-6 rounded-lg">
            <h3 className="font-bold text-emerald-900 mb-3">🤖 AI-Powered Lesson Generator</h3>
            <p className="text-gray-700 mb-4">
              Create customized, standards-aligned lesson plans in minutes using our intelligent generator.
            </p>
            <a
              href="https://rwfw-lessonplan-generator.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium"
            >
              Launch Lesson Generator →
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
