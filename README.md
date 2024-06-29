# react-gift-react-foundation
FE 카카오 선물하기 1주차 과제: React 기초

## Step1
1. 요구사항
- [ ] Create React App을 기반으로 프로젝트 생성하기
- [ ] Typescript로 프로젝트가 동작되게 세팅하고, 절대경로로 import 할 수 있게 alias 설정하기
- [ ] tsconfig에 어떤 항목들로 구성되어 있는지 살펴보고, 자유롭게 설정하기
- [ ] ESLint, Prettier를 추가하고 본인만의 Lint룰을 세팅하기
- [ ] emotion 스타일 라이브러리를 추가하고, reset css 적용하기
- [ ] gitignore를 추가하고, 프로젝트에 불필요한 코드들 정리하기

2. 폴더 구조
- 프로젝트 폴더 구조는 다음과 같습니다.
  root
  ├── public
  │   ├── index.html
  │   └── manifest.json
  ├── src
  │   ├── stories
  │   ├── components
  │   ├── pages
  │   ├── styles
  │   │   └── reset.css
  │   ├── App.css
  │   ├── App.tsx
  │   ├── index.tsx
  │   ├── .eslintrc.json
  │   ├── .prettierrc
  │   ├── .gitignore
  │   ├── package.json
  │   └── tsconfig.json

- 폴더 설명
  - **public** : 웹앱의 정적 파일을 포함한다.
  - **src** : 소스 코드와 관련된 모든 파일을 포함한다.
   - **stories** : storybook 파일들을 포함하는 디렉토리이다.
   - **components** : 재사용 가능한 컴포넌트들을 포함하는 디렉토리이다.
   - **pages** : 페이지 컴포넌트들을 포함하는 디렉토리이다.
   - **styles** : 스타일 파일들을 포함한다.



3. Requirements
- 질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?
  - webpack은 자바스크립트 기반 모듈 번들러이다. 웹 어플리케이션 개발에 필요한 다양한 요소(HTML, CSS, Javascript, Images, Font 등)들을 하나의 파일로 병합 및 압축을 해준다.
  - 역할
    - 모듈 번들링 : 다수의 모듈 및 파일들을 하나의 번들로 결합하여 최적화된 js 파일 생성
    - 로더 사용 : js 파일 외에도 다양한 리소스를 처리할 수 있도록 로더 제공 
    - 번들 최적화 : 코드 스플리팅, 트리 쉐이킹, 압축 등 다양한 최적화 기법을 사용하여 번들 크기를 줄임
    - 환경 설정 : 다양한 환경 설정 지원
  - "npm install -dev webpack"으로 설치 가능하다.

- 질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?
  - JSX는 React 내에서 UI를 작성하기 위해 사용되는 Javascript 확장 문법이다. JSX 코드는 번들링 과정에서 일반 Javascript 코드로 변환되어야 한다. 이 변환 작업은 babel 등의 Javascript 컴파일러가 담당한다. webpack과 함께 사용시 babel-loader를 사용하여 JSX 파일을 babel을 통해 변환하고 번들에 포함시켜 브라우저가 실행가능하도록 한다.
  
- 질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?
  - React에서 상태 변화시 setState()와 useState 훅을 통해 감지한다. 
  - setState() : 컴포넌트 클래스 내부에서 setState()를 호출해 상태 변경을 감지하고 관련된 컴포넌트를 리렌더링한다.
  - useState : useState를 통해 반환된 상태 변경 함수를 호출하면, React가 상태 변경을 감지하고 리렌더링 한다.
