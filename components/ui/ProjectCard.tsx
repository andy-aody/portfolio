import { ExternalLink, Github } from "lucide-react";
import type { ProjectItem } from "@/lib/types";

type Props = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group relative pb-8">
      {project.featured && (
        <span className="mb-1 inline-block text-xs font-medium uppercase tracking-wider accent-text">
          Featured
        </span>
      )}
      <h3 className="text-base font-medium text-heading">
        {project.name}
        <span className="ml-2 inline-flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-muted transition-colors hover:text-accent"
              aria-label={`${project.name} GitHub repository`}
            >
              <Github size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-muted transition-colors hover:text-accent"
              aria-label={`${project.name} live demo`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </span>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-body">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-accent-fill px-2.5 py-0.5 text-xs font-medium text-accent-text"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
