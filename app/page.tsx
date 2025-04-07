import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from '@/lib/client';

// 型定義
interface NewsItem {
  id: string;
  title: string;
  publishedAt: string;
  category: {
    id: string;
    name: string;
  };
}

export default async function Home() {
  const data = await client.get({
    endpoint: 'news',
    queries: { limit: 5, orders: '-publishedAt' },
  });

  // ギャラリー画像URL一覧
  const galleryImages = [
    "/images/top/topg1.jpg",
    "/images/top/topg2.jpg",
    "/images/top/topg3.jpg",
    "/images/top/topg4.jpg",
  ];

  return (
    <>
      <Header />
      <main className="bg-gray-100 min-h-screen">
        {/* メインビジュアル */}
        <div className="relative w-full h-[60vh] overflow-hidden">
          <Image
            src="/images/top/topmain.jpg"
            alt="美容室の外観"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-white text-center px-4">
              <h1 className="text-4xl font-bold mb-2">美容室beams</h1>
              <p className="text-lg">ようこそ、癒しの空間へ。</p>
            </div>
          </div>
        </div>

        {/* お知らせセクション */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-screen-md mx-auto">
            {/* 見出し */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold font-en text-gray-800">News</h2>
            </div>

            {/* ニュースリスト */}
            <div className="space-y-8">
              {data.contents.map((item: NewsItem) => (
                <article
                  key={item.id}
                  className="border-b pb-4 hover:opacity-80 transition-opacity"
                >
                  <Link href={`/news/${item.id}`}>
                    <p className="text-sm text-gray-500 font-en">
                      {new Date(item.publishedAt).toLocaleDateString("ja-JP")}
                    </p>
                    {item.category && (
                      <p className="text-xs text-pink-600 mt-1">{item.category.name}</p>
                    )}
                    <h3 className="text-lg font-semibold text-gray-800 mt-1">
                      {item.title}
                    </h3>
                  </Link>
                </article>
              ))}
            </div>

            {/* ボタン */}
            <div className="mt-10 text-center">
              <Link href="/news">
                <Image
                  src="/images/newsbt.png"
                  alt="Newsボタン"
                  width={200}
                  height={60}
                  className="mx-auto hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </section>
        {/* 追加するセクション（お知らせの下に配置） */}
        <section className="mt-20 max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* テキストエリア */}
            <div className="md:w-1/2 text-center md:text-left text-gray-800">
              <div className="mb-8">
                <h2 className="text-4xl text-teal-800 font-cormorant">Concept</h2>
              </div>
              <h3 className="text-2xl font-semibold mb-6 font-notoserif">美と健康に「力」を注いでいます</h3>
              <p className="mb-8 leading-relaxed">
                FIRSTでは、髪だけではなく、美と健康に「力」を注いでいます。<br /><br />
                美容室は毎月のサイクルで通うからこそ、美と健康のお悩みや状態を見てアドバイスさせていただき、
                皆様にとって街の主治医のような存在になりたいと考えています。
              </p>
              <section className="!font-notoserif">
  <h2 className="text-xl !font-notoserif">Noto Serif の見出し</h2>
  <p className="mt-2 text-base !font-notoserif">これは Noto Serif JP の本文です。</p>
</section>

<section className="!font-cormorant">
  <h2 className="text-xl">Cormorant Garamond の見出し</h2>
  <p className="mt-2 text-base">これは Cormorant Garamond の本文です。</p>
</section>
              <div>
                <Link href="/pages/concept" className="inline-block bg-teal-800 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
                  READ MORE
                </Link>
              </div>
            </div>

            {/* 画像エリア */}
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/top/top1.jpg"
                  alt="サロン外観"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            {/* 画像 左側 */}
            <div className="w-full md:w-1/2">
              <Image
                src="/images/top/top2.png"
                alt="店内の様子"
                width={800}
                height={600}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>

            {/* テキストエリア */}
            <div className="w-full md:w-1/2">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2 font-cormorant">Commitment</h2>
                <p className="text-lg text-teal-700 font-medium">FIRSTのこだわり</p>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2 font-notoserif">美と健康をトータルに考える</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                美と健康をトータルに考えることは、私たちの生活全体の質を向上させる重要な要素です。
                <br />
                <br />
                ヘアケア、スキンケア、ヘルスケアなど、様々な側面からアプローチすることで、内側から外側まで美しく輝くことができます。
                <br />
                <br />
                さらに、メンタルヘルスケアも取り入れることで、トータルな美と健康を手に入れることができます。
                <br />
                <br />
                美と健康についてYouTubeで随時配信していますので、ご興味のある方はぜひご覧ください。
              </p>

              <Link
                href="/pages/commitment"
                className="inline-block bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition"
              >
                READ MORE
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-20">
          <div className="max-w-screen-xl mx-auto px-4">
            {/* セクションタイトル */}
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold font-serif tracking-wide mb-4">Menu</h1>
              <p className="text-gray-600 leading-relaxed">
                私たちは単なる髪を整える場所ではなく、お客様の美しさと健康を促進するために尽力しています。
                <br />
                そのために、厳選された製品や施術技術を用いて、お客様の髪や肌に最高のケアを提供しています。
              </p>
            </div>
            {/* メニューブロック */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <Link
                href="/pages/menu#cut"
                className="bg-pink-100 p-6 rounded-lg shadow hover:bg-pink-200 transition"
              >
                <p className="text-lg font-semibold">Cut menu</p>
                <p className="text-sm text-gray-600">カットメニュー</p>
              </Link>

              <Link
                href="/pages/menu#spa"
                className="bg-pink-100 p-6 rounded-lg shadow hover:bg-pink-200 transition"
              >
                <p className="text-lg font-semibold">Shampoo menu</p>
                <p className="text-sm text-gray-600">シャンプーメニュー</p>
              </Link>

              <Link
                href="/pages/menu#perm"
                className="bg-pink-100 p-6 rounded-lg shadow hover:bg-pink-200 transition"
              >
                <p className="text-lg font-semibold">Perm menu</p>
                <p className="text-sm text-gray-600">パーマメニュー</p>
              </Link>

              <Link
                href="/pages/menu#color"
                className="bg-pink-100 p-6 rounded-lg shadow hover:bg-pink-200 transition"
              >
                <p className="text-lg font-semibold">Color menu</p>
                <p className="text-sm text-gray-600">カラーメニュー</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
  <h2 className="text-center text-3xl font-bold mb-12">Gallery</h2>

  {/* 画像を画面いっぱいに広げる + 余白調整 */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-12">
    {galleryImages.map((url, index) => (
      <div
        key={index}
        className="overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
      >
        <img
          src={url}
          alt={`gallery${index + 1}`}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    ))}
  </div>
</section>
        <section className="bg-white py-16 px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* 左側：スタッフ紹介 */}
              <div className="relative w-full md:w-1/2 group">
                <Link href="/pages/staff">
                  <div className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
                    <Image
                      src="/images/top/topstaff.jpg"
                      alt="スタッフ紹介"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 w-32">
                      <Image
                        src="/images/staffbt.png"
                        alt="スタッフボタン"
                        width={128}
                        height={40}
                      />
                    </div>
                  </div>
                </Link>
              </div>

              {/* 右側：店舗情報 */}
              <div className="relative w-full md:w-1/2 group">
                <div className="mb-4">
                  <h2 className="text-3xl font-bold text-gray-800">About us</h2>
                </div>
                <Link href="/pages/about">
                  <div className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
                    <Image
                      src="/images/top/topshop.jpg"
                      alt="店舗情報"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 w-32">
                      <Image
                        src="/images/top_kaikan.png"
                        alt="ショップボタン"
                        width={128}
                        height={40}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}