import { Experience, Project, SkillGroup } from "../types/types";

export const PROFILE_NAME = "Alex Rivet";
export const PROFILE_TITLE = "Senior Computer Engineer";
export const PROFILE_BIO =
  "Specializing in High-Performance Computing, Embedded Systems, and Scalable Cloud Architectures. Bridging the gap between hardware precision and software agility.";

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Book Recommendation System",
    description:
      "A machine learning system that recommends books using popularity-based and collaborative filtering methods.",
    tech: ["Python", "Matplotlib", "Seaborn", "Cosine Similarity"],
    imageUrl: "/book_recommendation.jpg",
    category: "Hardware",
    link: "https://github.com/pritimaharjan/Book_recommendation_system.git",
  },
  {
    id: "p2",
    title: "Customer Churn Prediction",
    description:
      "Built a predictive model using Random Forest to analyze customer behavior. Data analyzed in SSMS and visualized with Power BI.",
    link: "https://github.com/pritimaharjan/customer_churn_analysis.git",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    imageUrl: "/dataset-cover.png",
    category: "Embedded",
  },
  {
    id: "p3",
    title: "Emotion Detection with YOLO",
    description:
      "Developed a real-time emotion detection system leveraging YOLOv8 and Roboflow for facial emotion classification.",
    link: "https://github.com/pritimaharjan/Emotion_detection_project.git",
    tech: ["YOLOv8", "Roboflow", "Python"],
    imageUrl: "/emotion_detection.webp",
    category: "Software",
  },
  {
    id: "p4",
    title: "Todo List Application",
    imageUrl: "/Todo_list.png",
    description:
      "A simple and efficient task manager built with React, allowing users to add, edit, and remove daily tasks.",
    link: "https://github.com/pritimaharjan/newTodoList.git",
    tech: ["React", "HTML", "CSS"],

    category: "AI",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "e1",
    company: "Infinity Digital Agency",
    role: "Intern, Full Stack Developer",
    period: "Aug 2025 - Present",
    description: [
      "E-commerce Website: Lumbini Handicraft",
      "E-commerce Website: Barcode Nepal",
      "Online Travel Booking Platform: Aakash Sewa",
    ],
    skills: ["React", "TypeScript", "NEXT.js", "Laravel", "Inertia.js"],
  },
  {
    id: "e2",
    company: "Digischool Global",
    role: "Intern, Project Facilitator",
    period: "May 2025 - Aug 2025",
    description: [
      "Conducted teacher training programs",
      "Facilitated student workshops",
      "Ran DigiClub in more than 4 schools",
    ],
    skills: ["Communication", "Teaching", "Management", "Project Management"],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: "Languages",
    skills: [
      { name: "C++", level: 95 },
      { name: "Rust", level: 88 },
      { name: "Python", level: 92 },
      { name: "TypeScript", level: 85 },
    ],
  },
  {
    name: "Systems & HW",
    skills: [
      { name: "Embedded Systems", level: 90 },
      { name: "FPGA/Verilog", level: 75 },
      { name: "RTOS", level: 85 },
      { name: "Linux Kernel", level: 80 },
    ],
  },
  {
    name: "Tools & Clouds",
    skills: [
      { name: "Docker/K8s", level: 85 },
      { name: "AWS/Azure", level: 80 },
      { name: "Git", level: 95 },
      { name: "CI/CD", level: 88 },
    ],
  },
];
