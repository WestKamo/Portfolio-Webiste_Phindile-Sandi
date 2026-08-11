import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-zinc-950 text-white font-sans">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/ZQi1715fbVk90eut/scene.splinecode" />
      </div>

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col pointer-events-none p-6 md:p-12 justify-center items-start">
        <div className="pointer-events-auto max-w-lg backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">
            Phindile Sandi
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 mb-8 font-medium">
            Software Developer
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/projects"
              className="px-6 py-3 rounded-full text-center backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all"
            >
              View Projects
            </Link>
            <Link 
              href="/skills"
              className="px-6 py-3 rounded-full text-center backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all"
            >
              Skills & Certifications
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
