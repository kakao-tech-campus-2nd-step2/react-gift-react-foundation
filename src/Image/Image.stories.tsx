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
      options: ['16:9', '4:3', '1:1', 16 / 9, 4 / 3, 1], // ratio options에 다양한 number 추가
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

export const NumericSixteenByNine = Template.bind({});
NumericSixteenByNine.args = {
  src: 'https://via.placeholder.com/800x450',
  alt: 'Numeric 16:9 Image',
  ratio: 16 / 9, // 숫자로 16:9 비율 설정
};
