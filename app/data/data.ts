import { Experience, Project, SkillGroup } from "../types/types";

export const PROFILE_NAME = "Priti Maharjan";
export const PROFILE_TITLE = "Computer Engineer";
export const PROFILE_BIO =
  "Specializing in High-Performance Computing, Embedded Systems, and Scalable Cloud Architectures. Bridging the gap between hardware precision and software agility.";

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Book Recommendation System",
    tag: "",
    description:
      "A machine learning system that recommends books using popularity-based and collaborative filtering methods.",
    tech: ["Python", "Matplotlib", "Seaborn", "Cosine Similarity"],
    imageUrl: "/book_recommendation.jpg",
    link: "https://github.com/pritimaharjan/Book_recommendation_system.git",
  },
  {
    id: "p2",
    title: "Customer Churn Prediction",
    tag: "",
    description:
      "Built a predictive model using Random Forest to analyze customer behavior. Data analyzed in SSMS and visualized with Power BI.",
    link: "https://github.com/pritimaharjan/customer_churn_analysis.git",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    imageUrl: "/dataset-cover.png",
  },
  {
    id: "p3",
    title: "Emotion Detection with YOLO",
    tag: "",
    description:
      "Developed a real-time emotion detection system leveraging YOLOv8 and Roboflow for facial emotion classification.",
    link: "https://github.com/pritimaharjan/Emotion_detection_project.git",
    tech: ["YOLOv8", "Roboflow", "Python"],
    imageUrl: "/emotion_detection.webp",
  },
  {
    id: "p4",
    title: "Todo List Application",
    tag: "",
    imageUrl: "/Todo_list.png",
    description:
      "A simple and efficient task manager built with React, allowing users to add, edit, and remove daily tasks.",
    link: "https://github.com/pritimaharjan/newTodoList.git",
    tech: ["React", "HTML", "CSS"],
  },
  {
    id: "p5",
    title: "Lumbini Handicraft",
    tag: "work",
    description:
      "Developed and integrated the frontend for an eCommerce platform specializing in handicraft products. Implemented responsive UI using React.js and Inertia.js with Laravel backend.",
    tech: ["React.js", "Inertia.js", "Laravel"],
    imageUrl: "/lumbini-handicraft.png",
    link: "https://lumbinihandicraft.infinitydevelopmententerprise.com/",
  },
  {
    id: "p6",
    title: "Barcode Frontend",
    tag: "work",
    description:
      "Developed the frontend of an eCommerce product inquiry platform. Built responsive interfaces using Next.js with product catalog browsing and inquiry submission workflows.",
    tech: ["Next.js"],
    imageUrl: "/barcode.png",
    link: "https://barcodenepal.com/",
  },
  {
    id: "p7",
    title: "Umrao Cashmere",
    tag: "work",
    description:
      "Contributed to both frontend and backend for a luxury cashmere product inquiry platform. Developed responsive UI with React.js and Inertia.js, assisted with Laravel backend integration.",
    tech: ["React.js", "Inertia.js", "Laravel"],
    imageUrl: "/umrao.png",
    link: "https://umraocashmere.infinitydevelopmententerprise.com/",
  },
  {
    id: "p8",
    title: "Leave Management System",
    tag: "work",
    description:
      "Developed backend functionalities for an internal leave management system. Implemented leave request workflows, approval processes, and automated email notifications.",
    tech: ["Laravel"],
    imageUrl: "/lms.png",
    link: "https://lms.infinitydevelopmententerprise.com/dashboard",
  },
  {
    id: "p9",
    title: "Project Tracking System",
    tag: "work",
    description:
      "Developed the backend using Laravel for an internal project tracking platform. Implemented RESTful APIs, Role-Based Access Control (RBAC), project and milestone management, progress tracking, and database operations.",
    tech: ["Laravel"],
    imageUrl: "/o.png",
    link: "https://protrack.infinitydevelopmententerprise.com/",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "e1",
    company: "Infinity Digital Agency",
    role: " Full Stack Developer",
    period: "Feb 2026 - Present",
    description: [
      "Architected and built full-stack web applications using React, Next.js, and Laravel, serving 5+ client projects simultaneously",
      "Led frontend development with responsive UI components, integrating Inertia.js for seamless Laravel-React interactions",
      "Designed and implemented database schemas, RESTful APIs, and admin panels for e-commerce and booking platforms",
      "Collaborated with cross-functional teams in an Agile environment, delivering features on tight deadlines",
    ],
    skills: ["React", "TypeScript", "NEXT.js", "Laravel", "Inertia.js"],
  },
  {
    id: "e2",
    company: "Infinity Digital Agency",
    role: "Intern, Full Stack Developer",
    period: "Aug 2025 - Feb 2026",
    description: [
      "Developed and maintained frontend interfaces for e-commerce and travel booking platforms using React and Inertia.js",
      "Worked closely with senior developers to implement UI/UX improvements and fix production bugs",
      "Gained hands-on experience with Laravel backend development, database management, and version control workflows",
    ],
    skills: ["React", "TypeScript", "NEXT.js", "Laravel", "Inertia.js"],
  },
  {
    id: "e3",
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
