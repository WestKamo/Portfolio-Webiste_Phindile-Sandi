import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';
import profilePic from '@/public/image_0.png';

export default function Home() {
  return (
    <main className="relative w-full h-[100dvh] overflow-hidden bg-transparent">
      {/* 3D Spline Background — locked in place, fully visible on all devices */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Spline scene="https://prod.spline.design/ZQi1715fbVk90eut/scene.splinecode" />
      </div>

      {/* Scrollable overlay layer — handles mobile scrolling natively without breaking h-[100dvh] */}
      <div className="absolute inset-0 z-10 overflow-y-auto pointer-events-none pt-20 sm:pt-24 custom-scrollbar">
        
        {/* Mobile: pushes content slightly lower so the top of the 3D scene is visible. 
            Desktop: centers the content vertically. */}
        <div className="min-h-[calc(100dvh-5rem)] sm:min-h-[calc(100dvh-6rem)] flex flex-col justify-end md:justify-center items-center md:items-start p-4 sm:p-8 md:p-16 lg:p-24 pb-12">
          
          {/* Floating Profile Content — No background box, pure holographic blend */}
          <div className="pointer-events-auto w-full max-w-5xl flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start text-center md:text-left px-2 sm:px-0">
            
            {/* Circular photo — perfectly scales from phone to desktop */}
            <div className="relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full border-2 border-indigo-400/30 shadow-[0_0_40px_rgba(79,70,229,0.5)] overflow-hidden">
              <Image
                src={profilePic}
                alt="Phindile Sandi Developer Profile"
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* Text block — heavily protected against mobile overflowing */}
            <div className="flex-1 flex flex-col gap-4 w-full min-w-0 justify-center">
              
              {/* Badges — flex-wrap ensures they stack on tiny phone screens */}
              <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
                <span className="px-3 py-1 text-[10px] md:text-xs font-bold tracking-widest text-emerald-300 bg-black/40 backdrop-blur-sm rounded-full border border-emerald-400/20 whitespace-nowrap shadow-lg">
                  AVAILABLE FOR HIRE
                </span>
                <span className="text-xs md:text-sm text-indigo-200 font-mono whitespace-nowrap bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  📍 Germiston, Gauteng
                </span>
              </div>

              {/* Glowing Holographic Title — dynamically sized */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(79,70,229,0.8)] break-words">
                Phindile Sandi
              </h1>

              <p className="text-lg md:text-2xl text-indigo-200 font-semibold tracking-wide drop-shadow-lg text-balance">
                Software Developer & Data Solutions Architect
              </p>

              <p className="text-sm md:text-lg text-slate-100 leading-relaxed drop-shadow-[0_3px_5px_rgba(0,0,0,0.9)] max-w-3xl">
                Detail-oriented Software Developer with hands-on experience designing and
                deploying scalable full-stack applications. Proven ability to architect
                backend systems, optimize databases, and manage project scopes from concept
                to production. Highly adaptable and driven to leverage advanced AI, data
                pipelines, and automation to architect digital transformation.
              </p>

              <p className="text-sm md:text-base text-emerald-300 font-mono mt-2 drop-shadow-lg font-bold">
                Direct Line:{' '}
                <a
                  href="tel:0680740380"
                  className="text-white hover:text-indigo-300 transition-colors underline decoration-indigo-400/50 underline-offset-4"
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
