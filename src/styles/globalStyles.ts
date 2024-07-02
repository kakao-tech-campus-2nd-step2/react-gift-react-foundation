// src/styles/globalStyles.ts
import { css } from '@emotion/react';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }
`;

export default globalStyles;
