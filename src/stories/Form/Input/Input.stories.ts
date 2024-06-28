import Input from './Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'FORM/Input/UnderlineTextField',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '버튼',
    disabled: false,
    invalid: false,
    inputSize: 'large',
  },
};
