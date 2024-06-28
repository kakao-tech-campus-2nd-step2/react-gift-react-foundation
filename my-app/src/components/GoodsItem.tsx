/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: string;
  rankingIndex?: number;
}

const goodsItemStyles = {
  container: css`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
  `,
  image: css`
    width: 100%;
    height: auto;
  `,
  subtitle: css`
    font-size: 12px;
    color: #888;
  `,
  title: css`
    font-size: 18px;
    margin: 8px 0;
  `,
  amount: css`
    font-size: 16px;
    font-weight: bold;
  `,
  ranking: css`
    font-size: 24px;
    color: gold;
  `,
};

const GoodsItem = ({
  imageSrc,
  subtitle,
  title,
  amount,
  rankingIndex,
}: GoodsItemProps) => {
  return (
    <div css={goodsItemStyles.container}>
      {rankingIndex !== undefined && (
        <div css={goodsItemStyles.ranking}>#{rankingIndex}</div>
      )}
      <img src={imageSrc} alt={title} css={goodsItemStyles.image} />
      <div css={goodsItemStyles.subtitle}>{subtitle}</div>
      <div css={goodsItemStyles.title}>{title}</div>
      <div css={goodsItemStyles.amount}>{amount}</div>
    </div>
  );
};

export default GoodsItem;
