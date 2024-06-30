import Sidemenu from './Sidemenu';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/Sidemenu',
    component: Sidemenu,
} as Meta;

type story = StoryObj<typeof Sidemenu>;

export const Default: story = {
    args: {},
};
