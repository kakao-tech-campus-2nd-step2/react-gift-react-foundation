import { UnderlineTextField } from 'components/Input/UnderlineTextField';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/Input',
  component: UnderlineTextField,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['responsive', 'small', 'medium', 'large'],
    },
  },
  args: {},
} satisfies Meta<typeof UnderlineTextField>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    invalid: false,
    size: 'medium',
    placeholder: 'placeholder',
  },
};

export default meta;
