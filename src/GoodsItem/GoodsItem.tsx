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
}

const GoodsItemWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
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
  font-size: 16px;
  margin: 8px 0;
  color: #777;
`;

const GoodsTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const GoodsAmount = styled.p`
  font-size: 16px;
  color: #b12704;
  margin: 5px 0;
`;

const GoodsDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin: 10px;
`;

const GoodsItem: React.FC<GoodsItemProps> = ({
  imageSrc,
  title,
  subtitle,
  amount,
  description,
  ranking,
}) => {
  return (
    <GoodsItemWrapper>
      {ranking !== undefined && <Ranking ranking={ranking} />}
      <GoodsImage src={imageSrc} alt={title} />
      <GoodsTitle>{title}</GoodsTitle>
      <GoodsSubtitle>{subtitle}</GoodsSubtitle>
      <GoodsAmount>{amount}</GoodsAmount>
      {description && <GoodsDescription>{description}</GoodsDescription>}
    </GoodsItemWrapper>
  );
};

export default GoodsItem;
