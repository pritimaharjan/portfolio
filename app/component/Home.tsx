"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Download, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div
      className="relative bg-gray-200 dark:bg-background transition-colors duration-300 min-h-screen bg-cover bg-center"
      data-aos="fade-left"
      style={{
        backgroundImage: `url("/Profile.png")`,
        backgroundPosition: "right center",
        backgroundSize: "45%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hide background image on small screens */}
      <div className="absolute inset-0 bg-gray-200 dark:bg-background "></div>

      {/* AOS Script */}
      <Script
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        strategy="beforeInteractive"
      />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-20 lg:py-32">
          {/* LEFT SECTION */}
          <div
            data-aos="fade-right"
            className="flex flex-col justify-center gap-6 text-center lg:text-left max-w-xl"
          >
            {/* Name */}
            <h1 className="font-extrabold leading-tight">
              <span className="block text-xl sm:text-2xl text-muted-foreground dark:text-gray-400">
                Er.
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-7xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
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
              className="text-base sm:text-lg text-gray-600 dark:text-gray-300"
            />

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in building modern web applications using React and
              Next.js, with a strong focus on clean UI, reusable components, and
              performance optimization. I have basic experience in Python, data
              analytics, and machine learning and am motivated to implement and
              expand these skills through real-world applications.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4">
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
            <div className="flex justify-center  lg:justify-start">
              <a href="/my_CV-2.pdf" download>
                <Button className="flex items-center dark:bg-white gap-2 mt-4">
                  <Download />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
