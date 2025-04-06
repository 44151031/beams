// app/news/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { client } from '@/lib/client';
import type { News } from '@/types/news';

type Props = {
  params: {
    slug: string;
  };
};

export default async function NewsDetailPage({ params }: Props) {
  try {
    const data = await client.get<News>({
      endpoint: 'news',
      contentId: params.slug,
    });

    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
        <p className="text-sm text-gray-500 mb-4">{new Date(data.publishedAt).toLocaleDateString()}</p>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </main>
    );
  } catch (error) {
    notFound();
  }
}