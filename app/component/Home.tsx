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

export default function Home() {
  return (
    <div className="bg-gray-100 ">
      <section className="container mx-auto ">
        {/* Left Text Section */}
        <div className="grid grid-cols-2 py-24">
          <div className="flex flex-col justify-center  gap-4 text-left ">
            <div>
              <h1 className="text-4xl font-bold   text-primary">
                <span className="text-primary text-8xl">Er.Priti Maharjan</span>
              </h1>
            </div>
            <div className="flex gap-5 flex-col">
              <p className="text-lg text-gray-600 ">
                Web Developer • AI Enthusiast • Learner
              </p>
              <p className="text-lg text-gray-600">
                I specialize in building modern web applications using React and
                Next.js, with a strong focus on clean UI, reusable components,
                and performance optimization. I have basic experience in Python,
                data analytics, and machine learning and am motivated to
                implement and expand these skills through real-world
                applications.
              </p>
            </div>
            <div className="flex flex-row gap-2">
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

          <div className=" relative w-full  ">
            <Image
              src="/Profile.png"
              alt="Priti"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
