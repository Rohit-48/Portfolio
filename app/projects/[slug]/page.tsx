import { getProjectBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';
import { ContentPage } from '@/components/content-page';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ContentPage content={project} type="project" />;
}
