<h1> FE 카카오 선물하기 1주차 과제: React 기초 </h1>

<h3>1주차 체크 리스트</h3>

- [x] CRA로 만들어진 프로젝트에 Typescript 로 세팅

- [x] ESLint 및 Prettier 추가 후 자신만의 세팅하기

- [x] 폴더 구조를 나누고 README.md 에 폴더 구조에 대한 설명 작성 

- [x] emotion 스타일 라이브러리 추가, reset CSS 적용

- [x] .gitignore 를 추가, 프로젝트에 불 필요한 코드들은 정리

- [ ] Storybook 을 사용하여 재사용 가능한 컴포넌트 구현

- [ ] 코딩 컨벤션 준수

- [ ] 기능 단위로 적절하게 커밋

- [ ] ReadMe 에 주어진 퀴즈에 답변

<br>

-----

<h3>❗️ㄴ 폴더 구조</h3>

```zsh
src
├── assets                      // 이미지, 아이콘 등 정적 파일
├── components                  // 재사용 가능한 React 컴포넌트
├── constants                   // 애플리케이션 전반에 사용가능한 상수 값
├── hooks                       // 커스텀 React 훅 
├── interfaces                  // TypeScript 인터페이스 및 타입 정의
├── mocks                       // 테스트에 사용할 모의 데이터나 API 응답
├── pages                       // 애플리케이션의 각 페이지 컴포넌트
├── services                    // API 호출 및 외부 서비스와의 통신 로직
├── styles                      // 전역에서 사용할 스타일 컴포넌트
│   └── GlobalStyle.tsx
├── utils                       // 공통으로 사용되는 유틸리티 함수들
├── index.tsx
└── App.tsx
```