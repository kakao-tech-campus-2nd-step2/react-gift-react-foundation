import type { Meta, StoryObj } from '@storybook/react';
import { generateDivs, Grid } from 'components/common/Grid';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: 'number',
    },
    columns: {
      control: 'number',
    },
    children: {
      control: 'text',
    },
  },
  args: {},
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberColumns: Story = {
  args: {
    children: [generateDivs()],
    columns: 3,
  },
};

export const ResponsiveColumns: Story = {
  args: {
    children: [generateDivs()],
    columns: {
      initial: 1,
      sm: 2,
      md: 3,
      lg: 4,
    },
  },
};
