import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import SignOutButton from "@/components/SignOutButton"

export default async function Grade35() {
  const session = await auth()

  if (!session) {
    redirect("/auth/signin")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-emerald-600 hover:text-emerald-700">
                ← Back to Dashboard
              </Link>
              <div className="border-l border-gray-300 pl-4">
                <h1 className="text-2xl font-bold text-gray-900">Grades 3-5: Investigation & Connection</h1>
              </div>
            </div>
            <SignOutButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-emerald-600 mb-4">Overview</h2>
          <p className="text-lg text-gray-700 mb-6">
            The 3-5 curriculum advances students into scientific inquiry methods, ecosystem understanding, 
            and data-driven investigation. Students develop deeper connections between gardens, communities, 
            and global food systems while building independence and leadership skills.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-2">🔬 Scientific Inquiry</h3>
              <p className="text-sm text-gray-700">Hypothesis testing and experimental design</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-2">🌍 Ecosystem Study</h3>
              <p className="text-sm text-gray-700">Understanding interdependence and food webs</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-2">📊 Data Analysis</h3>
              <p className="text-sm text-gray-700">Collection, graphing, and interpretation</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-2">🏛️ Heritage Gardens</h3>
              <p className="text-sm text-gray-700">Cultural traditions and global connections</p>
            </div>
          </div>
        </section>

        {/* Standards Alignment */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-emerald-600 mb-4">Standards Alignment</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">NGSS Science Standards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-mono text-sm text-emerald-600 font-bold">3-LS4-3</p>
                  <p className="text-gray-700">Construct an argument that plants have traits inherited from parents and influenced by environment.</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-mono text-sm text-emerald-600 font-bold">4-LS1-1</p>
                  <p className="text-gray-700">Construct an argument that plants have internal and external structures for growth, behavior, and reproduction.</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-mono text-sm text-emerald-600 font-bold">5-LS2-1</p>
                  <p className="text-gray-700">Develop a model to describe the movement of matter among plants, animals, decomposers, and the environment.</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-mono text-sm text-emerald-600 font-bold">5-ESS3-1</p>
                  <p className="text-gray-700">Obtain and combine information about ways communities use science to protect Earth’s resources and environment.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Common Core Math Standards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-amber-600 pl-4">
                  <p className="font-mono text-sm text-amber-600 font-bold">CCSS.MATH.CONTENT.3.MD.B.3</p>
                  <p className="text-gray-700">Draw scaled picture graphs and bar graphs to represent garden data.</p>
                </div>
                <div className="border-l-4 border-amber-600 pl-4">
                  <p className="font-mono text-sm text-amber-600 font-bold">CCSS.MATH.CONTENT.4.MD.A.2</p>
                  <p className="text-gray-700">Use metric measurements to solve word problems involving garden planning.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 5 Rs Framework */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-emerald-600 mb-4">The 5 Rs: Trauma-Informed Framework</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">🌱 Rooting</h3>
              <p className="text-sm text-gray-700">Establishing garden routines and personal garden spaces</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-purple-800 mb-2">🌿 Regulating</h3>
              <p className="text-sm text-gray-700">Managing frustration during experiments and problem-solving</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">🔍 Reflecting</h3>
              <p className="text-sm text-gray-700">Science journaling and data analysis reflection</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-bold text-yellow-800 mb-2">🌻 Restoring</h3>
              <p className="text-sm text-gray-700">Environmental restoration projects and garden rehabilitation</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-bold text-pink-800 mb-2">🤝 Reconnecting</h3>
              <p className="text-sm text-gray-700">Community partnerships and heritage garden projects</p>
            </div>
          </div>
        </section>

        {/* Core Learning Themes */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-emerald-600 mb-4">Core Learning Themes</h2>
          
          <div className="space-y-6">
            <div className="border-b pb-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">Theme 1: Scientific Investigation</h3>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">8-10 weeks</span>
              </div>
              <p className="text-gray-700 mb-3">
                Students design and conduct controlled experiments to test variables affecting plant growth. 
                Emphasis on the scientific method, data collection, and evidence-based conclusions.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Design experiments testing soil types, water amounts, or light conditions</li>
                  <li>Create data tables and graphs showing plant growth over time</li>
                  <li>Write scientific reports with hypothesis, methods, results, and conclusions</li>
                  <li>Present findings to classmates and families</li>
                </ul>
              </div>
            </div>

            <div className="border-b pb-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">Theme 2: Ecosystems & Interdependence</h3>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">8-10 weeks</span>
              </div>
              <p className="text-gray-700 mb-3">
                Explore garden ecosystems, food webs, and the interconnections between organisms. Study 
                beneficial insects, pollinators, and decomposers in the garden.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Create garden food web diagrams</li>
                  <li>Build insect hotels and pollinator gardens</li>
                  <li>Conduct biodiversity surveys</li>
                  <li>Study composting and decomposition</li>
                </ul>
              </div>
            </div>

            <div className="border-b pb-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">Theme 3: Cultural Heritage & Global Gardens</h3>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">8-10 weeks</span>
              </div>
              <p className="text-gray-700 mb-3">
                Research plants from different cultures and regions. Create heritage garden plots celebrating 
                student and community cultural backgrounds while learning about global agriculture.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Research family and cultural heritage plants</li>
                  <li>Create world garden map showing plant origins</li>
                  <li>Interview community elders about traditional gardens</li>
                  <li>Host multicultural harvest celebration</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">Theme 4: Community Impact & Sustainability</h3>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">8-10 weeks</span>
              </div>
              <p className="text-gray-700 mb-3">
                Develop projects that benefit the local community while learning about sustainable practices, 
                food justice, and environmental stewardship.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Donate produce to local food banks</li>
                  <li>Create school-wide composting program</li>
                  <li>Develop water conservation strategies</li>
                  <li>Lead garden tours for younger students</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Strategies */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-emerald-600 mb-4">Assessment Strategies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">📊 Scientific Reports</h3>
              <p className="text-gray-700">
                Written reports documenting experiments with hypothesis, methods, data, and conclusions. 
                Assess scientific thinking, writing skills, and analytical abilities.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">💻 Digital Presentations</h3>
              <p className="text-gray-700">
                Multimedia presentations sharing research and findings. Assess technology integration, 
                communication skills, and content knowledge.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">🎯 Performance Tasks</h3>
              <p className="text-gray-700">
                Hands-on demonstrations of garden skills and knowledge application. Assess practical 
                abilities, problem-solving, and transfer of learning.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">📚 Portfolio Growth</h3>
              <p className="text-gray-700">
                Comprehensive collection showing progression over time. Include experiments, reflections, 
                photos, and self-assessments demonstrating learning journey.
              </p>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="bg-emerald-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">Implementation Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-emerald-900 mb-2">📚 Downloadable Materials</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Experiment design templates</li>
                <li>• Data collection sheets</li>
                <li>• Assessment rubrics</li>
                <li>• Heritage garden planning guides</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-emerald-900 mb-2">🎓 Professional Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Scientific inquiry training</li>
                <li>• Ecosystem education modules</li>
                <li>• Cultural competency workshops</li>
                <li>• Implementation support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-emerald-900 mb-2">🌱 Advanced Resources</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Scientific equipment lists</li>
                <li>• Digital tools for data collection</li>
                <li>• Community partner connections</li>
                <li>• Grant writing support</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-lg">
            <h3 className="font-bold text-emerald-900 mb-3">🤖 AI-Powered Lesson Generator</h3>
            <p className="text-gray-700 mb-4">
              Create customized, standards-aligned lesson plans in minutes using our intelligent generator 
              that incorporates Webb’s DOK, Bloom’s Taxonomy, and the 5 Rs framework.
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
