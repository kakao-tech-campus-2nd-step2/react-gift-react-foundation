import React from 'react';
import './GoodsItem.css';
import PropTypes from 'prop-types';

export default function Ranking({ rankingIndex, imageSrc, subtitle, title, amount }) {
  const badgeClass = rankingIndex >= 1 && rankingIndex <= 3 ? 'goods-item__badge pink' : 'goods-item__badge';

  return (
    <div className="goods-item">
      <div className={badgeClass}>{rankingIndex}</div>
      <img src={imageSrc} alt={title} className="goods-item__image" />
      <div className="goods-item__subtitle">{subtitle}</div>
      <div className="goods-item__title">{title}</div>
      <div className="goods-item__amount">{amount}원</div>
    </div>
  );
}

Ranking.propTypes = {
    rankingIndex: PropTypes.number.isRequired,
    imageSrc: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  };