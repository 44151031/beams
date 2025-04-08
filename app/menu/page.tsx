// app/menu/page.tsx
import { client } from "@/lib/client";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";

interface MenuItem {
  id: string;
  name: string;
  price: string;
  description?: string;
  category: string;
}

export const metadata: Metadata = {
  title: "メニューページ | 美容室beams",
  description: "美容室beamsのメニュー一覧です。",
};

export default async function MenuPage() {
  const data = await client.get({ endpoint: "menu" });
  const menuItems: MenuItem[] = data.contents;

  const grouped = menuItems.reduce<Record<string, MenuItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <Hero image="/images/top/topmain.jpg" title="menu" />
                <Breadcrumb current="スタッフ紹介" />
        <Breadcrumb current="メニュー" />

        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-sm text-gray-600 mb-8">
              お客様の髪型にあわせてご提案いたします。
            </p>
            <div className="space-y-12">
              {Object.entries(grouped).map(([category, items]) => (
                <section key={category}>
                  <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-4">
                    {category}メニュー
                  </h2>
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li key={item.id} className="border-b pb-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{item.name}</span>
                          <span>{item.price}</span>
                        </div>
                        {item.description && (
                          <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}