// src/GoodsItem/Ranking.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Ranking, { RankingProps } from './Ranking';

export default {
  title: 'Components/Ranking',
  component: Ranking,
  argTypes: {
    ranking: {
      control: 'number',
    },
  },
} as Meta;

const Template: StoryFn<RankingProps> = (args) => <Ranking {...args} />;

export const Default = Template.bind({});
Default.args = {
  ranking: 1,
};
