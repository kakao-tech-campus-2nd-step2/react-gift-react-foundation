import SampleImg from '@/assets/sample/kakaofriends_talk_2018.png';
import { Image } from '@/components/image/Image';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Image',
  component: Image,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    ratio: { control: 'text' },
    radius: { control: 'text' },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    src: SampleImg,
    alt: 'Sample Image',
  },
};

export const Ratio16by9: Story = {
  args: {
    ratio: 16 / 9,
    src: SampleImg,
    alt: 'Sample Image 16:9',
  },
};

export const Square: Story = {
  args: {
    ratio: 'square',
    src: SampleImg,
    alt: 'Square Image',
  },
};

export const Radius10: Story = {
  args: {
    radius: 10,
    src: SampleImg,
    alt: 'Image with Radius 10',
  },
};

export const Circle: Story = {
  args: {
    radius: 'circle',
    src: SampleImg,
    alt: 'Circle Image',
  },
};
