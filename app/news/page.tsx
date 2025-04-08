// app/news/page.tsx
import Link from 'next/link';
import { client } from '@/lib/client';
import type { NewsResponse } from '@/types/news';

export default async function NewsListPage() {
  const data = await client.get<NewsResponse>({ endpoint: 'news' });

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">お知らせ一覧</h1>
      <ul className="space-y-4">
        {data.contents.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`} className="text-blue-600 hover:underline">
              {news.title}
            </Link>
            <p className="text-sm text-gray-500">
              {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}