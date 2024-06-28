module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
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
    // import 확장자 체크를 비활성화
    'import/extensions': 'off',

    // 절대 경로 import시 ESLint 오류를 무시
    'import/no-unresolved': [2, { ignore: ['^@'] }],

    // 안정적이지 않은 중첩 컴포넌트 비활성화
    'react/no-unstable-nested-components': 'off',

    // 함수형 컴포넌트 정의 규칙 비활성화
    'react/function-component-definition': 'off',

    // 사용하기 전에 변수 정의를 강제하지 않음
    'no-use-before-define': 'off',

    // 변수의 그림자 효과 비활성화
    'no-shadow': 'off',

    // 불필요한 이스케이프 문자 허용
    'no-useless-escape': 'off',

    // Prettier 규칙 적용
    'prettier/prettier': ['error'],

    // JSX props 스프레드 비활성화
    'react/jsx-props-no-spreading': 'off',

    // JSX 중괄호 개행 규칙 비활성화
    'react/jsx-curly-newline': 'off',

    // 콘솔 사용 경고 비활성화
    'no-console': 'off',

    // 암시적 화살표 개행 허용
    'implicit-arrow-linebreak': 0,

    // 연산자 개행 규칙 비활성화
    'operator-linebreak': 0,

    // 객체 중괄호 개행 규칙 비활성화
    'object-curly-newline': 0,

    // 특정 상호작용에 대해 static element 경고
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

    // JSX 중괄호 존재 규칙 비활성화
    'react/jsx-curly-brace-presence': 0,

    // .tsx 파일에서 JSX 사용 허용
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],

    // 기본 내보내기 선호 규칙 비활성화
    'import/prefer-default-export': 'off',

    // 혼란스러운 화살표 함수 규칙 비활성화
    'no-confusing-arrow': 0,

    // 언더스코어 밑줄 허용
    'no-underscore-dangle': 0,

    // 주석에 공백 강제하지 않음
    'spaced-comment': 0,

    // 매개변수 재할당 규칙 비활성화
    'no-param-reassign': 0,

    // 순환 종속성 경고 비활성화
    'import/no-cycle': 'off',

    // 함수 괄호 개행 규칙 비활성화
    'function-paren-newline': 'off',

    // 미디어 캡션 규칙 적용
    'jsx-a11y/media-has-caption': [
      2,
      {
        audio: ['Audio'],
        video: ['Video'],
        track: ['Track'],
      },
    ],

    // 사용되지 않는 변수 경고 비활성화
    'no-unused-vars': 'off',

    // 하나의 표현식 per line 규칙 비활성화
    'react/jsx-one-expression-per-line': 'off',

    // 여러 줄 JSX 래핑 규칙 비활성화
    'react/jsx-wrap-multilines': [
      'error',
      { declaration: false, assignment: false, return: true },
    ],

    // React 17+에서는 React를 명시적으로 import하지 않아도 됨
    'react/react-in-jsx-scope': 'off',

    //require 사용 경고를 비활성화
    '@typescript-eslint/no-var-requires': 'off',
  },
};
