// src/GoodsItem/GoodsItem.tsx
import React from 'react';
import styled from 'styled-components';
import Ranking from './Ranking';

export interface GoodsItemProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  amount: string;
  description?: string;
  ranking?: number;
  rankingIndex?: number;
}

const GoodsItemWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  overflow: hidden;
  max-width: 300px;
  text-align: center;
  position: relative;
`;

const GoodsImage = styled.img`
  width: 100%;
  height: auto;
`;

const GoodsSubtitle = styled.h4`
  font-size: var(--font-size-medium);
  color: var(--subtitle-color);
  margin: 8px 0;
`;

const GoodsTitle = styled.h3`
  font-size: var(--font-size-large);
  margin: 10px 0;
`;

const GoodsAmount = styled.p`
  font-size: var(--font-size-medium);
  color: var(--amount-color);
  margin: 5px 0;
`;

const GoodsDescription = styled.p`
  font-size: var(--font-size-small);
  color: var(--description-color);
  margin: 10px;
`;

const GoodsItem: React.FC<GoodsItemProps> = ({
  imageSrc,
  title,
  subtitle,
  amount,
  description,
  ranking,
  rankingIndex,
}) => {
  return (
    <GoodsItemWrapper>
      {ranking !== undefined && <Ranking ranking={ranking} />}
      <GoodsImage src={imageSrc} alt={title} />
      <GoodsTitle>{title}</GoodsTitle>
      <GoodsSubtitle>{subtitle}</GoodsSubtitle>
      <GoodsAmount>{amount}</GoodsAmount>
      {description && <GoodsDescription>{description}</GoodsDescription>}
      {rankingIndex !== undefined && <div>Ranking Index: {rankingIndex}</div>}
    </GoodsItemWrapper>
  );
};

export default GoodsItem;
