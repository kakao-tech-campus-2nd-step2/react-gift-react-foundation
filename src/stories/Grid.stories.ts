import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Grid from "@components/Grid";

const meta = {
  title: "Common/Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    gap: { control: { type: "number" } },
    columns: { control: { type: "number" } },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultChildren = Array.from({ length: 16 }, (_, i) => React.createElement("div", null, i + 1));
export const NumberColumns: Story = {
  args: {
    gap: 0,
    columns: 3,
    children: defaultChildren,
  },
};
