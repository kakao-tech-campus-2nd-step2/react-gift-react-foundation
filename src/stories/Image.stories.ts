import type { Meta, StoryObj } from '@storybook/react'
import Image from '@components/Image'

const meta = {
  title: 'Example/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Image>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    ratio: 'square',
    radius: 'circle',
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'Square Image',
  },
}

export const Secondary: Story = {
  args: {
    ratio: 'square',
    radius: 3,
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'Square Image',
  },
}

export const Large: Story = {
  args: {
    ratio: 5,
    radius: 'circle',
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'Square Image',
  },
}

export const Small: Story = {
  args: {
    ratio: 20,
    radius: 20,
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'Square Image',
  },
}
