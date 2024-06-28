import React from 'react';
import './goodsitem.css';

export interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
}

const GoodsItem: React.FC<GoodsItemProps> = ({ imageSrc, subtitle, title, amount }) => {
  return (
    <div>
      <img src={imageSrc} alt={title} />
      <div>
        <div>{subtitle}</div>
        <div>{title}</div>
        <div>{amount.toLocaleString()}원</div>
      </div>
    </div>
  );
};

export default GoodsItem;