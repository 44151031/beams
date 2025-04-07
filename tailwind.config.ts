// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // 必要なフォントのみ登録
        notoserif: ['var(--font-noto-serif)', 'serif'],
        cormorant: ['var(--font-cormorant)'],
      },
    },
  },
};

export default config;