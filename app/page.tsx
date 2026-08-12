import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';
import profilePic from '@/public/image_0.png';

export default function Home() {
  return (
    <main className="relative w-full h-[100dvh] overflow-hidden bg-transparent">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Spline scene="https://prod.spline.design/ZQi1715fbVk90eut/scene.splinecode" />
      </div>

      {/* Scrollable overlay layer */}
      <div className="absolute inset-0 z-10 overflow-y-auto pointer-events-none custom-scrollbar">
        
        {/* 
          pt-[40vh]: Pushes the content down on mobile so the top 40% of the screen is just the robot.
          pb-32: Massive bottom padding to prevent the phone browser from cutting off the text. 
        */}
        <div className="min-h-screen flex flex-col justify-end md:justify-center items-center md:items-start p-4 sm:p-8 md:p-16 lg:p-24 pt-[40vh] md:pt-0 pb-32 md:pb-12">
          
          {/* Softer glass box that sits lower on the screen */}
          <div className="pointer-events-auto w-full max-w-5xl flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start text-center md:text-left p-6 sm:p-8 md:p-0 rounded-3xl bg-black/40 backdrop-blur-md md:bg-transparent md:backdrop-blur-none border border-white/10 md:border-transparent shadow-2xl md:shadow-none">
            
            {/* Circular photo */}
            <div className="relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full border-2 border-indigo-400/30 shadow-[0_0_40px_rgba(79,70,229,0.5)] overflow-hidden">
              <Image
                src={profilePic}
                alt="Phindile Sandi Developer Profile"
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* Text block */}
            <div className="flex-1 flex flex-col gap-4 w-full min-w-0 justify-center">
              
              <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
                <span className="px-3 py-1 text-[10px] md:text-xs font-bold tracking-widest text-emerald-300 bg-black/60 md:bg-black/40 backdrop-blur-sm rounded-full border border-emerald-400/20 whitespace-nowrap shadow-lg">
                  AVAILABLE FOR HIRE
                </span>
                <span className="text-xs md:text-sm text-indigo-200 font-mono whitespace-nowrap bg-black/60 md:bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/5">
                  📍 Germiston, Gauteng
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(79,70,229,0.8)] break-words">
                Phindile Sandi
              </h1>

              <p className="text-lg md:text-2xl text-indigo-200 font-semibold tracking-wide drop-shadow-lg text-balance">
                Software Developer &amp; Data Solutions Architect
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
