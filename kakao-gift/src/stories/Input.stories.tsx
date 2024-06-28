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
    invalid: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Enabled: Story = {
  args: {
    placeholder: 'Enabled Input',
    disabled: false,
    invalid: false,
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled Input',
    disabled: true,
    invalid: false,
  },
}

export const Invalid: Story = {
  args: {
    placeholder: 'Invalid Input',
    disabled: false,
    invalid: true,
  },
}
