import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Brain,
  Database,
  Layout,
  Server,
  RepeatIcon,
  CodeXml,
  icons,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

export default function Skill() {
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

  const firstRow = webSkills;
  const secondRow = dataSkills;

  const ReviewCard = ({
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
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex items-center gap-2">
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

  return (
    <main>
      <section className="bg-gray-100 dark:bg-background py-20" id="skill">
        <h1 className="text-4xl sm:text-6xl font-bold  text-center text-primary dark:text-white mb-12">
          Skills
        </h1>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard
                key={review.category}
                category={review.category}
                skills={review.skills}
                icon={review.icon}
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard
                key={review.category}
                category={review.category}
                skills={review.skills}
                // icon={review.icon}
              />
            ))}
          </Marquee>
          {/* <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div> */}
          {/* <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div> */}
        </div>
      </section>
      <section></section>
    </main>
  );
}
