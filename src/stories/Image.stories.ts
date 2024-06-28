import { Meta, StoryObj } from '@storybook/react';
import { Image } from 'components/Image/Image';

const meta = {
  title: 'Example/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
    },
    width: {
      width: 'text',
    },
    ratio: {
      control: '',
    },
    radius: {
      control: 'number',
    },
  },
  args: {},
} satisfies Meta<typeof Image>;
export default meta;
type Story = StoryObj<typeof meta>;

const imgSrc =
  'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png';

export const RatioSquare: Story = {
  args: {
    ratio: 'square',
    src: imgSrc,
    width: '100px',
  },
};

export const RadiusCircle: Story = {
  args: {
    radius: 'circle',
    ratio: 'square',
    src: imgSrc,
    width: '100px',
  },
};

export const RadiusRound: Story = {
  args: {
    src: imgSrc,
    radius: 10,
  },
};
