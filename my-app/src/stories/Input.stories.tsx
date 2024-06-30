import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import UnderlineTextField from './Input';

export default {
  title: 'Common/Form/Input/UnderlineTextField',
  component: UnderlineTextField,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'responsive'],
    },
    invalid: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: StoryFn = (args) => <UnderlineTextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  disabled: false,
  invalid: false,
};

export const Invalid = Template.bind({});
Invalid.args = {
  size: 'medium',
  disabled: false,
  invalid: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'medium',
  disabled: true,
  invalid: false,
};

export const Responsive = Template.bind({});
Responsive.args = {
  size: 'responsive',
  disabled: false,
  invalid: false,
};
