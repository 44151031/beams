// app/news/[slug]/page.tsx
import { client } from "@/lib/client";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";

// 型定義
interface NewsItem {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
  body: string;
  description?: string;
  ogImage?: {
    url: string;
  };
}

interface Props {
  params: {
    slug: string;
  };
}

// ✅ 動的ルーティング用の静的パス生成
export async function generateStaticParams() {
  const data = await client.get({ endpoint: "news" });
  return data.contents.map((item: NewsItem) => ({
    slug: item.slug,
  }));
}

// ✅ SEOメタ情報の生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await client.get({
    endpoint: "news",
    queries: { filters: `slug[equals]${params.slug}` },
  });

  const article: NewsItem | undefined = data?.contents?.[0];

  if (!article) {
    return {
      title: "記事が見つかりません | 美容室beams",
      description: "お探しの記事は見つかりませんでした。",
    };
  }

  return {
    title: `${article.title} | お知らせ | 美容室beams`,
    description: article.description ?? "美容室beamsのお知らせ詳細ページです。",
    openGraph: {
      title: article.title,
      description: article.description ?? "",
      url: `https://beams-hairsalon.com/news/${article.slug}`,
      images: article.ogImage ? [{ url: article.ogImage.url }] : [],
    },
  };
}

// ✅ お知らせ詳細ページ本体
export default async function NewsDetailPage({ params }: Props) {
  const data = await client.get({
    endpoint: "news",
    queries: { filters: `slug[equals]${params.slug}` },
  });

  const article: NewsItem | undefined = data?.contents?.[0];

  if (!article) return notFound();

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <Hero image="/images/top/topmain.jpg" title="NEWS" subtitle="お知らせ" />
        <Breadcrumb current="お知らせ詳細" />

        <section className="max-w-3xl mx-auto px-4 py-12">
          <p className="text-sm text-gray-500">
            {new Date(article.publishedAt).toLocaleDateString("ja-JP")}
          </p>
          <h1 className="text-2xl font-bold mt-2 mb-6">{article.title}</h1>
          {article.body && (
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
          )}
          <div className="mt-10 text-center">
            <a
              href="/news"
              className="inline-block bg-teal-800 text-white px-6 py-2 rounded hover:bg-teal-700"
            >
              一覧に戻る
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}