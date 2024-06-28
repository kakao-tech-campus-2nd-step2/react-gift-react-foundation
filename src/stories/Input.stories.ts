import { Input } from '@/components/input/Input';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Form/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
  // Use `fn` to spy on the onChange arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    inputSize: 'medium',
    placeholder: 'Enter text...',
  },
};

export const Disabled: Story = {
  args: {
    inputSize: 'medium',
    disabled: true,
    placeholder: 'Disabled input',
  },
};

export const Invalid: Story = {
  args: {
    inputSize: 'medium',
    invalid: true,
    placeholder: 'Invalid input',
  },
};

export const Small: Story = {
  args: {
    inputSize: 'small',
    placeholder: 'Small input',
  },
};

export const Medium: Story = {
  args: {
    inputSize: 'medium',
    placeholder: 'Medium input',
  },
};

export const Large: Story = {
  args: {
    inputSize: 'large',
    placeholder: 'Large input',
  },
};

export const Responsive: Story = {
  args: {
    inputSize: 'responsive',
    placeholder: 'Responsive input',
  },
};
