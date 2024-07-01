import { UnderlineTextField } from 'components/Input/UnderlineTextField';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof UnderlineTextField> = {
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
};

type Story = StoryObj<typeof UnderlineTextField>;

const generateClassName = (size: string, invalid: boolean): string =>
  ['underline--input', size, invalid ? 'invalid' : ''].join(' ');

export const Default: Story = {
  render: ({ disabled, invalid, size, placeholder }) => {
    const className = generateClassName(size, invalid);

    return React.createElement(UnderlineTextField, {
      disabled,
      placeholder,
      className,
    });
  },
  args: {
    disabled: false,
    invalid: false,
    placeholder: 'placeholder',
    size: 'medium',
  },
};

export default meta;
