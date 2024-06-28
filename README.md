# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

## ✔️ 기능 구현 목록

### 프로젝트 초기화

- [x] Create React App 기반 프로젝트 생성

- [x] Typescript 세팅

### 프로젝트 관리

- [x] .gitignore 추가

- [x] 폴더 구조 관리
  ```
  assets      : 이미지, 폰트 관리
  components  : 컴포넌트 관리
  pages       : 페이지 컴포넌트 관리
  styles      : css 파일 관리
  utils       : 재사용 가능한 유틸리티 함수 관리
  ```
- [x] 불필요한 코드 정리

- [x] 절대 경로로 Import 할 수 있도록 alias를 설정

- [x] tsconfig 구성 확인 후 자유롭게 설정

### 코드 스타일

- [x] ESLint 추가

- [x] Prettier 추가

- [x] Lint 룰 세팅

### 스타일

- [x] emotion 스타일 라이브러리 추가

- [x] reset.css 적용

## ✔️ 유념해야 할 사항

1. 본인만의 폴더 구조 기준을 세우고 반영

2. 본인만의 기준으로 일관된 코드를 작성

3. 기능 단위로 나누어 커밋

## 1주차 질문 - STEP 3 과제

### 질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?

오픈소스 자바스크립트 모듈 번들러로, 여러개로 나누어져 있는 파일들(JS, CSS, 이미지 등)을 하나의 자바스크립트 코드로 압축하고 최적화 하는 역할을 한다.

### 질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?

Babel을 통해 JSX파일이 JS파일로 변환되고, 브라우저가 읽을 수 있게 된다.

### 질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?

setState와 Hooks를 통해 상태 변화를 감지한다. setState는 상태를 변경하고 해당 컴포넌트의 리렌더링(re-render)을 발생시키도록 스케줄링한다. useEffect Hooks은 상태나 props가 변경될 때 특정 작업을 수행할 수 있도록 한다.
