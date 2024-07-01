// src/App.tsx

import React from 'react';
import { Global, css } from '@emotion/react';
import normalize from 'normalize.css';

const globalStyles = css`
  ${normalize}
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
  }

  .App {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <div className="App">
        <h1>Hello, Emotion and Normalize.css!</h1>
      </div>
    </>
  );
};

export default App;
