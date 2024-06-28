import React from 'react';

interface RankProps {
  className?: string;
  rankIndex: number;
  backgroundColor?: string;
}

export const Rank = ({
  className = '',
  rankIndex,
  backgroundColor = '#f2f2f2',
}: RankProps) => {
  return (
    <div className={className} style={{ backgroundColor: backgroundColor }}>
      {rankIndex}
    </div>
  );
};
