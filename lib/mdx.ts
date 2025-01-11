import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getContent(type: string, slug: string) {
  const fullPath = path.join(process.cwd(), 'content', type, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Destructure only what we use from matter result
  const { data: frontmatter, content } = matter(fileContents);
  
  return {
    frontmatter,
    content,
  };
}

export async function getAllContent(type: string) {
  const contentDirectory = path.join(process.cwd(), 'content', type);
  const filenames = fs.readdirSync(contentDirectory);
  
  return filenames
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
}
