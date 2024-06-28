# react-gift-react-foundation
FE 카카오 선물하기 1주차 과제: React 기초

## Requirements
- Create React App을 기반으로 프로젝트를 생성
- Typescript로 프로젝트가 동작되게 세팅하고, 절대 경로로 Import 할 수 있게 alias를 설정
- tsconfig에 어떤 항목들로 구성되어 있는지 살펴보고, 필요하다 생각되는 설정들이 있다면 자유롭게 작성
- ESLint, Prettier를 추가하고 본인만의 Lint 룰을 세팅하기 ( 가장 대표적인 룰은 eslint-config-airbnb이지만 꼭 적용할 필요는 없다)
- emotion 스타일 라이브러리를 추가하고, reset css를 적용
- gitignore를 추가하고, 프로젝트에 불필요한 코드들은 정리 (ex. 사용하지 않는 icon 등)
- 본인만의 폴더 구조 기준을 세우고 반영하기
- 본인만의 기준으로 일관된 코드를 작성
- 기능 단위로 나누어 커밋

### 폴더구조
 src/
├── assets/			   //로컬 환경의 이미지들
├── components/		//공용으로 쓰이는 react 컴포넌트
├── hooks/			   //React hooks
├── interfaces/		//typescript 의  type
├── pages/			   //각 페이지별 컴포넌트들
├── services/			//api관련, 통신관련
├── stores/			   //상태관리
├── styles/			   //공용으로 쓰이는 스타일
├── utils/				//유틸리티 함수들
├── App.tsx
└── index.tsx

### 코딩 컨벤션을 준수하고 있는가?
1. 폴더 및 파일 구조
('assets','components','constants','hooks' 등) 폴더 구조가 기능별로 나눠져있다.

2. 파일 명명 규칙
파일명이 ('App.tsx','index.tsx')처럼 적절하게 준수

3. 코드 스타일
- 'ESLint'와 'Prettier'가 설정되어 있으므로 코드 스타일은 자동 포맷팅되고 일관되게 유지 가능
- 'eslintrc.json' , '.prettierrc'파일 존재

4. TypeScript 사용
TypeScript를 사용하고 있으며, 'tsconfig.json' 및 'tsconfig.paths.json'설정이 있다.

5. 커밋 메시지
해당되는 기능에 맞게 나누서 커밋 메시지가 명확하고 일관적이다.

6. 기타 설정
gitignore 파일이 설정되어 불필요한 파일이 커밋되지 않도록 관리

이를 통해서 현재 코딩 컨벤션을 준수하고있고 기능별로 나누어 커밋하고 있다고 할 수 있습니다.