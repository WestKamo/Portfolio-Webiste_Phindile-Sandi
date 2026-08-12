'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-indigo-950/40 border-b border-indigo-400/20 shadow-lg pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center py-3 md:py-4 gap-3 md:gap-4">
        {/* Brand */}
        <Link
          href="/"
          className="font-extrabold text-lg sm:text-xl tracking-widest text-white"
        >
          PHINDILE<span className="text-indigo-400">.DEV</span>
        </Link>

        {/* Nav links — wraps instead of overflowing on narrow screens */}
        <nav className="flex items-center gap-3 sm:gap-6 md:gap-8 flex-wrap justify-center">
          <Link
            href="/"
            className="text-xs sm:text-sm font-semibold text-indigo-100 hover:text-white transition-colors relative group whitespace-nowrap"
          >
            HOME
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/projects"
            className="text-xs sm:text-sm font-semibold text-indigo-100 hover:text-white transition-colors relative group whitespace-nowrap"
          >
            PROJECTS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/skills"
            className="text-xs sm:text-sm font-semibold text-indigo-100 hover:text-white transition-colors relative group whitespace-nowrap"
          >
            CREDENTIALS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className="text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors px-4 sm:px-5 py-2 border border-emerald-400/30 rounded-full hover:bg-emerald-400/10 whitespace-nowrap"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}
