// src/Image/Image.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Image, ImageProps } from './Image';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    ratio: {
      control: 'select',
      options: ['16:9', '4:3', '1:1', 'square', 16 / 9], // ratio options에 다양한 number 추가
    },
    radius: {
      control: 'text',
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
  },
} as Meta;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/800x450',
  alt: 'Default Image',
};

export const SixteenByNine = Template.bind({});
SixteenByNine.args = {
  src: 'https://via.placeholder.com/800x450',
  alt: '16:9 Image',
  ratio: '16:9',
};

export const FourByThree = Template.bind({});
FourByThree.args = {
  src: 'https://via.placeholder.com/800x600',
  alt: '4:3 Image',
  ratio: '4:3',
};

export const OneByOne = Template.bind({});
OneByOne.args = {
  src: 'https://via.placeholder.com/800x800',
  alt: '1:1 Image',
  ratio: '1:1',
};

export const Square = Template.bind({});
Square.args = {
  src: 'https://via.placeholder.com/800x800',
  alt: 'Square Image',
  ratio: 'square', // square 비율 추가
};

export const NumericSixteenByNine = Template.bind({});
NumericSixteenByNine.args = {
  src: 'https://via.placeholder.com/800x450',
  alt: 'Numeric 16:9 Image',
  ratio: 16 / 9, // 숫자로 16:9 비율 설정
};

export const RoundedCorners = Template.bind({});
RoundedCorners.args = {
  src: 'https://via.placeholder.com/800x450',
  alt: 'Rounded Corners Image',
  ratio: '16:9',
  radius: '10px', // 모서리를 둥글게 설정
};

export const RoundedCornersNumber = Template.bind({});
RoundedCornersNumber.args = {
  src: 'https://via.placeholder.com/800x450',
  alt: 'Rounded Corners Number Image',
  ratio: '16:9',
  radius: 20, // 모서리를 둥글게 설정 (숫자)
};

export const Circle = Template.bind({});
Circle.args = {
  src: 'https://via.placeholder.com/800x800',
  alt: 'Circle Image',
  ratio: 'square', // 비율을 square로 설정
  radius: 'circle', // radius를 circle로 설정
};
