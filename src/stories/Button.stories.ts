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

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'responsive',
    theme: 'kakao',
    label: '버튼',
  },
};

export const Primary: Story = {
  args: {
    primary: true,
    size: 'responsive',
    theme: 'kakao',
    label: '버튼',
  },
};
