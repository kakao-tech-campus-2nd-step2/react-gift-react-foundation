# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

## 📂 폴더구조

```
📦 public
📦 src
 ┣ 📂 apis
 ┣ 📂 assets
 ┣ 📂 components
 ┣ 📂 constants
 ┣ 📂 hooks
 ┣ 📂 interface
 ┣ 📂 pages
 ┣ 📂 store
 ┣ 📂 styles
 ┣ 📂 utils
 ┣ 📜 App.css
 ┣ 📜 App.tsx
 ┣ 📜 index.css
 ┣ 📜 main.tsx
 ┣ ...
 ┗ 📜 vite.config.ts
```

## 📝 Step 1 과제 요구사항

- [x] Create React App을 기반으로 프로젝트를 생성해요.
- [x] Typescript로 프로젝트가 동작되게 세팅하고, 절대 경로로 Import 할 수 있게
      alias를 설정해주세요.
- [x] ESLint, Prettier를 추가하고 본인만의 Lint 룰을 세팅해주세요.
- [x] emotion 스타일 라이브러리를 추가하세요.
- [x] reset css를 적용해주세요.
- [x] .gitignore를 추가해주세요.
- [x] 프로젝트에 불필요한 코드들은 정리해주세요.
- [x] 본인만의 폴더 구조 기준을 세우고 반영해주세요.
- [x] 본인만의 기준으로 일관된 코드를 작성해주세요.
- [x] 기능 단위로 나누어 커밋을 해주세요.

## 📝 Step2 과제 요구사항

- [x] 본인만의 기준으로 일관된 코드를 작성해주세요.
- [x] 기능 단위로 나누어 커밋을 해주세요.
- [x] Storybook을 추가해요.
- [x] 공통 컴포넌트에 아래와 같은 컴포넌트를 구현하고, Storybook에서 확인 할 수
      있게 해요. (자세한 내용은 스토리북 링크 참고)

### Button 컴포넌트를 구현해요.

- [x] Theme Props에 따라 버튼의 컬러와 디자인이 다르게 보여져요.
- [x] Size Props에 따라 버튼의 Size가 다르게 보여져요. (value가 responsive 인
      경우 미디어 쿼리에 따라 사이즈가 달라지게 만들어요.)
- [x] Button Element의 기본 속성들을 모두 사용할 수 있게 해요.

### Input 컴포넌트를 구현해요.

- [x] disabled Props에 따라 Input이 비활성화 되고, UI에서도 비활성화 됨을
      인지할수 있게 해요.
- [x] invalid Props 에 따라 Input의 값이 잘 못되었음을 UI에서 인지할 수 있게
      해요.
- [x] Size Props에 따라 버튼의 Size가 다르게 보여져요. (value가 responsive
      인경우 미디어 쿼리에 따라 사이즈가 달라지게 만들어요.)
- [x] Input Element의 기본 속성들을 모두 사용할 수 있게 해요.

### Image 컴포넌트를 구현해요.

- [x] ratio Props에 따라 이미지 비율을 설정할 수 있게 해요. (value가 number로
      16/9로 넘겨진 경우 16:9비율로 보여짐, square을 설정한 경우 정사각형으로
      보여짐)
- [x] radius Props에 따라 모서리가 둥글게 해요. (value가 number인 경우
      number만큼 모서리가 둥글게 적용, circle인 경우 원형으로 보여짐)
- [x] Img Element의 기본 속성들을 모두 사용할 수 있게 해요.

### GoodsItem 컴포넌트를 구현해요.

- [x] Default 형태와 Ranking 형태의 컴포넌트를 각각 구현해요. (자세한 디자인은
      스토리북 참고)
- [x] 공통으로 imageSrc, subtitle, title, amount Props를 넘겨받아요.
- [x] Ranking 컴포넌트의 경우 rankingIndex Props를 추가로 넘겨받아요. 1~3까지는
      분홍색, 나머지 숫자에는 회색의 랭킹 뱃지가 보여져요

### Grid, Container 컴포넌트를 구현해요.

- [ ] Grid 컴포넌트를 구현해요.
- [x] Container 컴포넌트를 구현해요.

## 📝 Step3 과제 요구사항

### 1주차 질문

> **질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?**

Webpack은 모듈 번들러입니다. React 프로젝트와 같은 현대적인 웹 개발 환경에서
자바스크립트, CSS, 이미지 등 여러 종류의 리소스를 하나로 묶어서 최적화된 정적
자산(assets)을 생성하는 도구입니다. 주된 역할은 다음과 같습니다.

- 모듈 번들링: 여러 파일을 하나의 번들(bundle)로 결합하여 로드 성능을
  최적화하고, HTTP 요청 수를 줄입니다.
- 로더 사용: JavaScript가 아닌 다른 형식의 파일(css, 이미지 등)을
  자바스크립트에서 import할 수 있게 변환합니다.
- 코드 최적화: 불필요한 코드 제거, 코드 압축, 트리 쉐이킹(tree shaking) 등을
  통해 번들 크기를 줄이고 성능을 향상시킵니다.
- 환경 구성: 개발 모드와 프로덕션 모드 각각에 맞게 설정을 제공하여 개발 효율성과
  최종 배포의 효율성을 높입니다.

> **질문2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?**

JSX 파일은 브라우저에서 직접 읽을 수 없습니다. React 프로젝트에서 JSX 파일은
개발자가 작성한 소스 코드입니다. Webpack이나 다른 번들러는 이 JSX 코드를
일반적인 자바스크립트 코드로 변환한 후에 브라우저가 이해할 수 있는 형태로
번들링하여 제공합니다. 이렇게 변환된 자바스크립트 코드는 브라우저에서 실행될 수
있습니다.

> **질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?**

React에서 상태(state) 변화를 감지하고 관리하기 위해 다음과 같은 방법을
사용합니다.

- setState 메서드: 클래스형 컴포넌트에서는 setState 메서드를 사용하여 상태를
  업데이트하고, React는 이 업데이트를 감지하여 해당 컴포넌트의 렌더링을 다시
  수행합니다.
- useState Hook: 함수형 컴포넌트에서는 useState Hook을 사용하여 상태를 선언하고
  업데이트할 수 있습니다. 이 Hook은 상태가 업데이트될 때 컴포넌트를 다시
  렌더링하도록 트리거합니다.
- 상위 컴포넌트에서 props 전달: 상위 컴포넌트가 자식 컴포넌트에게 props를
  전달하면, 상위 컴포넌트의 상태가 변경되면 자식 컴포넌트도 새로운 props를 받아
  다시 렌더링됩니다.

## 📌 참고사항

### 1. CRA가 아닌 Vite를 사용하여 프로젝트를 생성했습니다.

![vite img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcePnwk%2FbtsivScj9G2%2FBHZCXU4epnHKfBR6oyVdF1%2Fimg.png)

- 최근에 Vite를 더 많이 사용하는 걸로 알고있고, CRA보다 성능과 속도면에서 조금
  더 우수하다고 생각하여 Vite를 사용했습니다.

### 2. 패키지 매니저로 Pnpm을 사용했습니다.

![pnpm img](https://res.cloudinary.com/practicaldev/image/fetch/s--yPFpEvxt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://res.cloudinary.com/practicaldev/image/fetch/s--5LB7xZGh--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o8e2at4huuuv08y24jvg.png)

- 대부분이 많이 사용하는 패키지매니저인 npm 보다 더 효율적으로 패키지를
  관리하며, 라이브러리 설치를 조금 더 빠르게 설치가 가능하다는 장점이 있어
  Pnpm을 사용하게 되었습니다.
