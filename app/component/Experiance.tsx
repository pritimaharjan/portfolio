"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { MapPin, Plus } from "lucide-react";
import Image from "next/image";
import { list } from "postcss";
import { TypeAnimation } from "react-type-animation";
import { EXPERIENCES } from "../data/data";
export default function Experience() {
  const experiences = [
    {
      company: "Digischool Global",
      start: "May 2025",
      end: "August 2025",
      location: "Dillibazar",
      position: "Intern, Project Facilitator",
      content:
        "During the intership, I was tasked with facilitating the teacher training program for the teachers of the school and provide workshop to the students under the supervision of the Mr.Kuber Bajra Shakya.",
      desc: [
        "Conducted teacher training programs",
        "Facilitated student workshops",
        "Ran DigiClub in more than 4 schools",
      ],
      img: "/digischool.png",
    },
    {
      company: "Infinity Digital Agency",
      start: "August 2025",
      end: "Present",
      location: "Ratopul",
      position: "Intern, Full Stack Developer",
      content:
        "Under the supervision of Line Manager Mr. Abhishek Paudel and Technical Lead Mr. Anish Manandhar, I had the opportunity to work on e-commerce websites and an online travel booking platform with the team. This experience helped me learn the fundamentals of web development and gain practical, hands-on experience in the field.",
      desc: [
        "E-commerce Website: Lumbini Handicraft",
        "E-commerce Website: Barcode Nepal",
        "Online Travel Booking Platform: Aakash Sewa",
      ],
      img: "/indinity_digital_agency.webp",
    },
  ];

  return (
    // <main
    //   id="experience"
    //   className="bg-gray-50 dark:bg-background py-24 transition-colors"
    // >
    //   <section className="container mx-auto px-6 max-w-4xl">

    //     <div className="text-center mb-16">
    //       <h1 className="text-4xl sm:text-6xl font-bold text-primary dark:text-white">
    //         Experience
    //       </h1>
    //       <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
    //         A glimpse into my professional journey and hands-on learning
    //         experience.
    //       </p>
    //     </div>

    //     <div className="space-y-6">
    //       {experiences.map((exp, i) => (
    //         <Collapsible key={i} className="group">
    //           <Card className="overflow-hidden rounded-2xl border-none bg-white dark:bg-muted transition hover:bg-gray-100 hover:shadow-lg">

    //             <CollapsibleTrigger className="w-full text-left">
    //               <CardHeader className="flex items-center justify-between gap-6 cursor-pointer transition  dark:hover:bg-muted/70">

    //                 <div className="flex items-center gap-4">
    //                   <div>
    //                     <CardTitle className="text-3xl">
    //                       {exp.company}
    //                     </CardTitle>
    //                     <p className="text-sm text-muted-foreground">
    //                       {exp.start} – {exp.end}
    //                     </p>
    //                   </div>
    //                 </div>

    //                 <div className="hidden md:block text-right">
    //                   <p className="font-medium text-gray-700 dark:text-gray-300">
    //                     {exp.position}
    //                   </p>
    //                 </div>

    //                 <Plus className="w-5 h-5 transition-transform group-data-[state=open]:rotate-45" />
    //               </CardHeader>
    //             </CollapsibleTrigger>

    //             <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
    //               <CardContent className="pt-0 pb-6 space-y-5 text-left">

    //                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
    //                   <MapPin className="w-4 h-4 text-primary" />
    //                   <span>{exp.location}</span>
    //                 </div>
    //                 <p>{exp.content}</p>

    //                 <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
    //                   {exp.desc.map((d, idx) => (
    //                     <li key={idx}>
    //                       <TypeAnimation
    //                         sequence={[d, 1500]}
    //                         speed={50}
    //                         wrapper="span"
    //                         repeat={0}
    //                         cursor={false}
    //                         style={{ display: "inline-block" }}
    //                       />
    //                     </li>
    //                   ))}
    //                 </ul>
    //               </CardContent>
    //             </CollapsibleContent>
    //           </Card>
    //         </Collapsible>
    //       ))}
    //     </div>
    //   </section>
    // </main>

    <section
      id="experience"
      className=" bg-foreground dark:bg-background py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-sm text-black font-mono text-cyber-primary  dark:text-white  uppercase tracking-[0.4em] mb-4">
            Work History
          </h2>
          <div className="flex items-baseline gap-4">
            <h3 className="text-4xl typo-secondary md:text-5xl font-bold dark:text-white  tracking-tight">
              Career Architecture
            </h3>
            <div className="h-px flex-grow   from-cyber-primary/5 to-transparent bg-gradient-to-r from-indigo-500 via-purple-500 "></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="lg:col-span-12 group flex gap-8">
              <div className="md:flex flex-col hidden  items-center">
                <div className="w-10 bg-card  h-10 rounded-full border border-cyber-primary/30 bg-cyber-primary/10 flex items-center justify-center text-cyber-primary font-mono text-xs group-hover:bg-cyber-primary group-hover:text-white transition-all duration-500">
                  0{index + 1}
                </div>
                <div className="w-px flex-grow from-cyber-primary/30 to-transparent bg-gradient-to-b from-indigo-500 via-purple-200   my-2 group-last:hidden"></div>
              </div>

              <div className=" flex-grow pb-16">
                <div className=" bg-white rounded-2xl p-8 border-glow   group relative  overflow-hidden border-glow transition-all duration-700 hover:-translate-y-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h4>
                      <p className="cyber-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 rounded bg-slate-900 border border-white/5 text-slate-400 text-xs font-mono">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-slate-400 text-sm leading-relaxed"
                      >
                        <span className="text-cyber-primary">↳</span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] text-slate-500 font-mono uppercase tracking-widest bg-white/5 px-2 py-1 rounded"
                      >
                        #{skill.replace(" ", "_")}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
