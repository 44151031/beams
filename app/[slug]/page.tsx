import { notFound } from 'next/navigation';
import { client } from '@/lib/client';

type PageContent = {
  title: string;
  body: string;
  slug: string;
};

// 静的パス生成
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const data = await client.get({ endpoint: 'pages' });

  return data.contents.map((page: PageContent) => ({
    slug: page.slug,
  }));
}

// ❗ここが重要：非同期関数にしても props 自体は Promise ではない
type Props = {
  params: {
    slug: string;
  };
};

export default async function PageDetail(props: Props) {
  const { slug } = props.params;

  const data = await client.get({
    endpoint: 'pages',
    queries: { filters: `slug[equals]${slug}` },
  });

  const page = data.contents[0];

  if (!page) {
    notFound();
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