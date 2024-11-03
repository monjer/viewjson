// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    // config with just ignores is the replacement for `.eslintignore`
    ignores: ['**/.next/**', '**/dist/**', 'next.config.js', 'tailwind.config.js', 'postcss.config.js'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    rules: {
      "comma-dangle": ["error", "always-multiline"],
      "semi": ["error", "always"],
    },
  },
);