# react-gift-react-foundation
FE 카카오 선물하기 1주차 과제: React 기초

## Prerequisites
```agsl
    node : 18.18.0
    npm : 9.8.1
```
## How to Start
```agsl
npm install
npm run start
```


### step1
- [x] Create React App을 사용하지 않고 별도의 번들러를 선택하여 적용해요.
- [x] 여러 번들러 중 특정 번들러를 선택하여 적용한 이유를 README에 적어봐요.
- [x] 본인만의 기준으로 일관된 코드를 작성해주세요.
- [x] 기능 단위로 나누어 커밋을 해주세요.

webpack을 사용했습니다. CRA가 webpack 기반임을 알아서 이번 기회에 CRA의 구성과 역할에 대해 이번 기회를 통해 공부하고 싶었기 때문입니다. <br/>
어차피 react-script가 있으니 정답지가 있다고 생각하고 한 번 만들어보자라는 이유였습니다. <br/>

Bundler : js, css, img등의 파일을 하나의 파일로 묶어주는 도구입니다. <br/>
Webpack : bundling, minification, code splitting, tree shaking등을 수행합니다. <br/>

Transpiler : 최신 자바스크립트 코드를 구형 브라우저에도 동작하도록 문법을 변환하는 도구입니다. <br/>
Babel : ES6+ -> ES5 <br/>

ESM vs. CommonJS
- import/export vs. require/module.exports
- 비동기 vs. 동기
- 브라우저 기본 지원o vs. 브라우저 기본 지원x

Polyfill이란? <br/>
Object.entries()와 같은 최신문법을 지원하지 않는 브라우저에게 직접 구현해 주는 것

## step2
- [x] storybook 사용
- [x] Button 컴포넌트 추가
- [x] Input 컴포넌트 추가
- [x] Image 컴포넌트 추가
- [x] GoodsItem 컴포넌트 추가
- [x] Grid, Container 컴포넌트 추가

## step3

### 질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요? <br/>
번들러입니다. bundling, minification, code splitting, tree shaking등을 수행합니다. <br/>

### 질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요? <br/>
Babel을 통해 변환되어 읽습니다. JSX -> React <br/>
JSX -> React의 과정을 Babel이 수행합니다. <br/>

### 질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요? <br/>
useState훅 또는 class component의 setState함수를 통한 값의 변화를 감지해 알아챕니다.