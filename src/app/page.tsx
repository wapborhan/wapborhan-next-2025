import MacDock from "@/components/MacDock";
import About from "./about";
import Project from "./project";
import Skills from "./Skills";
import Footer from "./footer";
import NavBar from "./NavBar";
import Info from "./Info";

export default function Home() {
  return (
    <>
      <NavBar />
      <Info />
      <About />
      {/* <Skills /> */}
      <Project />
      <Footer />
      {/* <MacDock /> */}
    </>
  );
}
