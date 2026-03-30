import type { ExperienceItem as ExperienceItemType } from "@/lib/types";

type Props = {
  item: ExperienceItemType;
};

export default function ExperienceItem({ item }: Props) {
  return (
    <div className="group relative pb-8">
      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-gray-500">
        {item.startDate} — {item.endDate}
      </div>
      <div>
        <h3 className="text-base font-semibold text-zinc-900 dark:text-gray-100">
          {item.title}
          <span className="accent-text"> · {item.company}</span>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-gray-400">
          {item.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-400/10 dark:text-violet-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
