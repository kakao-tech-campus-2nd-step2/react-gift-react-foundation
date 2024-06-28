import React from 'react';
import { Meta } from '@storybook/react';
import Container, { ContainerProps } from './Container';

export default {
  title: 'Components/Container',
  component: Container,
  argTypes: {
    maxWidth: { control: 'text' },
  },
} as Meta;

const Template: React.FC<ContainerProps> = (args) => (
  <Container {...args}>
    <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>
      <h2>container h2</h2>
      <p>container</p>
    </div>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  maxWidth: '800px',
};
