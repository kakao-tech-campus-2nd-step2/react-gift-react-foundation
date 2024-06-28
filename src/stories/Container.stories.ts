import { Container } from '@/components/container/Container';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Layout/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    children: 'Container Content',
  },
};
