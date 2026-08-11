import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';

export default function Skills() {
  const skillCategories = [
    {
      domain: "Database Administration",
      skills: "SQL Server, MySQL 8.0, PostgreSQL, MongoDB",
      certs: [
        "Oracle Certified Professional, MySQL 8.0 Database Administrator",
        "Oracle Cloud Database Services 2025 Certified Professional"
      ]
    },
    {
      domain: "AI, Cloud & Data Science",
      skills: "Microsoft Azure, AWS (Athena), OCI, Python",
      certs: [
        "Microsoft Certified: Azure AI Engineer Associate",
        "Microsoft Certified: Fabrics Analytics Engineer Associate",
        "Oracle Cloud Infrastructure 2025 Certified Data Science Professional"
      ]
    },
    {
      domain: "Automation & RPA",
      skills: "UiPath, Linux Cron, n8n",
      certs: [
        "UiPath Automation Solution Architect Professional",
        "UiPath Certified Professional Automation Business Analyst",
        "Apache Airflow 3 Fundamentals"
      ]
    }
  ];

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-zinc-950 text-white font-sans">
      {/* Replace this URL with your new 3D scene for the skills page */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/L4UfQNJRa5tHMzOm/scene.splinecode" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col pointer-events-none p-6 md:p-12">
        <div className="pointer-events-auto mb-4">
          <Link href="/" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 w-max">
            ← Back to Home
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto pointer-events-auto pr-4 custom-scrollbar">
          <h2 className="text-4xl font-bold mb-8">Skills & Certifications</h2>
          
          <div className="grid gap-6 max-w-2xl">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="p-6 rounded-2xl backdrop-blur-xl bg-black/40 border border-white/10">
                <h3 className="text-xl font-bold text-blue-400 mb-2">{category.domain}</h3>
                <p className="text-sm font-mono text-zinc-300 mb-4 pb-4 border-b border-white/10">
                  Tech: {category.skills}
                </p>
                <ul className="space-y-2">
                  {category.certs.map((cert, cIdx) => (
                    <li key={cIdx} className="text-sm flex items-start gap-2 text-zinc-200">
                      <span className="text-yellow-500 mt-0.5">★</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
