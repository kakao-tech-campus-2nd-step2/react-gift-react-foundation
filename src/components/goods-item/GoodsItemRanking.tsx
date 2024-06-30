import * as styles from './styles';
import { GoodsItemProps } from './types';

export const GoodsItemRanking: React.FC<GoodsItemProps> = ({
  imageSrc,
  subtitle,
  title,
  amount,
  rankingIndex,
}) => {
  const isTopThree = rankingIndex !== undefined && rankingIndex <= 3;

  return (
    <styles.GoodsItemWrapper>
      {rankingIndex !== undefined && (
        <styles.RankingBadge isTopThree={isTopThree}>
          {rankingIndex}
        </styles.RankingBadge>
      )}
      <styles.Image src={imageSrc} alt={title} />
      <styles.Subtitle>{subtitle}</styles.Subtitle>
      <styles.Title>{title}</styles.Title>
      <styles.Amount>{amount.toLocaleString()}원</styles.Amount>
    </styles.GoodsItemWrapper>
  );
};
