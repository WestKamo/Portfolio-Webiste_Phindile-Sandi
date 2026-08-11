import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';

export default function Projects() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-gradient-to-tr from-slate-950 via-indigo-950 to-black text-white font-sans">
      {/* Updated Spline Scene */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/CEQyHffx8Jx75L-T/scene.splinecode" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col pointer-events-none p-6 md:p-12">
        <div className="pointer-events-auto mb-8">
          <Link href="/" className="px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/20 transition-all flex items-center gap-2 w-max text-sm font-semibold">
            ← Return to Hub
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-end">
          <div className="pointer-events-auto w-full max-w-xl">
            <div className="backdrop-blur-2xl bg-black/40 p-8 rounded-3xl border border-indigo-500/30 shadow-2xl relative overflow-hidden group">
              {/* Decorative background glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <span className="text-indigo-400 font-mono text-sm tracking-wider mb-2 block">PRODUCTION DEPLOYMENT</span>
                <h2 className="text-4xl font-extrabold mb-4">whygodwhy.co.za</h2>
                
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  A highly scalable web application demonstrating full-stack architecture, seamless UI/UX implementation, and robust backend integrations. Built to production-grade standards.
                </p>

                <a 
                  href="https://whygodwhy.co.za" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-indigo-400 hover:text-white transition-all transform hover:scale-105"
                >
                  Launch Application <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
