import type { Meta, StoryObj } from '@storybook/react';

import Container from '../components/Layout/Container';

const meta = {
  title: 'Common/Layout/Container',
  component: Container,
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hello, world!',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export const FullScreen: Story = {
  args: {
    maxWidth: '100%',
    children: 'Hello, world!',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
