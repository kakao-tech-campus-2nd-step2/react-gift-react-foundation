import { Grid } from '@/components/grid/Grid';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'number',
    },
    gap: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: 3,
    gap: 10,
    children: 'Grid Content',
    flexDirection: 'row',
  },
};
