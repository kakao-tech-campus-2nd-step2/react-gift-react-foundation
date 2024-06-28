/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: string;
}

const goodsItemStyles = css`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  margin: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const imageStyles = css`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const titleStyles = css`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

const subtitleStyles = css`
  font-size: 14px;
  color: #888;
  margin: 4px 0;
`;

const amountStyles = css`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 8px 0;
`;

const GoodsItem = ({ imageSrc, subtitle, title, amount }: GoodsItemProps) => {
  return (
    <div css={goodsItemStyles}>
      <img src={imageSrc} alt={title} css={imageStyles} />
      <div css={subtitleStyles}>{subtitle}</div>
      <div css={titleStyles}>{title}</div>
      <div css={amountStyles}>{amount}</div>
    </div>
  );
};

export default GoodsItem;
