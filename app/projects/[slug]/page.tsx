import { getProjectBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Globe } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Props {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <Card className="bg-secondary/50">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>{project.description}</p>
            
            {project.tech && (
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-primary/10 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            )}
            
            <div className="flex gap-4">
              {project.github && (
                <Button variant="outline" asChild>
                  <Link href={project.github}>
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              )}
              {project.demo && (
                <Button variant="outline" asChild>
                  <Link href={project.demo}>
                    <Globe className="w-4 h-4 mr-2" />
                    Demo
                  </Link>
                </Button>
              )}
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown>{project.content}</ReactMarkdown>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
