import React, {useCallback} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {AddItemForm} from './AddItemForm';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTasAC} from './state/tasks-reducer';
import {
    AddTodolistAC,
    ChangeTodolistFilterAC,
    ChangeTodolistTitleAC,
    RemoveTodolistAC,
} from './state/todolists-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';

export type FilterValuesType = "all" | "active" | "completed";
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function AppWithRedux() {

    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state=>state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state=>state.tasks)
    const dispatch = useDispatch()

    const removeTask = useCallback(function (id: string, todolistId: string) {dispatch(removeTasAC(id, todolistId))},[dispatch])

    const addTask = useCallback(function (title: string, todolistId: string) {dispatch(addTaskAC(title, todolistId))},[dispatch])

    const changeStatus = useCallback(function (id: string, isDone: boolean, todolistId: string) {dispatch(changeTaskStatusAC(id, isDone, todolistId))},[dispatch])

    const changeTaskTitle = useCallback(function (id: string, newTitle: string, todolistId: string) {dispatch(changeTaskTitleAC(id, newTitle, todolistId))},[dispatch])

    const changeFilter = useCallback(function (filter: FilterValuesType, todolistId: string,) {dispatch(ChangeTodolistFilterAC(filter, todolistId))},[dispatch])

    const removeTodolist = useCallback(function (id: string) {dispatch(RemoveTodolistAC(id))},[dispatch])

    const changeTodolistTitle = useCallback(function (id: string, title: string) {dispatch(ChangeTodolistTitleAC(id, title))},[dispatch])

    const addTodolist = useCallback(function (title: string) {dispatch(AddTodolistAC(title))},[dispatch])

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: "20px"}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map(tl => {
                            let allTodolistTasks = tasks[tl.id];
                            let tasksForTodolist = allTodolistTasks;


                            return <Grid key={'g'+tl.id} item>
                                <Paper style={{padding: "10px"}}>
                                    <Todolist
                                        key={tl.id}
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={tasksForTodolist}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeTaskStatus={changeStatus}
                                        filter={tl.filter}
                                        removeTodolist={removeTodolist}
                                        changeTaskTitle={changeTaskTitle}
                                        changeTodolistTitle={changeTodolistTitle}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default AppWithRedux;
