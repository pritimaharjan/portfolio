import { BlurFade } from "@/components/ui/blur-fade";
import About from "./component/About";
import Banner from "./component/Banner";
import Contact from "./component/contact";
import Experiance from "./component/Experiance";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Skill from "./component/Skill";
import Hero from "./component/Hero";
import AboutPage from "./about/page";

export default function Page() {
  return (
    <>
      {/* <Navbar /> */}
      <BlurFade inView>
        <Hero />
        <AboutPage />
        {/* <Home /> */}
        {/* <About /> */}
        {/* <Skill /> */}

        <Project />
        {/* <Banner /> */}
        {/* <Experiance /> */}
        <Contact />
      </BlurFade>
    </>
  );
}
