// app/about/page.tsx
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "店舗概要 | 美容室beams",
  description: "美容室beamsの店舗概要。アクセス方法や営業時間などの情報を掲載しています。",
  openGraph: {
    title: "店舗概要 | 美容室beams",
    description: "美容室beamsの店舗概要。アクセス方法や営業時間などの情報を掲載しています。",
    url: "https://beams-hairsalon.com/about",
    siteName: "美容室beams",
    images: [
      {
        url: "https://beams-hairsalon.com/images/ogp_about.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <Hero image="/images/top/topmain.jpg" title="SALON" />
        <Breadcrumb current="店舗概要" />

        <section className="max-w-3xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-center mb-8">SALON INFO</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-6 text-gray-800">
            <dt className="font-semibold">店舗名</dt>
            <dd className="sm:col-span-2">美容室beams</dd>
            <dt className="font-semibold">代表</dt>
            <dd className="sm:col-span-2">三宮 史嗣</dd>
            <dt className="font-semibold">住所</dt>
            <dd className="sm:col-span-2">〒400-0053 山梨県甲府市大里町5257</dd>
            <dt className="font-semibold">電話</dt>
            <dd className="sm:col-span-2">055-241-0070</dd>
            <dt className="font-semibold">営業時間</dt>
            <dd className="sm:col-span-2">
              火〜金曜 10:00〜19:00<br />
              土・日・祝日 9:00〜18:00
            </dd>
            <dt className="font-semibold">定休日</dt>
            <dd className="sm:col-span-2">毎週月曜日／第一、第三火曜休</dd>
          </dl>

          <div className="my-10">
            <Image
              src="/images/about/salon_inside.jpg"
              alt="店内写真"
              width={800}
              height={500}
              className="rounded-xl shadow w-full h-auto object-cover"
            />
          </div>

          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[300px] border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.1804236626716!2d138.5581943!3d35.6282249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601c4cd8c3f1be3b%3A0x165b0ed688f57a3c!2z44CSNDAwLTAwNTMg5bGx5b2i55yM6I2J5bed5biC5aSn5Yy65YyX5Yy65pys!5e0!3m2!1sja!2sjp!4v1615530784045!5m2!1sja!2sjp"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="店舗へのアクセスマップ"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}