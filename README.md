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
- [ ] Grid 컴포넌트 구현
- [ ] Container 컴포넌트 구현