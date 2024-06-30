import { ContainerProps } from './types';
import styled from '@emotion/styled';

export const ContainerWrapper = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  width: 100%;
  height: 100%;
`;
