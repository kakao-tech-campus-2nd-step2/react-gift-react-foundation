import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '@components/common/Button';

const meta: Meta<ButtonProps> = {
  title: 'common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select', options: ['kakao', 'outline', 'black', 'lightGray', 'darkGray'] },
    },
    size: {
      control: { type: 'select', options: ['small', 'large', 'responsive'] },
    },
  },
};

export default meta;

const Template: StoryFn<ButtonProps> = function Tempalte(args: ButtonProps) {
  return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: '버튼 텍스트',
  theme: 'kakao',
  size: 'large',
};
