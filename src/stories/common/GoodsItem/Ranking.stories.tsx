import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import GoodsItem, { GoodsItemProps } from '@/components/common/GoodsItem/GoodItem';

const meta: Meta<GoodsItemProps> = {
  title: 'common/GoodsItem/Ranking',
  component: GoodsItem,
  tags: ['autodocs'],
  argTypes: {
    rankingIndex: {
      control: { type: 'number', min: 1, max: 10 },
    },
  },
};

export default meta;

const Template: StoryFn<GoodsItemProps> = function Tempalte(args: GoodsItemProps) {
  return <GoodsItem {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  subtitle: '부제목',
  title: '상품 제목',
  amount: 10000,
  rankingIndex: 1,
};
