import React from 'react';
import './goodsitem.css';

const GoodsItem: React.FC = () => {
  return (
    <div className="goodsitem">
      <img src="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png" alt="Placeholder" className="goodsitem-image" />
      <div className="goodsitem-content">
        <div className="goodsitem-subtitle">Subtitle</div>
        <div className="goodsitem-title">Title</div>
        <div className="goodsitem-amount">$100</div>
      </div>
    </div>
  );
};

export default GoodsItem;
