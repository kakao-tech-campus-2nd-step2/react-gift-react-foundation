import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atom/Input',
  component: Input,
  parameters: {
	layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
	placeholder: 'placeholder',
	disabled: false,
	invalid: false,
  },
};