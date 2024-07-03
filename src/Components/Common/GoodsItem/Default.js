import React from 'react';
import './GoodsItem.css';
import PropTypes from 'prop-types';

export default function Default({ imageSrc, subtitle, title, amount }) {

  return (
    <div className="goods-item">
      <img src={imageSrc} alt={title} className="goods-item__image" />
      <div className="goods-item__subtitle">{subtitle}</div>
      <div className="goods-item__title">{title}</div>
      <div className="goods-item__amount">{amount}원</div>
    </div>
  );
}

Default.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  };