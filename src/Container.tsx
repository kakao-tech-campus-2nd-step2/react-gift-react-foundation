/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import './container.css';

export interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = '1200px'
}) => {
  const containerStyle: React.CSSProperties = {
    maxWidth,
    margin: '0 auto',
    padding: '0 20px'
  };

  return (
    <div className="container" style={containerStyle}>
      {children}
    </div>
  );
};

export default Container;
