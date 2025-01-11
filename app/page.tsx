import { Github } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { getAllProjects, getAllNotes, getAllBlogs } from '@/lib/content';
import { XIcon } from '@/components/icons/x-icon'

export default function Portfolio() {
  const projects = getAllProjects();
  const notes = getAllNotes();
  const blogs = getAllBlogs();

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto font-mono">
      <div className="flex justify-between items-center mb-8">
        <Card className="bg-secondary/50">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold">
              Rohit.cpp
            </CardTitle>
          </CardHeader>
        </Card>
        <ThemeToggle />
      </div>

      <div className="grid gap-8">
        <section className="grid md:grid-cols-2 gap-4 items-start">
          <Card className="bg-secondary/50">
            <CardContent className="pt-6">
              <h2 className="font-bold mb-4">I&apos;m a Computer Science student</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="bg-primary/10 px-2 py-1 rounded">Improving Math & Physics</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 px-2 py-1 rounded">Web Development & Design</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 px-2 py-1 rounded">Going towards AI/ML, Starting Soon.....</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <div className="flex justify-end items-start">
            <div className="text-6xl transform -scale-y-100" aria-hidden="true">A</div>
          </div>
        </section>

        <section id="projects">
          <Card className="bg-secondary/50">
            <CardHeader>
              <CardTitle className="font-bold text-xl">Projects</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
              {projects.map((project) => (
                <Link 
                  key={project.slug} 
                  href={`/projects/${project.slug}`}
                  className="group"
                >
                  <div className="p-4 rounded-lg bg-background/50 hover:bg-primary hover:text-primary-foreground transition-colors">
                    <h3 className="font-medium">{project.title}</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        </section>

        <section id="notes">
          <Card className="bg-secondary/50">
            <CardHeader>
              <CardTitle className="font-bold text-xl">My Notes</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
              {notes.map((note) => (
                <Link 
                  key={note.slug} 
                  href={`/notes/${note.slug}`}
                  className="group"
                >
                  <div className="p-4 rounded-lg bg-background/50 hover:bg-primary hover:text-primary-foreground transition-colors">
                    <h3 className="font-medium">{note.title}</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70">
                      {note.description}
                    </p>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        </section>

        <section id="blogs">
          <Card className="bg-secondary/50">
            <CardHeader>
              <CardTitle className="font-bold text-xl">My Blogs</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
              {blogs.map((blog) => (
                <Link 
                  key={blog.slug} 
                  href={`/blogs/${blog.slug}`}
                  className="group"
                >
                  <div className="p-4 rounded-lg bg-background/50 hover:bg-primary hover:text-primary-foreground transition-colors">
                    <h3 className="font-medium">{blog.title}</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70">
                      {blog.description}
                    </p>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        </section>

        <footer className="border-t pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex gap-4">
              <Button variant="ghost" asChild>
                <Link 
                  href="https://github.com/Rohit-48" 
                  className="inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                  <span>GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link 
                  href="https://x.com/rohitcpp" 
                  className="inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                  <span>X</span>
                </Link>
              </Button>
            </div>
            <div className="text-right space-y-1 text-sm">
              <p className="font-medium">Keep Your Heart Blaze</p>
              <p className="text-muted-foreground">Spread Love</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

