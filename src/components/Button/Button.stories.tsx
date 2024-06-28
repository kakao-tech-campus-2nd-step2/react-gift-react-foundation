import React from 'react';
import { StoryFn, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large', 'responsive'],
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  children: 'Secondary Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Small Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: 'Medium Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Large Button',
};

export const Responsive = Template.bind({});
Responsive.args = {
  size: 'responsive',
  children: 'Responsive Button',
};
