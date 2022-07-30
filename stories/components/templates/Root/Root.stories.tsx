import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Component as Root } from '../../../../components/templates/Root/Root';

export default {
  title: 'components/template/Root/Root',
  component: Root,
} as ComponentMeta<typeof Root>;

const Template: ComponentStory<typeof Root> = (args) => <Root {...args} />;

export const MainStory = Template.bind({});

MainStory.args = {
  addKeywordCountyCategory: () => {},
  keywordCounties: ['', '', '', '', ''],
  result: '',
  updateKeywordCounties: () => {},
};
