// app/news/page.tsx（または pages/news/index.tsx）
import { fetchNews } from '@/lib/client';

type NewsItem = {
  id: string;
  title: string;
  publishedAt: string;
};

type NewsResponse = {
  contents: NewsItem[];
};

export default async function NewsPage() {
  const data: NewsResponse = await fetchNews();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">お知らせ一覧</h1>
      <ul>
        {data.contents.map((item) => (
          <li key={item.id} className="mb-4">
            <a href={`/news/${item.id}`} className="text-blue-600 underline">
              {item.title}（{new Date(item.publishedAt).toLocaleDateString()}）
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}