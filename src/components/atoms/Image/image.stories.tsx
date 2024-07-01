import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Image from './Image';

const meta: Meta<typeof Image> = {
	title: 'Atom/Image',
	component: Image,
	tags: ['autodocs'],
	args: { onClick: fn() },
  };

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args : {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  ratio: 16 / 9,
  radius: 8,
  },
};

export const Square: Story = {
  args : {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  ratio: 'square',
  radius: 8,
  },
};

export const Circle : Story = {
  args : {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  ratio: 1,
  radius: 'circle',
  },
};

export const Responsive : Story = {
  args : {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  ratio: 16 / 9,
  radius: 8,
  style: { width: '100%' },
  },
};
