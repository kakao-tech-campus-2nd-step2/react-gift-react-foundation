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
    price: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
} as Meta;

const Template: StoryFn<GoodsItemProps> = (args) => <GoodsItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://via.placeholder.com/300',
  title: 'Sample Goods Item',
  price: '$19.99',
  description: 'This is a sample description of the goods item.',
};
