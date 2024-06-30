import * as styles from './styles';
import { ContainerProps } from './types';

export const Container: React.FC<ContainerProps> = ({
  flexDirection,
  justifyContent,
  alignItems,
  children,
}) => (
  <styles.ContainerWrapper
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    alignItems={alignItems}
  >
    {children}
  </styles.ContainerWrapper>
);
