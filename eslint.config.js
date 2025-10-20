import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'dist-widget', 'public/widget.iife.js', 'public/widget.css']),
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['build-widget.js', 'tailwind.config.js'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { 
        varsIgnorePattern: '^[A-Z_]',
        argsIgnorePattern: '^_'
      }],
    },
  },
  {
    files: ['build-widget.js', 'vite.config*.js', 'tailwind.config*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
])
