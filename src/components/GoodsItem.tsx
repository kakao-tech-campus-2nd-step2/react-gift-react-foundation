/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface GoodsItemProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  amount: number;
  rankingIndex?: number;
}
const GoodsItem = (props: GoodsItemProps) => {
  const { imageSrc, subtitle, title, amount, rankingIndex } = props;

  let rankingBgColor = 'gray';
  if (rankingIndex && rankingIndex <= 3) {
    rankingBgColor = 'orange';
  }

  return (
    <div
      css={css`
        width: 100px;
      `}
    >
      <div
        css={css`
          width: 100px;
          height: 100px;
          position: relative;
          background-image: url(${imageSrc});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          border-radius: 3px;
        `}
      >
        <div
          css={css`
            width: 18px;
            height: 18px;
            background-color: ${rankingBgColor};
            color: white;
            border-radius: 3px;
            font-size: 12px;
            display: flex;
            justify-content: center;
            position: absolute;
            top: 3px;
            left: 3px;
          `}
        >
          {rankingIndex}
        </div>
      </div>
      <div
        css={css`
          font-size: 11px;
          color: gray;
          margin: 10px 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `}
      >
        {subtitle}
      </div>
      <div
        css={css`
          font-size: 12px;
          margin-bottom: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        `}
      >
        {title}
      </div>
      <div
        css={css`
          font-weight: bold;
        `}
      >
        {amount}원
      </div>
    </div>
  );
};

export default GoodsItem;
