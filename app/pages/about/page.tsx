export default function AccessPage() {
    return (
      <main className="p-10 bg-white min-h-screen max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 border-b pb-2 text-center">店舗紹介</h1>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">店舗情報</h2>
          <p><strong>店舗名：</strong> 美容室beams</p>
          <p><strong>住所：</strong> 東京都渋谷区◯◯ 1-2-3</p>
          <p><strong>営業時間：</strong> 10:00〜19:00（火曜定休）</p>
          <p><strong>電話番号：</strong> 03-1234-5678</p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">アクセス</h2>
          <p>JR渋谷駅 東口から徒歩5分</p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">地図</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[300px] border"
              src="https://www.google.com/maps/embed?pb=..." // Googleマップ埋め込みURLを入れてください
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>
      </main>
    );
  }