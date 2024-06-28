// src/Grid/Grid.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Grid from './Grid';

export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    columns: {
      control: 'number',
    },
    gap: {
      control: 'text',
    },
    responsive: {
      control: 'object',
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Grid {...args}>
    {Array.from({ length: 16 }, (_, i) => (
      <div
        key={i}
        style={{
          textAlign: 'center',
        }}
      >
        {i + 1}
      </div>
    ))}
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  columns: 3,
  gap: '16px',
};

export const ResponsiveColumns = Template.bind({});
ResponsiveColumns.args = {
  columns: 4,
  gap: '16px',
  responsive: {
    sm: 1,
    md: 1,
    lg: 4,
    vertical: true,
  },
};
