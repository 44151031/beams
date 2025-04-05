import Image from 'next/image';

export default function StaffPage() {
  return (
    <main className="p-10 bg-white min-h-screen max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 border-b pb-2 text-center">スタッフ紹介</h1>

      <section className="flex flex-col items-center text-center">
        <Image
          src="/staff.jpg" // public フォルダに配置する想定
          alt="スタッフ写真"
          width={160}
          height={160}
          className="object-cover rounded-full shadow mb-4"
        />
        <h2 className="text-xl font-semibold">佐藤 美咲（Misaki Sato）</h2>
        <p className="mt-2 text-gray-600">
          カットからカラー、ヘアアレンジまでお任せください。<br />
          お客様一人ひとりに似合うスタイルをご提案します。
        </p>
      </section>
    </main>
  );
}