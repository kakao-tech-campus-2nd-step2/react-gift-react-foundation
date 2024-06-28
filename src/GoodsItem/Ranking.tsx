// src/GoodsItem/Ranking.tsx
import React from 'react';
import styled from 'styled-components';

export interface RankingProps {
  ranking: number;
}

const RankingBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ffcc00;
  color: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
`;

const Ranking: React.FC<RankingProps> = ({ ranking }) => {
  return <RankingBadge>#{ranking}</RankingBadge>;
};

export default Ranking;
