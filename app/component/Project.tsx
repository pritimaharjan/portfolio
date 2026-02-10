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
  LineChart,
  ListCheck,
  LucideScanFace,
  ShoppingBag,
} from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { PROJECTS } from "../data/data";

export default function Project() {
  console.log("pefdcvnjd", PROJECTS);
  const projects = [
    {
      title: "Book Recommendation System",
      icon: <Book size={28} className="text-primary" />,
      img: "/book_recommendation.jpg",
      description:
        "A machine learning system that recommends books using popularity-based and collaborative filtering methods.",
      link: "https://github.com/pritimaharjan/Book_recommendation_system.git",
      tools: ["Python", "Matplotlib", "Seaborn", "Cosine Similarity"],
    },
    {
      title: "Customer Churn Prediction",
      icon: <LineChart size={28} className="text-primary" />,
      img: "/dataset-cover.png",
      description:
        "Built a predictive model using Random Forest to analyze customer behavior. Data analyzed in SSMS and visualized with Power BI.",
      link: "https://github.com/pritimaharjan/customer_churn_analysis.git",
      tools: ["Python", "Pandas", "NumPy", "Matplotlib"],
    },
    {
      title: "Emotion Detection with YOLO",
      icon: <LucideScanFace size={28} className="text-primary" />,
      img: "/emotion_detection.webp",
      description:
        "Developed a real-time emotion detection system leveraging YOLOv8 and Roboflow for facial emotion classification.",
      link: "https://github.com/pritimaharjan/Emotion_detection_project.git",
      tools: ["YOLOv8", "Roboflow", "Python"],
    },
    {
      title: "Todo List Application",
      img: "/Todo_list.png",
      description:
        "A simple and efficient task manager built with React, allowing users to add, edit, and remove daily tasks.",
      link: "https://github.com/pritimaharjan/newTodoList.git",
      tools: ["React", "HTML", "CSS"],
      icon: <ListCheck size={28} className="text-primary" />,
    },
    // {
    //   title: "Lumbini Handicraft E-commerce Platform",
    //   icon: <ShoppingBag size={28} className="text-primary" />,
    //   img: "/ecommerce.jpg",
    //   description:
    //     "A full-stack e-commerce solution built with Laravel, Inertia.js, and React to support product browsing and secure checkout.",
    //   link: "#",
    //   tools: ["Laravel", "Inertia.js", "React", "MySQL"],
    // },
  ];

  return (
    <main id="project" className=" dark:bg-background py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-sm text-black font-mono text-cyber-primary  dark:text-white  uppercase tracking-[0.4em] mb-4">
            The Repository
          </h2>
          <div className="flex items-baseline gap-4">
            <h3 className="text-4xl typo-secondary md:text-5xl font-bold dark:text-white  tracking-tight">
              Project Archive
            </h3>
            <div className="h-px flex-grow  from-cyber-primary/5 to-transparent bg-gradient-to-r from-indigo-500 via-purple-500 "></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative  rounded-3xl overflow-hidden border-glow transition-all duration-700 hover:-translate-y-2"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
              </div>

              <div className="p-8">
                <div className="bottom-1 left-8">
                  <h4 className="text-2xl font-bold typo-secondary group-hover:text-glow transition-all">
                    {project.title}
                  </h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between ">
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-slate-500 group-hover:text-cyber-accent transition-colors"
                      >
                        &lt;{t}/&gt;
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-white hover:bg-cyber-primary transition-all"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
