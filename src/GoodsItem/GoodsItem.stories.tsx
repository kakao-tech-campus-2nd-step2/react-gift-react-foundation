// src/GoodsItem/GoodsItem.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import GoodsItem, { GoodsItemProps } from './GoodsItem';

export default {
  title: 'Components/GoodsItem',
  component: GoodsItem,
  argTypes: {
    imageSrc: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    amount: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    ranking: {
      control: 'number',
    },
  },
} as Meta;

const Template: StoryFn<GoodsItemProps> = (args) => <GoodsItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://via.placeholder.com/300',
  title: 'Sample Goods Item',
  amount: '$19.99',
  description: 'This is a sample description of the goods item.',
};

export const Ranking = Template.bind({});
Ranking.args = {
  imageSrc: 'https://via.placeholder.com/300',
  title: 'Ranked Goods Item',
  subtitle: 'Top Ranked',
  amount: '$29.99',
  description: 'This is a ranked goods item.',
  ranking: 1, // 랭킹 설정
};
