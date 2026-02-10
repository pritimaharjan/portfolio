import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-10"
      style={{ backgroundImage: "url(/bg.jpg)" }}
    >
      <div className="absolute inset-0 circuit-bg opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-engineer-900/50 border border-engineer-700/50 rounded-full text-engineer-300 text-xs font-mono mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-engineer-500 animate-pulse"></span>
          Available for new opportunities
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter bg-gradient-to-r from-white via-engineer-200 to-engineer-500 bg-clip-text text-transparent">
          Web Development
          <br /> Innovation.
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Web Development Engineered for Impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-engineer-500 hover:bg-engineer-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-engineer-500/30 transition-all hover:-translate-y-1"
          >
            View Projects
          </a>
          <ChevronDown className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50" />
        </div>
      </div>
    </section>
  );
}
