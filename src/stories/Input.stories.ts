import { Meta } from '@storybook/react';

import Input from '../components/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Common/Form/Input',
  component: Input,
  parameters: {
    layout: 'centered', // 중앙 배치
  },
  tags: ['autodocs'], // 문서 자동 생성
  args: { size: 'medium', disabled: false, invalid: false },
};

export default meta;

export const DefaultInput = {
  args: {
    size: 'medium',
    disabled: false,
    invalid: false,
  },
};
