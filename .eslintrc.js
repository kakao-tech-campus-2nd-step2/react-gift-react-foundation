module.exports = {
  parser: '@typescript-eslint/parser', // TypeScript 파서를 사용
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb', // Airbnb 스타일 가이드 적용
    'prettier', // Prettier와 충돌하는 ESLint 규칙을 비활성화
    'plugin:prettier/recommended', // Prettier 규칙을 ESLint 규칙으로 추가
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error', // Prettier 규칙을 ESLint 규칙으로 추가
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/react-in-jsx-scope': 'off', // React 17+에서는 필요 없음
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
