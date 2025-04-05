// app/news/[id]/page.tsx
import { notFound } from 'next/navigation';
import { client } from '@/lib/client';

type NewsItem = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
};

type Params = {
  id: string;
};

// 静的パス生成
export async function generateStaticParams(): Promise<{ id: string }[]> {
  const data = await client.get({ endpoint: 'news' });

  return data.contents.map((item: NewsItem) => ({
    id: item.id,
  }));
}

// 詳細ページ
export default async function NewsDetailPage({ params }: { params: Params }) {
  const data = await client.get({
    endpoint: 'news',
    contentId: params.id,
  });

  if (!data) {
    notFound();
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-500">{new Date(data.publishedAt).toLocaleDateString()}</p>
      <div
        className="prose mt-6"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </main>
  );
}