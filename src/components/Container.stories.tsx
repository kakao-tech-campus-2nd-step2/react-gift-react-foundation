import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

const meta = {
  title: 'COMMON/Layout/Container',
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: 'Hello, world!',
  },
};
export const FullScreen: Story = {
  args: {
    children: 'Hello, world!',
    maxWidth: '100%',
  },
};
