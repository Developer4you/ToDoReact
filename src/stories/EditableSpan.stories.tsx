import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {EditableSpan} from '../components/EditableSpan/EditableSpan';

export default {
    title: 'Todolist/EditableSpan',
    component: EditableSpan,
    argTypes: {
        onChange: {
            description: 'Value EditableSpan changed'
        },
        value:{
            defaultValue: 'HTML',
            description: 'Start value EditableSpan'
        }
    },
} as ComponentMeta<typeof EditableSpan>;

const Template: ComponentStory<typeof EditableSpan> = (args) => <EditableSpan {...args} />;


export const EditableSpanExample = Template.bind({});
EditableSpanExample.args = {
    onChange: action('Value EditableSpan changed')
}
