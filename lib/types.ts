export interface ExperienceItem {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}

export interface EducationItem {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}
