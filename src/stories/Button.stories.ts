import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "@components/Button";

const meta = {
  title: "Common/Button",
  component: Button,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "버튼",
    theme: "kakao",
    size: "responsive",
  },
};
