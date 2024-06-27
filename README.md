# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

## Step 1

### Requirements

- Create React App을 기반으로 프로젝트 생성
- TypeScript로 프로젝트가 동작되게 세팅하고, 절대 경로로 Import할 수 있게 alias를 설정
- tsconfig에 어떤 항목들로 구성되어 있는지 살펴보고, 필요하다 생각되는 설정들 설정
- ESLint, Prettier를 추가하고 Lint룰 세팅(ex. airbnb룰)
- emotion 스타일 라이브러리를 추가하고, react css를 적용
- gitignore를 추가하고 , 프로젝트에 불필요한 코드들 정리

## Step 2

### Requirements

- storybook 추가
- 컴포넌트 구현
  - BUTTON 컴포넌트 구현
    - Theme Props에 따라 버튼의 컬러와 디자인 다르게 보여짐
    - Size Props에 따라 버튼의 Size가 다르게 보여짐(value가 responsive인 경우 미디어 쿼리에 따라 사이즈가 달라지게 만듦)
    - Button Element의 기본 속성들을 모두 사용할 수 있게 함
  - Input 컴포넌트 구현
    - disabled Props에 따라 Input이 비활성화 되고, UI에서도 비활성화 됨을 인지할 수 있게 함
    - invalid Props에 따라 Input의 값이 잘못되었음을 UI에서 인지할 수 있게 함
    - Size Props에 따라 버튼의 Size가 다르게 보여짐(value가 reponsive인 경우 미디어 쿼리에 따라 사이즈가 달라짐)
    - input Element의 기본 속성들을 모두 사용할 수 있게 함
  - Image 컴포넌트 구현
    - ratio Props에 따라 이미지 비율을 설정할 수 있게 함(value가 number로 16/9로 넘겨진 경우 16:9 비율로 보여짐, square을 설정한 경우 정사각형으로 보여짐)
    - radius Props에 따라 모서리 둥글게 함(value가 number인 경우 number만큼 모서리가 둥글게 적용, circle인 경우 원형으로 보여짐)
    - Img Element의 기본 속성들을 모두 사용할 수 있게 함
  - GoodsItem 컴포넌트 구현
    - Default 형태와 Ranking 형태의 컴포넌트를 각각 구현함
    - 공통으로 imageSrc, subtitle, title, amount Props를 넘겨받음
    - Ranking 컴포넌트의 경우 rankingIndex Props를 추가로 넘겨 받음. 1~3까지는 분홍색, 나머지 숫자에는 회색의 랭킹 뱃지가 보여짐
  - Grid, Container 컴포넌트 구현
