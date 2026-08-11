import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';

export default function Projects() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-zinc-950 text-white font-sans">
      {/* Replace this URL with your new 3D scene for the projects page */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/L4UfQNJRa5tHMzOm/scene.splinecode" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col pointer-events-none p-6 md:p-12">
        <div className="pointer-events-auto mb-8">
          <Link href="/" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 w-max">
            ← Back to Home
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-end">
          <div className="pointer-events-auto w-full max-w-md">
            <h2 className="text-4xl font-bold mb-6">Featured Work</h2>
            
            <a 
              href="https://whygodwhy.co.za" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl backdrop-blur-xl bg-black/40 border border-white/20 hover:border-blue-400 hover:-translate-y-1 transition-all group"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">whygodwhy.co.za</h3>
                <span className="text-blue-400">↗</span>
              </div>
              <p className="text-zinc-300">
                Click to view the live deployment of this web application project.
              </p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
