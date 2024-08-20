import { Meta, StoryObj } from "@storybook/react";
import SidemenuButton from "./SidemenuButton";

export default {
  title: "Components/SideMenuButton",
  component: SidemenuButton,
} as Meta;

type Story = StoryObj<typeof SidemenuButton>;

export const Default: Story = {
  args: {},
};
