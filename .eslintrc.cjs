module.exports = {
  env: {
    // [env] 프로젝트 환경 설정, 브라우저 환경과 ES2021 문법, node 사용
    browser: true,
    es2021: true,
    node: true,
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
    'no-var': 'warn', // var 금지
    'react/prop-types': 0, // 컴포넌트의 props 검사 비활성화, propstype 사용하지 않아도 경고 띄우지 않음
    'no-extra-semi': 'error', // 불필요한 세미콜론 사용 시 에러 표시
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }, // jsx 파일 확장자 .jx, .jsx, .ts, .tsx 허용
    ],

    'arrow-parens': ['warn', 'as-needed'], // 화살표 함수의 파라미터가 하나일때 괄호 생략
    'no-unused-vars': ['off'], // 사용하지 않는 변수가 있을 때 발생하는 경고 비 활성화
    'no-console': ['off'], // 콘솔 사용 시 발생하는 경고 비 활성화
    'import/prefer-default-export': ['off'], // export문이 하나일 때 default export 사용 권장 경고 비 활성화
    'react-hooks/exhaustive-deps': ['warn'], // react hooks의 의존성배열이 충분하지 않을 때 경고 표시
    'react/jsx-pascal-case': 'warn', // 컴포넌트 이름은 PascalCase로
    'react/jsx-key': 'warn', // 반복문으로 생성하는 요소에 key 강
    'no-debugger': 'off', // 디버그 허용
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/function-component-definition': [
      2,
      { namedComponents: ['arrow-function', 'function-declaration'] },
    ],
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-nested-ternary': 0,
    'react/require-default-props': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'always', children: 'always' },
    ],
    'import/no-unresolved': ['error', { caseSensitive: false }], // 파일의 경로가 틀렸는지 확인하는 옵션 false
    'react/jsx-props-no-spreading': [1, { custom: 'ignore' }],     // props spreading 허용하지 않는 경고 표시
    'linebreak-style': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'import/no-extraneous-dependencies': 0,    // 테스트 또는 개발환경을 구성 파일에서는 devDependency 사용 허용
    'no-shadow': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    quotes: ['error', 'single', { avoidEscape: true }], // 따옴표 규칙 추가
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
