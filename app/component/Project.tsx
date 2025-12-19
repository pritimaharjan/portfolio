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

export default function Project() {
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
      icon: <ListCheck size={28} className="text-primary" />,
      img: "/Todo_list.png",
      description:
        "A simple and efficient task manager built with React, allowing users to add, edit, and remove daily tasks.",
      link: "https://github.com/pritimaharjan/newTodoList.git",
      tools: ["React", "HTML", "CSS"],
    },
    {
      title: "Lumbini Handicraft E-commerce Platform",
      icon: <ShoppingBag size={28} className="text-primary" />,
      img: "/ecommerce.jpg",
      description:
        "A full-stack e-commerce solution built with Laravel, Inertia.js, and React to support product browsing and secure checkout.",
      link: "#",
      tools: ["Laravel", "Inertia.js", "React", "MySQL"],
    },
  ];

  return (
    <main id="project" className="bg-gray-50 dark:bg-background py-24">
      <section className="container mx-auto px-6 sm:px-16">
        <h1 className="text-4xl sm:text-6xl font-bold text-center text-primary dark:text-white mb-16">
          Projects
        </h1>

        {/* Grid */}
        <div className="w-full flex flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {projects.map((project, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  {/* CARD */}
                  <Card className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white border-none">
                    {/* Image */}
                    <div className="relative h-56 w-full">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Card Content */}
                    <CardContent className="p-6 space-y-4">
                      <CardTitle className="text-xl font-semibold text-gray-800">
                        {project.title}
                      </CardTitle>

                      <div className="flex items-center gap-2 text-primary font-semibold">
                        View Project
                        <ArrowRight size={18} />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                {/* DIALOG */}
                <DialogContent className="max-w-3xl p-0 overflow-hidden">
                  {/* Dialog Image */}
                  <div className="relative w-full h-64">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                        {project.icon}
                        {project.title}
                      </DialogTitle>

                      <DialogDescription className="text-gray-600 leading-relaxed">
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* External Link */}
                    {project.link !== "#" && (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                      >
                        Visit Repository
                        <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </Marquee>
        </div>
      </section>
    </main>
  );
}
