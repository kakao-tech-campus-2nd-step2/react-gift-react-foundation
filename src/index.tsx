import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import Button from './components/Button';
import Input from './components/Input';
import Image from './components/Image';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <div style={{ width: '120px' }}>
      <Button
        width="responsive"
        height="100px"
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
      <Input
        placeholder="입력"
        styleProps={{ width: '200px', height: '100px' }}
        disabled
      />
    </div>
    <div style={{ width: '300px' }}>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Kakao_logo.jpg"
        alt="예시 이미지"
        ratio={16 / 9}
        radius={10}
      />
    </div>
  </React.StrictMode>,
);
