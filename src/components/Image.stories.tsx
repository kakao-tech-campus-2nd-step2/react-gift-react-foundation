import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';

const meta = {
  title: 'Example/Image',
  component: Image,
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

export const BigImage: Story = {
  args: {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURRMlonPjwPwrXHMGeHD9QZlczNQCqbKMEA&s',
    alt: '짱구',
    ratio: '16/9',
    width: 500,
    radius: 10,
  },
};

export const SmallImage: Story = {
  args: {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURRMlonPjwPwrXHMGeHD9QZlczNQCqbKMEA&s',
    alt: '짱구',
    ratio: '2/3',
    width: 200,
    radius: 'circle',
  },
};
