import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from '@components/Button'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    backgroundColor: { control: 'color' },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    theme: 'primary',
    size: 'medium',
  },
}

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    theme: 'secondary',
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    text: 'Danger Button',
    theme: 'danger',
    size: 'medium',
  },
}

export const Small: Story = {
  args: {
    text: 'Primary Button',
    theme: 'primary',
    size: 'responsive',
  },
}
