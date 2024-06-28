import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Enabled: Story = {
  args: {
    placeholder: 'Enabled Input',
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled Input',
    disabled: true,
  },
}
