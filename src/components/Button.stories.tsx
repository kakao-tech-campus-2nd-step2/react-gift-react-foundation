import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'COMMON/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    width: 100,
    theme: 'kakao',
    type: 'button',
    onClick: () => {
      alert('버튼 클릭');
    },
    children: '버튼',
  },
};
