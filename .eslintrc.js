module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': [2, { ignore: ['^@/'] }],
    'react/no-unstable-nested-components': 'off', // 컴포넌트 분리
    'react/function-component-definition': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-useless-escape': 'off',
    'prettier/prettier': ['error'],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-newline': 'off',
    'no-console': 'off',
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0, // https://runebook.dev/ko/docs/eslint/rules/object-curly-newline,
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/prefer-default-export': 'off',
    'no-confusing-arrow': 0,
    'no-underscore-dangle': 0,
    'spaced-comment': 0,
    'no-param-reassign': 0,
    'import/no-cycle': 'off',
    'function-paren-newline': 'off',
    'jsx-a11y/media-has-caption': [
      2,
      {
        audio: ['Audio'],
        video: ['Video'],
        track: ['Track'],
      },
    ],
    'no-unused-vars': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      { declaration: false, assignment: false, return: true },
    ],
    'react/react-in-jsx-scope': 'off',
  },
};
