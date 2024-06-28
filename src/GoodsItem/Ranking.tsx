// src/GoodsItem/Ranking.tsx
import React from 'react';
import styled from 'styled-components';

export interface RankingProps {
  ranking: number;
}

const RankingBadge = styled.div<{ ranking: number }>`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ffcc00;
  color: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  background-color: ${(props) => (props.ranking <= 3 ? '#ff69b4' : '#ccc')};
  color: #fff;
`;

const Ranking: React.FC<RankingProps> = ({ ranking }) => {
  return <RankingBadge ranking={ranking}>#{ranking}</RankingBadge>;
};

export default Ranking;
