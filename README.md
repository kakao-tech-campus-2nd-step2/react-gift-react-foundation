# react-gift-react-foundation

## FE 카카오 선물하기 1주차 과제: React 기초

1. create-react-app 으로 프로젝트 생성 및 typescript로 동작되도록 세팅
2. tsconfig 설정
3. ESLint, Prettier 설정
4. emotion reset css 적용
5. gitignore 추가
6. 불필요한 코드 및 파일 제거
7. 폴더 생성

## 폴더 구조 설명

```bash
.root
├── node_modules
├── public
├── src
│   ├── assets          // 이미지, 폰트 등 미디어 파일
│   ├── components      // 주요 컴포넌트
│   ├── hooks           // 커스텀 훅
│   ├── pages           // 페이지 컴포넌트
│   ├── services        // api
│   ├── store           // 상태관리
│   ├── styles          // css
│   └── utils           // 공통함수, 상수 등
└──
```

## 3단계 과제

1. webpack은 무엇이고 어떤 역할을 하고 있나요?
   여러 개의 파일을 하나의 파일로 합쳐주는 번들러입니다. 여기서 번들러란 코드, 프로그램을 묶어서 패키지로 제공하는 것입니다. 하나의 시작점(index.js 등)으로부터 의존성을 가지는 모듈을 추적하여 하나의 결과물을 만들어내는 모듈 번들러 역할을 합니다.<br>

   - 여러 파일을 하나로 합치는 이유는 무엇일까요? - 하나의 파일로 합치면 원본 프로그램 파일보다 크기가 작아지고 속도가 빨라집니다. 또한 js 중복 변수를 해결해줍니다. 만약 하나의 파일로 합치지 않고 html, css, js로 웹 어플리케이션을 만든다면 각 모듈마다 HTTP 요청을 보내야하고, 사용자가 임의로 조작할 위험도 있습니다.<br><br>

2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요? - 바벨과 같은 컴파일러를 이용하여 JSX를 자바스크립트 객체로 변환하면 읽을 수 있습니다.<br>

   - 바벨이 JSX를 변환하고 나면 어떻게 바뀔까요? - React.createElement를 호출하여 리액트 엘리먼트를 반환합니다.

   ```
   import { jsx as _jsx } from "react/jsx-runtime";

   const MyTest = ({
   children
   }) => {
   return /*#__PURE__*/_jsx("div", {
      color: "red",
      children: children
   });
   };

   ReactDOM.render( /*#__PURE__*/_jsx(MyTest, {
   children: "TEST"
   }), document.getElementById("root"));
   ```

   - 왜 변환까지 해가며 JSX를 사용하는 걸까요? - JSX를 사용하지 않으면 React.createElement를 모두 써줘야하기 때문입니다. 더 간결하고 가독성이 좋은 코드를 작성할 수 있습니다.<br>

3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요? - 상태 정보를 가진 객체의 주소값이 변경되면 알 수 있습니다!</br>
   - useState와 같은 hook을 사용하여 상태를 정의하고, setState와 같이 해당 상태를 변경하는 함수를 호출하여 상태를 변경합니다. 상태가 변경되면 React가 이를 감지하여 해당 컴포넌트를 다시 렌더링합니다. 가상 DOM 트리와 이전에 렌더링된 가상 DOM 트리를 비교하여 변경된 부분만 실제 DOM에 반영합니다.
     > 불변성 : 메모리 영역의 값을 변경 할 수 없는 것<br>
     > React 에서 불변성을 지켜야 하는 이유 : 리액트는 콜스택의 주소값만을 비교하여 상태 변화를 감지합니다. (=얕은 비교)<br>
     > 원시타입 - 불변성 유지한 채로 새로운 메모리 영역에서 변경된 값이 저장됨 -> 콜스택 주소값 변화 감지 -> 리렌더링<br>
     > 참조타입 - 콜스택에 메모리 힙의 주소만 저장, 값은 메모리 힙에 저장 -> 값 변경 시 콜스택 주소값 변화 없음 -> 리랜더링 안됨
