"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "コンセプト", href: "/concept" },
    { label: "メニュー", href: "/menu" },
    { label: "スタッフ紹介", href: "/staff" },
    { label: "店舗概要", href: "/about" },
    { label: "お知らせ", href: "/news" },
    { label: "WEB予約・求人応募", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div
        className="
          flex items-center justify-between 
          px-4 py-2 
          max-w-[1680px] mx-auto
          h-[50px] lg:h-[106px]
        "
      >
        <Link href="/" className="text-xl font-bold text-teal-800">
          FIRST
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6 text-teal-800" />
          </button>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm text-teal-800 font-medium">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* オーバーレイ背景 */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* メニュー本体 */}
            <motion.div
              className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center text-xl font-medium text-teal-800 space-y-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
            >
              <button
                className="absolute top-4 right-4"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}