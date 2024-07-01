export default {
  env: {
      browser: true,
      es2021: true,
      node: true
  },
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:node/recommended',
      'plugin:promise/recommended',
      'prettier',
      'plugin:prettier/recommended',
  ],
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
  },
  plugins: [
      'react',
      'import',
      'node',
      'promise',
      'prettier',
  ],
  rules: {
      'prettier/prettier': 'error',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn',
      'import/order': ['error', {
          'groups': ['builtin', 'external', 'internal'],
          'pathGroups': [
              {
                  'pattern': 'react',
                  'group': 'external',
                  'position': 'before',
              },
          ],
          'pathGroupsExcludedImportTypes': ['react'],
          'newlines-between': 'always',
          'alphabetize': {
              'order': 'asc',
              'caseInsensitive': true,
          },
      }],
      'node/no-unsupported-features/es-syntax': 'off',
      'promise/always-return': 'off',
      'promise/catch-or-return': 'off',
  },
  settings: {
      react: {
          version: 'detect',
      },
  },
};
