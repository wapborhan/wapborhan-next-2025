import ProjectCard from "@/components/ProjectCard";
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

  const title = `text-lg md:text-4xl font-bold tracking-tight mb-4  text-center`;
  const desc = `text-lg mb-8 text-slate-500 text-center max-w-4/6 mx-auto`;

  return (
    <div className="my-14">
      <div className="main-project">
        <h2 className={`${title}`}>Projects</h2>
        <p className={`${desc}`}>
          I've built everything from simple websites to powerful web apps. Here
          are some of the projects.
        </p>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="simple-projects my-14">
        <h2 className={`${title}`}>Simple Projects</h2>
        <p className={`${desc}`}>
          In my free time, I like to work on small side projects. These are
          usually simple applications or experiments that help me learn new
          skills and have fun with code.
        </p>
      </div>
    </div>
  );
};

export default Project;
