import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import GoodsItem from './GoodsItem';

export default {
  title: 'Example/GoodsItem',
  component: GoodsItem,
} as Meta<typeof GoodsItem>;

const Template: StoryFn<typeof GoodsItem> = args => <GoodsItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://via.placeholder.com/150',
  subtitle: 'Subtitle',
  title: 'Title',
  amount: '$100',
};

export const WithRanking = Template.bind({});
WithRanking.args = {
  imageSrc: 'https://via.placeholder.com/150',
  subtitle: 'Subtitle',
  title: 'Title',
  amount: '$100',
  rankingIndex: 1,
};
