"use client";

import { motion } from "motion/react";
import { Briefcase, Calendar, ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "../data/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

function CompanyAvatar({ name }: { name: string }) {
  const initial = name.charAt(0);
  const colors = [
    "from-violet-500 to-fuchsia-500",
    "from-cyan-500 to-blue-500",
    "from-amber-500 to-orange-500",
  ];
  const colorClass = colors[name.length % colors.length];
  return (
    <div
      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0`}
    >
      {initial}
    </div>
  );
}

export default function Experience() {
  return (
    <section className="relative py-32 overflow-hidden bg-foreground dark:bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-5 h-5 text-amber-400" />
            <h2 className="text-sm font-mono text-amber-400 uppercase tracking-[0.4em]">
              Work History
            </h2>
          </div>
          <div className="flex items-baseline gap-4">
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Career{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Architecture
              </span>
            </h3>
            <div className="h-px flex-grow bg-gradient-to-r from-amber-400/30 via-purple-500/30 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block">
            <motion.div
              variants={lineVariants}
              className="h-full w-full bg-gradient-to-b from-amber-400 via-purple-500 to-transparent origin-top"
            />
          </div>

          <div className="space-y-16">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={cardVariants}
                className="relative md:pl-16 group"
              >
                <div className="absolute left-4 top-1 w-4 h-4 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-amber-400 border-4 border-background shadow-[0_0_12px_rgba(251,191,36,0.3)] group-hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-shadow duration-500" />
                </div>

                <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden group-hover:border-amber-400/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <CompanyAvatar name={exp.company} />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                          <h4 className="text-xl font-semibold text-white">
                            {exp.role}
                          </h4>
                          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono whitespace-nowrap">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-amber-400/80 font-medium text-sm flex items-center gap-1.5">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {exp.description.map((desc, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.4 }}
                          className="flex gap-3 text-slate-300 text-sm leading-relaxed group/item"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400/60 shrink-0 group-hover/item:bg-amber-400 transition-colors" />
                          {desc}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                      {exp.skills.map((skill, i) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 + 0.3 }}
                          className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full bg-white/5 text-slate-400 border border-white/5 hover:bg-amber-400/10 hover:text-amber-400 hover:border-amber-400/20 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
