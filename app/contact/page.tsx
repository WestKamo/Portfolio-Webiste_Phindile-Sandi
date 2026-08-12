import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';

export default function Contact() {
  return (
    <main className="relative w-full h-[100dvh] overflow-hidden bg-transparent">
      {/* 3D Spline Background — locked in place, fully visible */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <Spline scene="https://prod.spline.design/ZQi1715fbVk90eut/scene.splinecode" />
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
        <div className="min-h-[calc(100dvh-10rem)] flex flex-col items-center justify-center p-6 sm:p-8 md:p-16 lg:p-24 pb-24 mt-4 md:mt-0">
          
          {/* Holographic Grid Layout — No heavy background boxes */}
          <div className="pointer-events-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Floating Contact Information */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow-[0_0_20px_rgba(79,70,229,0.8)]">
                Let's Build Something Great.
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-100 leading-relaxed mb-10 drop-shadow-[0_3px_5px_rgba(0,0,0,0.9)] max-w-2xl mx-auto lg:mx-0 text-balance">
                Whether you need a robust data pipeline, an automated architecture, or a full-stack digital transformation, I am available to help architect your next solution.
              </p>

              {/* Contact Links */}
              <div className="space-y-6 max-w-md mx-auto lg:mx-0">
                
                {/* Phone */}
                <div className="flex items-center gap-5 justify-center lg:justify-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-indigo-400/30 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                    📞
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] md:text-xs font-bold tracking-widest text-emerald-300 drop-shadow-md">DIRECT LINE</p>
                    <a href="tel:0680740380" className="text-lg md:text-xl font-mono text-white hover:text-indigo-300 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      068 074 0380
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-5 justify-center lg:justify-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-indigo-400/30 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                    ✉️
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] md:text-xs font-bold tracking-widest text-emerald-300 drop-shadow-md">EMAIL</p>
                    <a href="mailto:phindilesandi07@gmail.com" className="text-lg md:text-xl font-mono text-white hover:text-indigo-300 transition-colors break-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      phindilesandi07@gmail.com
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-5 justify-center lg:justify-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-indigo-400/30 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                    💻
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] md:text-xs font-bold tracking-widest text-emerald-300 drop-shadow-md">GITHUB</p>
                    <a href="https://github.com/WestKamo" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-mono text-white hover:text-indigo-300 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      github.com/WestKamo
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Floating Formspree Form */}
            <div className="w-full max-w-md mx-auto lg:mr-0 bg-black/40 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-indigo-400/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              {/* Replace "YOUR_FORMSPREE_ID" with your actual endpoint string */}
              <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="flex flex-col gap-5">
                
                <div>
                  <label htmlFor="name" className="block text-xs font-bold tracking-widest text-indigo-300 mb-2 drop-shadow-md">NAME</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full bg-black/50 border border-indigo-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all placeholder:text-slate-500"
                    placeholder="Lerroy Sandi"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-bold tracking-widest text-indigo-300 mb-2 drop-shadow-md">EMAIL</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full bg-black/50 border border-indigo-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all placeholder:text-slate-500"
                    placeholder="Lerroy@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold tracking-widest text-indigo-300 mb-2 drop-shadow-md">MESSAGE</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={4}
                    className="w-full bg-black/50 border border-indigo-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all resize-none placeholder:text-slate-500"
                    placeholder="How can we collaborate?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="mt-2 w-full py-4 rounded-xl font-bold text-white bg-indigo-600/80 backdrop-blur-md border border-indigo-500/50 hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all flex justify-center items-center gap-2 transform hover:-translate-y-1"
                >
                  Send Message
                </button>
                
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
