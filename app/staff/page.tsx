// app/staff/page.tsx
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "スタッフ紹介 | 美容室beams",
  description: "美容室beamsのスタッフをご紹介。経験豊富なスタイリストがあなたの美と健康をサポートします。",
  openGraph: {
    title: "スタッフ紹介 | 美容室beams",
    description: "美容室beamsのスタッフをご紹介。経験豊富なスタイリストがあなたの美と健康をサポートします。",
    url: "https://beams-hairsalon.com/staff",
    siteName: "美容室beams",
    images: [
      {
        url: "https://beams-hairsalon.com/images/ogp_staff.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function StaffPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <Hero image="/images/top/topmain.jpg" title="STAFF" />
        <Breadcrumb current="スタッフ紹介" />

        <section className="max-w-6xl mx-auto px-4 py-12 space-y-12">
          {/* スタッフ紹介 */}
          <div className="flex flex-col md:flex-row gap-8">
            <Image
              src="/images/staff/staff1.jpg"
              alt="三宮 史嗣"
              width={300}
              height={300}
              className="object-cover rounded shadow-md"
            />
            <div>
              <h2 className="text-lg font-bold">STAFF01. オーナー　三宮 史嗣（サンノミヤ ヒトシ）</h2>
              <p className="mt-2"><strong>趣味：</strong>ゴルフ、ワイン愛好家、囲碁、温泉</p>
              <p className="mt-2"><strong>SNS：</strong><a className="text-blue-600" href="#">youtube</a>・<a className="text-blue-600" href="#">Facebook</a>・<a className="text-blue-600" href="#">Instagram</a></p>
              <p className="mt-2 text-gray-700">
                HPをご覧いただきありがとうございます。<br />
                お客様それぞれに寄り添った提案を通して、皆様の魅力が最大限引き出せるよう日々努力しています。
                経験と技術を活かして、心から満足していただけるスタイルをお届けします。
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <Image
              src="/images/staff/staff2.jpg"
              alt="下仁城 絢子"
              width={300}
              height={300}
              className="object-cover rounded shadow-md"
            />
            <div>
              <h2 className="text-lg font-bold">STAFF03. スタイリスト　下仁城 絢子（イガラシ ジュンコ）</h2>
              <p className="mt-2"><strong>趣味：</strong>旅行</p>
              <p className="mt-2"><strong>マイブーム：</strong>話題やゆっくり過ごすこと</p>
              <p className="mt-2 text-gray-700">
                しっかりとお話をさせていただきながら、お客様の魅力を引き出すスタイルをご提案します。
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <Image
              src="/images/staff/staff3.jpg"
              alt="田村 純子"
              width={300}
              height={300}
              className="object-cover rounded shadow-md"
            />
            <div>
              <h2 className="text-lg font-bold">STAFF04. スタイリスト　田村 純子（タムラ ジュンコ）</h2>
              <p className="mt-2"><strong>趣味：</strong>スポーツ観戦、韓国ドラマ鑑賞</p>
              <p className="mt-2"><strong>マイブーム：</strong>ジムに行って運動する事</p>
              <p className="mt-2 text-gray-700">
                安心して任せられる雰囲気づくりを大切にし、丁寧なカウンセリングと高い技術でお応えします。
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}