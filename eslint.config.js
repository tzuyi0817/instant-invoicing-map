import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const eslintConfig = defineConfig([
  ...nextVitals,

  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginPrettierRecommended.rules,
      'prettier/prettier': 'warn',
    },
  },

  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
