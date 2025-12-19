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
    <main
      id="experience"
      className="bg-gray-50 dark:bg-background py-24 transition-colors"
    >
      <section className="container mx-auto px-6 max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-primary dark:text-white">
            Experience
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A glimpse into my professional journey and hands-on learning
            experience.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <Collapsible key={i} className="group">
              <Card className="overflow-hidden rounded-2xl border-none bg-white dark:bg-muted transition hover:bg-gray-100 hover:shadow-lg">
                {/* Header */}
                <CollapsibleTrigger className="w-full text-left">
                  <CardHeader className="flex items-center justify-between gap-6 cursor-pointer transition  dark:hover:bg-muted/70">
                    {/* Company */}
                    <div className="flex items-center gap-4">
                      <div>
                        <CardTitle className="text-3xl">
                          {exp.company}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {exp.start} – {exp.end}
                        </p>
                      </div>
                    </div>

                    {/* Position */}
                    <div className="hidden md:block text-right">
                      <p className="font-medium text-gray-700 dark:text-gray-300">
                        {exp.position}
                      </p>
                    </div>

                    {/* Icon */}
                    <Plus className="w-5 h-5 transition-transform group-data-[state=open]:rotate-45" />
                  </CardHeader>
                </CollapsibleTrigger>

                {/* Content */}
                <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <CardContent className="pt-0 pb-6 space-y-5 text-left">
                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{exp.location}</span>
                    </div>
                    <p>{exp.content}</p>

                    {/* Description */}

                    <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                      {exp.desc.map((d, idx) => (
                        <li key={idx}>
                          <TypeAnimation
                            sequence={[d, 1500]}
                            speed={50}
                            wrapper="span"
                            repeat={0}
                            cursor={false}
                            style={{ display: "inline-block" }}
                          />
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </div>
      </section>
    </main>
  );
}
