import { Button, IButtonProps } from '@stories/Button';
import { Meta } from '@storybook/react';
import { fn } from '@storybook/test';

const buttonMeta: Meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default buttonMeta;

type Story = {
  args: Partial<IButtonProps>;
};

export const Size: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};

export const Theme: Story = {
  args: {
    theme: 'kakao',
    children: 'Button',
  },
};
