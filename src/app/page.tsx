import MacDock from "@/components/MacDock";
import About from "./about";
import Project from "./project";
import Skills from "./Skills";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-5  pt-5 bg-grid-white/[0.1]">
      <main className="lg:mt-10 mt-8 w-full">
        <About />
        <Skills />
        <Project />
      </main>
      <Footer />
      <MacDock />
    </div>
  );
}
