import React from 'react';
import Grid from '../components/Grid/Grid';
import GoodsItem from '../components/GoodsItem/GoodsItem';

export default {
  title: 'Layout/Grid',
  component: Grid,
};

export const Default = () => (
  <Grid>
    <GoodsItem
      imageSrc="https://via.placeholder.com/50"
      subtitle="카카오 프렌즈 특별 한정판"
      title="[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션"
      amount="10000"
    />
    <GoodsItem
      imageSrc="https://via.placeholder.com/50"
      subtitle="카카오 프렌즈 특별 한정판"
      title="[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션"
      amount="10000"
    />
  </Grid>
);
