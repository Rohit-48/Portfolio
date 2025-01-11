import { getNoteBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';
import { ContentPage } from '@/components/content-page';

export default function NotePage({ params }: { params: { slug: string } }) {
  const note = getNoteBySlug(params.slug);

  if (!note) {
    notFound();
  }

  return <ContentPage content={note} type="note" />;
}
