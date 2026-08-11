import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';

export default function Contact() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-gradient-to-tr from-black via-indigo-950 to-slate-900 text-white font-sans">
      {/* Spline Background - Replace with your chosen scene URL */}
      <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen">
        <Spline scene="https://prod.spline.design/ZQi1715fbVk90eut/scene.splinecode" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col pointer-events-none p-6 md:p-12">
        {/* Navigation */}
        <div className="pointer-events-auto mb-8">
          <Link href="/" className="px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/20 transition-all flex items-center gap-2 w-max text-sm font-semibold">
            ← Return to Hub
          </Link>
        </div>

        {/* Content Container */}
        <div className="flex-1 flex items-center justify-center overflow-y-auto pointer-events-auto custom-scrollbar pb-12">
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 backdrop-blur-2xl bg-indigo-950/20 p-8 md:p-12 rounded-3xl border border-indigo-500/30 shadow-2xl relative">
            
            {/* Left Column: Contact Information */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">
                Let's Build Something Great.
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Whether you need a robust data pipeline, an automated architecture, or a full-stack digital transformation, I am available to help architect your next solution.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-400/30 flex items-center justify-center text-xl">
                    📞
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-indigo-300">DIRECT LINE</p>
                    <a href="tel:0680740380" className="text-lg font-mono hover:text-indigo-400 transition-colors">
                      068 074 0380
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-400/30 flex items-center justify-center text-xl">
                    ✉️
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-indigo-300">EMAIL</p>
                    <a href="mailto:phindilesandi07@gmail.com" className="text-lg font-mono hover:text-indigo-400 transition-colors break-all">
                      phindilesandi07@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-400/30 flex items-center justify-center text-xl">
                    💻
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-indigo-300">GITHUB</p>
                    <a href="https://github.com/WestKamo" target="_blank" rel="noopener noreferrer" className="text-lg font-mono hover:text-indigo-400 transition-colors">
                      github.com/WestKamo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Formspree Form */}
            <div className="bg-black/40 rounded-2xl p-6 md:p-8 border border-white/5">
              {/* Replace "YOUR_FORMSPREE_ID" with your actual endpoint string */}
              <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold tracking-widest text-indigo-300 mb-2">NAME</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full bg-indigo-950/30 border border-indigo-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-bold tracking-widest text-indigo-300 mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full bg-indigo-950/30 border border-indigo-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold tracking-widest text-indigo-300 mb-2">MESSAGE</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={4}
                    className="w-full bg-indigo-950/30 border border-indigo-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all resize-none"
                    placeholder="How can we collaborate?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="mt-2 w-full py-4 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all flex justify-center items-center gap-2"
                >
                  Send Message <span>🚀</span>
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
