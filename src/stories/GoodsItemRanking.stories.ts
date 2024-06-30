import ImgSample from '@/assets/sample/kakaofriends_talk_2018.png';
import { GoodsItemRanking } from '@/components/goods-item/GoodsItemRanking';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/GoodsItem/Ranking',
  component: GoodsItemRanking,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rankingIndex: {
      control: { type: 'number' },
      description:
        'Ranking index for the item. If provided, shows ranking badge.',
    },
  },
} satisfies Meta<typeof GoodsItemRanking>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ranking: Story = {
  args: {
    imageSrc: ImgSample,
    subtitle: '카카오프렌즈',
    title: '카카오톡 라이언 인형',
    amount: 35000,
    rankingIndex: 1,
  },
};
