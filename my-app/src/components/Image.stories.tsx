import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Image from './Image';

export default {
  title: 'Example/Image',
  component: Image,
} as Meta<typeof Image>;

const Template: StoryFn<typeof Image> = args => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Default Image',
};

export const Ratio16x9 = Template.bind({});
Ratio16x9.args = {
  src: 'https://via.placeholder.com/300',
  alt: '16:9 Image',
  ratio: '16:9',
};

export const Square = Template.bind({});
Square.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Square Image',
  ratio: 'square',
};

export const Circle = Template.bind({});
Circle.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Circle Image',
  radius: 'circle',
};

export const CustomRadius = Template.bind({});
CustomRadius.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Custom Radius Image',
  radius: 10,
};