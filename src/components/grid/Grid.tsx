import { GridWrapper } from './styles';
import { GridProps } from './types';

export const Grid: React.FC<GridProps> = ({ columns, gap, children }) => (
  <GridWrapper columns={columns} gap={gap}>
    {children}
  </GridWrapper>
);
