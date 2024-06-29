/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Container, { ContainerProps } from './Container.tsx';

export default {
  title: 'Components/Container',
  component: Container,
  argTypes: {
    maxWidth: { control: 'text' }
  }
} as Meta;

const Template: StoryFn<ContainerProps> = (args) => (
  <Container {...args}>
    <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>
      <h2>container h2</h2>
      <p>container</p>
    </div>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  maxWidth: '800px'
};
