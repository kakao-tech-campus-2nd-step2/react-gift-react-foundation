import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button.tsx';

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

// eslint-disable-next-line react/function-component-definition
const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <div style={{ width: '120px' }}>
    <Button {...args}>버튼</Button>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  size: 'medium',
  theme: 'primary',
  onClick: () => action('Primary button clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'medium',
  theme: 'secondary',
  onClick: () => action('Secondary button clicked'),
};

export const Kakao = Template.bind({});
Kakao.args = {
  size: 'medium',
  theme: 'kakao',
  onClick: () => action('Kakao button clicked'),
};

export const Responsive = Template.bind({});
Responsive.args = {
  size: 'responsive',
  theme: 'primary',
  onClick: () => action('Responsive button clicked'),
};
