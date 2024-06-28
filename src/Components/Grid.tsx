import React from "react";
import "./grid.css";

interface GridProps {
  gap?: number;
  columns?: number;
  children: string[];
}

export const Grid = ({ gap = 0, columns = 2, children }: GridProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`,
      }}
    >
      {children.map((i) => (
        <span>{i}</span>
      ))}
    </div>
  );
};
