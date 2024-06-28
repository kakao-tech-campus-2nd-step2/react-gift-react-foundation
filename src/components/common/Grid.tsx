import React from 'react';

interface GridProps {
  gap?: number;
  columns?: number | { initial: number; sm: number; md: number; lg: number };
  children: React.ReactNode;
}

export const generateDivs = (): JSX.Element[] => {
  const divs: JSX.Element[] = [];
  for (let i = 1; i <= 10; i++) {
    divs.push(<div key={i}>{i}</div>);
  }
  return divs;
};

export const Grid = ({ gap = 0, columns = 1, children }: GridProps) => {
  if (typeof columns === 'number') {
    return (
      <div
        style={{
          display: 'grid',
          gap: `${gap}px`,
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gap: `${gap}px`,
        gridTemplateColumns: `repeat(${columns?.initial}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
};
