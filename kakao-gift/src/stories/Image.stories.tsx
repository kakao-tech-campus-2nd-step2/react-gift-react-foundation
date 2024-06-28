import type { Meta, StoryObj } from '@storybook/react'
import { Image } from './Image'

const meta: Meta<typeof Image> = {
  title: 'Example/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ratio: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultImage: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'KAKAO FRIENDS',
  },
}

export const RatioNbyN: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'KAKAO FRIENDS',
    ratio: 'N/N',
  },
}

export const CircleImage: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'KAKAO FRIENDS',
    ratio: 'circle',
  },
}

export const SquareImage: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'KAKAO FRIENDS',
    ratio: 'square',
  },
}
