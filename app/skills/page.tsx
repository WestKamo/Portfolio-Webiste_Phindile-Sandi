import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';

export default function Skills() {
  const specializedKnowledge = [
    {
      domain: "Core Programming & Architecture",
      certs: [
        "Oracle Certified Professional, MySQL 8.0 Database Administrator",
        "Oracle Cloud Database Services 2025 Certified Professional"
      ],
      skills: ["Python", "Java", "SQL", "Relational Database Schemas", "Query Optimization"]
    },
    {
      domain: "Intelligent Automation & Engineering",
      certs: [
        "UiPath Automation Solution Architect Professional",
        "UiPath Certified Professional Automation Business Analyst",
        "UiPath Certified Automation Developer Professional (In Progress)",
        "Cisco Python Essentials"
      ],
      skills: ["Robotic Process Automation (RPA)", "Linux Cron", "n8n", "System Orchestration"]
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
    }
  ];

  return (
    <main className="relative w-full h-[100dvh] overflow-hidden bg-transparent">
      {/* 3D Spline Background — locked in place, fully visible */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <Spline scene="https://prod.spline.design/L4UfQNJRa5tHMzOm/scene.splinecode" />
      </div>

      {/* Scrollable overlay layer — handles mobile scrolling natively */}
      <div className="absolute inset-0 z-10 overflow-y-auto pointer-events-none custom-scrollbar pt-20 sm:pt-24">
        
        {/* Top-Right Return Button */}
        <div className="w-full flex justify-end px-6 sm:px-8 md:px-16 lg:px-24 pt-4 pointer-events-none">
          <Link 
            href="/" 
            className="pointer-events-auto px-5 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 w-max text-sm font-semibold text-white shadow-lg drop-shadow-md"
          >
            ← Return to Hub
          </Link>
        </div>

        {/* Content Container */}
        <div className="min-h-[calc(100dvh-10rem)] flex flex-col items-center md:items-start p-6 sm:p-8 md:p-16 lg:p-24 pb-24 mt-4 md:mt-0">
          
          {/* Glowing Page Title */}
          <div className="pointer-events-auto mb-12 text-center md:text-left w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(79,70,229,0.8)]">
              Technical Competencies
            </h2>
          </div>

          {/* Holographic Grid Layout — No background boxes, purely floating text */}
          <div className="pointer-events-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 max-w-7xl w-full">
            {specializedKnowledge.map((area, idx) => (
              <div key={idx} className="flex flex-col text-center md:text-left group">
                
                {/* Domain Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(79,70,229,0.7)] border-b border-indigo-500/30 pb-4 inline-block">
                  {area.domain}
                </h3>
                
                {/* Certifications Section */}
                <div className="mb-6 flex-1">
                  <p className="text-[10px] md:text-xs font-bold tracking-widest text-emerald-300 mb-4 drop-shadow-md">VALIDATED BY:</p>
                  <ul className="space-y-3">
                    {area.certs.map((cert, cIdx) => (
                      <li key={cIdx} className="text-sm md:text-base flex items-start justify-center md:justify-start gap-3 text-slate-100 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] leading-snug">
                        <span className="text-emerald-400 font-bold mt-0.5 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]">✔</span>
                        <span className="text-balance text-left">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applied Skills section — Holographic Badges */}
                <div className="mt-auto pt-4">
                  <p className="text-[10px] md:text-xs font-bold tracking-widest text-indigo-300 mb-4 drop-shadow-md">APPLIED SKILLS:</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                    {area.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-4 py-2 bg-black/40 backdrop-blur-sm text-indigo-100 text-xs sm:text-sm font-semibold tracking-wide rounded-full border border-indigo-400/30 shadow-lg drop-shadow-md transition-all group-hover:border-indigo-400/60"
                      >
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
