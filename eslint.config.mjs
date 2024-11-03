// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      '**/.next/**/*',
      '.vercel/**/*',
      'node_modules/**/*',
      'dist/**/*',
      'next.config.js',
      'tailwind.config.js',
      'postcss.config.js',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    rules: {
      "comma-dangle": ["error", "always-multiline"],
      "semi": ["error", "always"],
      "@typescript-eslint/no-unused-vars": ["error", { "caughtErrors": "none" }],
    },
  },
);