import { client } from "@/lib/client";
import { notFound } from "next/navigation";

// 型定義（必要に応じて types/news.ts に切り出してもOK）
type NewsItem = {
  id: string;
  title: string;
  slug: string;
  content: string;
  publishedAt: string;
  description?: string;
  ogImage?: {
    url: string;
  };
};

type Props = {
  params: {
    slug: string;
  };
};

// ✅ ビルド時にすべての slug を取得して静的生成
export async function generateStaticParams() {
  const data = await client.get({ endpoint: "news" });
  return data.contents.map((item: NewsItem) => ({
    slug: item.slug,
  }));
}

// ✅ ページごとのSEOメタ情報
export async function generateMetadata({ params }: Props) {
  const data = await client.get({
    endpoint: "news",
    queries: { filters: `slug[equals]${params.slug}` },
  });

  const article: NewsItem | undefined = data.contents?.[0];

  if (!article) return {};

  return {
    title: `${article.title} | お知らせ | 美容室beams`,
    description: article.description ?? "",
    openGraph: {
      title: article.title,
      description: article.description ?? "",
      url: `https://beams-hairsalon.com/news/${article.slug}`,
      images: article.ogImage ? [{ url: article.ogImage.url }] : [],
    },
  };
}

// ✅ 実際の表示コンポーネント
export default async function NewsDetailPage({ params }: Props) {
  const data = await client.get({
    endpoint: "news",
    queries: { filters: `slug[equals]${params.slug}` },
  });

  const article: NewsItem | undefined = data.contents?.[0];

  if (!article) return notFound();

  return (
    <main className="p-10 max-w-3xl mx-auto bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(article.publishedAt).toLocaleDateString("ja-JP")}
      </p>
      {article.content && (
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      )}
    </main>
  );
}