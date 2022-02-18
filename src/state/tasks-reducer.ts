import {TasksStateType, TaskType} from '../App';
import {v1} from 'uuid';
import {AddTodolistActionType, RemoveTodolistActionType} from './todolists-reducer';

export type removeTasACType = {
    type: 'REMOVE_TASK'
    id: string
    todolistId: string
    }
export type addTaskACType = {
    type: 'ADD_TASK'
    title: string
    todolistId: string
}
export type changeTaskStatusACType = {
    type: 'CHANGE_STATUS'
    id: string
    isDone: boolean
    todolistId: string
}
export type changeTaskTitleACType = {
    type: 'CHANGE_TITLE'
    id: string
    title: string
    todolistId: string
}

type ActionsType = removeTasACType | addTaskACType | changeTaskStatusACType | changeTaskTitleACType | AddTodolistActionType | RemoveTodolistActionType;

const initialState: TasksStateType = {}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType):TasksStateType => {
    switch (action.type) {
        case 'REMOVE_TASK':
            return {...state, [action.todolistId]:state[action.todolistId].filter(e=>e.id!==action.id) };
        case 'ADD_TASK':
            const newTask:TaskType = {id:v1(), title:action.title, isDone:false}
            return {...state, [action.todolistId]:[newTask, ...state[action.todolistId]]};
        case 'CHANGE_STATUS':
            return {...state, [action.todolistId]:[...state[action.todolistId]].map(e=>{
                if (e.id===action.id) return {...e, isDone:action.isDone};
                return e})};
        case 'CHANGE_TITLE':
            return {...state, [action.todolistId]:[...state[action.todolistId]].map(e=>{
                    if (e.id===action.id) return {...e, title:action.title};
                    return e})};
        case 'ADD-TODOLIST':
            return {...state, [action.newTodolistId]:[]};
        case 'REMOVE-TODOLIST':
            const stateCopy = {...state};
            delete stateCopy[action.todolistId];
            return stateCopy;
        default:
            return state;
    }
}

export const removeTasAC = (id: string,todolistId: string): removeTasACType => {
    return { type: 'REMOVE_TASK', todolistId, id}
}
export const addTaskAC = (title:string, todolistId: string): addTaskACType => {
    return { type: 'ADD_TASK', title , todolistId}
}
export const changeTaskStatusAC = (id: string, isDone:boolean, todolistId: string): changeTaskStatusACType => {
    return { type: 'CHANGE_STATUS', id, isDone, todolistId}
}
export const changeTaskTitleAC = (id: string, title:string, todolistId: string): changeTaskTitleACType => {
    return { type: 'CHANGE_TITLE', id, title, todolistId}
}




