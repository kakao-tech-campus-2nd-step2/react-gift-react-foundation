// src/Input/Input.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Input, InputProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    isInvalid: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  label: 'Enabled Input',
  disabled: false,
  isInvalid: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Input',
  disabled: true,
  isInvalid: false,
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Invalid Input',
  disabled: false,
  isInvalid: true,
};
