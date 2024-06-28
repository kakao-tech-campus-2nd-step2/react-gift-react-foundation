import React from 'react';
import { DefaultGoodsItems } from 'components/GoodsItem/DefaultGoodsItems';
import { Rank } from 'components/common/Rank';
import 'components/GoodsItem/RankedGoodsItems.css';

interface RankedGoodsItemsProps {
  amount: number;
  imageSrc: string;
  subtitle: string;
  title: string;
  width: string;
  rankingIndex: number;
}

const pink = 'rgb(253, 115, 100)';
const gray = '#B3B1B1';
const isRankedHigh = rankIndex => rankIndex <= 3;

export const RankedGoodsItems = ({
  amount,
  imageSrc,
  subtitle,
  title,
  width = '120px',
  rankingIndex,
}: RankedGoodsItemsProps) => {
  return (
    <div className="ranked-goods--wrap" style={{ width: width }}>
      <Rank
        className="ranked-goods--rank"
        rankIndex={rankingIndex}
        backgroundColor={isRankedHigh(rankingIndex) ? pink : gray}
      />
      <DefaultGoodsItems
        amount={amount}
        imageSrc={imageSrc}
        subtitle={subtitle}
        title={title}
        width={width}
      />
    </div>
  );
};
