# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

## project structure

```text
📁 src
    📁 components: 컴포넌트, 스토리, 스타일 파일
    📁 pages: 랜더링 되는 페이지(라우터로 연결)
    📁 types: interfaces 모음
    📄 App.tsx: 실제 랜더링 페이지
    📄 index.tsx: index.html과 App.tsx 연결
```

## 조사 과제

### 질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?

> **웹팩 (Webpack)**은 모던 웹 개발에서 필수적인 도구로, 자바스크립트 애플리케이션을 위한 정적인 모듈 번들러입니다. 모듈번들링과 JS 코드 변환, 성능 최적화 역할을 합니다.
> by copilot...
> [An intro to Webpack: what it is and how to use it](https://www.freecodecamp.org/news/an-intro-to-webpack-what-it-is-and-how-to-use-it-8304ecdc3c60/)
> [webpack concepts](https://webpack.kr/concepts/)
> 아래 내용은 copilot과 위 레퍼런스를 참고했습니다.

- 모듈 번들링
  - 모듈 간 의존성을 해결해 번들파일로 묶는 것
  - 과정
    1. dependency graph 생성.
    2. 그래프에 기반해 최소한의 파일로 구성된 패키지 생성(주로 bundle.js 하나)
- 성능 최적화
  - 코드를 최적화 해 로딩 속도를 향상
  - 번들링, 압축, 트리 쉐이킹 등 다양한 기술을 이용

- 궁금해진 점
  - 모듈 시스템(ESModule, CommonJS 같은 것)과 모듈 번들러의 차이
  - 바벨, parcel은 모듈번들러일까?
    - parcel은 모듈번들러가 맞다. parcel이 webpack보다 설정이 쉽고, 캐싱을 사용해 보다 빠르다.
    - beble은 모듈번들러가 아니다. 트랜스 파일러로, backward-compatibility를 위해 존재한다.(polyfills라고 불리는 것 같기도 하다)

### 질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?

- 브라우저는 JSX를 읽을 수 없다! 웹 브라우저 엔진이 읽고 랜더링 할 수 있는 파일은 HTML, CSS, JS 뿐이다.
- 바벨 같은 트랜스파일러를 거쳐 일반 JS 파일로 변환한 후 랜더링 할 수 있다.

### 질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?

- 리액트의 상태는 따로 분리되어 관리된다(클래스 컴포넌트의 this.state)
- 개발자는 setState 함수를 호출해 상태를 변화시키고, 이 이벤트를 통해 react는 변화를 감지한다.
