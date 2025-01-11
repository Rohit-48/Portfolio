import { getBlogBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ReactMarkdown from 'react-markdown';

interface Props {
  params: {
    slug: string;
  };
}

export default function BlogPage({ params }: Props) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <Card className="bg-secondary/50">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">{blog.title}</CardTitle>
          <div className="flex gap-2 text-sm text-muted-foreground">
            <time>{new Date(blog.date).toLocaleDateString()}</time>
            {blog.readingTime && <span>· {blog.readingTime} read</span>}
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
