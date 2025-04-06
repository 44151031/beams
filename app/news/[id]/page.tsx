// app/news/[id]/page.tsx
import { client } from '@/lib/client';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
  searchParams: { draftKey?: string };
};

// 静的生成のためのパスを取得
export async function generateStaticParams() {
  const { contents } = await client.getList({ endpoint: 'news' });

  return contents.map((article: any) => ({
    id: article.id,
  }));
}

export default async function NewsDetailPage({ params, searchParams }: Props) {
  const { id } = params;
  const { draftKey } = searchParams;

  try {
    const article = await client.getListDetail({
      endpoint: 'news',
      contentId: id,
      queries: draftKey ? { draftKey } : {},
    });

    return (
      <article className="prose mx-auto p-4">
        <h1 className="text-3xl font-bold">{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    );
  } catch (error) {
    notFound();
  }
}