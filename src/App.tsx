import React from 'react';
import { Global } from '@emotion/react';
import { ResetCss } from '../public/styles/reset.js';

function App() {
  return (
    <React.StrictMode>
      <Global styles={ResetCss} />
      <h1>Hello</h1>
    </React.StrictMode>
  );
}

export default App;
