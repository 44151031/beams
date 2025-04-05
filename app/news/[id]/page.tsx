// app/news/[id]/page.tsx
import { notFound } from 'next/navigation';
import { client } from '@/lib/client';

type News = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
};

type Props = {
  params: {
    id: string;
  };
};

export const revalidate = 60; // ISR設定（任意）

export default async function NewsDetailPage({ params }: Props) {
  const { id } = params;

  let news: News | null = null;

  try {
    news = await client.getListDetail<News>({
      endpoint: 'news',
      contentId: id,
    });
  } catch (error) {
    console.error('Failed to fetch news detail:', error);
    notFound();
  }

  if (!news) {
    notFound();
  }

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
}