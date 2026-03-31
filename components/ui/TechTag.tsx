type TagCategory = "frontend" | "backend" | "devops" | "neutral";

// Tailwind classes live HERE (in components/) so they are always scanned by JIT
const TAG_STYLES: Record<TagCategory, string> = {
  frontend: "bg-tag-frontend-bg text-tag-frontend-text",
  backend: "bg-tag-backend-bg text-tag-backend-text",
  devops: "bg-tag-devops-bg text-tag-devops-text",
  neutral: "bg-tag-neutral-bg text-tag-neutral-text",
};

const TECH_MAP: Record<string, TagCategory> = {
  // Frontend
  React: "frontend",
  "Next.js": "frontend",
  TypeScript: "frontend",
  JavaScript: "frontend",
  "HTML/CSS": "frontend",
  "Tailwind CSS": "frontend",
  "Vue.js": "frontend",
  MDX: "frontend",
  // Backend & Database
  "Node.js": "backend",
  Express: "backend",
  Python: "backend",
  Java: "backend",
  "Spring Boot": "backend",
  "REST API": "backend",
  GraphQL: "backend",
  Django: "backend",
  "Socket.io": "backend",
  Stripe: "backend",
  PostgreSQL: "backend",
  MySQL: "backend",
  MongoDB: "backend",
  Redis: "backend",
  Prisma: "backend",
  // DevOps
  Docker: "devops",
  AWS: "devops",
  "CI/CD": "devops",
  Nginx: "devops",
  Linux: "devops",
  "GitHub Actions": "devops",
  Vercel: "devops",
};

export function getTagCategory(tech: string): TagCategory {
  return TECH_MAP[tech] ?? "neutral";
}

export function getTagStyle(tech: string): string {
  return TAG_STYLES[getTagCategory(tech)];
}

export function getCategoryStyle(categoryName: string): string {
  const n = categoryName.toLowerCase();
  if (n === "frontend" || n === "前端") return TAG_STYLES.frontend;
  if (n === "backend" || n === "后端") return TAG_STYLES.backend;
  if (n === "database" || n === "数据库") return TAG_STYLES.backend;
  if (n === "devops") return TAG_STYLES.devops;
  return TAG_STYLES.neutral;
}

type Props = {
  name: string;
  size?: "sm" | "md";
};

export default function TechTag({ name, size = "sm" }: Props) {
  const padding = size === "sm" ? "px-2.5 py-0.5" : "px-3 py-1";

  return (
    <span
      className={`rounded-full text-xs font-medium ${padding} ${getTagStyle(name)}`}
    >
      {name}
    </span>
  );
}
