import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';
import profilePic from '@/public/image_0.png';

export default function Home() {
  return (
    <main className="relative w-full h-[100dvh] overflow-hidden bg-transparent">
      {/* 3D Spline Background — locked in place, fully visible, never intercepts clicks/scroll */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Spline scene="https://prod.spline.design/ZQi1715fbVk90eut/scene.splinecode" />
      </div>

      {/* Scrollable overlay layer sits above the 3D scene. */}
      <div className="absolute inset-0 z-10 overflow-y-auto pointer-events-none pt-20 sm:pt-24 custom-scrollbar">
        <div className="min-h-[calc(100dvh-5rem)] sm:min-h-[calc(100dvh-6rem)] flex flex-col justify-end items-center md:items-start p-4 sm:p-6 md:p-10 pb-8 md:pb-14">
          
          {/* Profile card — narrow "sidebar" card anchored bottom-left on desktop */}
          <div className="pointer-events-auto w-full max-w-sm md:max-w-md backdrop-blur-xl bg-indigo-950/40 p-5 sm:p-6 md:p-7 rounded-3xl border border-indigo-400/20 shadow-[0_0_50px_-12px_rgba(79,70,229,0.4)] flex flex-col md:flex-row gap-5 items-center md:items-start text-center md:text-left">
            
            {/* Circular photo */}
            <div className="relative flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-indigo-400/50 shadow-[0_0_25px_0_rgba(99,102,241,0.6)] overflow-hidden">
              <Image
                src={profilePic}
                alt="Phindile Sandi Developer Profile"
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* Text block */}
            <div className="flex-1 flex flex-col gap-3 w-full min-w-0">
              <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
                <span className="px-3 py-1 text-[10px] font-bold tracking-widest text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20 whitespace-nowrap">
                  AVAILABLE FOR HIRE
                </span>
                <span className="text-xs text-indigo-300 font-mono whitespace-nowrap">
                  📍 Germiston, Gauteng
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200 drop-shadow-lg">
                Phindile Sandi
              </h1>

              <p className="text-sm md:text-lg text-indigo-300 font-semibold tracking-wide">
                Software Developer & Data Solutions Architect
              </p>

              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Detail-oriented Software Developer with hands-on experience designing and
                deploying scalable full-stack applications. Proven ability to architect
                backend systems, optimize databases, and manage project scopes from concept
                to production. Highly adaptable and driven to leverage advanced AI, data
                pipelines, and automation to architect digital transformation.
              </p>

              <p className="text-xs text-indigo-200/60 font-mono inline-block px-4 py-2 bg-black/30 rounded-lg border border-white/5 w-max mx-auto md:mx-0">
                Direct Line:{' '}
                <a
                  href="tel:0680740380"
                  className="text-white hover:text-indigo-300 transition-colors"
                >
                  068 074 0380
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
