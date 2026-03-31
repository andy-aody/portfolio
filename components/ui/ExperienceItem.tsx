import type { ExperienceItem as ExperienceItemType } from "@/lib/types";

type Props = {
  item: ExperienceItemType;
  isFirst?: boolean;
};

export default function ExperienceItem({ item, isFirst = false }: Props) {
  return (
    <div className="group relative pb-8 pl-7">
      {/* Timeline dot */}
      <span
        className={`absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 ${
          isFirst ? "border-accent bg-accent" : "border-border bg-page"
        }`}
      />
      <div className="mb-1 text-xs font-medium uppercase tracking-wide text-muted">
        {item.startDate} — {item.endDate}
      </div>
      <div>
        <h3 className="text-base font-medium text-heading">
          {item.title}
          <span className="accent-text"> · {item.company}</span>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-body">
          {item.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-accent-fill px-2.5 py-0.5 text-xs font-medium text-accent-text"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
