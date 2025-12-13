import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Brain, Database, Layout, Server } from "lucide-react";

export default function Skill() {
  const webSkills = [
    { category: "Frontend", skills: ["React", "Next.js", "HTML", "CSS"] },
    {
      category: "Backend",
      skills: ["Laravel", "Inertia.js", "Django (Beginner)"],
    },
    { category: "Database", skills: ["SQL"] },
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

  return (
    <section className="bg-gray-100" id="skill">
      <div className="container mx-auto py-24 px-6 sm:px-16">
        <div className="flex flex-col items-center py-24 text-center">
          <h2 className="text-4xl sm:text-6xl font-bold text-primary">
            Skills
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
            {" "}
            My technical foundation in web development, Python, and data
            analytics
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full max-w-5xl">
            {/* Web Development Card */}
            <Card className="shadow-lg border-none bg-white hover:shadow-xl transition duration-300 hover:-translate-y-1 rounded-2xl">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Layout size={28} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Web Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 mt-4">
                {webSkills.map((group, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-700 text-lg mb-1 flex items-center gap-2">
                      {group.category === "Frontend" && (
                        <Code2 size={18} className="text-primary" />
                      )}
                      {group.category === "Backend" && (
                        <Server size={18} className="text-primary" />
                      )}
                      {group.category === "Database" && (
                        <Database size={18} className="text-primary" />
                      )}
                      {group.category}
                    </h4>
                    <p
                      className="text-gray-600 text-sm tracking-wide
                     text-left"
                    >
                      {group.skills.join(", ")}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Data Science Card */}
            <Card className="shadow-lg border-none bg-white hover:shadow-xl transition duration-300 hover:-translate-y-1 rounded-2xl">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Brain size={28} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Data Science with Python
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 mt-4">
                {dataSkills.map((group, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-700 text-lg mb-1 text-left">
                      {group.category}
                    </h4>
                    <p className="text-gray-600 text-sm tracking-wide text-left">
                      {group.skills.join(", ")}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
