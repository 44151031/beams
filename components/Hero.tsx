// components/Hero.tsx
import Image from "next/image";

type HeroProps = {
  image: string;
  title: string;
  subtitle?: string; // オプションにしたい場合は `?` をつける
};

export default function Hero({ image, title, subtitle }: HeroProps) {
  return (
    <section className="relative h-64 flex items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}