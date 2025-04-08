// app/concept/page.tsx
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "コンセプト | 美容室beams",
  description: "美容室beamsのコンセプトページ。美と健康に注ぐ想いや取り組みをご紹介します。",
  openGraph: {
    title: "コンセプト | 美容室beams",
    description: "美容室beamsのコンセプトページ。美と健康に注ぐ想いや取り組みをご紹介します。",
    url: "https://beams-hairsalon.com/concept",
    siteName: "美容室beams",
    images: [
      {
        url: "https://beams-hairsalon.com/images/ogp_concept.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function ConceptPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <Hero image="/images/top/topmain.jpg" title="CONCEPT" />

        {/* パンくずリスト */}
        <Breadcrumb current="コンセプト" />

        <section className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-xl font-semibold text-gray-800 mb-6">FIRSTは、未来のために 美と健康に力を注いでいます。</p>
          <div className="mb-8">
            <Image
              src="/images/top/facade.jpg"
              alt="店舗外観"
              width={800}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow"
            />
          </div>
          <div className="space-y-6 leading-relaxed text-gray-700">
            <p>
              当サロンのパーマやカラーリングは、髪や頭皮への優しさにこだわり、化学的な刺激を最小限に抑えます。
              髪の健康を守りながら、美しいスタイルを実現することができます。
            </p>
            <p>
              また、栄養に特化したスキャルプケアやヘルスケアなど、様々な側面からアプローチすることで、
              外見だけでなく内側まで美しく輝くことができます。
            </p>
            <p>
              例えば、定期的に栄養管理にご来店いただくことで、髪のスタイリングだけでなく、お客様の健康や体質状態を時に的確に把握。
              アドバイスやヘルスケアをご提供させていただきます。
            </p>
            <p>
              また、カットやカラーカウンセリングなどのイメージセッションは、周りからの印象を再確認する機会でもあります。
            </p>
            <p>
              だからこそ、自分の外見に気を使うことが習慣に。自然と美意識が高まります。
            </p>
            <p>
              他者評価に依存せず、自分らしい魅力で発信する力こそ、お客様が自信を持って日々を過ごせる鍵だと私たちは考えています。
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">代表の想い MESSAGE</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <Image
                  src="/images/staff/owner.jpg"
                  alt="代表写真"
                  width={300}
                  height={300}
                  className="rounded-xl shadow-md object-cover"
                />
              </div>
              <div className="md:w-2/3 text-gray-700 space-y-4">
                <p>
                  約40年前に東京の美容学校を卒業し地元に帰郷しましたが、美容師としての情熱を絶やさず、家族を支え、豊かな仕事を築けたことこそ、
                  お客様と地域社会のおかげと感謝しています。
                </p>
                <p>
                  この経験を糧に、将来世代や美容業界に恩返しがしたいという強い想いがあります。
                </p>
                <p>
                  これまでも これからも、より自然な在り方で心に寄り添うカウンセリングやアドバイスを行うこと、
                  お客様や地域の皆様にとっての存在価値を届けていきたいと願って活動しています。
                </p>
                <p>
                  美容業界に恩返しがしたい、一番身近な健康と美容に寄り添っていきたい、日々生きる皆様を応援したい。
                  この想いのもと、精一杯対応させていただきます。
                </p>
                <p>ぜひ一度ご来店いただければ嬉しいです。</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
