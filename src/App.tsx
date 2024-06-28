import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button theme='basic' size={100}>버튼</Button>
      <Button theme='kakao' size={200}>버튼</Button>
      <br/>
      <Button theme='kakao' size={'responsive'}>버튼</Button>
    </div>
  );
}

export default App;
