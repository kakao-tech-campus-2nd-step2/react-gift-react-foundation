# react-gift-react-foundation
FE 카카오 선물하기 1주차 과제: React 기초

***

## ⚙️ 기능 목록 정리 

## 📂 폴더 구조
-  .eslintignore : lint 적용 제외 파일 명시 <br/>
-  .gitignore : git 제외 파일 명시 <br/>
-  .prettierrc : prettier 설정 파일 <br/>
-  .eslint.config.mjs : lint 설정 파일 <br/>
-  tsconfig.json : TS 프로젝트 설정 및 관리 <br/>
-  **public** <br/>
-  **src** <br/>
    -  **asset** : 이미지 혹은 폰트 저장, kebab-case <br/>
    -  **components** : 재사용 컴포넌트, PascalCase <br/>
    -  **page** : react router등을 이용하여 라우팅을 적용할 때 페이지 컴포넌트를 이 폴더에 위치, PascalCase <br/>
    -  react-app-env.d.ts : CRA에서 제공하는 기능 및 API에 대한 타입 검사, 개발 도구 자동 완성 기능 <br/>
    -  reportWebVitals.ts : 프로젝트 성능 측정 도구 <br/>
    -  setupTests.ts : 컴포넌트 테스트 파일 <br/>

## ✏️ 요구사항

### Week 1

📝 1단계

- **CRA** 기반 프로젝트 생성 후 **Typescript** 및 **alias(절대경로)** 세팅
- **tsconfig** 설정
- **ESLint, Prettier** 추가 및 **Lint 룰** 설정
- **Emoticon 스타일 라이브러리** 추가, **reset css** 적용
- **gitignore** 추가, 불필요한 코드와 파일 정리
- **폴더 구조 기준** 설정
- 일관된 코드 작성
- 기능 단위로 나누어 커밋

📝 2단계

- **Storybook** 추가
- **Button** 컴포넌트 구현
    - [x] Props:Theme - 버튼 컬러 지정
    - [x] Props:Size - 버튼 크기 지정
- **Input** 컴포넌트 구현
    - [x] Props:Size - 인풋 크기 지정
    - [x] Props:disabled - 인풋 비활성화 유무 지정
    - [x] Props:isvalid - 인풋 유효 값 확인
- **Image** 컴포넌트 구현
    - [x] Props:src - 이미지 소스 지정
    - [x] Props:ratio - 이미지 비율 지정
    - [x] Props:radius - 이미지 모서리 지정
- **GoodsItem** 컴포넌트 구현
    - [x] Props:imageSrc - 이미지 소스 지정
    - [x] Props:subtitle - 아이템 부제목 지정
    - [x] Props:title - 아이템 제목 지정
    - [x] Props:amount - 아이템 가격 지정
    - [x] Ranking -> Props:rankingIndex - 아이템 랭킹 지정
- **Grid, Container** 컴포넌트 구현