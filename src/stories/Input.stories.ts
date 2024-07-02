import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'
import Input from '@components/Input'

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
  args: {
    placeholder: 'placeholder',
    value: '',
    onChange: fn(),
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: '',
    value: 'Hello',
    type: 'text',
    placeholder: 'placehole',
    isValid: false,
    disabled: false,
    size: 'medium',
  },
}
