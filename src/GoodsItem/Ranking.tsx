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
  background-color: ${(props) =>
    props.ranking <= 3 ? 'var(--secondary-color)' : 'var(--default-color)'};
  color: var(--text-color);
  padding: var(--padding);
  border-radius: var(--border-radius);
  font-size: var(--font-size-small);
`;

const Ranking: React.FC<RankingProps> = ({ ranking }) => {
  return <RankingBadge ranking={ranking}>#{ranking}</RankingBadge>;
};

export default Ranking;
