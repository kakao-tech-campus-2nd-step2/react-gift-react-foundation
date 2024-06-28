import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { RankingGoodsItem } from '../../Components/GoodsItem';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'RankingGoodsItem',
  component: RankingGoodsItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof RankingGoodsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    // theme: true,
    // label: 'Button',
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    title: '상품 제목',
    subtitle: '상품 부제목',
    amount: 20000,
    rankingIndex: 1
  },
};

// export const Ranking: Story = {
//   args: {
//     // theme: true,
//     // label: 'Button',
//     imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
//     title: '상품 제목',
//     subtitle: '상품 부제목',
//     amount: 20000
//   },
// };
