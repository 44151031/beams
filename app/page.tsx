// app/page.tsx
import Link from 'next/link';
import { client } from '@/lib/client';

type NewsItem = {
  id: string;
  title: string;
  publishedAt: string;
};

export default async function Home() {
  const data = await client.get({
    endpoint: 'news',
    queries: { limit: 5, orders: '-publishedAt' },
  });

  return (
    <main className="text-center p-10 bg-gray-100 min-h-screen">
      {/* 美容室beamsのキャッチコピー */}
      <h1 className="text-4xl font-bold text-pink-600">美容室beams</h1>
      <p className="mt-4 text-gray-700">ようこそ、癒しの空間へ。</p>

      {/* お知らせセクション */}
      <section className="mt-12 bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto text-left">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">最新のお知らせ</h2>
        <ul className="space-y-2">
          {data.contents.map((item: NewsItem) => (
            <li key={item.id}>
              <Link
                href={`/news/${item.id}`}
                className="text-blue-600 hover:underline"
              >
                {item.title}（{new Date(item.publishedAt).toLocaleDateString('ja-JP')})
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-right">
          <Link href="/news" className="text-sm text-gray-500 hover:underline">
            → お知らせ一覧を見る
          </Link>
        </div>
      </section>
    </main>
  );
}