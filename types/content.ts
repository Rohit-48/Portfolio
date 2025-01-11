export interface ContentMeta {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  image?: string;
  slug: string;
  content: string;
}

export interface Project extends ContentMeta {
  github?: string;
  demo?: string;
  tech: string[];
}

export interface Note extends ContentMeta {
  category: string;
}

export interface Blog extends ContentMeta {
  readingTime?: string;
} 