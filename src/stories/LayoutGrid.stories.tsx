import { LayoutGrid, ILayoutGridProps } from './LayoutGrid';
import { Meta } from '@storybook/react';

const layoutGridMeta: Meta = {
  title: 'COMMON/Layout/Grid',
  component: LayoutGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default layoutGridMeta;

type Story = {
  args: Partial<ILayoutGridProps>;
};

export const NumberColumns: Story = {
  args: {
    gap: 0,
    columns: 'ResponsiveGridStyle',
    children: Array.from({ length: 12 }, (_, i) => (
      <div key={i} style={{ backgroundColor: 'lightgray', height: '12px' }}>
        {i + 1}
      </div>
    )),
  },
};

export const ResponsiveGridStyle: Story = {
  args: {
    gap: 0,
    columns: 3,
    children: Array.from({ length: 12 }, (_, i) => (
      <div key={i} style={{ backgroundColor: 'lightgray', height: '12px' }}>
        {i + 1}
      </div>
    )),
  },
};
