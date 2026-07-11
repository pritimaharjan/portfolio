"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Download, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    // <div
    //   className="relative top-1/2 bg-gray-200 dark:bg-background transition-colors duration-300 min-h-screen bg-cover bg-center"
    //   data-aos="fade-left"
    // >
    //   <div className="col-span-1  flex flex-col items-end justify-center">
    //     <div className=" aspect-auto border-10 rounded-lg border-white">
    //       <img src="/Priti.jpeg" alt="Saleen Maharjan" className="w-full " />
    //     </div>
    //     <div className="-mt-20  ml-10 left-20 bg-card z-50 rounded-2xl p-10 border-l-6 border-secondary">
    //       <span className="text-secondary italic font-bold text-2xl">
    //         "Service is an Art"
    //       </span>
    //     </div>
    //   </div>

    //   <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    //     <div className="flex flex-col lg:flex-row items-center gap-12 py-20 lg:py-32">
    //       <div
    //         data-aos="fade-right"
    //         className="flex flex-col justify-center gap-6 text-center lg:text-left max-w-xl"
    //       >
    //         <h1 className="font-extrabold leading-tight">
    //           <span className="block text-xl sm:text-2xl text-muted-foreground dark:text-gray-400">
    //             Er.
    //           </span>
    //           <span className="block text-4xl sm:text-5xl lg:text-7xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
    //             Priti Maharjan
    //           </span>
    //         </h1>

    //         <TypeAnimation
    //           sequence={[
    //             "Web Developer",
    //             1500,
    //             "AI Enthusiast",
    //             1500,
    //             "React & Next.js Developer",
    //             1500,
    //             "Lifelong Learner",
    //             1500,
    //           ]}
    //           wrapper="span"
    //           speed={50}
    //           repeat={Infinity}
    //           className="text-base sm:text-lg text-gray-600 dark:text-gray-300"
    //         />

    //         <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
    //           I specialize in building modern web applications using React and
    //           Next.js, with a strong focus on clean UI, reusable components, and
    //           performance optimization. I have basic experience in Python, data
    //           analytics, and machine learning and am motivated to implement and
    //           expand these skills through real-world applications.
    //         </p>

    //     </div>
    //   </section>
    // </div>
    <div className="py-32 relative">
      <div className="bg-background/100 grid md:grid-cols-2 sm:gap-10 max-w-7xl mx-auto px-4">
        <div className="col-span-1 flex flex-col items-end justify-center">
          <div className="animate-name h-150 bg-white md:px-2 md:w-150 rounded-lg overflow-hidden">
            <img
              src="/Priti.jpeg"
              alt="Priti Maharjan"
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
          <div
            className="animate-name -mt-12 hidden md:block bg-[#0f172a] ml-20 left-10 z-50 rounded-2xl p-7 border-l-6 border-[#f59e0b]"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="italic font-bold text-2xl">
              "Code. Create. Improve"
            </span>
          </div>
        </div>

        <div className="col-span-1 py-20 top-1/2">
          <h1
            className="animate-name font-extrabold leading-tight"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-xl sm:text-2xl text-muted-foreground dark:text-gray-400">
              Er.
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-7xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Priti Maharjan
            </span>
          </h1>

          <span
            className="animate-name block"
            style={{ animationDelay: "0.3s" }}
          >
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
          </span>

          <p
            className="animate-name text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            I specialize in building modern web applications using React and
            Next.js, with a strong focus on clean UI, reusable components, and
            performance optimization. I have basic experience in Python, data
            analytics, and machine learning and am motivated to implement and
            expand these skills through real-world applications.
          </p>

          <div
            className="animate-name flex md:justify-center lg:justify-start mt-2 gap-4"
            style={{ animationDelay: "0.5s" }}
          >
            <Link
              href="https://github.com/pritimaharjan"
              target="_blank"
              className="p-3 rounded-full bg-[#0f172a] dark:bg-muted hover:scale-110 transition"
            >
              <Github />
            </Link>

            <Link
              href="https://www.linkedin.com/in/priti-maharjan-2955b5309/"
              target="_blank"
              className="p-3 rounded-full shadow bg-[#0f172a] dark:bg-muted hover:scale-110 transition"
            >
              <Linkedin />
            </Link>
          </div>

          <div
            className="animate-name flex md:justify-center lg:justify-start"
            style={{ animationDelay: "0.6s" }}
          >
            <a href="/my_CV-2.pdf" download>
              <Button className="flex items-center cursor-pointer bg-[#0f172a] dark:bg-muted dark:text-white gap-2 mt-4">
                <Download />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
