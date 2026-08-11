import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-950 to-black text-white font-sans">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
        <Spline scene="https://prod.spline.design/ZQi1715fbVk90eut/scene.splinecode" />
      </div>

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col pointer-events-none p-6 md:p-12 justify-center items-start">
        <div className="pointer-events-auto max-w-2xl backdrop-blur-xl bg-indigo-950/30 p-10 rounded-3xl border border-indigo-400/20 shadow-[0_0_50px_-12px_rgba(79,70,229,0.3)]">
          <div className="mb-2 flex items-center gap-4">
            <span className="px-3 py-1 text-xs font-bold tracking-widest text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
              Genuis
            </span>
            <span className="text-sm text-indigo-300 font-mono">📍 Germiston, Gauteng</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200 drop-shadow-lg">
            Phindile Sandi
          </h1>
          <p className="text-xl md:text-2xl text-indigo-300 mb-6 font-semibold tracking-wide">
            Software Developer & Data Solutions Architect
          </p>

          <p className="text-slate-300 leading-relaxed mb-8 text-lg">
            Detail-oriented Software Developer with hands-on experience designing and deploying scalable full-stack applications. Proven ability to architect backend systems, optimize databases, and manage project scopes from concept to production. Highly adaptable and driven to leverage advanced AI, data pipelines, and automation to architect digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link 
              href="/projects"
              className="px-8 py-4 rounded-full text-center font-bold bg-indigo-600/80 border border-indigo-400/50 hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:-translate-y-1 transition-all"
            >
              Explore Engineering Projects
            </Link>
            <Link 
              href="/skills"
              className="px-8 py-4 rounded-full text-center font-bold backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all"
            >
              View Credentials
            </Link>
          </div>
          
          <p className="text-sm text-indigo-200/60 font-mono">
            Direct Line: <a href="tel:0680740380" className="hover:text-white transition-colors">068 074 0380</a>
          </p>
        </div>
      </div>
    </main>
  );
}
