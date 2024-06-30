import { Meta, StoryObj } from '@storybook/react';
import Button from './SidemenuButton';

export default {
  title: 'Components/SideMenuButton',
  component: Button,
} as Meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {},
};