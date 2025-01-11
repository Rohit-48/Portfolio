import { join } from "path";
import { readFileSync } from "fs";
import { readdir } from "fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";
import { cache } from 'react'
import { notFound } from 'next/navigation'

type ContentType = "notes" | "blogs" | "projects";

interface Frontmatter {
  title: string;
  date: string;
  tags?: string[];
  description?: string;
  github?: string;
  live?: string;
  techStack?: string[];
}

// Add caching to content fetching
export const getContent = cache(async (type: ContentType, slug: string) => {
  try {
    const filePath = join(process.cwd(), `app/content/${type}`, `${slug}.mdx`)
    const source = readFileSync(filePath, "utf8")

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      },
    })

    return { content, frontmatter }
  } catch (error) {
    notFound()
  }
})

// Add error handling to getAllContent
export async function getAllContent(type: ContentType) {
  try {
    const directory = join(process.cwd(), `app/content/${type}`)
    const files = await readdir(directory)
    return files
      .filter(file => file.endsWith('.mdx'))
      .map(file => file.replace(/\.mdx$/, ''))
  } catch (error) {
    return []
  }
}

export async function getFrontmatter(type: ContentType) {
  const directory = join(process.cwd(), `app/content/${type}`);
  const files = await readdir(directory);

  const allFrontmatter = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { frontmatter } = await getContent(type, slug);
      return { slug, ...frontmatter };
    })
  );

  return allFrontmatter.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
