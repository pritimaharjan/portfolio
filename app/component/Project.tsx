import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Book,
  LineChart,
  ListCheck,
  LucideScanFace,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  const projects = [
    {
      title: "Book Recommendation System",
      icon: <Book size={32} className="text-primary" />,
      img: "/book_recommendation.jpg",
      description:
        "A machine learning system that recommends books using popularity-based and collaborative filtering methods.",
      link: "https://github.com/pritimaharjan/Book_recommendation_system.git",
      tools: ["Python", "Matplotlib", "Seaborn", "Cosine Similarity (sklearn)"],
    },
    {
      title: "Customer Churn Prediction",
      icon: <LineChart size={32} className="text-primary" />,
      img: "/dataset-cover.png",
      description:
        "Built a predictive model using Random Forest to analyze customer behavior. Data analyzed in SSMS and visualized with Power BI.",
      link: "https://github.com/pritimaharjan/customer_churn_analysis.git",
      tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },
    {
      title: "Emotion Detection with YOLO",
      icon: <LucideScanFace size={32} className="text-primary" />,
      img: "/emotion_detection.webp",
      description:
        "Developed a real-time emotion detection system leveraging YOLOv8 and Roboflow for facial emotion classification.",
      link: "https://github.com/pritimaharjan/Emotion_detection_project.git",
      tools: ["YOLOv8", "Roboflow", "Python"],
    },
    {
      title: "Todo List Application",
      icon: <ListCheck size={32} className="text-primary" />,
      img: "/Todo_list.png",
      description:
        "A simple and efficient task manager built with React, allowing users to add, edit, and remove daily tasks.",
      link: "https://github.com/pritimaharjan/newTodoList.git",
      tools: ["React", "HTML", "CSS"],
    },
    {
      title: "Lumbini Handicraft E-commerce Platform",
      icon: <ShoppingBag size={32} className="text-primary" />,
      img: "/ecommerce.jpg",
      description:
        "A full-stack e-commerce solution built with Laravel, Inertia.js, and React to support product browsing and secure checkout.",
      link: "#",
      tools: ["Laravel", "Inertia.js", "React", "MySQL"],
    },
  ];

  return (
    <main id="project" className="bg-gray-50 py-24">
      <section className="container mx-auto py-24 px-6 sm:px-16">
        <h1 className="text-4xl sm:text-6xl font-bold text-center text-primary mb-12">
          Projects
        </h1>

        <div className="flex flex-col  gap-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`rounded-2xl shadow-lg hover:shadow-2xl transition h-80 duration-300 bg-white border-none overflow-hidden ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex flex-col md:flex`}
            >
              {/* Image Section */}
              <div className="md:w-1/2 w-full relative overflow-hidden group">
                <CardContent className="p-0">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="w-full h-80  object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </CardContent>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 w-full flex flex-col justify-center p-8 sm:p-12 space-y-6">
                <div className="flex items-center gap-3">
                  {project.icon}
                  <CardTitle className="text-3xl font-semibold text-gray-800">
                    {project.title}
                  </CardTitle>
                </div>

                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {project.tools?.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="group flex items-center gap-2 text-primary font-semibold w-fit border-b border-transparent hover:border-primary transition"
                  >
                    View Project
                    <ArrowRight
                      className="transition-transform group-hover:translate-x-1"
                      size={18}
                    />
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
