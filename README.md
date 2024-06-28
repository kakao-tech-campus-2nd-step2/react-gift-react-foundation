# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

## 1단계 기능 목록

- [x] TS 프로젝트 생성 (CRA 이용)
- [x] alias 설정
- [x] tsconfig 설정
- [x] Prettier 설정
- [x] ESLint 설정
- [x] emotion 스타일 라이브러리 설치
- [x] reset css 적용
- [x] .gitignore 추가
- [x] 불필요한 코드/파일 정리
- [x] 폴더 구조 생성

## 1단계 설명

- Craco 라이브러리를 사용해 절대 경로를 설정하였습니다.
- 절대 경로 관련 설정을 tsconfig.paths.json으로 별도로 분리하였습니다.
- 절대 경로 및 reset CSS 적용을 확인하기 위해 Header 컴포넌트를 만들었습니다.
- ESLint와 Prettier의 충돌을 방지하였습니다.
- 폴더 구조는 평소에 기능별로 나누어서 썼던 것 중에 어떤 프로젝트든 기본적으로 사용할 것 같은 것들만 우선 추가해보았습니다. components는 리액트의 UI 컴포넌트를 담는 폴더이고, styles는 reset CSS 같이 스타일링을 담당하는 파일을 담는 폴더, utils는 API 호출 함수 등 재사용 가능한 유틸리티 함수를 담는 폴더입니다.

## 2단계 기능 목록

- [x] Storybook를 설치한다.

### Button 컴포넌트 구현

- [x] Theme Props에 따라 버튼 컬러 및 디자인이 다르게 보인다.
- [x] Size Props에 따라 버튼의 크기가 다르게 보인다. (responsive라면 미디어 쿼리에 따라 사이즈가 다르다)
- [x] Button Element의 기본 속성을 모두 사용한다.

### Input 컴포넌트 구현

- [x] disabled Props에 따라 Input이 비활성화되고, 이를 UI에서 인지한다.
- [ ] invalid Props에 따라 Input 값이 잘못됨을 UI에서 인지한다.
- [ ] Input Element의 기본 속성을 모두 사용한다.

### Image 컴포넌트 구현

- [ ] ratio Props에 따라 이미지 비율을 설정한다. (number가 16/9라면 16:9 비율, circle이라면 원형)
- [ ] radius Props에 따라 모서리 둥글게 한다. (number만큼 모서리 둥글게, circle이라면 원형)
- [ ] Img Element의 기본 속성을 모두 사용한다.

### GoodsItem 컴포넌트 구현

- [ ] Default 형태와 Ranking 형태를 각각 구현한다.
- [ ] 공통으로 imageSrc, subtitle, title, amount Props를 넘겨받는다.
- [ ] Ranking 컴포넌트의 경우, rankingIndex Props를 추가로 넘겨받는다. (1~3까지는 분홍색, 나머지는 회색의 랭킹 뱃지)
- [ ] Grid, Container 컴포넌트를 구현한다.
