# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

- 1단계

1. CRA로 프로젝트 생성 (Typescript 기반)
2. 절대경로를 위한 alias 설정
3. ESLint, Prettier를 추가 (Airbnb룰 적용)
4. emotion 스타일 라이브러리 추가 & reset css적용

- 2단계

- 3단계

* 질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?
  웹 애플리케이션을 개발할 때 필요한 모듈 번들러입니다. 여러 개의 파일을 하나의 파일로 묶어주는 역할을 합니다.

  - 하나의 파일로 묶어주는 이유?
    1. 파일 크기를 줄일 수 있음(By. 압축, 난독화)
    2. 모듈화 가능. 결국에는 하나로 묶이기 때문.
    3. 모듈 의존성 관리 및 충돌방지 측면에서 용이함

* 질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?
  Babel과 같은 트랜스파일러가 필요합니다. JSX는 자바스크립트에서 확장된 문법이 적용되기 때문입니다.

  - Bable에서는 React.createElement를 활용하여 JSX를 JS파일로 변환합니다.

* 질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?
  상태 초기화 (this.state) -> 상태 변경(this.setState) -> 자동으로 UI 업데이트

- 폴더구조
  .storybook: Storybook 설정 파일
  components
  Button: Button 컴포넌트
  Container: Container 컴포넌트
  GoodsItem: GoodsItem 컴포넌트
  Grid: Grid 컴포넌트
  Image: Image 컴포넌트
  Input: Input 컴포넌트
  stories: 컴포넌트들의 story입력을 위한 폴더
  hooks: 커스텀 훅
  pages: 페이지 컴포넌트를 위해 만들어 둠
  styles: 스타일, 테마 관련 파일을 위한 폴더
  GlobalStyles.tsx: 전역 스타일 설정 파일
  reset.css: CSS 리셋 파일
  utils: 유틸리티 함수를 위해 만들어 둠
