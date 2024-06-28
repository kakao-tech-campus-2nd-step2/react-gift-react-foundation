// ./components/grid/styles.ts
import { GridProps } from './types';
import styled from '@emotion/styled';

export const GridWrapper = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns || 1}, 1fr)`};
  gap: ${({ gap }) => `${gap || 0}px`};
  width: 100%;
  height: 100%;
`;
