import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta = {
    title: 'Input',
    component: Input
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        disabled: false,
        invalid: false,
        size: 'responsive'
    },
}
export const SizeChange: Story = {
    args: {
        disabled: false,
        invalid: false,
        size: 50
    },
}
export const Disabled: Story = {
    args: {
        disabled: false,
        invalid: true,
        size: 'responsive'
    }
}
export const Invalid: Story = {
    args: {
        disabled: false,
        invalid: true,
        size: 'responsive'
    }
}