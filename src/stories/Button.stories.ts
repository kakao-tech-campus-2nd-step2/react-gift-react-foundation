import { Meta } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from '../components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  parameters: {
    layout: 'centered', // 중앙 배치
  },
  tags: ['autodocs'], // 문서 자동 생성
  args: { theme: 'primary', size: 'medium', disabled: false, onClick: fn() },
};

export default meta;

export const DefaultButton = {
  args: {
    theme: 'primary',
    disabled: false,
    size: 'medium',
    onClick: fn(),
  },
};
