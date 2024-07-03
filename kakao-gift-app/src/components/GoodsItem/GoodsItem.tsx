import React from 'react';
import styled from 'styled-components';

export interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: string;
  rankingIndex?: number;
}

const GoodsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 8px;
`;

const GoodsImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
`;

const GoodsTitle = styled.h3`
  font-size: 16px;
  margin: 4px 0;
`;

const GoodsSubtitle = styled.h4`
  font-size: 14px;
  color: #888;
  margin: 4px 0;
`;

const GoodsAmount = styled.p`
  font-size: 14px;
  color: #333;
  margin: 4px 0;
`;

const GoodsRankingBadge = styled.div<{ rank?: number }>`
  background-color: ${({ rank }) => (rank && rank <= 3 ? 'pink' : 'grey')};
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
`;

const GoodsItem: React.FC<GoodsItemProps> = ({
  imageSrc,
  subtitle,
  title,
  amount,
  rankingIndex,
}) => (
  <GoodsItemContainer>
    <GoodsImage src={imageSrc} alt={title} />
    {rankingIndex !== undefined && (
      <GoodsRankingBadge rank={rankingIndex}>{rankingIndex}위</GoodsRankingBadge>
    )}
    <GoodsTitle>{title}</GoodsTitle>
    <GoodsSubtitle>{subtitle}</GoodsSubtitle>
    <GoodsAmount>{amount}</GoodsAmount>
  </GoodsItemContainer>
);

export default GoodsItem;
