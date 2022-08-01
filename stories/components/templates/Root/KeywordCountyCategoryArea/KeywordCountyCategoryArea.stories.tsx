import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Component as KeywordCountyCategoryArea } from '../../../../../components/templates/Root/KeywordCountyCategoryArea/KeywordCountyCategoryArea';

export default {
  title:
    'components/template/Root/KeywordCountyCategoryArea/KeywordCountyCategoryArea',
  component: KeywordCountyCategoryArea,
} as ComponentMeta<typeof KeywordCountyCategoryArea>;

const Template: ComponentStory<typeof KeywordCountyCategoryArea> = (args) => (
  <KeywordCountyCategoryArea {...args} />
);

export const MainStory = Template.bind({});

MainStory.args = {
  addKeywordCountyCategory: () => {},
  keywordCounties: ['', '', '', '', ''],
  updateKeywordCounties: () => {},
};
