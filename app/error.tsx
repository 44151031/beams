'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("エラーが発生しました:", error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-4xl font-bold mb-4">エラーが発生しました</h1>
      <p className="text-gray-600 mb-6">申し訳ありません。もう一度お試しください。</p>
      <button
        onClick={() => reset()}
        className="bg-pink-500 text-white px-4 py-2 rounded hover:opacity-80"
      >
        リトライ
      </button>
    </main>
  );
}