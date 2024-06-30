import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Image, { ImageProps } from './Image'

export default {
  title: 'Components/Image',
  component: Image,
} as Meta

const Template: StoryFn<ImageProps> = args => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Default Image',
}

export const Ratio = Template.bind({})
Ratio.args = {
  src: 'https://via.placeholder.com/300',
  alt: '16:9 Image',
  ratio: 16 / 9,
}

export const RatioSquare = Template.bind({})
RatioSquare.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Square Image',
  ratio: 'square',
}

export const Radius = Template.bind({})
Radius.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Rounded Image',
  radius: 20,
}

export const RadiusCircle = Template.bind({})
RadiusCircle.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Circle Image',
  radius: 'circle',
}
