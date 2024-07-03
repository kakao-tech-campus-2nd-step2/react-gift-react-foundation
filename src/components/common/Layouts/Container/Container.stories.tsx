import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "./Container";

const meta = {
  title: "Common/Layout/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {
    maxWidth: {
      control: {
        type: "text",
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxWidth: undefined,
    children: "Hello, world!",
  },
};

export const FullScreen: Story = {
  args: {
    maxWidth: "100%",
    children: "Hello, world!",
  },
};
