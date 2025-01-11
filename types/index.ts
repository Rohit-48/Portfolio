export type ContentType = "notes" | "blogs" | "projects";

export interface BaseFrontmatter {
  title: string;
  date: string;
  tags?: string[];
  description?: string;
  published?: boolean;
  featured?: boolean;
}

export interface ProjectFrontmatter extends BaseFrontmatter {
  github?: string;
  live?: string;
  techStack?: string[];
}

export interface BlogFrontmatter extends BaseFrontmatter {
  author?: string;
}

export interface NoteFrontmatter extends BaseFrontmatter {
  category?: string;
}

export interface SectionItem {
  title: string;
  slug: string;
  description?: string;
}

export function isValidFrontmatter(frontmatter: unknown): frontmatter is BaseFrontmatter {
  if (!frontmatter || typeof frontmatter !== 'object') return false
  
  const { title, date } = frontmatter as BaseFrontmatter
  return typeof title === 'string' && typeof date === 'string'
}
