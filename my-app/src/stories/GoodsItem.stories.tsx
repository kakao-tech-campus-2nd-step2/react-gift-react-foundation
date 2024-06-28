import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import GoodsItem from './GoodsItem';

export default {
  title: 'Common/GoodsItem',
  component: GoodsItem,
} as Meta;

const Template: StoryFn = () => <GoodsItem />;

export const Default = Template.bind({});
