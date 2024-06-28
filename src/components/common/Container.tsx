import React from 'react';

interface ContainerProps {
  maxWidth: string;
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  children: React.ReactNode;
}

export const Container = ({
  maxWidth,
  flexDirection,
  justifyContent,
  alignItems,
  children,
}: ContainerProps) => {
  const styles = {
    display: 'flex',
    maxWidth: maxWidth,
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
  } as React.CSSProperties;

  return <div style={styles}>{children}</div>;
};
