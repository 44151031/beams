/**import { notFound } from 'next/navigation';
import { client } from '@/lib/client';

type News = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
};

export const revalidate = 60;

export default async function NewsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  try {
    const news = await client.getListDetail<News>({
      endpoint: 'news',
      contentId: id,
    });

    return (
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">{news.title}</h1>
        <time className="text-sm text-gray-500 block mb-6">
          {new Date(news.publishedAt).toLocaleDateString()}
        </time>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />
      </main>
    );
  } catch (error) {
    console.error('Failed to fetch news detail:', error);
    notFound();
  }
}*/