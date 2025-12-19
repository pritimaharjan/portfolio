"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { ArrowRightIcon, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-background transition-colors duration-300">
      {/* AOS Script */}
      <Script
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        strategy="beforeInteractive"
      />

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
              <span className="block text-6xl sm:text-7xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
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
                target="_blank"
                className="p-3 rounded-full shadow bg-white dark:bg-muted hover:scale-110 transition"
              >
                <Github />
              </Link>

              <Link
                href="https://www.linkedin.com/in/priti-maharjan-2955b5309/"
                target="_blank"
                className="p-3 rounded-full shadow bg-white dark:bg-muted hover:scale-110 transition"
              >
                <Linkedin />
              </Link>
            </div>

            {/* Resume Button */}
            <a href="/my_CV-2.pdf" download>
              <Button className="w-fit flex items-center gap-2 mt-4 dark:bg-primary dark:text-white">
                <ArrowRightIcon />
                Download Resume
              </Button>
            </a>
          </div>

          {/* RIGHT SECTION */}
          <div data-aos="fade-left" className="w-full max-w-md">
            <div className="relative h-[550px] w-full overflow-hidden rounded-xl animate-float bg-white dark:bg-muted shadow-lg dark:shadow-none">
              <CardContent className="p-0 h-full">
                <Image
                  src="/Profile.png"
                  alt="Priti"
                  fill
                  className="object-cover"
                  priority
                />
              </CardContent>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
