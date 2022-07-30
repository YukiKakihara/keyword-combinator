import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Component as Result } from '../../../../components/templates/Root/Result';

export default {
  title: 'components/template/Root/Result',
  component: Result,
} as ComponentMeta<typeof Result>;

const Template: ComponentStory<typeof Result> = (args) => <Result {...args} />;

export const MainStory = Template.bind({});

MainStory.args = {
  value: 'hoge',
};
