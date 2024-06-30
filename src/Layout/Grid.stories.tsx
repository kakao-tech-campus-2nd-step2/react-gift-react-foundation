import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Grid, { GridProps } from './Grid'

export default {
  title: 'Layout/Grid',
  component: Grid,
} as Meta

const Template: StoryFn<GridProps> = args => <Grid {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <div style={{ background: '#ccc', padding: '10px' }}>{'Item 1'}</div>
      <div style={{ background: '#aaa', padding: '10px' }}>{'Item 2'}</div>
      <div style={{ background: '#ccc', padding: '10px' }}>{'Item 3'}</div>
      <div style={{ background: '#aaa', padding: '10px' }}>{'Item 4'}</div>
      <div style={{ background: '#ccc', padding: '10px' }}>{'Item 5'}</div>
      <div style={{ background: '#aaa', padding: '10px' }}>{'Item 6'}</div>
    </>
  ),
}
