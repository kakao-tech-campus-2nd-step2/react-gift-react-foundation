import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Common/Button",
  tags: ["autodocs"],
  args: {
    children: "버튼",
    theme: "kakao",
    size: "responsive",
    onClick: () => {
      alert("버튼 클릭");
    },
  },
  argTypes: {
    theme: {
      control: {
        type: "radio",
        options: ["kakao", "outline", "black", "lightGray", "darkGray"],
        default: "kakao",
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["large", "small", "responsive"],
        default: "responsive",
      },
    },
  },
  render: (props) => (
    <div style={{ width: "120px" }}>
      <Button {...props} />
    </div>
  ),
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
