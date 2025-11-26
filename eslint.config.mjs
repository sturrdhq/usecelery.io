import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import stylistic from '@stylistic/eslint-plugin';
import jestPlugin from 'eslint-plugin-jest';
import reactPlugin from 'eslint-plugin-react';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    rules: {
      'no-unused-vars': ['error', {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      }],
      'no-undef': 'error',
      'no-useless-assignment': 'error',
      'camelcase': 'warn',
      'curly': 'warn',
      'eqeqeq': 'warn',
      'no-trailing-spaces': 'warn',
      'no-var': 'error',
      'space-infix-ops': 'warn',
      'space-unary-ops': 'warn',
      'spaced-comment': 'warn',
      'yoda': 'warn',
      'no-alert': 'error',
      'no-eval': 'error',
    },
    plugins: {
      jest: jestPlugin,
      react: reactPlugin,
    },
    languageOptions: {
      globals: {
        ...jestPlugin.environments.globals.globals,
        React: 'readonly',
      },
    },
  },
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    jsx: true,
  }),
]);

export default eslintConfig;
