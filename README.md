# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

## 1주차 1단계 요구사항

- [x] Create React App을 기반으로 프로젝트를 생성해요.
- [x] Typescript로 프로젝트가 동작되게 세팅하고, 절대 경로로 Import 할 수 있게 alias를 설정해주세요.
- [x] tsconfig에 어떤 항목들로 구성되어 있는지 살펴보고, 필요하다 생각되는 설정들이 있다면 자유롭게 설정해주세요.
- [x] ESLint, Prettier를 추가하고 본인만의 Lint 룰을 세팅해주세요. (가장 대표적인 룰은 eslint-config-airbnb에요. 다만, 꼭 Airbnb룰을 적용할 필요는 없어요.)
- [x] emotion 스타일 라이브러리를 추가하고, reset css를 적용해주세요.
- [x] gitignore를 추가하고, 프로젝트에 불필요한 코드들은 정리해주세요. (ex. 사용하지 않는 icon 등)
- [x] 본인만의 폴더 구조 기준을 세우고 반영해주세요.
- [x] 본인만의 기준으로 일관된 코드를 작성해주세요.
- [x] 기능 단위로 나누어 커밋을 해주세요.

### 폴더 구조 전략

- 웹에 관련된, 작성된 코드는 모두 src 디렉토리 안에 둔다.
- root요소로 렌더링 하는 코드는 index로.tsx로 두며, 이는 App.tsx를 렌더링해주는 역할을 하는 코드가 담길 것이다.
- 실질적으로 코딩은 App.tsx를 통해서 이루어 진다.
- src 안에는 위의 언급된 기본적인 파일들을 제외하고, 역할에 따른 분류를 한 디렉토리에 위치한다.
- 디렉토리의 구조와 역할은 아래와 같다.

```
src 디렉토리 구조

src/
├── components/
├── pages/
├── hooks/
├── services/
├── utils/
├── styles/
├── assets/
├── context/
└── App.js
```

```
components 디렉토리 구조
 : 재사용 가능한 ui컴포넌트 지정

components/
├── common/
│   ├── Button/
│   ├── Input/
│   └── Modal/
├── layout/
│   ├── Header/
│   └── Footer/
└── feature/
    ├── UserProfile/
    └── ProductList/
```

```
pages 디렉토리 구조
  : 라우트에 해당하는 페이지 컴포넌트 저장

pages/
├── Home/
├── About/
├── Products/
└── Contact/
```

```
hooks 디렉토리 구조
  : 커스텀 React 훅 저장
Copyhooks/
├── useAuth.js
├── useFetch.js
└── useForm.js
```

```
services 디렉토리 구조
  : API 호출이나 외부 서비스와의 상호작용 담당 모듈 저장

Copyservices/
├── api.js
├── auth.js
└── storage.js
```

```
utils 디렉토리 구조
  : 유틸리티 함수 저장

Copyutils/
├── formatDate.js
├── validation.js
└── helpers.js
```

```
context 디렉토리 구조
  : React Context 관련 파일 저장

Copycontext/
├── AuthContext.js
└── ThemeContext.js
```
