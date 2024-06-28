import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Image from "@components/Image";

const meta = {
  title: "Common/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RatioSquare: Story = {
  args: {
    src: "https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png",
    width: "100px",
    ratio: "square",
  },
};

export const RadiusCircle: Story = {
  args: {
    src: "https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png",
    width: "100px",
    ratio: "square",
    radius: "circle",
  },
};

export const RadiusRound: Story = {
  args: {
    src: "https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png",
    radius: 10,
  },
};
