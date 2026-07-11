import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen -mt-10 flex flex-col items-center justify-center overflow-hidden bg-#F8F8F8 dark:bg-black text-primary"
    >
      {/* Top badges */}
      <div className="flex items-center gap-4 mb-20 animate-name">
        <a
          href="#project"
          className="px-5 py-2 dark:bg-white/5 bg-black/5 border dark:border-white/10  border-black/10 rounded-full text-black  dark:text-white font-mono backdrop-blur-sm hover:bg-white/10 transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="px-5 py-2 dark:bg-white/5  bg-black/5 border dark:border-white/10 border-black/10 rounded-full text-black  dark:text-white text-sm font-mono backdrop-blur-sm hover:bg-white/10 transition-colors"
        >
          Contact
        </a>
      </div>

      {/* Name + Lines */}
      <div className="relative flex items-center justify-center w-full max-w-5xl">
        <div className="absolute top-2/4 h-[2px] -translate-y-2/4 bg-black dark:bg-white animate-line-top" />
        <div className="absolute top-3/4 h-[2px] -translate-y-3/4 bg-black dark:bg-white  animate-line-bottom" />
        <div className="relative flex items-center justify-center w-full max-w-5xl mt-10">
          <h1 className="animate-name text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase text-black dark:text-white text-center leading-tight py-10">
            Er.Priti Maharjan
          </h1>
        </div>
      </div>

      {/* Bottom badge */}
      <div className="mt-20 animate-name">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 rounded-full text-black/60  dark:text-white/60 text-sm font-mono backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for new opportunities
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-name">
        <ChevronDown className="w-6 h-6 text-white/40 animate-bounce" />
      </div>
    </section>
  );
}
