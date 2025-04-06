// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#e1eff0] text-sm text-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6">
        {/* 左：Googleマップなど */}
        <div>
          {/* Googleマップは<iframe>やAPIで埋め込む */}
          <div className="w-full h-64 bg-gray-300">Google Map</div>
        </div>

        {/* 右：サロン情報 */}
        <div className="text-xs space-y-2">
          <p><strong>ADDRESS</strong><br />山梨県甲府市大里町5257</p>
          <p><strong>TEL</strong><br />055-241-0070</p>
          <p><strong>HOURS</strong><br />10:00〜19:00（火・水・木・金）<br />9:00〜18:00（土・日・祝）</p>
          <p><strong>HOLIDAY</strong><br />毎週月曜日／第一、第三火曜休</p>
          <div>
            <button className="mt-4 px-4 py-2 border border-teal-800 text-teal-800 font-semibold flex items-center gap-2 hover:bg-teal-100 transition">
              <span>📞</span>
              WEB予約・求人応募
            </button>
          </div>
        </div>
      </div>

      {/* 中央ナビゲーションリンク */}
      <div className="text-center text-xs text-gray-600 py-4 space-x-2">
        {['ホーム', 'コンセプト', 'こだわり', 'メニュー', 'スタッフ紹介', '採用情報', '店舗概要', 'お知らせ', 'WEB予約・求人応募'].map((label, index) => (
          <span key={index} className="inline-block border-r border-gray-400 pr-2 last:border-none">
            <Link href="#">{label}</Link>
          </span>
        ))}
      </div>

      {/* 下部ロゴ＆コピーライト */}
      <div className="text-center py-6">
        <div className="text-teal-800 font-bold text-lg">FIRST</div>
        <div className="text-sm mt-2">📺 Youtube</div>
        <p className="text-xs text-gray-500 mt-2">&copy;2024 FIRST</p>
      </div>
    </footer>
  );
}