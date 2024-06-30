import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Container, { ContainerProps } from './Container'

export default {
  title: 'Layout/Container',
  component: Container,
} as Meta

const Template: StoryFn<ContainerProps> = args => <Container {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'This is a container',
}
