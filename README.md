# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

## 1단계 - 프로젝트 세팅

- [x] Create React App을 기반으로 프로젝트 생성
- [x] Typescript로 프로젝트가 동작되게 세팅
- [x] 절대 경로로 Import 할 수 있게 alias를 설정
- [x] ESLint, Prettier 추가
- [x] emotion 스타일 라이브러리 추가
- [x] reset.css 적용

### 폴더 구조

- components: 재사용 가능한 컴포넌트
- assets: 이미지, 폰트 등의 컴포넌트 내부에서 사용하는 파일
- hooks: 커스텀 훅
- pages: 페이지 컴포넌트
- utils: 정규 표현식 패턴이나 공통함수 등의 유틸 파일
- apis: API 관련 로직 모듈 파일
- styles: css 파일

## 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

- [x] Storybook 추가
- [x] Button 컴포넌트 구현
- [x] Input 컴포넌트 구현
- [x] Image 컴포넌트 구현
- [x] GoodsItem 컴포넌트 구현
- [x] Grid 컴포넌트 구현
- [x] Container 컴포넌트 구현

## 3단계 - 질문의 답변을 README에 작성

### 질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?

- 모듈 번들러로서, 여러 개의 JavaScript 파일 및 관련 리소스들을 하나로 묶어서 최적화된 형태로 변환하는 도구
- wepback의 주요 역할
  - 번들링: 여러 개의 모듈을 하나의 파일로 번들링 > 브라우저에서 사용
  - 모듈 로딩: 필요한 모듈을 동적으로 로딩
  - 리소스 관리: JavaScript 파일 외에도 CSS, 이미지, 폰트 등의 리소스를 관리
  - 플러그인: 다양한 플러그인을 통해 추가적인 작업 수행 가능

### 질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?

- 브라우저는 기본적으로 JSX 파일을 이해하지 못하지만, JSX를 JavaScript로 변환해 이해한다.

1. JSX 문법을 일반적인 JavaScript 문법으로 변환 (트랜스파일링)
2. 변환된 JavaScript 코드를 webpack 같은 모듈 번들러로 하나의 번들 파일 생성
3. 브라우저에서 실행

### 질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?

- useState Hook
  - 함수형 컴포넌트에서 상태를 관리할 때 useState Hook을 사용
  - 상태 변수와 해당 상태를 변경할 수 있는 함수를 반환
  - 상태 변수를 업데이트 하면 React는 컴포넌트를 리렌더링 함
- Class Component의 setState
  - setState 메서드를 사용해 상태를 업데이트
  - setState를 호출하면 React는 변경된 상태를 감지하고, 해당 컴포넌트와 자식 컴포넌트를 리렌더링 함
- useEffect Hook
  - 함수형 컴포넌트에서 상태 변화를 감지하고 특정 작업을 수행할 때 useEffect Hook을 사용
  - 컴포넌트가 마운트 될 때, 업데이트 될 때, 언마운트 될 때 실행하는 작업을 설정할 수 있음
