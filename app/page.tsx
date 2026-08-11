'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Import the standard react-spline package instead of the /next one
const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-zinc-950" />
});

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');
  
  // ... The rest of your profile, skills, projects, and return statement stay exactly the same
  // Portfolio Data
  const profile = {
    name: "Phindile Sandi",
    title: "IT Professional & Aspiring Data Scientist",
    contact: "0680740380"
  };

  const skills = [
    "Python", "SQL", "Java", "Docker", "Linux", 
    "Microsoft Azure", "UiPath", "n8n", "Linux Cron", "Power BI"
  ];

  const projects = [
    {
      name: "StockExchange Pipeline",
      desc: "Containerized financial ELT pipeline integrating AWS Athena and a Streamlit dashboard."
    },
    {
      name: "aws-resource-lister",
      desc: "Automated DevOps bash scripting project to catalog active cloud infrastructure."
    },
    {
      name: "Melenium Ordering App",
      desc: "Mobile-responsive static web app with a digital cart and WhatsApp ordering bridge."
    },
    {
      name: "SASSETA Internship",
      desc: "Technology internship focused on industrial 3D printing applications and prototyping."
    }
  ];

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-zinc-950 text-white font-sans">
      
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/ZQi1715fbVk90eut/scene.splinecode" />
      </div>

      {/* UI Overlay - Pointer Events None allows clicking the 3D model underneath */}
      <div className="absolute inset-0 z-10 flex flex-col md:flex-row pointer-events-none p-6 md:p-12">
        
        {/* Left Column: Branding & Navigation */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="pointer-events-auto max-w-md">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 drop-shadow-lg">
              {profile.name}
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-6 drop-shadow-md">
              {profile.title}
            </p>
            
            {/* Interactive Navigation */}
            <div className="flex gap-4">
              <button 
                onClick={() => setActiveTab('projects')}
                className={`px-4 py-2 rounded-full backdrop-blur-md border transition-all ${
                  activeTab === 'projects' ? 'bg-white/20 border-white/50' : 'bg-black/20 border-white/10 hover:bg-white/10'
                }`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveTab('skills')}
                className={`px-4 py-2 rounded-full backdrop-blur-md border transition-all ${
                  activeTab === 'skills' ? 'bg-white/20 border-white/50' : 'bg-black/20 border-white/10 hover:bg-white/10'
                }`}
              >
                Skills Stack
              </button>
            </div>
          </div>

          <div className="mt-8 pointer-events-auto">
            <p className="text-zinc-400">Let's Connect</p>
            <p className="text-lg font-mono mt-1 hover:text-white transition-colors cursor-pointer w-max">
              {profile.contact}
            </p>
          </div>
        </div>

        {/* Right Column: Dynamic Content Area */}
        <div className="flex-1 flex items-center justify-end mt-12 md:mt-0">
          <div className="pointer-events-auto w-full max-w-lg h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            
            {/* Projects Tab */}
            {activeTab === 'projects' && (
              <div className="flex flex-col gap-4 animate-fade-in">
                {projects.map((project, idx) => (
                  <div key={idx} className="p-6 rounded-2xl backdrop-blur-xl bg-black/30 border border-white/10 hover:border-white/30 hover:bg-black/40 transition-all cursor-pointer group">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="flex flex-wrap gap-3 animate-fade-in backdrop-blur-xl bg-black/30 border border-white/10 p-8 rounded-2xl">
                {skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:-translate-y-1 hover:bg-white/10 transition-transform cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
