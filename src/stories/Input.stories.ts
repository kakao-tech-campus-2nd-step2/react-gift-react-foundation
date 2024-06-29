import { Input, IInputProps } from './Input';
import { Meta } from '@storybook/react';

const inputMeta: Meta = {
  title: 'COMMON/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default inputMeta;

type Story = {
  args: Partial<IInputProps>;
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Size: Story = {
  args: {
    inputSize: 'large',
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
};
