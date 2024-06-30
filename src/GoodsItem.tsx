import React from 'react';
import './goodsItem.css';

export interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: string;
  rankingIndex?: number;
}

const GoodsItem: React.FC<GoodsItemProps> = ({
  imageSrc,
  subtitle,
  title,
  amount,
  rankingIndex
}) => {
  return (
    <div className="goods-item">
      <img src={imageSrc} alt={title} className="goods-item-image" />
      <div className="goods-item-content">
        <div className="goods-item-title">{title}</div>
        <div className="goods-item-subtitle">{subtitle}</div>
        <div className="goods-item-amount">{amount}</div>
        {rankingIndex && (
          <div
            className={`ranking-badge ${rankingIndex <= 3 ? 'pink' : 'gray'}`}
          >
            {rankingIndex}
          </div>
        )}
      </div>
    </div>
  );
};

export default GoodsItem;
