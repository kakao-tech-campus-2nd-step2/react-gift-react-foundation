// src/GoodsItem/GoodsItem.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import GoodsItem from './GoodsItem';

const meta: Meta<typeof GoodsItem> = {
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
    rankingIndex: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof GoodsItem>;

export const Default: Story = {
  args: {
    imageSrc: 'https://via.placeholder.com/300',
    title: 'Sample Goods Item',
    subtitle: 'Top Ranked',
    amount: '$19.99',
    description: 'This is a sample description of the goods item.',
  },
};

export const Ranking: Story = {
  args: {
    imageSrc: 'https://via.placeholder.com/300',
    title: 'Ranked Goods Item',
    subtitle: 'Top Ranked',
    amount: '$29.99',
    description: 'This is a ranked goods item.',
    ranking: 1,
    rankingIndex: 5,
  },
};
