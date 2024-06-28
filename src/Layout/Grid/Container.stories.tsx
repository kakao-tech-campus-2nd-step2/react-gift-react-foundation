// src/Container/Container.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Container from './Container';

export default {
  title: 'Components/Container',
  component: Container,
} as Meta;

const Template: StoryFn = () => <Container />;

export const Default = Template.bind({});
Default.args = {};
