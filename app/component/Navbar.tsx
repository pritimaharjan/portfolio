"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`containter hidden  dark:bg-background max-auto px-16 sticky top-0 z-50 h-20 md:flex flex-row justify-between items-center transition-all duration-300 ${
          isScrolling
            ? "bg-white dark:bg-muted shadow-md"
            : "bg-gray-200 backdrop-blur-lg"
        }`}
      >
        <h1
          className={`text-primary dark:text-white font-semibold text-xl ${
            isScrolling ? "text-foregroun" : "text-gray-600"
          }`}
        >
          {isScrolling ? "Er.Priti Maharjan" : " Portfolio"}
        </h1>

        <div
          className={`flex flex-row justify-end items-center gap-6 transition-colors dark:text-white duration-300 ${
            isScrolling ? "text-primary" : "text-gray-600"
          }`}
        >
          <Link href="#home"> Home</Link>

          {/* <Link href="#about">About</Link> */}
          <Link href="#skill">Skills</Link>
          <Link href="#project">Project</Link>
          <Link href="#experience">Experiance</Link>
          <Link href="#contact">Contact</Link>
          <AnimatedThemeToggler />
        </div>
      </nav>
      {/* {mobile} */}
      <nav className="md:hidden  flex px-5 py-5 bg-gray-200 dark:bg-muted backdrop-blur-lg justify-between">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>

          <SheetContent className=" px-5 py-20">
            <SheetTitle>Er.Priti Maharjan</SheetTitle>
            <Link href="#home"> Home</Link>

            {/* <Link href="#about">About</Link> */}
            <Link href="#skill">Skills</Link>
            <Link href="#project">Project</Link>
            <Link href="#experience">Experiance</Link>
            <Link href="#contact">Contact</Link>
          </SheetContent>
        </Sheet>
        <AnimatedThemeToggler />
      </nav>
    </>
  );
}
