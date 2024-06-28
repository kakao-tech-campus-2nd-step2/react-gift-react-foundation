import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large', 'responsive'] },
    },
    theme: {
      control: { type: 'select', options: ['primary', 'secondary', 'kakao'] },
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <div style={{ width: '120px' }}>
    <Button {...args}>버튼</Button>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  size: 'medium',
  theme: 'primary',
  onClick: () => {},
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'medium',
  theme: 'secondary',
  onClick: () => {},
};

export const Kakao = Template.bind({});
Kakao.args = {
  size: 'medium',
  theme: 'kakao',
  onClick: () => {},
};

export const Responsive = Template.bind({});
Responsive.args = {
  size: 'responsive',
  theme: 'primary',
  onClick: () => {},
};
