"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  GitBranchIcon,
  GitGraphIcon,
  Github,
  Link2Icon,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-background ">
      {" "}
      {/* AOS Script */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-24">
          {/* LEFT SECTION */}
          <div
            data-aos="fade-right"
            className="flex flex-col justify-center gap-6 text-left max-w-xl"
          >
            {/* Name */}
            <h1 className="font-extrabold leading-tight">
              <span className="block text-3xl text-muted-foreground dark:text-gray-400">
                Er.
              </span>
              <span className="block text-6xl sm:text-7xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Priti Maharjan
              </span>
            </h1>

            {/* Typing Role */}
            <TypeAnimation
              sequence={[
                "Web Developer",
                1500,
                "AI Enthusiast",
                1500,
                "React & Next.js Developer",
                1500,
                "Lifelong Learner",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-lg text-gray-600 dark:text-gray-300"
            />

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in building modern web applications using React and
              Next.js, with a strong focus on clean UI, reusable components, and
              performance optimization. I have basic experience in Python, data
              analytics, and machine learning and am motivated to implement and
              expand these skills through real-world applications.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="https://github.com/pritimaharjan"
                className="inline-block mt-6 px-6 py-3  text-primary rounded-lg shadow-md btn-lg"
              >
                <Github size={24} color="black" />
                <span>Github</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/priti-maharjan-2955b5309/"
                className="inline-block mt-6 px-6 py-3 text-primary rounded-lg shadow-md btn-lg"
              >
                <Linkedin />
                LinkedIN
              </Link>
            </div>
            <a href="/my_CV-2.pdf" download>
              <Button className="max-w-fit flex items-center gap-2">
                <ArrowRightIcon />
                Download Resume
              </Button>
            </a>
          </div>

          {/* RIGHT SECTION */}
          <div data-aos="fade-left" className="w-full max-w-md">
            <div className="relative h-[550px] w-full overflow-hidden rounded-xl animate-float dark:bg-muted shadow-lg dark:shadow-none">
              <Image
                src="/Profile.png"
                alt="Priti"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
