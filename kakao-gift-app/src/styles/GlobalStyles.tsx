/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import './reset.css';

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStyles;
