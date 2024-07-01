import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atom/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof Button>;
export const Default: Story = {
  args: {
    theme: 'kakao',
    elementSize: 'medium',
    text: '버튼',
  },
};
export const Naver: Story = {
  args: {
    theme: 'naver',
    elementSize: 'medium',
    text: '버튼'
  },
};

export const Discord: Story = {
  args: {
    theme: 'discord',
    elementSize: 'medium',
    text: '버튼'
  },
};