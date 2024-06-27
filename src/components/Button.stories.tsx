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
    theme: 'danger',
    children: '위험',
  },
};

export const Primary: Story = {
  args: {
    width: 100,
    height: 30,
    theme: 'primary',
    children: '기본',
  },
};
