import ServicesSection from "@/components/ServicesSection";
import About from "./about";
import Project from "./project";
import BlogPage from "./blog/page";
const main = () => {
  return (
    <main className="lg:mt-10 mt-8 w-full">
      <About />
      <Project />
      <ServicesSection />
      <BlogPage />
    </main>
  );
};

export default main;
