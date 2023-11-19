import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  screens: {
    ...defaultTheme.screens,
  },
  theme: {
    extend: {
      colors: {
        'primary-vote-red': '#E72F00',

        'low-vote-green': '#8AF1B6',
        'medium-vote-green': '#30CB73',
        'high-vote-green': '#25A55C',

        'low-vote-blue': '#BBD9FF',
        'medium-vote-blue': '#7EB2F4',
        'high-vote-blue': '#4A8FE7',

        'low-vote-orange': '#FFB58C',
        'medium-vote-orange': '#F79E6D',
        'high-vote-orange': '#F88545',

        'primary-vote-gray': '#444444',
        'secondary-vote-gray-': '#8C8C8C',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
