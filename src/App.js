import { useState } from 'react';
import "@/App.css";
import { Button } from '@Component/Button';
import { Input } from '@Component/Input';
import { Image } from '@Component/Image';
import { GoodsItem } from '@Component/GoodsItem';

function App() {

  return <div className="App">
    <Image src="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png"></Image>
    <form action="">
      <Input size="responsive"></Input>
      <Button small label="버튼" size="responsive"></Button>
    </form>
    <GoodsItem imageSrc="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png"></GoodsItem>
  </div>;
}

export default App;
