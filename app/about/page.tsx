"use client";

import { motion } from "motion/react";
import {
  Download,
  Github,
  Linkedin,
  ArrowUpRight,
  CodeXml,
  Server,
  Database,
  Briefcase,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { EXPERIENCES, PROJECTS } from "../data/data";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

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

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const WORK_PROJECT_IDS = ["p5", "p6", "p7", "p8", "p9"];
const workProjects = PROJECTS.filter((p) => WORK_PROJECT_IDS.includes(p.id));

const webSkills = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "HTML", "CSS"],
    icon: <CodeXml />,
  },
  {
    category: "Backend",
    skills: ["Laravel", "Inertia.js", "Django (Beginner)"],
    icon: <Server />,
  },
  { category: "Database", skills: ["SQL"], icon: <Database /> },
];

const dataSkills = [
  { category: "Programming", skills: ["Python", "SQL"] },
  {
    category: "Libraries",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "scikit-learn"],
  },
  {
    category: "Skills",
    skills: ["Data Cleaning", "Visualization", "Model Training", "EDA"],
  },
];

const SkillCard = ({
  category,
  skills,
  icon,
}: {
  category: string;
  skills: string[];
  icon?: React.ReactNode;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex text-black items-center gap-2">
        {icon && <div>{icon}</div>}
        <h1 className="text-sm font-semibold dark:text-white">{category}</h1>
      </div>
      <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-white/70">
        {skills.map((skill) => (
          <li key={skill}>• {skill}</li>
        ))}
      </ul>
    </figure>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-mono text-blue-400 uppercase tracking-[0.4em]">
                Get to know me
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light uppercase text-black dark:text-white leading-tight mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                Me
              </span>
            </h1>

            <div className="h-px w-full bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-transparent mb-8" />

            <TypeAnimation
              sequence={[
                "Er. Priti Maharjan",
                2000,
                "Full Stack Developer",
                2000,
                "React & Next.js Enthusiast",
                2000,
                "Lifelong Learner",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 font-mono"
            />
          </motion.div>
        </div>
      </section>

      {/* Bio + Photo Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative  overflow-hidden  dark:border-white/10 ">
                <img
                  src="/Priti.jpeg"
                  alt="Priti Maharjan"
                  className="w-full h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6  dark:black rounded-2xl p-5 border-l-6 border-blue-400 shadow-xl">
                <span className="italic font-bold text-lg text-white">
                  &quot;Code. Create. Improve&quot;
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={fadeUp} className="mb-4">
                <span className="text-sm font-mono text-blue-400 uppercase tracking-[0.4em]">
                  My Story
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-6"
              >
                Developer with a{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  purpose
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6"
              >
                I&apos;m Priti Maharjan — a Full Stack Developer and Computer
                Engineer based in Lalitpur, Nepal. I specialize in building
                modern web applications using React and Next.js, with a strong
                focus on clean UI, reusable components, and performance
                optimization.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6"
              >
                With hands-on experience at Infinity Digital Agency, I&apos;ve
                architected and delivered 5+ client projects — from e-commerce
                platforms to internal management systems. I enjoy collaborating
                with cross-functional teams to ship features on tight deadlines.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8"
              >
                Beyond web development, I have a growing passion for data
                analytics and machine learning. I&apos;ve built projects like a
                Book Recommendation System and Customer Churn Prediction model,
                and I&apos;m motivated to expand these skills through real-world
                applications.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link
                  href="https://github.com/pritimaharjan"
                  target="_blank"
                  className="p-3 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-blue-400/10 hover:border-blue-400/30 transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-black dark:text-white" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/er-priti-maharjan-2955b5309/"
                  target="_blank"
                  className="p-3 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-blue-400/10 hover:border-blue-400/30 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-black dark:text-white" />
                </Link>
                <a href="/my_CV-2.pdf" download>
                  <Button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium cursor-pointer transition-all duration-300">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <h2 className="text-sm font-mono text-blue-400 uppercase tracking-[0.4em]">
                My Journey
              </h2>
            </div>
            <div className="flex items-baseline gap-4">
              <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight">
                The{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Path So Far
                </span>
              </h3>
              <div className="h-px flex-grow bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-transparent" />
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94] as [
                    number,
                    number,
                    number,
                    number,
                  ],
                }}
                className="h-full w-full bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent origin-top"
              />
            </div>

            <div className="space-y-12">
              {EXPERIENCES.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94] as [
                      number,
                      number,
                      number,
                      number,
                    ],
                  }}
                  className="relative md:pl-16 group"
                >
                  <div className="absolute left-4 top-1 w-4 h-4 hidden md:block">
                    <div className="w-4 h-4 rounded-full bg-blue-400 border-4 border-white dark:border-[#0a0a0a] shadow-[0_0_12px_rgba(96,165,250,0.3)] group-hover:shadow-[0_0_20px_rgba(96,165,250,0.5)] transition-shadow duration-500" />
                  </div>

                  <div className="relative rounded-2xl bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-6 md:p-8 group-hover:border-blue-400/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                    <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="text-xl font-semibold text-black dark:text-white">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono text-blue-400/80 bg-blue-400/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-blue-400/80 font-medium text-sm flex items-center gap-1.5 mb-3">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      {exp.company}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400/60 shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skill Summary */}
      <section id="skill" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <CodeXml className="w-5 h-5 text-blue-400" />
              <h2 className="text-sm font-mono text-blue-400 uppercase tracking-[0.4em]">
                Technical Skill Summary
              </h2>
            </div>
            <div className="flex items-baseline gap-4">
              <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight">
                Capability{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Overview
                </span>
              </h3>
              <div className="h-px flex-grow bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-transparent" />
            </div>
          </motion.div>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {webSkills.map((skill) => (
              <SkillCard
                key={skill.category}
                category={skill.category}
                skills={skill.skills}
                icon={skill.icon}
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {dataSkills.map((skill) => (
              <SkillCard
                key={skill.category}
                category={skill.category}
                skills={skill.skills}
              />
            ))}
          </Marquee>
        </div>
      </section>
    </main>
  );
}
