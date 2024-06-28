import React from 'react';
import { Meta } from '@storybook/react';
import GoodsItem, { GoodsItemProps } from './GoodsItem';

export default {
  title: 'Components/GoodsItem',
  component: GoodsItem,
  argTypes: {
    imageSrc: { control: 'text' },
    subtitle: { control: 'text' },
    title: { control: 'text' },
    amount: { control: 'text' },
    rankingIndex: { control: 'number' },
  },
} as Meta;

const Template: React.FC<GoodsItemProps> = (args) => <GoodsItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://via.placeholder.com/150',
  subtitle: 'Subtitle',
  title: 'Title',
  amount: '$100',
};

export const Ranking = Template.bind({});
Ranking.args = {
  imageSrc: 'https://via.placeholder.com/150',
  subtitle: 'Subtitle',
  title: 'Ranked Title',
  amount: '$200',
  rankingIndex: 1,
};

