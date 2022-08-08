import React, {useEffect, useState} from 'react'
import { todolistsAPI, UpdateTaskModelType} from '../api/todolists-api';

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolists()
            .then((res) => {
                    setState(res.data);
                })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'NewTodolistYoyoyo'
        todolistsAPI.createTodolist(title)
            .then((res)=>{setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId='f0e66380-3cfe-48b7-8685-bd414c07be18';
        todolistsAPI.deleteTodolist(todolistId)
            .then((res)=>{setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'f0e66380-3cfe-48b7-8685-bd414c07be18'
        todolistsAPI.updateTodolist(todolistId, 'SOME NEW TITLE')
            .then((res)=>{setState(res.data)})
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '5ff59232-4a4a-4ed3-a83b-92ad1eec66ac'
        todolistsAPI.getTasks(todolistId)
            .then((res)=>{setState(res.data)})
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '5ff59232-4a4a-4ed3-a83b-92ad1eec66ac'
        const title = 'New task'
        todolistsAPI.createTask(todolistId, title)
            .then((res)=>{setState(res.data)})
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '5ff59232-4a4a-4ed3-a83b-92ad1eec66ac'
        const id = '123'
        todolistsAPI.deleteTask(todolistId, id)
            .then((res)=>{setState(res.data)})
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '5ff59232-4a4a-4ed3-a83b-92ad1eec66ac'
        const id = '5da7764b-c18f-46cb-abdf-d8f61822a242'
        const taskModel: UpdateTaskModelType = {
            title: 'Updated task',
            description: 'My description',
            status: 0,
            priority: 2,
            startDate: '2021-08-05T00:05:15.537',
            deadline: '2023-08-05T00:05:15.537'
        }
        todolistsAPI.updateTask(todolistId, id, taskModel)
            .then((res)=>{setState(res.data)})
    }, [])

    return <div> {JSON.stringify(state)}</div>
}