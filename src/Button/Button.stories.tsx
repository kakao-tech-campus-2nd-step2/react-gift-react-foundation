// src/Button/Button.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    theme: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  theme: 'primary',
  size: 'medium',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  theme: 'secondary',
  size: 'medium',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger Button',
  theme: 'danger',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  theme: 'primary',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Button',
  theme: 'primary',
  size: 'large',
};
