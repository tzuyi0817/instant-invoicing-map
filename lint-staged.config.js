/** @type {import('lint-staged').Configuration} */

export default {
  '*.{js,jsx,ts,tsx}': () => 'pnpm lint',
};
