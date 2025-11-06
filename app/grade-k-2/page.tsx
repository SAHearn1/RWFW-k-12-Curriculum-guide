import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import SignOutButton from "@/components/SignOutButton"

export default async function GradeK2() {
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
                <h1 className="text-2xl font-bold text-gray-900">Grades K-2: Wonder & Discovery</h1>
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
            The K-2 curriculum focuses on sensory exploration, wonder, and discovery through therapeutic 
            horticulture. Students develop foundational skills in observation, emotional regulation, and 
            community connection while engaging with plants and gardens.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-2">🌱 Sensory Exploration</h3>
              <p className="text-sm text-gray-700">Hands-on discovery through sight, touch, smell, and observation</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-2">🔄 Life Cycles</h3>
              <p className="text-sm text-gray-700">Understanding basic plant needs and growth patterns</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-2">💚 Emotional Skills</h3>
              <p className="text-sm text-gray-700">Building regulation skills and emotional awareness</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-2">👥 Community</h3>
              <p className="text-sm text-gray-700">Circle practices and collaborative learning</p>
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
                  <p className="font-mono text-sm text-emerald-600 font-bold">K-LS1-1</p>
                  <p className="text-gray-700">Use observations to describe patterns of what plants need to survive.</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-mono text-sm text-emerald-600 font-bold">K-ESS3-1</p>
                  <p className="text-gray-700">Use a model to represent the relationship between needs of plants and places they live.</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-mono text-sm text-emerald-600 font-bold">1-LS1-1</p>
                  <p className="text-gray-700">Use materials to design solutions to human problems by mimicking plant structures and functions.</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-mono text-sm text-emerald-600 font-bold">2-LS2-1</p>
                  <p className="text-gray-700">Plan and conduct an investigation to determine if plants need sunlight and water to grow.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Common Core ELA Standards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-amber-600 pl-4">
                  <p className="font-mono text-sm text-amber-600 font-bold">CCSS.ELA-LITERACY.W.K.2</p>
                  <p className="text-gray-700">Use drawing, dictating, and writing to compose informative texts about gardens.</p>
                </div>
                <div className="border-l-4 border-amber-600 pl-4">
                  <p className="font-mono text-sm text-amber-600 font-bold">CCSS.ELA-LITERACY.SL.1.5</p>
                  <p className="text-gray-700">Add drawings and visual displays to descriptions of garden observations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 5 Rs Framework */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-emerald-600 mb-4">The 5 Rs: Trauma-Informed Framework</h2>
          <p className="text-gray-700 mb-6">
            Every lesson integrates trauma-informed practices through the 5 Rs framework:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">🌱 Rooting</h3>
              <p className="text-sm text-gray-700">Grounding exercises and sensory awareness in the garden space</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-purple-800 mb-2">🌿 Regulating</h3>
              <p className="text-sm text-gray-700">Emotional regulation through repetitive planting and watering tasks</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">🔍 Reflecting</h3>
              <p className="text-sm text-gray-700">Journaling and sharing observations about plant growth</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-bold text-yellow-800 mb-2">🌻 Restoring</h3>
              <p className="text-sm text-gray-700">Nurturing plants and witnessing growth and healing</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-bold text-pink-800 mb-2">🤝 Reconnecting</h3>
              <p className="text-sm text-gray-700">Building community through shared garden experiences</p>
            </div>
          </div>
        </section>

        {/* Core Learning Themes */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-emerald-600 mb-4">Core Learning Themes</h2>
          
          <div className="space-y-6">
            <div className="border-b pb-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">Theme 1: Seeds of Wonder</h3>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">6-8 weeks</span>
              </div>
              <p className="text-gray-700 mb-3">
                Students explore seeds through sensory activities, learning about size, shape, texture, and color. 
                They plant seeds and begin observing germination while developing basic scientific inquiry skills.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Seed sorting and classification</li>
                  <li>Planting experiments with different conditions</li>
                  <li>Daily observation journals with drawings</li>
                  <li>Germination time-lapse photography</li>
                </ul>
              </div>
            </div>

            <div className="border-b pb-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">Theme 2: Growing & Caring</h3>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">6-8 weeks</span>
              </div>
              <p className="text-gray-700 mb-3">
                Focus on plant needs (water, sunlight, soil) and the responsibility of caring for living things. 
                Students develop routines for plant care and emotional regulation.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Daily watering schedule and responsibility charts</li>
                  <li>Comparing plants in sun vs. shade</li>
                  <li>Measuring plant growth weekly</li>
                  <li>Creating care guides for different plants</li>
                </ul>
              </div>
            </div>

            <div className="border-b pb-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">Theme 3: Garden Connections</h3>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">6-8 weeks</span>
              </div>
              <p className="text-gray-700 mb-3">
                Explore how gardens connect to communities, families, and cultures. Students learn about 
                different types of gardens and plants from various cultures.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Family garden story sharing</li>
                  <li>Cultural heritage plant exploration</li>
                  <li>Community garden field trip</li>
                  <li>Creating a class garden map</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">Theme 4: Harvest & Celebration</h3>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">6-8 weeks</span>
              </div>
              <p className="text-gray-700 mb-3">
                Celebrate growth and learning through harvest activities, reflection, and sharing. Students 
                process the garden-to-table experience and plan for future gardens.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Harvesting and tasting activities</li>
                  <li>Garden reflection circles</li>
                  <li>Creating seed packets for next year</li>
                  <li>Sharing harvest with families and community</li>
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
              <h3 className="text-lg font-bold text-gray-800 mb-3">📓 Observation Journals</h3>
              <p className="text-gray-700">
                Students maintain pictorial journals documenting plant growth and personal observations. 
                Assess drawing skills, vocabulary development, and scientific observation abilities.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">🗣️ Verbal Sharing</h3>
              <p className="text-gray-700">
                Circle time discussions allow students to share discoveries and questions. Assess 
                communication skills, engagement, and conceptual understanding.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">🎨 Creative Expression</h3>
              <p className="text-gray-700">
                Art projects, songs, and dramatization activities reveal understanding. Assess creativity, 
                connection to content, and multiple intelligences.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">📊 Portfolio Development</h3>
              <p className="text-gray-700">
                Collection of work samples over time showing growth. Include photos, drawings, and 
                dictated stories demonstrating learning progression.
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
                <li>• Lesson plan templates</li>
                <li>• Observation journal pages</li>
                <li>• Parent communication letters</li>
                <li>• Assessment rubrics</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-emerald-900 mb-2">🎓 Professional Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Teacher training videos</li>
                <li>• Implementation guides</li>
                <li>• Webinar series</li>
                <li>• Coaching support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-emerald-900 mb-2">🌱 Garden Supplies</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Recommended seed varieties</li>
                <li>• Tool specifications</li>
                <li>• Budget templates</li>
                <li>• Vendor partnerships</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-lg">
            <h3 className="font-bold text-emerald-900 mb-3">🤖 AI-Powered Lesson Generator</h3>
            <p className="text-gray-700 mb-4">
              Create customized, standards-aligned lesson plans in minutes using our intelligent generator 
              that incorporates Webb's DOK, Bloom's Taxonomy, and the 5 Rs framework.
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
