import React from 'react';
import './grid.css';

export interface GridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
}

const Grid: React.FC<GridProps> = ({ children, columns = 2, gap = 10 }) => {
  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`
  };

  return (
    <div className="grid-container" style={gridStyle}>
      {children}
    </div>
  );
};

export default Grid;
