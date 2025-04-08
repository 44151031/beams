// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">ページが見つかりません</h1>
        <p className="text-gray-600 mb-6">
          お探しのページは存在しないか、移動された可能性があります。
        </p>
        <Link href="/" className="text-pink-600 underline hover:opacity-75">トップページへ戻る</Link>
      </main>
    );
  }