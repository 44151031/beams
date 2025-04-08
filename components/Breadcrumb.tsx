// components/Breadcrumb.tsx
import Link from "next/link";

type BreadcrumbProps = {
  current: string;
};

export default function Breadcrumb({ current }: BreadcrumbProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-4 text-sm text-gray-600">
      <Link href="/" className="hover:underline">ホーム</Link> <span className="mx-1">›</span> {current}
    </div>
  );
}