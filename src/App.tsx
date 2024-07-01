import React from 'react';
import { Global } from '@emotion/react';
import { ResetCss } from 'utils/reset.js';
import { Button } from 'components/Button/Button';

function App() {
  return (
    <React.StrictMode>
      <Global styles={ResetCss} />
      <h1>Hello</h1>
      <Button label={'버튼'} />
    </React.StrictMode>
  );
}

export default App;
