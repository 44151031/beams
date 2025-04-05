// pages/pages/[slug].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '../../lib/client';

type PageContent = {
  title: string;
  body: string;
  slug: string;
};

type Props = {
  page: PageContent;
};

export default function PageDetail({ page }: Props) {
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

// 全ページ分のslug（URL）を取得
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'pages' });

  const paths = data.contents.map((content: PageContent) => ({
    params: { slug: content.slug },
  }));

  return { paths, fallback: false };
};

// 各slugに対応するデータを取得
export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  const data = await client.get({
    endpoint: 'pages',
    queries: { filters: `slug[equals]${slug}` },
  });

  return {
    props: {
      page: data.contents[0],
    },
  };
};