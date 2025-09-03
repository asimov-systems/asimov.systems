import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,svelte}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        suisse: ['SuisseIntl', 'sans-serif'],
        arges: ['Arges', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config;
