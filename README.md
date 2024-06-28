📝 Requirements

- [ ] Stroybook을 추가해요.
공통 컴포넌트에 아래와 같은 컴포넌트를 구현하고, Storybook에서 확인 할 수 있게 해요. (자세한 내용은 스토리북 링크 참고)

- [ ] Button 컴포넌트를 구현해요.
Theme Props에 따라 버튼의 컬러와 디자인이 다르게 보여져요.
Size Props에 따라 버튼의 Size가 다르게 보여져요. (value가 responsive 인 경우 미디어 쿼리에 따라 사이즈가 달라지게 만들어요.)

- [ ] Button Element의 기본 속성들을 모두 사용할 수 있게 해요.

- [ ] Input 컴포넌트를 구현해요.

- [ ] disabled Props에 따라 Input이 비활성화 되고, UI에서도 비활성화 됨을 인지할 수 있게 해요.

- [ ] invalid Props 에 따라 Input의 값이 잘 못되었음을 UI에서 인지할 수 있게 해요.

- [ ] Size Props에 따라 버튼의 Size가 다르게 보여져요. (value가 responsive 인 경우 미디어 쿼리에 따라 사이즈가 달라지게 만들어요.)

- [ ] Input Element의 기본 속성들을 모두 사용할 수 있게 해요.

- [ ] Image 컴포넌트를 구현해요.

- [ ] ratio Props에 따라 이미지 비율을 설정할 수 있게 해요. (value가 number로 16/9로 넘겨진 경우 16:9비율로 보여짐, square을 설정한 경우 정사각형으로 보여짐)
radius Props에 따라 모서리가 둥글게 해요. (value가 number인 경우 number만큼 모서리가 둥글게 적용, circle인 경우 원형으로 보여짐)

- [ ] Img Element의 기본 속성들을 모두 사용할 수 있게 해요.
GoodsItem 컴포넌트를 구현해요.

- [ ] Default 형태와 Ranking 형태의 컴포넌트를 각각 구현해요. (자세한 디자인은 스토리북 참고)

- [ ] 공통으로 imageSrc, subtitle, title, amount Props를 넘겨받아요.

- [ ] Ranking 컴포넌트의 경우 rankingIndex Props를 추가로 넘겨받아요. 1~3까지는 분홍색, 나머지 숫자에는 회색의 랭킹 뱃지가 보여져요

- [ ] Grid, Container 컴포넌트를 구현해요.




---

- 질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?
	- 다양한 자산을 하나의 파일로 번들링하여 브라우저가 이해할 수 있는 형태로 만들어준다.
	- 이 과정을 통해 웹 애플리케이션의 로딩 시간을 단축시키고, 개발 과정을 효율화 할 수 있다. 
	- 웹팩은 모듈화된 개발 방식을 지원하여, 다양한 로더와 플러그인을 통해 확장 가능하다.
	- 역할 : 웹팩은 모던 웹 개발의 필수 도구로, 웹 애플리케이션의 성능 최적화와 개발 효율화에 큰 도움을 준다.
- 질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?
	- 브라우저는 JSX파일을 직접 읽을 수는 없다. JSX 파일을 읽기 위해 JSX를 자바스크립트 객체로 변환해야 하며, 그 변환 작업은 바벨과 같은 컴파일러를 통해 이루어진다.
- 질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?
	- React는 state를 immutable하게 관리한다. 그렇기 때문에 state가 변경되면, state의 주소값이 변경되게 되고, 이 변화를 알아채게 된다.
