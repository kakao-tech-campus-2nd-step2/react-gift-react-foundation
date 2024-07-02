import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from '@emotion/react';
import reportWebVitals from './reportWebVitals';

import globalStyle from './globalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Global styles={globalStyle}/>
    <App />
  </React.StrictMode>
);

reportWebVitals();