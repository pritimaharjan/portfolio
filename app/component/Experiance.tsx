import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";

export default function Experiance() {
  const experiences = [
    {
      company: "Digischool Global",
      start: "May 2025",
      end: "August 2025",
      location: "Dillibazar",
      position: "Intern, Project Facilitator",
      desc: [
        "Teacher training programs",
        "Conducted student workshops",
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
      desc: [
        "E-commerce Website: Lumbini Handicraft",
        "E-commerce Website: Barcode Nepal",
        "Online Travel Booking Platform: Aakash Sewa",
      ],
      img: "/indinity_digital_agency.webp",
    },
  ];

  return (
    <main id="experience" className="bg-gray-100 py-24">
      <section className="container mx-auto py-24 px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-primary">
            Experience
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A glimpse into my professional journey and hands-on learning
            experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((e, i) => (
            <Card
              key={i}
              className="group border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}

              <CardContent className="p-6 space-y-4">
                <CardTitle className="text-2xl font-semibold">
                  {e.company}
                </CardTitle>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {e.start} – {e.end}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {e.location}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-primary font-medium">
                  <Briefcase size={18} />
                  {e.position}
                </div>

                {/* Description */}
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {e.desc.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
