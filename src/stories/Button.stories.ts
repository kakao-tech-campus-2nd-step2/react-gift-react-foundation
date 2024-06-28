import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from 'components/Button/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['kakao', 'light', 'dark'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'responsive',
    theme: 'kakao',
    label: '버튼',
    onClick: () => alert('버튼 클릭'),
  },
};

export const Primary: Story = {
  args: {
    primary: true,
    size: 'responsive',
    theme: 'kakao',
    label: '버튼',
    onClick: () => alert('primary button'),
  },
};

export default meta;
