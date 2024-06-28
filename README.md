# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

## ✏ 기능 목록

### STEP1

- [x] Create React App 기반 프로젝트 생성
- [x] Typescript 개발 환경 세팅
- [x] 절대 경로로 import할 수 있게 alias 설정
- [x] tsconfig 구성
- [x] ESLint, Prettier 설치
- [x] Lint 룰 설정
- [x] emotion 스타일 라이브러리 추가
- [x] reset css 적용
- [x] gitignore 추가
- [x] 프로젝트에 불필요한 파일 정리

### STEP2

- [x] Storybook 설치
- [x] Button 컴포넌트 구현
  - [x] Theme Props에 따라 버튼 디자인 다름
        true : 파란색 활성화 디자인 / false : 하얀색 비활성화 디자인
  - [x] Size Props에 따라 버튼 크기 다름
        small, medium, large
        responsive인 경우 미디어 쿼리에 따라 사이즈 변경
  - [x] 스토리북 설정 완료
- [x] Input 컴포넌트 구현
  - [x] disabled Props에 따라 input 비활성화
  - [x] invalid Props에 따라 input 값 검증
  - [x] Size Props에 따라 버튼 크기 다름
        small, medium, large
        responsive인 경우 미디어 쿼리에 따라 사이즈 변경
  - [x] 스토리북 설정 완료
- [x] Image 컴포넌트 구현
  - [x] ratio Props에 따라 이미지 비율 설정
  - [x] radius Props에 따라 모서리 둥근 정도 설정
  - [x] 스토리북 설정 완료
- [x] GoodsItem 컴포넌트 구현
  - [x] Default, Ranking 형태 컴포넌트 각각 구현
  - [x] 공통으로 imageSrc, subtitle, title, amount 프롭스 사용
  - [x] Ranking 컴포넌트의 경우 rankingIndex 프롭스로, 1~3은 분홍, 나머지는 회색
  - [x] 스토리북 설정 완료
- [x] Grid 컴포넌트 구현
- [x] Container 컴포넌트 구현

## 🔎 Step3 퀴즈

1. webpack의 역할?
   웹팩이란 파일들을 각각의 모듈로 보고 이를 조합해서 하나의 파일로 만들어주는 번들러이다. 웹 사이트를 구성할 때 js, css, image 등 수 많은 파일들이 존재하기 때문에 웹사이트에 접속할 때 한꺼번에 모든 파일들이 다운로드되면 서버의 자원이 소모되고 성능이 저하된다. 또 여러 JS 패키지를 사용하다보면 이름 중복등의 문제가 발생하는데, 이를 해결해준다.
2. 브라우저가 JSX를 읽는 방법
   브라우저는 JSX를 직접 읽을 수 없으므로, 바벨이 일반 자바스크립트 형태의 코드로 변환해준다.
3. React에서 상태변화가 생겼을 때 알아채는 방법?
   state 변화 전과 변화 후의 메모리주소를 비교한다. 원시데이터의 경우 값이 변경되면 가리키는 메모리 저장공간이 바뀌어 상태변화를 감지할 수 있다.
