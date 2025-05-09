// components/Hero.tsx
import Image from "next/image";

type HeroProps = {
  image: string;
  title: string;
  subtitle?: string;
};

export default function Hero({ image, title, subtitle }: HeroProps) {
  return (
    <div className="relative h-[50vh] w-full">
      <Image src={image} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-2 text-lg">{subtitle}</p>
      </div>
    </div>
  );
}