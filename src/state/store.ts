import {combineReducers, createStore} from 'redux';
import {tasksReducer} from './tasks-reducer';
import {todolistsReducer} from './todolists-reducer';

const rootReduser = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
    })

export const store = createStore(rootReduser)

export type AppRootStateType = ReturnType<typeof rootReduser>

// @ts-ignore
window.store = store;