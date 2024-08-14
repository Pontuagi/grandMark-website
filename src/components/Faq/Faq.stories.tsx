import FAQ from './Faq';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/Faq',
    component: FAQ,
} as Meta;

type story = StoryObj<typeof FAQ>;

export const Default: story = {
    args: {
        question: 'What is aerial surveying?',
        answer: "Aerial surveying involves collecting data about the Earth's surface using airborne sensors, typically drones or aircraft. This method provides a bird’s-eye view of large areas, allowing for the collection of detailed topographic data, maps, and images.",
    },
};

export const Example: story = {
    args: {
        question: 'What is land surveying?',
        answer: 'Land surveying is the process of measuring and mapping out the position, boundaries, and features of apiece of land. It is essential for determining property lines, planning construction projects, and creating accurate maps.'
    },
};