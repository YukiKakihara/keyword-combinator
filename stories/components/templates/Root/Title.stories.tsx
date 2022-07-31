import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Component as Title } from '../../../../components/templates/Root/Title';

export default {
  title: 'components/template/Root/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const MainStory = Template.bind({});

MainStory.args = {};
