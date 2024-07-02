# FE-kakao-gift
카카오테크 캠퍼스 Step2 카카오 선물하기 프론트엔드 클론 프로젝트 레포지토리입니다.

## Requirements

### STEP1
- [x] Create React App을 기반으로 프로젝트를 생성해요.
- [x] tsconfig에 어떤 항목들로 구성되어 있는지 살펴보고, 필요하다 
- [x] 생각되는 설정들이 있다면 자유롭게 설정해주세요.
- [x] ESLint, Prettier를 추가하고 본인만의 Lint 룰을 세팅해주세요. (가장 대표적인 룰은 eslint-config-airbnb에요. 다만, 꼭 Airbnb룰을 적용할 필요는 없어요.)
- [x] emotion 스타일 라이브러리를 추가하고, reset css를 적용해주세요.
- [x] gitignore를 추가하고, 프로젝트에 불필요한 코드들은 정리해주세요. (ex. 사용하지 않는 icon 등)
- [x] 본인만의 폴더 구조 기준을 세우고 반영해주세요.
- [x] 본인만의 기준으로 일관된 코드를 작성해주세요.
- [x] 기능 단위로 나누어 커밋을 해주세요.

### STEP2
📝 Requirements
- [x] 본인만의 기준으로 일관된 코드를 작성해주세요.
- [x] 기능 단위로 나누어 커밋을 해주세요.
- [x] Stroybook을 추가해요.
- [x]  공통 컴포넌트에 아래와 같은 컴포넌트를 구현하고, Storybook에서 확인 할 수 있게 해요. (자세한 내용은 스토리북 링크 참고) 
#### Button 컴포넌트를 구현해요.
- [x] Theme Props에 따라 버튼의 컬러와 디자인이 다르게 보여져요.
- [x] Size Props에 따라 버튼의 Size가 다르게 보여져요. (value가 responsive 인 경우 미디어 쿼리에 따라 사이즈가 달라지게 만들어요.)
- [x] Button Element의 기본 속성들을 모두 사용할 수 있게 해요.
- [x] Input 컴포넌트를 구현해요.
- [x] disabled Props에 따라 Input이 비활성화 되고, UI에서도 비활성화 됨을 인지할 수 있게 해요.
- [x] invalid Props 에 따라 Input의 값이 잘 못되었음을 UI에서 인지할 수 있게 해요.
- [x] Size Props에 따라 버튼의 Size가 다르게 보여져요. (value가  responsive 인 경우 미디어 쿼리에 따라 사이즈가 달라지게 만들어요.)
- [x] Input Element의 기본 속성들을 모두 사용할 수 있게 해요.
#### Image 컴포넌트를 구현해요.
- [x] ratio Props에 따라 이미지 비율을 설정할 수 있게 해요. (value가 number로 16/9로 넘겨진 경우 16:9비율로 보여짐, square을 설정한 경우 정사각형으로 보여짐)
- [x] radius Props에 따라 모서리가 둥글게 해요. (value가 number인 - [x] 경우 number만큼 모서리가 둥글게 적용, circle인 경우 원형으로 보여짐)
- [x] Img Element의 기본 속성들을 모두 사용할 수 있게 해요.
#### GoodsItem 컴포넌트를 구현해요.
- [x] Default 형태와 Ranking 형태의 컴포넌트를 각각 구현해요. (자세한 디자인은 스토리북 참고)
- [x] 공통으로 imageSrc, subtitle, title, amount Props를 넘겨받아요.
- [x] Ranking 컴포넌트의 경우 rankingIndex Props를 추가로 넘겨받아요. 1~3까지는 분홍색, 나머지 숫자에는 회색의 랭킹 뱃지가 보여져요
- [x] Grid, Container 컴포넌트를 구현해요.