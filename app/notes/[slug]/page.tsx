import { getNoteBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ReactMarkdown from 'react-markdown';

interface Props {
  params: {
    slug: string;
  };
}

export default function NotePage({ params }: Props) {
  const note = getNoteBySlug(params.slug);

  if (!note) {
    notFound();
  }

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <Card className="bg-secondary/50">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">{note.title}</CardTitle>
          <div className="text-sm text-muted-foreground">
            Category: {note.category}
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{note.content}</ReactMarkdown>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
