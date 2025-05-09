// types/news.ts
export type News = {
    id: string;
    title: string;
    body: string;
    publishedAt: string;
    slug: string;
  };
  
  export type NewsResponse = {
    contents: News[];
  };