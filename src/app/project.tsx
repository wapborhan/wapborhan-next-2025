import BlockSection from "@/components/BlockSection";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { ProjectType } from "@/types/project";
import { promises as fs } from "fs";

const Project = async () => {
  const file = await fs.readFile(
    process.cwd() + "/src/data/project.json",
    "utf8",
  );
  const projects: ProjectType[] = JSON.parse(file);

  // if (!res.ok) {
  //   throw new Error("Failed to fetch projects");
  // }

  // const projects: ProjectType[] = await res.json();

  return (
    <>
      <div id="projects"></div>
      <SectionHeader title="Projects I Contribute" />
      <BlockSection>
        <div className="w-full grid md:grid-cols-2 grid-cols-1  gap-0">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </BlockSection>
    </>
  );
};

export default Project;
