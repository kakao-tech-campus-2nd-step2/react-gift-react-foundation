# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Q. Webpack은 무엇이고 어떤 역할을 하고 있나요?
A. 
Webpack은 자바스크립트 애플리케이션을 위한 모듈 번들러이다. 
다음은 Webpack의 주요 역할이다.
1. 웹팩은 애플리케이션의 모든 의존성을 파악하고 관리한다. 이를 통해 필요한 모듈만을 번들링하여 효율적인 코드 배포가 가능하다.
2. 웹팩은 애플리케이션의 모든 자바스크립트 파일, CSS 파일, 이미지 등의 자산을 하나의 파일로 번들링한다. 이를 통해 애플리케이션의 성능을 향상시킬 수 있다.
3. 웹팩은 번들링된 코드를 압축하고 최적화하여 애플리케이션의 로딩 속도를 개선한다.
4. 웹팩은 CommonJS, AMD, ES6 모듈 시스템을 지원하여 모듈 기반의 코드 구조를 가능하게 한다.

Q. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?
A.
JSX는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용하여 자바스크립트 형태로 변환된다. JSX를 사용하지 않고 React.createElement() 함수를 사용하면 컴포넌트를 렌더링할 수 있지만 이 방식은 JSX를 사용하는 방식보다 불편하다.

Q. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?
A. 
1. useState 훅을 사용하여 상태 변경 함수를 호출하면 React가 자동으로 컴포넌트를 다시 렌더링하여 화면에 변경된 상태를 반영한다.
2. useEffect 훅은 컴포넌트가 마운트되거나 상태가 변경될 때마다 실행된다. 