import { ProjectType } from "@/types/project";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  project: ProjectType;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      key={project.id}
      className={project?.underDevelopment ? "opacity-50" : "opacity-100"}
    >
      <h3 className="text-lg font-medium">
        <a
          href={project.url}
          className="underline underline-offset-4 flex items-center gap-3"
          target="_blank"
        >
          {project.title}{" "}
          <FaExternalLinkAlt
            size={12}
            className="underline underline-offset-4"
          />
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
}

export default ProjectCard;
