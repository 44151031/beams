// app/pages/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { client } from '@/lib/client';

type PageContent = {
  title: string;
  body: string;
  slug: string;
};

// ✅ generateStaticParamsで使うパラメータ型
type StaticParams = {
  slug: string;
};

// ✅ ページのprops型
interface PageProps {
  params: {
    slug: string;
  };
}

// 静的パス生成：全slugを取得
export async function generateStaticParams(): Promise<StaticParams[]> {
  const data = await client.get({ endpoint: 'pages' });

  return data.contents.map((page: PageContent) => ({
    slug: page.slug,
  }));
}

// ページ本体
export default async function PageDetail({ params }: PageProps) {
  const data = await client.get({
    endpoint: 'pages',
    queries: { filters: `slug[equals]${params.slug}` },
  });

  const page = data.contents[0];

  if (!page) {
    notFound(); // 404ページに飛ばす
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '700px', margin: 'auto' }}>
      <h1>{page.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: page.body,
        }}
      />
    </main>
  );
}