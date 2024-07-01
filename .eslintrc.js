module.exports = {
  env: {
    // [env] 프로젝트 환경 설정, 브라우저 환경과 ES2021 문법
    browser: true,
    es2021: true,
  },

  // [plugins] typescript 를 parser 로 사용하도록 함
  plugins: ['react', 'react-hooks', 'jsx-a11y'],

  // [extends] 프로젝트에 사용할 eslint 규칙
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],

  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // [rules] 상세 규칙
  rules: {
    'no-var': 'warn', // var 사용을 경고 처리합니다.
    'react/prop-types': 0, // React 컴포넌트의 props 검사를 비활성화합니다.
    'no-extra-semi': 'error', // 불필요한 세미콜론 사용을 에러로 처리합니다.
    'react/jsx-filename-extension': [
      // JSX 파일 확장자를 .js, .jsx, .ts, .tsx로 허용합니다.
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'arrow-parens': ['warn', 'as-needed'], // 화살표 함수의 파라미터가 하나일 때 괄호 생략을 권장합니다.
    'no-unused-vars': ['off'], // 사용하지 않는 변수에 대한 경고를 비활성화합니다.
    'no-console': ['off'], // 콘솔 사용에 대한 경고를 비활성화합니다.
    'import/prefer-default-export': ['off'], // 단일 export문에 대한 default export 사용 권장 경고를 비활성화합니다.
    'react-hooks/exhaustive-deps': ['warn'], // React hooks의 의존성 배열이 충분하지 않을 때 경고를 표시합니다.
    'react/jsx-pascal-case': 'warn', // 컴포넌트 이름은 PascalCase로 사용할 것을 권장합니다.
    'react/jsx-key': 'warn', // 반복문으로 생성하는 요소에 key 사용을 강제합니다.
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // Prettier 규칙을 적용하되, 줄바꿈 방식은 자동으로 처리합니다.
    'react/function-component-definition': [
      // 함수형 컴포넌트 정의 방식을 화살표 함수와 함수 선언문으로 허용합니다.
      2,
      { namedComponents: ['arrow-function', 'function-declaration'] },
    ],
    'react/react-in-jsx-scope': 0, // React 임포트 없이 JSX 사용을 허용합니다.
    'react/prefer-stateless-function': 0, // 상태가 없는 컴포넌트를 함수형 컴포넌트로 사용할 것을 권장하지 않습니다.
    'react/jsx-one-expression-per-line': 0, // JSX에서 한 줄에 여러 표현식 사용을 허용합니다.
    'no-nested-ternary': 0, // 중첩된 삼항 연산자 사용을 허용합니다.
    'react/require-default-props': 'off', // 컴포넌트의 props에 기본값 설정을 강제하지 않습니다.
    'react/no-unescaped-entities': 'off', // React 컴포넌트 내에서 HTML 엔티티 사용을 허용합니다.
    'import/no-unresolved': ['error', { caseSensitive: false }], // 파일 경로 대/소문자 구분을 하지 않습니다.
    'react/jsx-props-no-spreading': [1, { custom: 'ignore' }], // props spreading 사용을 허용하지 않습니다.
    'linebreak-style': 0, // 줄바꿈 스타일 규칙을 적용하지 않습니다.
    'import/extensions': 0, // 파일 확장자 명시 규칙을 적용하지 않습니다.
    'no-use-before-define': 0, // 변수 정의 전 사용 규칙을 적용하지 않습니다.
    'import/no-extraneous-dependencies': 0, // 테스트 또는 개발 환경에서의 devDependency 사용을 허용합니다.
    'jsx-a11y/no-noninteractive-element-interactions': 0, // 비 대화형 요소에 대한 상호 작용 규칙을 적용하지 않습니다.
    '@typescript-eslint/no-unused-vars': 'off', // TypeScript에서 사용하지 않는 변수에 대한 경고를 비활성화합니다.
    'jsx-a11y/alt-text': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-curly-brace-presence': 'off',
    quotes: ['error', 'single', { avoidEscape: true }], // 따옴표 규칙을 단일 따옴표로 설정하되, 이스케이프 처리를 허용합니다.
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['@api', './src/api'],
          ['@assets', './src/assets'],
          ['@components', './src/components'],
          ['@constants', './src/constants'],
          ['@hooks', './src/hooks'],
          ['@interfaces', './src/interfaces'],
          ['@mocks', './src/mocks'],
          ['@pages', './src/pages'],
          ['@stories', './src/stories'],
          ['@styles', './src/styles'],
          ['@utils', './src/utils'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
