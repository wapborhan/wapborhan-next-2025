import { ProjectType } from "@/types/project";
import Link from "next/link";
import CardBlockSection from "./CardBlockSection";
// import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  project: ProjectType;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <CardBlockSection>
      <Link
        href={project.url}
        key={project.id}
        className={`overflow-hidden aspect-auto cursor-pointer relative group opacity-100 ${
          project?.underDevelopment && "opacity-50"
        }`}
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="p-4 space-y-4">
          <h3 className=" drop-shadow-xl text-lg font-semibold mb-1">
            <span className="tracking-[-0.02em]">
              <span className="inline-block animate-blink-cursor">
                {project.title}{" "}
                {project.underDevelopment && (
                  <span className="text-sm">(Under Development)</span>
                )}
              </span>
            </span>
          </h3>
          <p className="text-sm text-black drop-shadow-xl" />
          <p
            className="whitespace-pre-wrap"
            aria-label="A multivendor grocery platform where users can shop daily essentials easily."
            style={{ opacity: 1 }}
          >
            <span className="sr-only" style={{ opacity: 1 }}>
              <p>
                {project.description?.length > 75
                  ? project.description.slice(0, 75) + "..."
                  : project.description}
              </p>
            </span>{" "}
            <span
              className=""
              aria-hidden="true"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "none",
              }}
            >
              {project.description?.length > 75
                ? project.description.slice(0, 75) + "..."
                : project.description}
            </span>
          </p>{" "}
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
      </Link>
    </CardBlockSection>
  );
}

export default ProjectCard;
