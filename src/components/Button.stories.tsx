import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Danger: Story = {
  args: {
    width: 100,
    height: 30,
    bgColor: 'red',
    textColor: 'white',
    children: '위험',
  },
};

export const Default: Story = {
  args: {
    width: 100,
    height: 30,
    bgColor: 'blue',
    textColor: 'white',
    children: '기본',
  },
};
