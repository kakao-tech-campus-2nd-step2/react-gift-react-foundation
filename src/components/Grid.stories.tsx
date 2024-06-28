import type { Meta, StoryObj } from '@storybook/react';
import Grid from './Grid';

const meta = {
  title: 'COMMON/Grid',
  component: Grid,
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof Grid>;

export const NumberColumns: Story = {
  args: {
    // TODO:key값 어떻게 줄지 생각하기
    children: [...Array(10)].map((m, index) => <div>{index + 1}</div>),
  },
};
export const ResponsiveColumns: Story = {
  args: {
    // TODO:key값 어떻게 줄지 생각하기
    children: [...Array(10)].map((m, index) => <div>{index + 1}</div>),
    columns: { initial: 1, sm: 2, md: 3, lg: 4 },
  },
};
