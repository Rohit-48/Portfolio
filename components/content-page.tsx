import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from 'lucide-react'

interface ContentPageProps {
  type: 'project' | 'note' | 'blog';
  slug: string;
  data: Record<string, {
    title: string;
    content: string;
    date?: string;
    tags?: string[];
    [key: string]: any;
  }>;
}

export default function ContentPage({ type, slug, data }: ContentPageProps) {
  const item = data[slug];

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto font-mono">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/" className="inline-flex items-center">
          <ChevronLeft className="w-4 h-4 mr-2" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>
      </Button>

      <Card className="bg-secondary/50">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">
            {item.title}
          </CardTitle>
          {item.date && (
            <p className="text-sm text-muted-foreground">
              {type === 'blog' ? 'Published' : 'Last updated'}: {item.date}
            </p>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {item.content}
          </div>
          {item.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-primary/10 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  )
}

