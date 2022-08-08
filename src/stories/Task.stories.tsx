import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Task} from '../features/TodolistsList/Todolist/Task/Task';
import {TaskPriorities, TaskStatuses} from '../api/todolists-api';

export default {
    title: 'Todolist/Task',
    component: Task
} as ComponentMeta<typeof Task>;

const changeTaskStatusCb = action('Status changed inside Task')
const changeTaskTitleCb = action('Title changed inside Task')
const removeTaskCb = action('Remove Button inside Task clicked')

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

const baseArg = {
    changeTaskStatus:changeTaskStatusCb,
    changeTaskTitle:changeTaskTitleCb,
    removeTask: removeTaskCb,
}

export const TaskIsDoneExample = Template.bind({});
TaskIsDoneExample.args = {
    ...baseArg,
    task:{ id:'1',
        title:'JS',
        status: TaskStatuses.Completed,
        description: '',
        todoListId: 'todolistId1',
        startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low},
    todolistId: 'todolistId1'
}

export const TaskIsNotDoneExample = Template.bind({});
TaskIsNotDoneExample.args = {
    ...baseArg,
    task:{id:'1',
        title:'JS',
        status: TaskStatuses.New,
        description: '',
        todoListId: 'todolistId1',
        startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low},
    todolistId: 'todolistId1'
}