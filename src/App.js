import { useState } from 'react';
import "@/App.css";
import { Button } from '@Component/Button';
import { Input } from '@Component/Input';

function App() {

  return <div className="App">
    <form action="">
      <Input size="responsive"></Input>
      <Button small label="버튼" size="responsive"></Button>
    </form>
  </div>;
}

export default App;
