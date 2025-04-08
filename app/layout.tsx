import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_JP } from 'next/font/google';
import "./globals.css";

const notoserif = Noto_Serif_JP({
  variable: '--font-noto-serif',
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
  preload: false,
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

// ✅ 共通SEO設定（デフォルトタイトル・OGP）
export const metadata: Metadata = {
  title: {
    default: "美容室beams",
    template: "%s | 美容室beams",
  },
  description: "渋谷にある美容室beams。美と健康に力を注ぐ、癒しの空間をご提供します。",
  openGraph: {
    siteName: "美容室beams",
    type: "website",
    locale: "ja_JP",
    url: "https://beams-hairsalon.com",
    images: [
      {
        url: "https://beams-hairsalon.com/images/ogp_default.jpg",
        width: 1200,
        height: 630,
        alt: "美容室beams 外観",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@beams_hairsalon", // 任意：公式アカウントがあれば
  },
  metadataBase: new URL("https://beams-hairsalon.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoserif.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}