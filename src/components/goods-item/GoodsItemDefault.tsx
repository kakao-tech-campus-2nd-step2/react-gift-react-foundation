import * as styles from './styles';
import { GoodsItemProps } from './types';

export const GoodsItemDefault: React.FC<GoodsItemProps> = ({
  imageSrc,
  subtitle,
  title,
  amount,
}) => (
  <styles.GoodsItemWrapper>
    <styles.Image src={imageSrc} alt={title} />
    <styles.Subtitle>{subtitle}</styles.Subtitle>
    <styles.Title>{title}</styles.Title>
    <styles.Amount>{amount.toLocaleString()}원</styles.Amount>
  </styles.GoodsItemWrapper>
);
