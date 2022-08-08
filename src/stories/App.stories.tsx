import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import App from '../app/App';
import {ReduxStoreProviderDecorator} from './decorators/ReduxStoreProviderDecorator';

export default {
    title: 'Todolist/App',
    component: App,
    decorators: [ReduxStoreProviderDecorator],
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App demo={true}/>;


export const AppBaseExample = Template.bind({});
