module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb', //air-bnb 스타일 가이드를 따랐음.
    'plugin:react/recommended', //React 권장 설정
    'plugin:jsx-a11y/recommended', // JSX 권장 설정
    'plugin:import/errors', // Import 오류 검사
    'plugin:import/warnings', // Import문 관련 경고 검사
    'plugin:@typescript-eslint/recommended', //typescript 권장
    'plugin:prettier/recommended', //prettier 사용 권장
  ],
  rules: {
    'linebreak-style': 0, //운영체제간 줄바꿈 차이 무시
    'import/prefer-default-export': 0, //단일 export만을 강제하지 않음.
    'import/extensions': 0,
    'no-use-before-define': 0, //변수를 정의하기 전에 사용할 수 있음.
    'import/no-unresolved': 0, //import 경로를 확인하지 않음.
    'react/react-in-jsx-scope': 0, //React를 자동으로 가져옴,
    'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    'no-shadow': 0, //변수 이름 중복 허용 X
    'react/prop-types': 0, //PropTypes를 사용하지 않음.
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ], //JSX를 포함한 파일 확장자를 포함함.
    'jsx-a11y/no-noninteractive-element-interactions': 0, //비화형 요소에 이벤트 핸들러 허용
    '@typescript-eslint/explicit-module-boundary-types': 0, //함수와 메서드의 반환 타입을 명시적으로 지정 안해도 됨.
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
