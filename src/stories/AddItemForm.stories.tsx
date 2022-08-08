import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AddItemForm } from '../components/AddItemForm/AddItemForm';
import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Todolist/AddItemForm',
  component: AddItemForm,
  argTypes: {
    onClick: {
     description: 'Button inside form clicked'
    }
    },
} as ComponentMeta<typeof AddItemForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AddItemForm> = (args) => <AddItemForm {...args} />;

export const AddItemFormExample = Template.bind({});
AddItemFormExample.args = {
  addItem: action('Button clicked inside form')
};

export const AddItemFormDisabledExample = Template.bind({});
AddItemFormExample.args = {
  addItem: action('Button clicked inside form'),
  disabled:true
};
