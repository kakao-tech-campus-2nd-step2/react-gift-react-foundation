import type { Meta, StoryObj } from '@storybook/react';
import { Container } from 'components/common/Container';

const meta = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
    flexDirection: {
      control: 'select',
      options: ['row', 'column'],
    },
    justifyContent: {
      control: 'select',
      options: [
        'center',
        'flex-start',
        'flex-end',
        'space-between',
        'space-around',
      ],
    },
    alignItems: {
      control: 'select',
      options: ['center', 'flex-start', 'flex-end', 'baseline', 'stretch'],
    },
  },
  args: {},
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hello, world!',
  },
};
