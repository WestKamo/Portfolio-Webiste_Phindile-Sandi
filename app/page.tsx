import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '@/public/image_0.png';

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-950 to-black text-white font-sans">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
        <Spline scene="https://prod.spline.design/ZQi1715fbVk90eut/scene.splinecode" />
      </div>

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col pointer-events-none p-6 md:p-12 justify-center items-start">
        <div className="pointer-events-auto max-w-4xl backdrop-blur-xl bg-indigo-950/30 p-10 rounded-3xl border border-indigo-400/20 shadow-[0_0_50px_-12px_rgba(79,70,229,0.3)] flex flex-col md:flex-row gap-8 items-center">
          
          {/* Circular Image Container with Glowing Ring */}
          <div className="relative flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-indigo-400/50 shadow-[0_0_25px_0_rgba(99,102,241,0.6)] group overflow-hidden">
            <Image
              src={profilePic}
              alt="Phindile Sandi Developer Profile"
              fill={true}
              className="object-cover rounded-full transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Text and Actions */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-2 flex items-center gap-4 justify-center md:justify-start">
              <span className="px-3 py-1 text-xs font-bold tracking-widest text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                AVAILABLE FOR HIRE
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
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center md:justify-start">
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
            {/* New Contact Button */}
            <Link 
              href="/contact"
              className="px-8 py-4 rounded-full text-center font-bold backdrop-blur-md bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 hover:bg-emerald-500/20 hover:-translate-y-1 transition-all"
            >
              Get in Touch		
              </Link>
            </div>
            
            <p className="text-sm text-indigo-200/60 font-mono">
              Direct Line: <a href="tel:0680740380" className="hover:text-white transition-colors">068 074 0380</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
