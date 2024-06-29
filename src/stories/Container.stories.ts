import type { Meta, StoryObj } from "@storybook/react";
import Container from "@components/Container";

const meta = {
  title: "Common/Layout/Container",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello, world!",
  },
};

export const FullScreen: Story = {
  args: {
    maxWidth: "100%",
    children: "Hello, world!",
  },
};
