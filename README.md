# react-gift-react-foundation
FE 카카오 선물하기 1주차 과제: React 기초

***

## ⚙️ 기능 목록 정리 

## 📂 폴더 구조
├── .eslintignore : lint 적용 제외 파일 명시
├── .gitignore : git 제외 파일 명시
├── .prettierrc : prettier 설정 파일
├── .eslint.config.mjs : lint 설정 파일
├── tsconfig.json : TS 프로젝트 설정 및 관리
├── **public**
└── **src**
    ├── **asset** : 이미지 혹은 폰트 저장, kebab-case
    ├── **components** : 재사용 컴포넌트, PascalCase
    ├── **page** : react router등을 이용하여 라우팅을 적용할 때 페이지 컴포넌트를 이 폴더에 위치, PascalCase
    ├── react-app-env.d.ts : CRA에서 제공하는 기능 및 API에 대한 타입 검사, 개발 도구 자동 완성 기능
    ├── reportWebVitals.ts : 프로젝트 성능 측정 도구
    └── setupTests.ts : 컴포넌트 테스트 파일

## ✏️ 요구사항

### Week 1
- **CRA** 기반 프로젝트 생성 후 **Typescript** 및 **alias(절대경로)** 세팅
- **tsconfig** 설정
- **ESLint, Prettier** 추가 및 **Lint 룰** 설정
- **Emoticon 스타일 라이브러리** 추가, **reset css** 적용
- **gitignore** 추가, 불필요한 코드와 파일 정리
- **폴더 구조 기준** 설정
- 일관된 코드 작성
- 기능 단위로 나누어 커밋