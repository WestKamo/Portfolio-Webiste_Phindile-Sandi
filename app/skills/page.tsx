import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';

export default function Skills() {
  const specializedKnowledge = [
    {
      domain: "Database Architecture & Administration",
      certs: [
        "Oracle Certified Professional, MySQL 8.0 Database Administrator",
        "Oracle Cloud Database Services 2025 Certified Professional"
      ],
      skills: ["Relational Database Schemas", "Query Optimization", "Secure Data Migration", "SSMS"]
    },
    {
      domain: "AI, Cloud & Data Science",
      certs: [
        "OCI 2025 Certified Data Science Professional",
        "Microsoft Certified: Azure AI Engineer Associate",
        "Oracle Data Platform Certified Foundations Associate",
        "Cisco Intro to Data Science"
      ],
      skills: ["Machine Learning Models", "Cognitive Services Integration", "Cloud Infrastructure (IaaS)", "Predictive Analytics"]
    },
    {
      domain: "Data Analysis & Business Intelligence",
      certs: [
        "Microsoft Certified: Fabrics Analytics Engineer Associate",
        "Power BI Data Analyst Associate",
        "Data Analysis Essentials"
      ],
      skills: ["Data Visualization (Power BI, Tableau)", "ETL Pipeline Engineering", "Actionable Business Insights"]
    },
    {
      domain: "Intelligent Automation & Engineering",
      certs: [
        "UiPath Automation Solution Architect Professional",
        "UiPath Certified Professional Automation Business Analyst",
        "UiPath Certified Automation Developer Professional (In Progress)",
        "Cisco Python Essentials"
      ],
      skills: ["Robotic Process Automation (RPA)", "Python Scripting", "n8n Workflows", "Linux Cron Jobs"]
    }
  ];

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-gradient-to-bl from-black via-indigo-950 to-slate-900 text-white font-sans">
      <div className="absolute inset-0 z-0 opacity-60">
        <Spline scene="https://prod.spline.design/L4UfQNJRa5tHMzOm/scene.splinecode" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col pointer-events-none p-6 md:p-12">
        <div className="pointer-events-auto flex justify-between items-center mb-8 backdrop-blur-md bg-black/20 p-4 rounded-2xl border border-white/10">
          <Link href="/" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all font-semibold">
            ← Home
          </Link>
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-white">
            Technical Competencies
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto pointer-events-auto pr-4 custom-scrollbar pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {specializedKnowledge.map((area, idx) => (
              <div key={idx} className="p-6 rounded-3xl backdrop-blur-xl bg-indigo-950/20 border border-indigo-400/20 hover:border-indigo-400/50 hover:bg-indigo-900/30 transition-all duration-300 shadow-lg flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 border-b border-indigo-500/30 pb-4">
                  {area.domain}
                </h3>
                
                <div className="mb-6 flex-1">
                  <p className="text-xs font-bold tracking-widest text-indigo-300 mb-3">VALIDATED BY:</p>
                  <ul className="space-y-2">
                    {area.certs.map((cert, cIdx) => (
                      <li key={cIdx} className="text-sm flex items-start gap-2 text-slate-200 leading-snug">
                        <span className="text-emerald-400 mt-0.5">✔</span>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                  <p className="text-xs font-bold tracking-widest text-indigo-300 mb-3">APPLIED SKILLS:</p>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 bg-indigo-500/20 text-indigo-100 text-xs font-medium rounded-md border border-indigo-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
