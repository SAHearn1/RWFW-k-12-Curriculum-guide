import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import SignOutButton from "@/components/SignOutButton"

export default async function Grade912() {
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
                <h1 className="text-2xl font-bold text-gray-900">Grades 9-12: Impact & Innovation</h1>
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
            The 9-12 curriculum prepares students for college, careers, and civic engagement through capstone 
            projects, professional portfolio development, and community-based research. Students emerge as 
            environmental leaders ready to address pressing challenges in food systems and sustainability.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-2">🎓 Capstone Projects</h3>
              <p className="text-sm text-gray-700">Year-long research and implementation</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-2">💼 Professional Portfolio</h3>
              <p className="text-sm text-gray-700">College and career readiness documentation</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-2">🔬 Community Research</h3>
              <p className="text-sm text-gray-700">Authentic partnerships with local organizations</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-2">🌍 Career Pathways</h3>
              <p className="text-sm text-gray-700">Exploration of environmental and agricultural careers</p>
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
                  <p className="font-mono text-sm text-emerald-600 font-bold">HS-LS2-7</p>
                  <p className="text-gray-700">Design, evaluate, and refine solutions for reducing impacts of human activities on biodiversity.</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-mono text-sm text-emerald-600 font-bold">HS-ESS3-4</p>
                  <p className="text-gray-700">Evaluate solutions designed to reduce human impacts on natural systems.</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-mono text-sm text-emerald-600 font-bold">HS-ETS1-3</p>
                  <p className="text-gray-700">Evaluate solutions considering priorities and trade-offs in design criteria and constraints.</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-mono text-sm text-emerald-600 font-bold">HS-LS4-6</p>
                  <p className="text-gray-700">Create or revise simulation models to test solutions to reduce biodiversity loss.</p>
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
                <h3 className="text-xl font-bold text-gray-800">Theme 1: Senior Capstone Project</h3>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">Full Year</span>
              </div>
              <p className="text-gray-700 mb-3">
                Students design and implement an original research project or community initiative addressing 
                a real-world challenge in food systems, sustainability, or environmental justice.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Project Components:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Literature review and research question development</li>
                  <li>IRB approval process for human subjects research (if applicable)</li>
                  <li>Data collection using advanced methodologies</li>
                  <li>Statistical analysis and interpretation</li>
                  <li>Written thesis and formal presentation</li>
                  <li>Defense before panel of educators and community members</li>
                </ul>
              </div>
            </div>

            <div className="border-b pb-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">Theme 2: Professional Portfolio Development</h3>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">Ongoing</span>
              </div>
              <p className="text-gray-700 mb-3">
                Create comprehensive portfolio documenting skills, experiences, and achievements for college 
                applications, scholarships, and career opportunities.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Portfolio Elements:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Professional resume and cover letters</li>
                  <li>Research papers and scientific writing samples</li>
                  <li>Project documentation with photos and videos</li>
                  <li>Letters of recommendation from mentors</li>
                  <li>Reflective essays on learning and growth</li>
                  <li>Certifications (food safety, first aid, etc.)</li>
                </ul>
              </div>
            </div>

            <div className="border-b pb-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">Theme 3: Community-Based Research</h3>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">Semester</span>
              </div>
              <p className="text-gray-700 mb-3">
                Partner with local organizations, universities, or businesses to conduct research that 
                addresses authentic community needs and contributes to broader knowledge.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Partnership Examples:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Collaborate with extension services on agricultural trials</li>
                  <li>Partner with public health departments on food access studies</li>
                  <li>Work with environmental nonprofits on conservation projects</li>
                  <li>Support local farms with soil health assessments</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">Theme 4: Career Pathway Exploration</h3>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">Ongoing</span>
              </div>
              <p className="text-gray-700 mb-3">
                Explore diverse career opportunities in environmental science, agriculture, public health, 
                education, policy, and related fields through internships and mentorship.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Career Exploration Activities:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Job shadowing with professionals in target fields</li>
                  <li>Internships with local organizations</li>
                  <li>College and career fair participation</li>
                  <li>Informational interviews with industry experts</li>
                  <li>Dual enrollment in agriculture or environmental science courses</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-emerald-600 mb-4">Assessment & Evaluation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">🎯 Capstone Defense</h3>
              <p className="text-gray-700">
                Formal presentation and defense of capstone project before panel. Assessed on research 
                quality, presentation skills, and ability to respond to questions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">📁 Portfolio Review</h3>
              <p className="text-gray-700">
                Comprehensive evaluation of portfolio completeness, quality, and professional presentation. 
                Review with college admissions or career counselors.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">🤝 Mentor Evaluations</h3>
              <p className="text-gray-700">
                Assessment from community partners and professional mentors on work quality, professionalism, 
                and growth over time.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">📊 Impact Assessment</h3>
              <p className="text-gray-700">
                Evaluation of project outcomes and community impact. Documentation of tangible results 
                and contributions to local organizations or knowledge base.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-emerald-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">College & Career Readiness</h2>
          
          <div className="bg-white p-6 rounded-lg mb-6">
            <h3 className="font-bold text-emerald-900 mb-3">🎓 Pathways After Graduation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">College Majors</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Environmental Science/Studies</li>
                  <li>Agriculture/Agronomy</li>
                  <li>Horticulture</li>
                  <li>Public Health</li>
                  <li>Education</li>
                  <li>Policy/Environmental Law</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Career Opportunities</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Urban Farmer/Agricultural Manager</li>
                  <li>Environmental Educator</li>
                  <li>Sustainability Coordinator</li>
                  <li>Food Systems Planner</li>
                  <li>Conservation Scientist</li>
                  <li>Community Organizer</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-bold text-emerald-900 mb-3">🤖 AI-Powered Lesson Generator</h3>
            <p className="text-gray-700 mb-4">
              Create customized, standards-aligned lesson plans for advanced students using our intelligent generator.
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
