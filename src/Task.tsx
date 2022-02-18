import React, {ChangeEvent, useCallback} from 'react';
import {TaskType} from './AppWithRedux';
import {Delete} from '@material-ui/icons';
import {EditableSpan} from './EditableSpan';
import {Checkbox, IconButton} from '@material-ui/core';

type TasksPropsType = {
    changeTaskStatus: (id:string, isDone: boolean, todolistId:string) => void
    changeTaskTitle: (taskId:string, newTitle:string, todolistId:string) => void
    removeTask: (taskId: string, todolistId:string) => void
    task: TaskType
    todolistId:string
}

export const Task = React.memo(
    ({changeTaskStatus,changeTaskTitle, removeTask, task, todolistId}:TasksPropsType) => {

    const onClickHandler = useCallback(() => removeTask(task.id, todolistId),[removeTask, task.id, todolistId])
    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
                    let newIsDoneValue = e.currentTarget.checked;
                    changeTaskStatus(task.id, newIsDoneValue, todolistId);
                },[changeTaskStatus, task.id, todolistId])
    const onTitleChangeHandler =  useCallback((newValue: string) => {
                    changeTaskTitle(task.id, newValue, todolistId);
                },[changeTaskTitle, task.id, todolistId])

    return <div key={task.id} className={task.isDone ? "is-done" : ""}>
        <Checkbox
            checked={task.isDone}
            color="primary"
            onChange={onChangeHandler}
        />

        <EditableSpan value={task.title} onChange={onTitleChangeHandler} />
        <IconButton onClick={onClickHandler}>
                        <Delete />
                    </IconButton>
    </div>
    }
)