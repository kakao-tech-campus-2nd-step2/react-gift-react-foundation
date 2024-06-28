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
      defaultValue: false,
    },
    inputSize: {
      control: 'select',
      options: ['small', 'medium', 'large'], // inputSize options 추가
    },
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  label: 'Enabled Input',
  disabled: false,
  isInvalid: false,
  inputSize: 'medium',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Input',
  disabled: true,
  isInvalid: false,
  inputSize: 'medium',
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Invalid Input',
  disabled: false,
  isInvalid: true,
  inputSize: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Input',
  disabled: false,
  isInvalid: false,
  inputSize: 'small',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Input',
  disabled: false,
  isInvalid: false,
  inputSize: 'large',
};
