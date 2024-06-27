import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta = {
  title: 'Example/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LongInput: Story = {
  args: {
    width: 500,
    height: 30,
  },
};
export const ShortInput: Story = {
  args: {
    width: 100,
    height: 30,
  },
};
