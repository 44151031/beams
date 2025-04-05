import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});


export const fetchNews = async () => {
  const res = await fetch(
    `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/news`,
    {
      headers: {
        'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY!,
      },
      cache: 'no-store', // ISR/SSG調整に応じて変えてもOK
    }
  );
  return res.json();
};