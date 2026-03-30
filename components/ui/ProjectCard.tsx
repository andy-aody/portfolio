import { ExternalLink, Github } from "lucide-react";
import type { ProjectItem } from "@/lib/types";

type Props = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group relative pb-8">
      {project.featured && (
        <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wider accent-text">
          Featured
        </span>
      )}
      <h3 className="text-base font-semibold text-zinc-900 dark:text-gray-100">
        {project.name}
        <span className="ml-2 inline-flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-zinc-500 transition-colors hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400"
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
              className="inline-block text-zinc-500 transition-colors hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400"
              aria-label={`${project.name} live demo`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </span>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-gray-400">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-400/10 dark:text-violet-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
