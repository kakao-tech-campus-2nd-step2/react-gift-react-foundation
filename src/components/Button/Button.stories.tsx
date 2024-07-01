import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button.tsx';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'responsive'],
      },
    },
    theme: {
      control: { type: 'select', options: ['primary', 'secondary', 'kakao'] },
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

function Template(args: ButtonProps) {
  return (
    <div style={{ width: '120px' }}>
      <Button {...args}>버튼</Button>
    </div>
  );
}

export const Primary: StoryObj<typeof Template> = {
  args: {
    size: 'medium',
    theme: 'primary',
    onClick: () => action('Primary button clicked'),
  },
};

export const Secondary: StoryObj<typeof Template> = {
  args: {
    size: 'medium',
    theme: 'secondary',
    onClick: () => action('Secondary button clicked'),
  },
};

export const Kakao: StoryObj<typeof Template> = {
  args: {
    size: 'medium',
    theme: 'kakao',
    onClick: () => action('Kakao button clicked'),
  },
};

export const Responsive: StoryObj<typeof Template> = {
  args: {
    size: 'responsive',
    theme: 'primary',
    onClick: () => action('Responsive button clicked'),
  },
};
