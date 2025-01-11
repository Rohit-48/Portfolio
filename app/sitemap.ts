import { MetadataRoute } from 'next'
import { getAllContent } from '@/lib/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://rohit-portfolio.vercel.app'

  // Get all content slugs
  const projects = await getAllContent('projects')
  const notes = await getAllContent('notes')
  const blogs = await getAllContent('blogs')

  const routes = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }))

  const projectRoutes = projects.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date().toISOString(),
  }))

  const noteRoutes = notes.map((slug) => ({
    url: `${baseUrl}/notes/${slug}`,
    lastModified: new Date().toISOString(),
  }))

  const blogRoutes = blogs.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...projectRoutes, ...noteRoutes, ...blogRoutes]
}

