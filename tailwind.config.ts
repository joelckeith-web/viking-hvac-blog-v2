import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        viking: {
          navy: '#0E2340',
          'navy-light': '#004281',
          red: '#EB1C23',
          'red-dark': '#C41920',
        },
        accent: '#F5F5F0',
        dark: '#1A1A1A',
        muted: '#6B7280',
        light: '#F9FAFB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
