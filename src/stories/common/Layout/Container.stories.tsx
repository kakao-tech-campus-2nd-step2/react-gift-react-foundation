import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Container, { ContainerProps } from '@/components/common/Layout/Container';

const meta: Meta<ContainerProps> = {
  title: 'common/Layout/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: { type: 'text' },
      description: 'Maximum width of the container',
    },
    children: {
      control: { type: 'text' },
      description: 'Content inside the container',
    },
    flexDirection: {
      control: { type: 'radio', options: ['row', 'column'] },
      description: 'Direction of flex items',
    },
    justifyContent: {
      control: { type: 'radio', options: ['center', 'flex-start', 'flex-end', 'space-between', 'space-around'] },
      description: 'Justification of flex items',
    },
    alignItems: {
      control: { type: 'radio', options: ['center', 'flex-start', 'flex-end', 'baseline', 'stretch'] },
      description: 'Alignment of flex items',
    },
  },
};

export default meta;

const Template: StoryFn<ContainerProps> = function Tempalte({
  maxWidth = '100%',
  children,
  flexDirection,
  justifyContent,
  alignItems,
}: ContainerProps) {
  return (
    <Container
      maxWidth={maxWidth}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </Container>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Hello, world!',
};

export const FullScreen = Template.bind({});
FullScreen.args = {
  children: 'Hello, world!',
  maxWidth: '100%',
};
