import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
export default function About() {
  return (
    <main
      id="about"
      className=" min-h-screen  flex items-center justify-center bg-white dark:bg-gray-900 text-primary "
    >
      <div className="container mx-auto py-24 px-16 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold">About Me</h1>

        <div className="flex flex-row justify-center items-center gap-6 mt-10">
          <div className="w-40 h-40  overflow-hidden shadow-md">
            <Image
              src="/profile.jpeg"
              alt="Priti Maharjan"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-justify">
              I am Priti Maharjan, a dedicated and passionate developer with a
              knack for creating clean and modern web applications. <br />
              I’m currently an intern at IDA Company, passionate about learning
              full stack development and building real-world web applications.
              My focus areas include UI design, component systems, and
              performance optimization.
            </p>
            <a href="/my_CV-2.pdf" download>
              <Button className="max-w-fit flex items-center gap-2">
                <ArrowRightIcon />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
