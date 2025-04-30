import { promises as fs } from "fs";

type ProjectType = {
  id: number;
  title: string;
  description: string;
  url: string;
  tags: string[];
  underDevelopment?: boolean;
};

const project = async () => {
  const file = await fs.readFile(
    process.cwd() + "/src/data/project.json",
    "utf8"
  );
  const projects: ProjectType[] = JSON.parse(file);

  // if (!res.ok) {
  //   throw new Error("Failed to fetch projects");
  // }

  // const projects: ProjectType[] = await res.json();

  console.log();

  return (
    <div className="my-14">
      <h2 className="text-2xl font-medium tracking-tight mb-4">Projects</h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className={
                project?.underDevelopment ? "opacity-50" : "opacity-100"
              }
            >
              <h3 className="text-lg font-medium">
                <a
                  href={project.url}
                  className="underline underline-offset-4"
                  target="_blank"
                >
                  {project.title}
                  {project.underDevelopment && (
                    <span className="text-sm">(Under Development)</span>
                  )}
                </a>
              </h3>
              <p className="text-sm  mt-1 mb-2">{project.description}</p>
              <p className="flex flex-wrap gap-1">
                {project.tags.map((tag) => {
                  return (
                    <span
                      key={tag}
                      className="inline-flex text-xs font-medium px-2.5 py-1 bg-secondary rounded-md border"
                    >
                      {tag}
                    </span>
                  );
                })}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default project;
