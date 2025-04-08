// app/news/page.tsx
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お知らせ | 美容室beams",
  description: "美容室beamsの最新情報やお知らせを掲載しています。営業情報、キャンペーン、新サービスのご案内などをお届けします。",
  openGraph: {
    title: "お知らせ | 美容室beams",
    description: "美容室beamsの最新情報やお知らせを掲載しています。営業情報、キャンペーン、新サービスのご案内などをお届けします。",
    url: "https://beams-hairsalon.com/news",
    siteName: "美容室beams",
    images: [
      {
        url: "https://beams-hairsalon.com/images/ogp_news.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

interface NewsItem {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
  category: {
    id: string;
    name: string;
  };
}

export default async function NewsListPage() {
  const data = await client.get({
    endpoint: "news",
    queries: { orders: "-publishedAt" },
  });

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <Hero image="/images/top/topmain.jpg" title="NEWS" subtitle="お知らせ" />
        <Breadcrumb current="お知らせ" />

        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button className="bg-teal-800 text-white px-6 py-2 rounded">お知らせ</button>
            <button className="bg-teal-800 text-white px-6 py-2 rounded">メニュー紹介</button>
            <button className="bg-teal-800 text-white px-6 py-2 rounded">商品紹介</button>
          </div>

          <ul className="space-y-6">
            {data.contents.map((item: NewsItem) => (
              <li key={item.id}>
                <Link
                  href={`/news/${item.slug}`}
                  className="block hover:opacity-80 transition-opacity"
                >
                  <p className="text-sm text-gray-500">
                    {new Date(item.publishedAt).toLocaleDateString("ja-JP")}
                  </p>
                  {item.category && (
                    <span className="inline-block text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded mt-1">
                      {item.category.name}
                    </span>
                  )}
                  <h2 className="text-lg font-semibold text-gray-800 mt-1">
                    {item.title}
                  </h2>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}