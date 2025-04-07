// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Next.jsの `variable` で定義したフォントをTailwindに登録
        notoserif: ['var(--font-noto-serif)'],
        cormorant: ['var(--font-cormorant)'],
        geist: ['var(--font-geist-sans)'],
        geistmono: ['var(--font-geist-mono)'],
      },
    },
  },
};

export default config;