/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
// Input.stories.ts
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'responsive']
      }
    }
  }
} as Meta<typeof Input>;

const Template: StoryFn<InputProps> = (args: InputProps) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  inputSize: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
  inputSize: 'medium'
};

export const Large = Template.bind({});
Large.args = {
  inputSize: 'large'
};

export const Responsive = Template.bind({});
Responsive.args = {
  inputSize: 'responsive'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true
};
