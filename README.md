# FE 카카오 선물하기 1주차 과제: React 기초

<h1>⚙️setting</h1>
<p>Vite 기반으로 프로젝트를 생성 (typescript로 프로젝트가 동작되게 세팅)</p>
<p>절대 경로로 Import 할 수 있게 alias를 설정</p>
<p>tsconfig에 어떤 항목들로 구성되어 있는지 살펴보고, 필요하다 생각되는 설정들이 있다면 자유롭게 설정</p>
<p>ESLint, Prettier를 추가하고 본인만의 Lint 룰을 세팅</p>
<p>emotion 스타일 라이브러리를 추가하고, reset css를 적용</p>
<p>gitignore를 추가하고, 프로젝트에 불필요한 코드들은 정리</p>
<br>
<h1>📚Storybook</h1>
<p> - Storybook 설치</p>

<ul>- 버튼 컴포넌트 구현
<li>Theme Props에 따라 버튼의 컬러와 디자인이 다르게 보여진다.</li>
<li>Size Props에 따라 버튼의 Size가 다르게 보여진다.</li>
<li>Button Element의 기본 속성들을 모두 사용할 수 있게 한다.</li>
</ul>

<ul>- Input 컴포넌트를 구현
<li>disabled Props에 따라 Input이 비활성화 되고, UI에서도 비활성화 됨을 인지할 수 있게 한다.</li>
<li>invalid Props 에 따라 Input의 값이 잘 못되었음을 UI에서 인지할 수 있게 한다.</li>
<li>Size Props에 따라 버튼의 Size가 다르게 보여진다.</li>
<li>Input Element의 기본 속성들을 모두 사용할 수 있게 한다.</li>
</ul>

<ul>- Image 컴포넌트를 구현
<li>ratio Props에 따라 이미지 비율을 설정할 수 있게 한다.</li>
<li>radius Props에 따라 모서리가 둥글게 한다.</li>
<li>img Element의 기본 속성들을 모두 사용할 수 있게 한다.</li>
</ul>

<ul>- GoodsItem 컴포넌트를 구현
<li>Default 형태와 Ranking 형태의 컴포넌트를 각각 구현.</li>
<li>공통으로 imageSrc, subtitle, title, amount Props를 넘겨받는다.</li>
<li>Ranking 컴포넌트의 경우 rankingIndex Props를 추가로 넘겨받는다. 1~3까지는 분홍색, 나머지 숫자에는 회색의 랭킹 뱃지가 보여진다</li>
</ul>
<p>- Grid, Container 컴포넌트 구현</p>
