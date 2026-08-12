import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '@/public/image_0.png';

export default function Home() {
  return (
    <main className="relative w-full h-[100dvh] overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-950 to-black text-white font-sans">
      
      {/* 3D Spline Background - Locked in place */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen pointer-events-none">
        <Spline scene="https://prod.spline.design/ZQi1715fbVk90eut/scene.splinecode" />
      </div>

      {/* TOP NAVIGATION RIBBON */}
      <header className="absolute top-0 left-0 w-full z-50 backdrop-blur-xl bg-indigo-950/40 border-b border-indigo-400/20 shadow-lg pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center py-4 gap-4">
          
          {/* Logo / Brand Name */}
          <div className="font-extrabold text-xl tracking-widest text-white cursor-default">
            PHINDILE<span className="text-indigo-400">.DEV</span>
          </div>
          
          {/* Nav Links */}
          <nav className="flex items-center gap-4 sm:gap-8 overflow-x-auto w-full sm:w-auto justify-center custom-scrollbar pb-1 sm:pb-0">
            <Link href="/projects" className="text-xs sm:text-sm font-semibold text-indigo-100 hover:text-white transition-colors relative group whitespace-nowrap">
              PROJECTS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/skills" className="text-xs sm:text-sm font-semibold text-indigo-100 hover:text-white transition-colors relative group whitespace-nowrap">
              CREDENTIALS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors px-5 py-2 border border-emerald-400/30 rounded-full hover:bg-emerald-400/10 whitespace-nowrap">
              HIRE ME
            </Link>
          </nav>
        </div>
      </header>

      {/* UI Overlay - Content pushes down (pt-28) to avoid the top ribbon */}
      <div className="absolute inset-0 z-10 overflow-y-auto pointer-events-none custom-scrollbar pt-28 sm:pt-24 pb-12">
        <div className="min-h-full flex flex-col justify-center items-center md:items-start p-4 md:p-12">
          
          {/* The Card - Now strictly for your profile, no buttons cluttering it */}
          <div className="pointer-events-auto w-full max-w-4xl backdrop-blur-xl bg-indigo-950/30 p-6 md:p-10 rounded-3xl border border-indigo-400/20 shadow-[0_0_50px_-12px_rgba(79,70,229,0.3)] flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            
            {/* Circular Image Container */}
            <div className="relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full border-2 border-indigo-400/50 shadow-[0_0_25px_0_rgba(99,102,241,0.6)] group overflow-hidden">
              <Image
                src={profilePic}
                alt="Phindile Sandi Developer Profile"
                fill={true}
                className="object-cover rounded-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Text and Summary */}
            <div className="flex-1 w-full text-center md:text-left">
              <div className="mb-3 flex items-center gap-3 justify-center md:justify-start flex-wrap">
                <span className="px-3 py-1 text-[10px] md:text-xs font-bold tracking-widest text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                  AVAILABLE FOR HIRE
                </span>
                <span className="text-xs md:text-sm text-indigo-300 font-mono">📍 Parys, Free State</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200 drop-shadow-lg">
                Phindile Sandi
              </h1>
              
              <p className="text-lg md:text-2xl text-indigo-300 mb-4 font-semibold tracking-wide">
                Software Developer & Data Solutions Architect
              </p>

              <p className="text-sm md:text-lg text-slate-300 leading-relaxed mb-6">
                Detail-oriented Software Developer with hands-on experience designing and deploying scalable full-stack applications. Proven ability to architect backend systems, optimize databases, and manage project scopes from concept to production. Highly adaptable and driven to leverage advanced AI, data pipelines, and automation to architect digital transformation.
              </p>
              
              <p className="text-xs md:text-sm text-indigo-200/60 font-mono inline-block px-4 py-2 bg-black/30 rounded-lg border border-white/5">
                Direct Line: <a href="tel:0680740380" className="text-white hover:text-indigo-300 transition-colors">068 074 0380</a>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
