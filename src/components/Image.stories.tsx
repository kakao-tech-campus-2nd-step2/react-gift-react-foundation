import type { Meta, StoryObj } from '@storybook/react';

import Image from './Image';

const meta = {
    title: 'Image',
    component: Image,
    args: {
        imageProps: {
            src: '/testimage.jpg',
            alt: 'test image'
        }
    }
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ratio: 1/2,
        radius: 30
    }
}
export const Circle: Story = {
    args: {
        ratio: 1/2,
        radius: 'circle'
    }
}
export const Square: Story = {
    args: {
        ratio: 'square',
        radius: 0
    }
}