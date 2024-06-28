import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import Button from './components/Button';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <div style={{ width: '120px' }}>
      <Button
        width="responsive"
        height="responsive"
        buttonColor="#e8e92e"
        hasBorder
        fontColor="black"
        fontSize="20px"
        borderColor="#e8e92e"
        borderRadius="5px"
        onClick={() => alert('Click')}
      >
        button
      </Button>
    </div>
  </React.StrictMode>,
);
