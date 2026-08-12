import Link from 'next/link';
import Spline from '@splinetool/react-spline/next';

export default function Projects() {
  return (
    <main className="relative w-full h-[100dvh] overflow-hidden bg-transparent">
      {/* 3D Spline Background — locked in place, fully visible */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Spline scene="https://prod.spline.design/CEQyHffx8Jx75L-T/scene.splinecode" />
      </div>

      {/* Scrollable overlay layer — handles mobile scrolling natively */}
      <div className="absolute inset-0 z-10 overflow-y-auto pointer-events-none pt-20 sm:pt-24 custom-scrollbar">
        
        {/* Mobile: pushes content lower. Desktop: aligns content to the right so the left side of the 3D scene is visible. */}
        <div className="min-h-[calc(100dvh-5rem)] sm:min-h-[calc(100dvh-6rem)] flex flex-col justify-end md:justify-center items-center md:items-end p-6 sm:p-8 md:p-16 lg:p-24 pb-12">
          
          {/* Floating Project Content — Removed background box, pure holographic blend */}
          <div className="pointer-events-auto w-full max-w-3xl flex flex-col gap-6 text-center md:text-right px-2 sm:px-0">
            
            {/* Return Button */}
            <div className="flex justify-center md:justify-end mb-2">
              <Link 
                href="/" 
                className="px-5 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 w-max text-sm font-semibold text-white shadow-lg drop-shadow-md"
              >
                ← Return to Hub
              </Link>
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-4 w-full justify-center">
              
              {/* Badge */}
              <div className="flex items-center justify-center md:justify-end">
                <span className="px-4 py-1.5 text-[10px] md:text-xs font-bold tracking-widest text-emerald-300 bg-black/40 backdrop-blur-sm rounded-full border border-emerald-400/20 whitespace-nowrap shadow-lg">
                  PRODUCTION DEPLOYMENT
                </span>
              </div>

              {/* Glowing Holographic Title */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(79,70,229,0.8)] break-words">
                whygodwhy.co.za
              </h2>

              {/* High-Contrast Description */}
              <p className="text-base sm:text-lg md:text-xl text-slate-100 leading-relaxed drop-shadow-[0_3px_5px_rgba(0,0,0,0.9)] max-w-2xl mx-auto md:mx-0 md:ml-auto text-balance">
                A multi-layered full-stack web application platform demonstrating seamless UI/UX implementation, an analytics-oriented database schema, and robust backend integrations. Built to production-grade standards.
              </p>

              {/* Launch Button */}
              <div className="flex justify-center md:justify-end mt-4">
                <a 
                  href="https://whygodwhy.co.za" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-indigo-500/80 backdrop-blur-md border border-indigo-400/50 text-white font-bold hover:bg-indigo-400 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] hover:-translate-y-1 transition-all transform shadow-lg"
                >
                  Launch Application <span className="font-mono text-xl">↗</span>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
