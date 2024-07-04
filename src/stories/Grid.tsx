import React from 'react';
import './Grid.css';

export interface GridProps {  
  columns: number | { initial: number; sm?: number; md?: number; lg?: number };
  gap?: string;
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ columns, gap = '0', children }) => {
  const getClassNames = () => {
    if (typeof columns === 'number') {
      return `grid grid-${columns}`;
    } else {
      let classNames = `grid grid-${columns.initial}`;
      if (columns.sm) classNames += ` grid-sm-${columns.sm}`;
      if (columns.md) classNames += ` grid-md-${columns.md}`;
      if (columns.lg) classNames += ` grid-lg-${columns.lg}`;
      return classNames;
    }
  };

  const style = {
    '--gap': gap,
  } as React.CSSProperties;

  return (
    <div className={getClassNames()} style={style}>
      {children}
    </div>
  );
};

export default Grid;
