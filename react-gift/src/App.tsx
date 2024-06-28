import React, { useState, ChangeEvent } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Image from './components/Image';
import GoodsItem from './components/Default';
import RankingGoodsItem from './components/Ranking';
import Grid from './components/Grid';
import Container from './components/Container';





function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsInvalid(value.length > 0 && value.length < 5);
  };

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <Button state="normal" size="small" colorType="black" onClick={handleClick}>
        버튼
      </Button><br/>
      <Input 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="작성하세용" 
        inputsize="medium"
        invalid={isInvalid}
        disabled={false}
      />
    </div>
  );
}

export default App;
