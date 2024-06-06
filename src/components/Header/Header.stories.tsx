
import { Meta, StoryObj } from '@storybook/react';
import Header from '../Header/Header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {},
};
