import React from 'react';
import './goodsitem.css';

interface GoodsItemProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  amount: number;
}

interface RankingGoodsItemProps extends GoodsItemProps {
  rankingIndex: number;
}

export const GoodsItem = ({
  imageSrc,
  title = "제목",
  subtitle = "부제목",
  amount = 1,
}: GoodsItemProps) => {
  return (
    <div style={{width:'120px'}}>
      <img src={imageSrc}></img>
      <p>{subtitle}</p>
      <p>{title}</p>
      <p>{amount.toLocaleString()}원</p>
    </div>
  );
};

export const RankingGoodsItem = ({
  imageSrc,
  title = "제목",
  subtitle = "부제목",
  amount = 1,
  rankingIndex = 1
}: RankingGoodsItemProps) => {
  const rankingColor = rankingIndex <= 3 ? 'pink' : 'gray';
  return (
    <div style={{ position: 'relative', width:'120px'}}>
      <div style={{position: 'absolute', top:'10px', backgroundColor: rankingColor}}>
        {rankingIndex}
      </div>
      <img src={imageSrc}></img>
      <p>{subtitle}</p>
      <p>{title}</p>
      <p>{amount.toLocaleString()}원</p>
    </div>
  );
}