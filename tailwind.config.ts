import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        field: '#F6F1E1',
        dusk: '#2F3A4A',
        harvest: '#CE8E32',
        sky: '#7CC7ED'
      },
      fontFamily: {
        serif: ['"Noto Serif Devanagari"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
