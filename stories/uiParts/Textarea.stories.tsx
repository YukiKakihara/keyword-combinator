import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from '../../components/uiParts/Textarea';

export default {
  title: 'uiParts/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = () => <Textarea />;

export const MainStory = Template.bind({});

MainStory.args = {};
