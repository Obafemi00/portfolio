import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        herb: {
          cyan: '#05ABC4',
          mint: '#04D3BC',
          purple: '#681FAB',
          ink: '#0A0F14',
          slate: '#5A6570',
          fog: '#F4F6F8',
        },
      },
      fontFamily: {
        hammersmith: ['var(--font-hammersmith)', 'system-ui', 'sans-serif'],
        bebas: ['var(--font-bebas)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['clamp(2.75rem, 5vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['clamp(2rem, 3.5vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'section': 'clamp(5rem, 10vw, 8rem)',
      },
      transitionTimingFunction: {
        'herb': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      maxWidth: {
        'content': '80rem',
      },
    },
  },
  plugins: [],
};

export default config;
