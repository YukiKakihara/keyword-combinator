import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Component as KeywordCountyCategory } from '../../../../../components/templates/Root/KeywordCountyCategoryArea/KeywordCountyCategory';

export default {
  title:
    'components/template/Root/KeywordCountyCategoryArea/KeywordCountyCategory',
  component: KeywordCountyCategory,
} as ComponentMeta<typeof KeywordCountyCategory>;

const Template: ComponentStory<typeof KeywordCountyCategory> = (args) => (
  <KeywordCountyCategory {...args} />
);

export const MainStory = Template.bind({});

MainStory.args = {
  categoryNum: 1,
};
