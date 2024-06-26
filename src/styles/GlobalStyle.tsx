import { css, Global } from '@emotion/react';

const Reset = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    outline: none;
    list-style: none;
    text-decoration: none;
  }
`;
const GlobalStyle = () => {
  return <Global styles={Reset} />;
};

export default GlobalStyle;
