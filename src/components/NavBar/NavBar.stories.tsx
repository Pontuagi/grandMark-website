import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Navbar from "./NavBar";

export default {
  title: "Components/Navbar",
  component: Navbar,
} as Meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {},
};
