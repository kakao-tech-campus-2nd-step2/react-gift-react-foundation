import ImgSample from '@/assets/sample/kakaofriends_talk_2018.png';
import { GoodsItemDefault } from '@/components/goods-item/GoodsItemDefault';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/GoodsItem/Default',
  component: GoodsItemDefault,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GoodsItemDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: ImgSample,
    subtitle: '카카오프렌즈',
    title: '카카오톡 라이언 인형',
    amount: 35000,
  },
};
