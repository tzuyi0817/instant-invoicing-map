import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#E72F00',

        'shallow-green': '#8AF1B6',
        'normal-green': '#30CB73',
        'deep-green': '#25A55C',

        'shallow-blue': '#BBD9FF',
        'normal-blue': '#7EB2F4',
        'deep-blue': '#4A8FE7',

        'shallow-orange': '#FFB58C',
        'normal-orange': '#F79E6D',
        'deep-orange': '#F88545',

        'primary-gray': '#444444',
        'secondary-gray': '#8C8C8C',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};

export default config;
