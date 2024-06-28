import React from 'react';
import { Meta } from '@storybook/react';
import Grid, { GridProps } from './Grid.tsx';

export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    columns: { control: 'number' },
    gap: { control: 'number' },
  },
} as Meta;

const Template: React.FC<GridProps> = (args) => (
  <Grid {...args}>
    <div style={{ backgroundColor: 'lightblue', height: '100px' }}>Item 1</div>
    <div style={{ backgroundColor: 'lightgreen', height: '100px' }}>Item 2</div>
    <div style={{ backgroundColor: 'lightcoral', height: '100px' }}>Item 3</div>
    <div style={{ backgroundColor: 'lightskyblue', height: '100px' }}>Item 4</div>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  columns: 2,
  gap: 20,
};
