import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { ContentPageProps } from "@/types/content";

export function ContentPage({ content, type }: ContentPageProps) {
  return (
    <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <Card className="bg-secondary/50">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">{content.title}</CardTitle>
          {type === 'blog' && content.readingTime && (
            <div className="flex gap-2 text-sm text-muted-foreground">
              <time>{new Date(content.date).toLocaleDateString()}</time>
              <span>· {content.readingTime} read</span>
            </div>
          )}
          {type === 'note' && content.category && (
            <div className="text-sm text-muted-foreground">
              Category: {content.category}
            </div>
          )}
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {content.description && <p>{content.description}</p>}
            
            {type === 'project' && content.tech && (
              <div className="flex flex-wrap gap-2">
                {content.tech.map((tech) => (
                  <span key={tech} className="bg-primary/10 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            )}
            
            {type === 'project' && (
              <div className="flex gap-4">
                {content.github && (
                  <Button variant="outline" asChild>
                    <Link href={content.github}>
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                )}
                {content.demo && (
                  <Button variant="outline" asChild>
                    <Link href={content.demo}>
                      <Globe className="w-4 h-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                )}
              </div>
            )}
            
            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown>{content.content}</ReactMarkdown>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

