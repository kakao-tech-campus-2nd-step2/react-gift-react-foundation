# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

## 🚀 1단계 - 프로젝트 세팅

### 📝 Requirements

-   Create React App을 기반으로 프로젝트를 생성해요.
-   Typescript로 프로젝트가 동작되게 세팅하고, 절대 경로로 Import 할 수 있게 alias를 설정해주세요.
-   tsconfig에 어떤 항목들로 구성되어 있는지 살펴보고, 필요하다 생각되는 설정들이 있다면 자유롭게 설정해주세요.
-   ESLint, Prettier를 추가하고 본인만의 Lint 룰을 세팅해주세요. (가장 대표적인 룰은 eslint-config-airbnb에요. 다만, 꼭 Airbnb룰을 적용할 필요는 없어요.)
-   emotion 스타일 라이브러리를 추가하고, reset css를 적용해주세요.
-   gitignore를 추가하고, 프로젝트에 불필요한 코드들은 정리해주세요. (ex. 사용하지 않는 icon 등)
-   본인만의 폴더 구조 기준을 세우고 반영해주세요.
-   본인만의 기준으로 일관된 코드를 작성해주세요.
-   기능 단위로 나누어 커밋을 해주세요.

## 🚀 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

📝 Requirements

-   본인만의 기준으로 일관된 코드를 작성해주세요.
-   기능 단위로 나누어 커밋을 해주세요.
-   Stroybook을 추가해요.
-   공통 컴포넌트에 아래와 같은 컴포넌트를 구현하고, Storybook에서 확인 할 수 있게 해요. (자세한 내용은 스토리북 링크 참고)
-   Button 컴포넌트를 구현해요.
    -   Theme Props에 따라 버튼의 컬러와 디자인이 다르게 보여져요.
    -   Size Props에 따라 버튼의 Size가 다르게 보여져요. (value가 responsive 인 경우 미디어 쿼리에 따라 사이즈가 달라지게 만들어요.)
    -   Button Element의 기본 속성들을 모두 사용할 수 있게 해요.
-   Input 컴포넌트를 구현해요.
    -   disabled Props에 따라 Input이 비활성화 되고, UI에서도 비활성화 됨을 인지할 수 있게 해요.
    -   invalid Props 에 따라 Input의 값이 잘 못되었음을 UI에서 인지할 수 있게 해요.
    -   Size Props에 따라 버튼의 Size가 다르게 보여져요. (value가 responsive 인 경우 미디어 쿼리에 따라 사이즈가 달라지게 만들어요.)
    -   Input Element의 기본 속성들을 모두 사용할 수 있게 해요.
-   Image 컴포넌트를 구현해요.
    -   ratio Props에 따라 이미지 비율을 설정할 수 있게 해요. (value가 number로 16/9로 넘겨진 경우 16:9비율로 보여짐, square을 설정한 경우 정사각형으로 보여짐)
    -   radius Props에 따라 모서리가 둥글게 해요. (value가 number인 경우 number만큼 모서리가 둥글게 적용, circle인 경우 원형으로 보여짐)
    -   Img Element의 기본 속성들을 모두 사용할 수 있게 해요.
-   GoodsItem 컴포넌트를 구현해요.
    -   Default 형태와 Ranking 형태의 컴포넌트를 각각 구현해요. (자세한 디자인은 스토리북 참고)
    -   공통으로 imageSrc, subtitle, title, amount Props를 넘겨받아요.
    -   Ranking 컴포넌트의 경우 rankingIndex Props를 추가로 넘겨받아요. 1~3까지는 분홍색, 나머지 숫자에는 회색의 랭킹 뱃지가 보여져요
-   Grid, Container 컴포넌트를 구현해요.
