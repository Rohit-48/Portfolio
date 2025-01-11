import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project, Note, Blog } from '@/types/content';

const contentDirectory = path.join(process.cwd(), 'content');

function ensureDirectory(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function parseContent<T>(filePath: string): T {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    ...data,
    content,
    slug: path.basename(filePath, path.extname(filePath)),
  } as T;
}

export function getAllProjects(): Project[] {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  ensureDirectory(projectsDirectory);
  
  try {
    const fileNames = fs.readdirSync(projectsDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const filePath = path.join(projectsDirectory, fileName);
        return parseContent<Project>(filePath);
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.warn('Error reading projects:', error);
    return [];
  }
}

export function getAllNotes(): Note[] {
  const notesDirectory = path.join(contentDirectory, 'notes');
  ensureDirectory(notesDirectory);
  
  try {
    const fileNames = fs.readdirSync(notesDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const filePath = path.join(notesDirectory, fileName);
        return parseContent<Note>(filePath);
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.warn('Error reading notes:', error);
    return [];
  }
}

export function getAllBlogs(): Blog[] {
  const blogsDirectory = path.join(contentDirectory, 'blogs');
  ensureDirectory(blogsDirectory);
  
  try {
    const fileNames = fs.readdirSync(blogsDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const filePath = path.join(blogsDirectory, fileName);
        return parseContent<Blog>(filePath);
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.warn('Error reading blogs:', error);
    return [];
  }
}

export function getProjectBySlug(slug: string): Project | null {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  const filePath = path.join(projectsDirectory, `${slug}.md`);
  
  try {
    return parseContent<Project>(filePath);
  } catch (error) {
    console.warn(`Error reading project ${slug}:`, error);
    return null;
  }
}

export function getNoteBySlug(slug: string): Note | null {
  const notesDirectory = path.join(contentDirectory, 'notes');
  const filePath = path.join(notesDirectory, `${slug}.md`);
  
  try {
    return parseContent<Note>(filePath);
  } catch (error) {
    console.warn(`Error reading note ${slug}:`, error);
    return null;
  }
}

export function getBlogBySlug(slug: string): Blog | null {
  const blogsDirectory = path.join(contentDirectory, 'blogs');
  const filePath = path.join(blogsDirectory, `${slug}.md`);
  
  try {
    return parseContent<Blog>(filePath);
  } catch (error) {
    console.warn(`Error reading blog ${slug}:`, error);
    return null;
  }
} 