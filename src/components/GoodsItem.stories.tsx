import type { Meta, StoryObj } from '@storybook/react';
import GoodsItem from './GoodsItem';

const meta = {
  title: 'COMMON/GoodsItem',
  component: GoodsItem,
} satisfies Meta<typeof GoodsItem>;

export default meta;
type Story = StoryObj<typeof GoodsItem>;

export const Default: Story = {
  args: {
    imageSrc:
      'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    subtitle: '카카오 프렌즈 특별 한정판',
    amount: 100000000000,
  },
};
export const Ranking: Story = {
  args: {
    imageSrc:
      'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    subtitle: '카카오 프렌즈 특별 한정판',
    amount: 10000,
    rankingIndex: 1,
  },
};
