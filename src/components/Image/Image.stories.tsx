import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Image, { ImageProps } from './Image.tsx';

export default {
  title: 'Components/Image',
  component: Image,
} as Meta<typeof Image>;

// eslint-disable-next-line react/function-component-definition
const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
};

export const Ratio169 = Template.bind({});
Ratio169.args = {
  src: 'https://via.placeholder.com/300x169',
  alt: 'Ratio 16:9',
  ratio: 16 / 9,
};

export const SquareRatio = Template.bind({});
SquareRatio.args = {
  src: 'https://via.placeholder.com/150x150',
  alt: 'Square Ratio',
  ratio: 'square',
};

export const RoundedCorners = Template.bind({});
RoundedCorners.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Rounded Corners',
  radius: 8,
};

export const Circle = Template.bind({});
Circle.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Circle',
  radius: 'circle',
};
