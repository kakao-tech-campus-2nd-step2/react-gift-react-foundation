import { Image, IImageProps } from './Image';
import { Meta } from '@storybook/react';

const imageMeta: Meta = {
  title: 'COMMON/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default imageMeta;

type Story = {
  args: Partial<IImageProps>;
};

export const Radius: Story = {
  args: {
    radius: 'circle',
  },
};

export const Ratio: Story = {
  args: {
    ratio: 'square',
  },
};
