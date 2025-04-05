// app/pages/menu/page.tsx
import { client } from '@/lib/client';

type MenuItem = {
  id: string;
  name: string;
  price: string;
  description?: string;
  category: string;
};

type GroupedMenu = {
  [category: string]: MenuItem[];
};

export default async function MenuPage() {
  const data = await client.get({ endpoint: 'menu' });
  const items: MenuItem[] = data.contents;

  // カテゴリごとにグループ化
  const groupedMenu: GroupedMenu = items.reduce((acc, item) => {
    const cat = item.category || 'その他';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {} as GroupedMenu);

  return (
    <main className="p-10 bg-white min-h-screen max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 border-b pb-2 text-center">メニュー</h1>
      <p className="mb-6 text-center text-gray-600">
        カット・カラー・パーマなど、豊富なメニューを取り揃えています。
      </p>

      {/* カテゴリごとにセクション分け */}
      {Object.entries(groupedMenu).map(([category, items]) => (
        <section key={category} className="mb-10">
          <h2 className="text-xl font-semibold text-pink-600 border-b pb-1 mb-4">{category}</h2>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="border-b pb-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <span className="text-pink-500 font-bold">{item.price}</span>
                </div>
                {item.description && (
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}