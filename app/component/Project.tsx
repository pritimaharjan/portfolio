"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  Book,
  Briefcase,
  ExternalLink,
  LineChart,
  ListCheck,
  LucideScanFace,
  ShoppingBag,
} from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { PROJECTS } from "../data/data";
import { motion } from "motion/react";

export default function Project() {
  console.log("pefdcvnjd", PROJECTS);

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };
  return (
    <section id="project" className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-5 h-5 text-blue-400" />
            <h2 className="text-sm font-mono text-blue-400 uppercase tracking-[0.4em]">
              Professional Work
            </h2>
          </div>
          <div className="flex items-baseline gap-4">
            <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight">
              Projects {""}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Archive
              </span>
            </h3>
            <div className="h-px flex-grow bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-transparent" />
          </div>
          <span className="bg-gradient-to-r mt-1 from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Some of the projects are from work and some are on my own time.
          </span>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              className="relative group rounded-2xl bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 overflow-hidden hover:border-blue-400/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />

              <div className="relative">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-3 left-3">
                    {project.tag === "work" ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full bg-blue-400/90 text-white">
                        <Briefcase className="w-3 h-3" />
                        Work Project
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full bg-blue-400/90 text-white">
                        <Briefcase className="w-3 h-3" />
                        Project
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-lg font-semibold text-black dark:text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-blue-400/10 transition-all duration-300 shrink-0"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-400" />
                      </Link>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
