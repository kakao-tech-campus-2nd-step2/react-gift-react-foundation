# React-Kakao-Gift

---

## 1단계: 프로젝트 설정

### Create React App 및 TypeScript 설정

- Create React App을 사용하여 프로젝트를 생성합니다.
- TypeScript 템플릿을 선택하여 TypeScript로 설정합니다.

### `tsconfig.json` 설정

- TypeScript 컴파일 옵션을 설정합니다.
- 절대 경로로 Import할 수 있도록 alias를 설정합니다.

### ESLint, Prettier 설정

- ESLint와 Prettier를 프로젝트에 추가하고, 사용자 정의 Lint 규칙을 설정합니다.
- Airbnb 스타일 가이드를 기반으로 설정합니다.

### Emotion 스타일 라이브러리 추가

- Emotion을 사용하여 CSS-in-JS 스타일링을 구현합니다.
- Reset CSS를 적용하여 기본 스타일을 초기화합니다.

### `.gitignore` 설정

- Git으로 추적하지 않을 파일과 디렉토리를 설정합니다.
- 불필요한 코드와 파일들을 정리합니다.

### 폴더 구조

- 일관된 폴더 구조를 유지하며, 컴포넌트와 유틸리티 등을 구분하여 관리합니다.

---

## 2단계: Storybook 추가 및 공통 컴포넌트 구현

### Storybook 설정

- Storybook을 초기화하고 설정합니다.
- 공통 컴포넌트를 Storybook에서 확인할 수 있도록 구성합니다.

### Button 컴포넌트 구현

- Theme Props와 Size Props에 따라 버튼의 스타일을 다르게 표현할 수 있도록 구현합니다.

### Input 컴포넌트 구현

- disabled Props와 invalid Props에 따라 Input의 상태를 표시할 수 있도록 구현합니다.
- Size Props에 따라 Input의 크기를 조정합니다.

### Image 컴포넌트 구현

- ratio Props에 따라 이미지의 비율을 설정할 수 있게 구현합니다.
- radius Props에 따라 이미지의 모서리를 조정합니다.

### GoodsItem 컴포넌트 구현

- Default와 Ranking 형태의 GoodsItem을 각각 구현합니다.
- imageSrc, subtitle, title, amount, rankingIndex Props를 받아서 다르게 표현합니다.

### Grid, Container 컴포넌트 구현

- 레이아웃을 관리하기 위한 Grid와 Container 컴포넌트를 구현합니다.

---

## 3단계: README.md에 포함될 내용

### 질문 1: webpack은 무엇이고 어떤 역할을 하고 있나요?

- `webpack`이란 오픈소스 자바스크립트 모듈 번들러이다.
- 여러개로 나누어져 있는 파일들을 하나의 자바스크립트 코드로 압축하고 최적화 하는 라이브러리이다.
- 주요 역할로는 다양한 종류의 리소스들을 하나의 파일로 번들링해 웹 애플리케이션에서 사용할 수 있게 하며, 자바스크립트 파일 이외의 리소스들을 자바스크립트에서 사용할 수 있도록 변환해준다.
- 코드를 최적화하고 개발 서버 제공, 자동 번들링 등의 기능을 제공하여 개발 생산성을 높인다.

### 질문 2: 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?

- 브라우저는 JSX 파일을 직접적으로 이해할 수 없다.
- 그러므로 `webpack`과 같은 도구를 사용해 JSX 파일을 포함한 모든 자바스크립트 파일을 하나의 번들 파일로 생성한다.
- `Babel`과 같은 트랜스파일러를 사용해 JSX 문법을 일반적인 자바스크립트 문법으로 변환한다.
- 마지막으로 번들링 된 자바스크립트 파일을 브라우저에서 실행하면 된다.

### 질문 3: React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?

- 클래스형 컴포넌트에서는 `setState` 메서드를 사용해 상태를 업데이트 하고 React에서 감지한다.
- 함수형 컴포넌트에서는 `useState Hook` 을 사용하여 상태를 업데이트하고 React에서 감지한다.
- React 에서는 상태가 업데이트되면 해당 컴포넌트를 자동으로 다시 렌더링하여 화면에 반영한다.
