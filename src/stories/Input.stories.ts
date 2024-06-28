import React from 'react';
import { Meta } from '@storybook/react';  // 이 부분을 확인하여 최신 버전에 맞는 임포트를 사용합니다.
import Input, { InputProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large', 'responsive'] },
    },
  },
} as Meta<typeof Input>;  // typeof Input을 사용하여 Input 컴포넌트의 타입을 지정합니다.

const Template: React.FC<InputProps> = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const Responsive = Template.bind({});
Responsive.args = {
  size: 'responsive'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true
};
