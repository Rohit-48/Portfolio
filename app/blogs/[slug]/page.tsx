import { getBlogBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';
import { ContentPage } from '@/components/content-page';

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return <ContentPage content={blog} type="blog" />;
}
