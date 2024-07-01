import React from 'react';
import { Image } from 'components/Image/Image';
import 'components/GoodsItem/defaultGoodsItems.css';

interface DefaultGoodsItemsProps {
  amount: number;
  imageSrc: string;
  subtitle: string;
  title: string;
  width: string;
}

export const DefaultGoodsItems = ({
  amount,
  imageSrc,
  subtitle,
  title,
  width = '120px',
}: DefaultGoodsItemsProps) => {
  return (
    <div style={{ width: width }}>
      <div className="goods--wrap">
        <Image src={imageSrc} ratio="square" width={width} />
        <div className="goods--desc">
          <p className="goods--desc--subtitle">{subtitle}</p>
          <h3 className="goods--desc--title">{title}</h3>
          <p className="goods--desc--price">
            {amount}
            <span>원</span>
          </p>
        </div>
      </div>
    </div>
  );
};
