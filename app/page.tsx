import About from "./component/About";
import Contact from "./component/contact";
import Experiance from "./component/Experiance";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Skill from "./component/Skill";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <About /> */}
      <Skill />

      <Project />
      <Experiance />
      <Contact />
    </>
  );
}
