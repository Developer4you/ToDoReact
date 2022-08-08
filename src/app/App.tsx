import React from 'react'
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Menu } from '@mui/icons-material';
import { TaskType } from '../api/todolists-api'
import {TodolistsList} from '../features/TodolistsList/TodolistsList';
import {LinearProgress} from '@mui/material';
import {useSelector} from 'react-redux';
import {AppRootStateType} from './store';
import {ErrorSnackbar} from '../components/ErrorSnackbar/ErrorSnackbar';

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

type PropsType = {
    demo?:boolean
}

function App({demo = false}:PropsType) {
    const status = useSelector<AppRootStateType>(state => state.app.status)

    return (
        <div className="App">
            < ErrorSnackbar />
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
                { status === 'loading' && <LinearProgress color="secondary"/>}
            </AppBar>
            <Container fixed>
                <TodolistsList demo={demo}/>
            </Container>
        </div>
    )
}

export default App;
